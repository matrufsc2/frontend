# Frontend

Bem vindo! Este repositório contém apenas o código **frontend** do [MatrUFSC2](http://matrufsc2.appspot.com), e, como tal, é totalmente desacoplado do seu backend.

## Objetivo

A idéia com este repositório é permitir que você facilmente implemente o seu próprio "Matr" para sua universidade usando uma ferramenta avançada e simples, que é genérica o suficiente para corresponder às necessidades de toda e qualquer universidade.
Criado sob o framework [ChaplinJS](http://chaplinjs.org), com a ajuda de ferramentas como a [Mimosa](http://mimosa.io), temos aqui um código que está em conforme com as mais novas e recentes tecnologias web, sendo adequado para uso por qualquer um. Segue aqui as nossas metas com este projeto:

- Criar um ambiente totalmente desacoplado de um backend, possibilitando assim a implementação do projeto por diversas universidades *apenas* trocando o seu backend.
- Criar uma plataforma estável, testada, que está em conformidade com os novos padrões da internet.

## Instalação

- Clone este repositório para o seu computador rodando o seguinte comando no terminal:

	git clone https://github.com/matrufsc2/frontend.git

- Execute o seguinte comando para iniciar o servidor de testes:

	cd frontend && npm install && npm start

- Pronto! O servidor estará rodando no endereço http://127.0.0.1:8000 

## Construindo o projeto

O projeto é muito simples de ser construido. Após clonar o projeto, basta rodar o seguinte comando para que o projeto seja devidamente otimizado para publicação na web:

	npm run-script build