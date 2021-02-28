# Encurtador de URL

Este é um encurtador de URL feito utilizando:

- **backend**: Node JS
- **frontend**: React
- **banco de dados**: MongoDB

O banco de dados foi configurado utilizando o `docker`. O script do `docker-compose` para a configuração/inicialização está no arquivo `docker-compose.yml` no `backend`. Os dados persistem a cada reexecução do `backend` através de gerenciamento de volumes do `docker`.

A IDE utilizada foi o *Visual Studio Code*, devidamente configurada com as extensões necessárias para facilitar a escrita de códigos em javascript.

## Execução do ambiente de desenvolvimento

Para executar este código, é necessário ter o `docker-compose` e o `node` instalados.

Após clonar o repositório, execute os seguintes passos:

- Abra um terminal para iniciar o `mongodb`

```
$ cd backend
$ docker-compose up
```

- Em outro terminal, inicie o backend

```
$ cd backend
$ npm start
```

- Em outro terminal, inicie o frontend

```
$ cd frontend
$ npm start
```

O frontend será executado em `localhost:3000`