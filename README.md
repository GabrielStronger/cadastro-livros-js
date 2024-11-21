# Sistema de Gerenciamento de Livros

Este repositório contém o código de um sistema básico em HTML e JavaScript para o gerenciamento de livros. O sistema permite que o usuário cadastre livros, verifique a disponibilidade, reserve exemplares, realize devoluções e encerre o programa.

## Funcionalidades

- **Cadastrar Livro**: Permite inserir o código, a descrição e a quantidade disponível de um livro.
- **Reservar Livro**: Permite reservar uma quantidade específica de exemplares, reduzindo a disponibilidade.
- **Devolver Livro**: Permite devolver uma quantidade específica de exemplares, aumentando a disponibilidade.
- **Consultar Disponibilidade**: Mostra os dados do livro, incluindo o código, a descrição e a quantidade disponível.
- **Encerrar Programa**: Finaliza a execução do sistema.

## Tecnologias Utilizadas

- **HTML**: Para estruturar a página.
- **JavaScript**: Para a lógica do sistema.
- **Prompt e Alert**: Utilizados como interface de interação com o usuário.

## Estrutura do Código

- **HTML**: Configura o documento, define o idioma como português e carrega o arquivo JavaScript externo (`js/js-av1-rec.js`).
- **JavaScript**: 
  - Cria a classe `Livro` para representar os dados e operações relacionados a um livro.
  - Implementa um menu interativo para o usuário selecionar as ações disponíveis.
  - Garante o funcionamento básico do sistema com um laço `while` e a estrutura `switch`.

## Como Usar

1. Faça o download ou clone este repositório:
   ```bash
   git clone https://github.com/GabrielStronger/gerenciamento-livros.git
