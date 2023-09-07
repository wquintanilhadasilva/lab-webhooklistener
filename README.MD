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

## Enviar conteúdo

```
curl --request POST \
  --url http://localhost:3000/store/abcd \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: Insomnia/2023.5.7' \
  --data '{"request_id":"us-east-1_k7iBbPRnU/63bc648462a2cd77feb897f6/cfdce6596255571f5830b44efc48c793.pdf","url_file":"https://s3-sa-east-1.amazonaws.com/xpoto/cfdce6596255571f5830b44efc48c793.jpg","response":{"prediction_class":"contabil-nfe","prediction_prob":0.999535322189331,"extractions":{"id":"us-east-1_k7iBbPRnU/63bc648462a2cd77feb897f6/cfdce6596255571f5830b44efc48c793.pdf","client_id":"63bc648462a2cd77feb897f6","filename":"1685151915082-DANFE.pdf","filesize":30094,"tipo_arquivo":"pdf","url_file":"https://s3-amazonaws.com/xpto/us-east-1_k7iBbPRnU/63bc648462a2cd77feb897f6/cfdce6596255571f5830b44efc48c793.pdf","url_image":"https://s3-sa-east-1.amazonaws.com/963bc648462a2cd77feb897f6/cfdce6596255571f5830b44efc48c793.jpg","url_text":"https://s3-sa-east-1.amazonaws.com/963bc648462a2cd77feb897f6/cfdce6596255571f5830b44efc48c793.txt","url_thumb":"https://s3-sa-east-1.amazonaws.com/963bc648462a2cd77feb897f6/cfdce6596255571f5830b44efc48c793.jpg","category":"0//Contábil|1//NFe","class":"contabil-nfe","confidence_class":0.999535322189331,"ocr_original_text":"RECEBEMOS DE AMAZON SERVICOS DE VAREJO DO BRASIL LTDA OS PRODUTOS CONSTANTES NA NOTA FISCAL INDICADA AO LADO.NF-e N° 051.484.035 DATA DE RECEBIMENTO IDENTIFICAÇÃO E ASSINATURA DO RECEBEDOR SÉRIE:1 IDENTIFICAÇÃO DO EMITENTE DANFE AMAZON SERVICOS DE VAREJO DOCUMENTO AUXILIAR DA NOTA FISCAL DO BRASIL LTDA ELETRÔNICA amazon AVENIDA ANTONIO CANDIDO MACHADO,0 ENTRADA 1 CHAVE DE ACESSO 1-- SAÍDA 3100-JORDANESIA-07776-415 3523 0515 4369 4000 0367 5500 1051 4840 3511 6856 6856 4596 Nº Nº 051.484.035 CAJAMAR-SP SÉRIE:1 Consulta de autenticidade no portal nacional da NF-e www.nfe.fazenda.gov.br/portal ou no site da Sefaz Autorizadora.FOLHA 1/1 NATUREZA DA OPERAÇÃO PROTOCOLO DE AUTORIZAÇÃO DE USO Venda merc adq terc,sujeito a ST,contribuinte substituido 99999-24/05/2023 00:53:24 INSCRIÇÃO ESTADUAL INSCRIÇÃO ESTADUAL DE SUBST.CNPJ/CPF 999999915.436.940/0003-67 DESTINATÁRIO/REMETENTE NOME/RAZÃO SOCIAL CNPJ/CPF DATA EMISSÃO TTTTTT DA SILVA 171.167.198-30 24/05/2023 ENDEREÇO BAIRRO/DISTRITO CEP DATA ENTRADA/SAÍDA AV.DR.GILBERTO LUIZ PEREIRA DA SILVA,16 APTO 104-TORRE H-Cidade Nova 13219-351 MUNICÍPIO FONE/FAX UF INSCRIÇÃO ESTADUAL HORA ENTRADA/SAÍDA Jundiai 11996847599 SP FATURA/DUPLICATA CÁLCULO DO IMPOSTO BASE DE CÁLCULO DO ICMS VALOR DO ICMS BASE DE CÁLCULO DO ICMS SUBST.VALOR DO ICMS SUBST.VALOR TOTAL DOS PRODUTOS R$0,00 R$0,00 R$0,00 R$0,00 R$5.399,00 VALOR DO FRETE VALOR DO SEGURO DESCONTO OUTRAS DESPESAS ACESSÓRIAS VALOR TOTAL DO IPI VALOR TOTAL DA NOTA R$0,00 R$0,00 R$0,00 R$0,00 R$0,00 R$5.399,00 TRANSPORTADOR/VOLUMES TRANSPORTADOS NOME/RAZÃO SOCIAL FRETE POR CONTA CÓDIGO ANTT PLACA DO VEICULO UF CNPJ/CPF 0-EMITENTE ENDEREÇO MUNICÍPIO UF INSCRIÇÃO ESTADUAL QUANTIDADE ESPÉCIE MARCA NUMERAÇÃO PESO BRUTO PESO LÍQUIDO DADOS DOS PRODUTOS/SERVIÇOS VALOR VALOR ALIQUOTA VALOR APROX.CÓDIGO DESCRIÇÃO DOS PRODUTOS/SERVIÇOS NCM/SH CST CFOP UNID QUANT.VALOR TOTAL B.CALC.ICMS UNITÁRIO ICMS IPI ICMS % IPI % DOS TRIBUTOS Samsung Galaxy S22 Ultra 256GB 5G Wi-Fi Tela 6.8 '\'' '\'' Dual Chip 12GB RAM Camera Quadrupla + Selfie 40MP-Verde B0BRQS7L64 ART.. 51,PARTE GERAL,C/C ART.27 DO 85171300 460 5405 UN 1 5399,00 5.399,00 0,00 0,00 0,00 0 0 1.599,18 ANEXO II,DO RICMS/SP E ART.1O,I,DA RESOLUCAO SEC.FAZ.NO 14/2013. ART.52,I DO RICMS/SP;CÁLCULO DO ISSQN INSCRIÇÃO MUNICIPAL VALOR TOTAL DOS SERVIÇOS BASE DE CÁLCULO DO ISSQN VALOR DO ISSQN DADOS ADICIONAIS INFORMAÇÕES COMPLEMENTARES RESERVADO AO FISCO Valor aproximado dos tributos:: Federal-R$951.30 ( 17.62 % );Estadual-R$647.88 ( 12.00 % );; Municipal-R$0.00 ( 0.00 % )-Fonte IBPT.N.SERIE OU IMEI:351156460826220. Numero do pedido da compra:702-9469897-3996240 icmsTransporte:0","is_review":false,"tenant_id":"63bc648462a2cd77feb897f6","chave_acesso":"9999999940000367550010514840351168564596","last_update":"2023-07-21T16:21:33.288Z"},"status":"Finalizado"},"errors":[],"internal_error":0,"msg_internal_error":"","previously_processed":true,"real_class":null,"class_in_contract":true}'
```

## Retornar conteúdo

```
curl --request GET \
  --url http://localhost:3000/retrieve/abcd
```
