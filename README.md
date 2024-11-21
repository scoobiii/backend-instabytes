## README - Projeto: Backend Instabytes 🚀

Descrição do Projeto 📝

O Backend Instabytes é uma aplicação construída para gerenciar e servir dados relacionados a posts. Ele foi projetado utilizando uma estrutura modular que facilita a manutenção, escalabilidade e integração de serviços externos.

Este projeto é ideal para crianças aprenderem sobre como arquivos de código trabalham juntos para criar algo mágico, como criar e compartilhar posts. Ele utiliza diferentes arquivos para cada "superpoder", e esses superpoderes juntos formam o herói que é o Backend Instabytes. 🦸‍♂️🦸‍♀️

        
        .
        ├── package.json
        ├── package-lock.json
        ├── server.js
        ├── check-dependencies.js    
        ├── services.sh
        ├── .gitignore                # vc não que vejam sua senha no github
        ├── .env                      # guarda dados sensiveis como login e senha de banco local e remoto
        ├── src
        │   ├── config
        │   │   └── dbConfig.js
        │   ├── controllers
        │   │   └── postsController.js
        │   ├── models
        │   │   └── postsModel.js
        │   ├── routes
        │   │   └── postsRoutes.js
        │   └── services
        │       └── geminiService.js
        └── uploads
            ├── 67226e3aab047d160d5cd3c5.png
            ├── 67227f381bd4e9807e9e171f.png
            └── ju.png


---

Como Instalar e Testar as Dependências ⚙️

1. Instalar Dependências 🛠️

Antes de tudo, precisamos das ferramentas e bibliotecas que dão vida ao nosso herói:

Execute o comando abaixo no terminal para instalar as dependências listadas no package.json:

npm install

Isso baixa todas as "armas mágicas" 🪄 que nosso herói precisa.

No contexto de um projeto Node.js, as dependências são bibliotecas externas que o projeto utiliza para realizar determinadas funcionalidades. Vamos explorar cada uma das dependências mencionadas no arquivo package.json, sua responsabilidade e como elas se integram ao projeto.


Dependências e Suas Responsabilidades

# 1. @google/generative-ai

Responsabilidade: Esta biblioteca é usada para interagir com APIs de inteligência artificial generativa do Google, como modelos de geração de texto ou imagens.

Uso no Projeto: Pode ser integrada para adicionar funcionalidades baseadas em IA, como análise de texto, geração de respostas ou aprimoramento de conteúdos.



# 2. cors

Responsabilidade: Habilita o suporte a CORS (Cross-Origin Resource Sharing), permitindo que o servidor aceite requisições de origens diferentes.

Uso no Projeto: Facilita a comunicação com o frontend ou outros serviços hospedados em domínios diferentes.



# 3. dotenv

Responsabilidade: Carrega variáveis de ambiente a partir de um arquivo .env para o processo Node.js.

Uso no Projeto: Armazena informações sensíveis como credenciais de banco de dados, tokens de API e chaves secretas de forma segura.



# 4. express

Responsabilidade: Framework minimalista para construir servidores web e APIs.

Uso no Projeto: É a base para criar rotas, lidar com solicitações HTTP e gerenciar middleware.



# 5. mongodb

Responsabilidade: Fornece um driver para interagir com o banco de dados MongoDB diretamente do Node.js.

Uso no Projeto: Realiza operações como leitura, escrita, atualização e exclusão no banco de dados.

Para criar uma conta gratuita no MongoDB Atlas e configurar um cluster para seu projeto, siga os passos abaixo:


---

1. Criar Conta no MongoDB Atlas

1. Acesse o site do MongoDB Atlas.


2. Clique em Sign Up (Registrar-se).


3. Preencha as informações de registro ou use uma conta existente do Google/GitHub.


4. Após o registro, faça login no Atlas.




---

2. Criar um Cluster Grátis

1. Após acessar sua conta, clique em Create a Cluster.


2. Escolha o plano gratuito Shared Cluster (M0).


3. Configure o cluster:

Cloud Provider: Escolha o provedor (AWS, Azure, Google Cloud) e a região mais próxima de você.

Cluster Name: Defina um nome para seu cluster, por exemplo, meu-cluster.



4. Clique em Create Cluster.


---

3. Configurar Acesso ao Cluster

1. Após a criação do cluster, configure o acesso:

Vá para Database Access e clique em Add New Database User:

Nome de usuário: admin (ou outro de sua escolha).

Senha: Gere uma senha ou defina a sua própria.

Defina o Database User Privileges como Atlas Admin.


Clique em Add User.



2. Configure os IPs permitidos:

Vá para Network Access e clique em Add IP Address.

Escolha Allow Access from Anywhere ou adicione seu IP específico.


---

4. Conectar ao Cluster

1. Clique em Connect no cluster recém-criado.


2. Escolha a opção Connect your application.


3. Selecione a versão do Node.js compatível (ex.: 4.0 ou mais recente).


4. Copie a string de conexão, que será algo como:

mongodb+srv://admin:<password>@meu-cluster.abcde.mongodb.net/?retryWrites=true&w=majority

Substitua <password> pela senha que você configurou.



---

5. Configurar o Projeto

1. No arquivo .env do seu projeto, adicione a string de conexão:

MONGO_URI=mongodb+srv://admin:<password>@meu-cluster.abcde.mongodb.net/?retryWrites=true&w=majority


2. No seu código server.js, configure o MongoDB:

import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectToDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

connectToDB();


3. Certifique-se de instalar o pacote do MongoDB:

npm install mongodb


4. Inicie o servidor com o comando:

npm run dev



Agora você tem um cluster MongoDB gratuito configurado no Atlas e integrado ao seu projeto.



# 6. multer

Responsabilidade: Middleware para gerenciar o upload de arquivos em formulários.

Uso no Projeto: Permite o envio de imagens ou outros arquivos para o servidor, como as armazenadas na pasta uploads.

---

Relação Entre as Dependências

Integração:

O Express é o núcleo do servidor e funciona em conjunto com outras dependências, como cors (para segurança) e multer (para upload de arquivos).

dotenv configura o ambiente em que o Express e outras bibliotecas operam, como conectar ao banco usando mongodb.

@google/generative-ai adiciona funcionalidades avançadas, enquanto o MongoDB armazena os dados relacionados a essas interações.


Fluxo de Responsabilidades:

Quando uma solicitação chega, Express a gerencia.

Se for necessário interagir com o banco, mongodb entra em ação.

Caso a solicitação envolva upload de arquivos, multer processa os arquivos.

Para interações seguras com outras origens, cors define as permissões.

Variáveis de configuração como credenciais do banco ou chaves de API são fornecidas por dotenv.

---

Responsável por Instalação e Gerenciamento

Quem Instala:
Essas dependências são instaladas automaticamente ao rodar o comando:


npm install

Quem Gerencia:
O desenvolvedor ou equipe do projeto é responsável por:

Adicionar as dependências no package.json.

Atualizar versões quando necessário.

Garantir que todas as dependências são necessárias e seguras para uso no projeto.




---

Resumo

Cada dependência tem uma função específica e todas trabalham juntas para formar um sistema funcional e modular. O desenvolvedor é o responsável por integrá-las de forma eficiente e segura, garantindo que todas atendam às necessidades do projeto.



2. Testar o Projeto 🔄

Após instalar, verifique se o herói está pronto:

npm start


---

Arquivos e Estrutura do Projeto 🗂️

Abaixo está o mapa do nosso projeto, que mostra as partes do herói e suas funções:

    .
    ├── package.json          # 📦 Lista as dependências e scripts do projeto
    ├── package-lock.json     # 🔒 Garante que todos instalem as mesmas versões das dependências
    ├── server.js             # 💻 Inicia nosso herói (o servidor)
    ├── services.sh           # 🤖 Scripts de automação e configuração
    ├── src                   # 🏗️ Fonte de código principal
    │   ├── config            # ⚙️ Configurações gerais
    │   │   └── dbConfig.js   # 🌐 Conexão com o banco de dados
    │   ├── controllers       # 🎮 Heróis que controlam as ações
    │   │   └── postsController.js # 📝 Controla as ações dos posts
    │   ├── models            # 🧩 Modelos que explicam como os posts funcionam
    │   │   └── postsModel.js # 🗄️ Modelo de como os dados dos posts são armazenados
    │   ├── routes            # 🛣️ Caminhos para acessar os superpoderes do herói
    │   │   └── postsRoutes.js # 🔗 Rota para lidar com posts
    │   └── services          # 🧰 Serviços especiais do herói
    │       └── geminiService.js # 🪐 Serviço externo de suporte
    └── uploads               # 🖼️ Imagens enviadas pelos usuários


---

Relações Entre os Arquivos 🔗

1. server.js

Inicia o servidor 💻 e carrega as rotas definidas em postsRoutes.js.



2. postsRoutes.js

Define os caminhos 🛣️ para acessar as funcionalidades de postsController.js.



3. postsController.js

Controla as ações (superpoderes 💪) dos posts, como listar, criar, atualizar ou deletar. Ele conversa com postsModel.js.



4. postsModel.js

Define como os dados de posts são organizados e salvos no banco de dados 🗄️.



5. dbConfig.js

Configura a conexão com o banco de dados 🌐.



6. geminiService.js

Um serviço especial 🪐 que fornece suporte ou funcionalidades adicionais.





---

Passo a Passo 🪜

1. Inicie pelo server.js, que é como o "coração ❤️" do herói.


2. Depois, entenda como as rotas em postsRoutes.js levam as ações para o controlador.


3. O postsController.js orquestra tudo 🎼 e usa o postsModel.js para interagir com o banco de dados.


4. Verifique como dbConfig.js conecta nosso projeto ao banco 🌐.


5. Explore o geminiService.js para funcionalidades externas 🛠️.




---

Como Contribuir 🌟

1. Crie um fork deste repositório.


2. Faça suas alterações em uma nova branch.


3. Envie um pull request para revisão.

###  Proximos passos

1. versao termux android firebase
2. testes automaticos (entroia unitario funcional integracao performance stress segurança)
3. documentacao swagger openapi
4. versao 100%  inmemory distribuida
5. object detect image mask classification




---

Autores ✍️

product owner: scoobiii

agi full stack: gai&gpt&lex

✨ Aprenda, crie e inspire-se! 🚀

