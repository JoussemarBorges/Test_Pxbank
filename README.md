# Test_Pxbank
Teste técnico realizado para o processo seletivo da pxbank. O desafio era criar uma página de cadastro de funcionários onde fosse possível pesquisar funcionários pelo nome ou departamento, cadastrar um novo funcionário, editar e excluir um registro já existente no Banco de dados.
    Desenvolvi o back-end utilizando o node.js, typescript, ORM Sequelize e banco de dados MySql. As responsabilidades da aplicação foram divididas em camadas. Já o front-end foi desenvolvido com React (JavaScritp e JSX) e organizado em componentes.
    Como pontos de melhoria, pretendo configurar o dokcer com o docker-compose e docker-file para que a aplicação possa rodar os serviços de back, front e DB em containers, além de desenvolver testes de integração.


## Orientações
<details>
<summary><strong>Para rodar o projeto localmente:</strong></summary>

1. Clone o repositório
        - Use o comando: `git clone https://github.com/JoussemarBorges/Test_Pxbank`.
        - Entre na pasta do repositório que você acabou de clonar:
        - `cd Test_Pxbank`

2. Acesse o diretório backend e instale as dependências:
        - `npm install`

3. Acesse o diretório frontend e instale as dependências:
    - `npm install`

4. Instale as dependências na pasta raiz:
    - `npm install`

5. Certifique-se de ter o MySQL instalado ou um container com a imagem do MySQL rodando.

    - Para criar o container com a imagem do MySQL via Docker, utilize o comando abaixo:
        * docker container create --name <nome_do_container> -it -e MYSQL_ROOT_PASSWORD=<senha_de_acesso> -p 3003:3306 mysql:5.7
            ** -it para rodar no modo interativo;
            * --name para definir o nome do container;
            * -e para definir a variável de ambiente e atribuir uma senha de acesso ao db pelo terminal interativo ou cm o workbench, por exemplo.
            * -p para definir a porta. A porta padrão é 3306 mas é possivel redefinir conforme no exemplo acima
            * no fim, já foi definido a imagem e a versão, caso não tenha a imagem instalada o pr

6. Configuração default das portas:
    - MySQL: porta 3003:
        * pode ser alterado no arquivo backend/src/database/config/config.ts

    - Back-end: 3001:
        * pode ser alterado no arquivo backend/src/server.ts

    - Front-end: 3000:
        * Ao subir o front-end o React tenta setar essa porta por padrão,
        porém se ela estiver ocupada será sugerido outra. recomendo usar a 
        porta padrão.


7. Para subir os serviços:

    - O serviço do banco de dados deverá ser feito de acordo com a sua opção
    pelo local ou via docker, mas é importante que ele esteja rodando na porta 
    3003 ou conforme porta escolhida, caso seja alterado conforme informações 
    do ponto anterior;

    - Entre no diretório /backend pelo terminal e rode o comando npm run dev;
        * Ao final do processo deverá aparecer a mensagem "Rodando!"
        * Caso não rode, verifique se o MySQL está rodando na porta 3003

    - Entre no diretório /frontend e rode o comando npm start pelo terminl.

8. Pronto! A partir de agora já é possível utilizar a página de funcionários!
    
</details>

## Documentação API
    Em construção!
    
## Documentação Front-end

    Em construção!
