const express = require('express');
const bodyParser = require('body-parser');
const moment = require('moment');

const app = express();
const port = 3000;
const timeout = process.env.TIMEOUT ? parseInt(process.env.TIMEOUT) : 60000; // default 1 minuto

app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.setHeader('Strict-Transport-Security', "max-age=31536000; includeSubDomains always");
  res.setHeader('X-Frame-Options', "SAMEORIGIN");
  res.setHeader('X-Content-Type-Options', "nosniff");
  res.setHeader('X-XSS-Protection', "1; mode=block");
  res.setHeader('Referrer-Policy', "strict-origin");
  //res.setHeader('Content-Security-Policy', "default-src 'self' style-src 'self' 'unsafe-inline';");
  next();
})

const dataMap = new Map();

app.post('/store/:identificacao', (req, res) => {
  const identificacao = req.params.identificacao;
  const conteudoJson = JSON.stringify(req.body);
  console.log(`Recebendo e inserindo no mapa o conteúdo informado [${req.params.identificacao}]`);

  const item = {
    payload: conteudoJson,
    time: moment()
  };

  console.log(`Item inserido [${JSON.stringify(item)}]`);

  dataMap.set(identificacao, item);

  res.status(200).json({ message: '::WebHook Tester::==>> Dados armazenados com sucesso!', time: moment().format('YYYY-MM-DD HH:mm:ss')});
});

app.get('/retrieve/:identificacao', (req, res) => {
  const identificacao = req.params.identificacao;

  if (dataMap.has(identificacao)) {
    console.log(`Lendo a chave [${identificacao}] e retirando do mapa.`);
    const item = dataMap.get(identificacao);
    console.log(item);
    const conteudoJson = item.payload;
    const conteudoObj = JSON.parse(conteudoJson);
    // Remova os dados do mapa após a leitura
    dataMap.delete(identificacao);
    res.status(200).json(conteudoObj);
  } else {
    console.log(`Chave [${identificacao}] não encontrada no mapa.`);
    res.status(404).json({ message: `Identificação não encontrada ${identificacao}`});
  }
});

// Função para limpar o mapa a cada x tempo configurado
function limparMapa() {
  console.log(`Limpando o mapa... ${moment().format('YYYY-MM-DD HH:mm:ss')}`);
  //dataMap.clear();

  const now = moment();
  for (const [identificacao, item] of dataMap.entries()) {
    const itemTime = moment(item.time);
    const diffMilliseconds = now.diff(itemTime); // Calcula a diferença em milissegundos

    if (diffMilliseconds >= timeout) { // tempo em milissegundos
      console.log(`Limpando o conteúdo da chave [${identificacao}]`)
      dataMap.delete(identificacao);
      console.log(`Item com identificação ${identificacao} removido.`);
    }
  }

}

// Executa a função de limpeza a cada x minutos (x milissegundos)
setInterval(limparMapa, timeout);

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
  console.log(`Tempo de timeout -> limpar o cache de requisições ${timeout}`);
});
