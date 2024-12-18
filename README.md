# `icpauthnfid`

Este projeto implementa o login na rede oficial da ICP utilizando NFID e serve como um recurso educativo para aprender a desenvolver a rotina de autenticação em um DAPP.

Ao utilizar NFID é possivel realizar a autenticação utilizando uma conta do Google. 

Observação: o projeto não trata o login em rede/base Local (irá funcionar apenas no playground ou mainnet)

## Para executar este projeto localmente utilize os seguintes comandos:

Instale o pacote de segurança: 

npm install --save @dfinity/auth-client
npm install @dfinity/agent

Inicie o ICP

dfx start --background

dfx deploy --playground