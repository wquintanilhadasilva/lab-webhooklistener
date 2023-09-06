# Info

WebHook Listener - Sobe uma aplicação nua porta 3000 e espera uma chamada com um POST, armazenando o contúdo json enviado no Payload.
Disponibiliza um endpoint para checar se houve a chamada do POST

Aguarda por um período padrão de 5 minutos (pode ser alterado através da variável de ambiente TIMEOUT) para limpar os dados enviados.

# Publicar imagem

Gerar a imagem

```
docker build -t wquintanilhadasilva/webhook-listener:latest .
```

Publicar a imagem:

> Faça login primeiro

```
docker push wquintanilhadasilva/webhook-listener
```

Obter a imagem:

```
docker pull wquintanilhadasilva/webhook-listener:latest
```

# Como usar

Utilize o docker compose como exemplo. Configure o timeout desejado através da variável de ambiente 'TIMEOUT'.
Caso não informe, assume o timeout default de 60 segundos.
> O tempo do timeout é informado em milissegundos. <br>
> Exemplo: 1 minuto = 60 segundos = 60000 milissegundos, informe o valor de 60000!

Execute o comando docker:

```
docker run -d --rm --name webhook-listener \
    -e TIMEOUT=300000 \
    -p 3000:3000 \
    wquintanilhadasilva/webhook-listener
```