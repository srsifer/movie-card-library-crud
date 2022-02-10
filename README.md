# Boas vindas ao repositório do projeto de Movie Cards CRUD! 

### Essa aplicação está hospedada no Heroku! você pode ver o funcionamento atravéz do link abaixo 
https://movie-cards-library-crud.herokuapp.com/

OBS! O heroku coloca a aplicação em estado de standby, portanto pode ser que ao clicar no link ela demore um pouco pra abrir devido ao baixo numero de acesso.

## Para rodar esse projeto em sua maquina (distro: ubunto + ambiente nodeJS)

1. Clone o repositório
  * `git clone https://github.com/tryber/sd-012-project-movie-card-library-crud.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd sd-012-project-movie-card-library-crud`

2. Instale as dependências e inicialize o projeto
  * Instale as dependências:
    * `npm install`
  * Inicialize o projeto:
    * `npm start` (uma nova página deve abrir no seu navegador com um texto simples)

obs: caso não tenha o nodeJS no seu sistema Ubunto execute as seguintes linhas de comando no seu terminal 
 * `sudo apt-get install nodejs`
<br>
  para confirmar a versão instalada rode o comando
  
  
 * `node --version` e `npm --version`

# Habilidades

Nesse projeto, eu aprendi:

- Utilizar o componentDidMount para executar uma ação após o componente ser inserido no DOM;
- Utilizar o shouldComponentUpdate para avaliar se uma atualização do componente deve ou não acontecer naquele momento;
- Utilizar o componentDidUpdate para executar uma ação após o componente ser atualizado;
- Utilizar o componentWillUnmount para realizar uma ação antes de o componente ser desmontado;
- Utilizar o props.children para acessar os filhos de um componente React e interagir com eles;
- Utilizar o componente BrowserRouter corretamente;
- Criar links de navegação na aplicação com o componente Link ;
- Criar rotas, mapeando o caminho da URL com o componente correspondente, via Route ;
- Estruturar e organizar as rotas da sua aplicação com o componente Switch ;
- Usar o componente Redirect pra alternar entre rotas.

## O que foi desenvolvido

Eu criaei um **CRUD** de cartões de filmes em React. 
A sigla **CRUD** significa, _Create, Read, Update and Delete_.

  - Adicionar um novo filme à lista - **CREATE**;
  - Listar todos os filmes cadastrados, com uma página de informações resumidas sobre cada filme e uma página de informações detalhadas de um filme selecionado - **READ**;
  - Editar um filme da lista - **UPDATE**;
  - E apagar um filme da lista - **DELETE**;

## Desenvolvimento

Este app tem 4 rotas:

1. A rota raiz (index), no caminho `/`. Esta rota exibirá uma lista com todos os filmes cadastrados. Essa lista contém informações resumidas sobre cada filme.

2. Uma rota para criar novos filmes, no caminho `/movies/new`. Essa rota renderizará um formulário para adicionar um novo filme.

3. Uma rota para mostrar informações detalhadas de um filme, no caminho `/movies/:id`. Onde o `:id` é o parâmetro da URL que representa o _id_ do filme exibido. Por exemplo, ao entrar no caminho `/movies/5`, serão exibidas informações sobre o filme com _id_ `5`.

4. Uma rota para editar um filme, no caminho `/movies/:id/edit`. Assim como na rota 3, `:id` é o _id_ do filme a ser editado. Essa rota renderizará um formulário idêntico ao da rota 2. Nesse caso, porém, o formulário virá preenchido com as informações do filme a ser editado. Ao submeter o formulário, ao invés de criar um novo filme, o filme em questão terá seus dados atualizados.

Relacionado a cada rota haverá um componente React responsável por renderizar seu conteúdo. Esse mapeamento entre o caminho da URL, rota e componente será feito pelo `React Router`, a principal biblioteca de roteamento em `React`.
