<p align="center">
  <img src="https://img.icons8.com/color/48/real-food-for-meals.png" width="100" alt="Logo do Projeto"/>
</p>

<h1 align="center">🚀 Projeto Food Providers</h1>

<p align="center">
  <i>Disciplina: GCC129 - Sistemas Distribuídos<br>
  <i>Universidade Federal de Lavras (UFLA)</i>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/status-em%20desenvolvimento-blue" alt="Status do Projeto"/>
</p>

---

## 👩‍💻 Equipe

- **Professor:** André de Lima Salgado
- **Alunos:** Érika Mara de Morais Machado, Lucas Scommegna, Maria Luiza Bernardo Madeira e Verônica Rodrigues da Silva França

---

## 📌 Sobre o Projeto

### 📌 A dor que o projeto busca resolver - Insegurança Alimentar em Minas Gerais
A insegurança alimentar é uma das questões mais urgentes enfrentadas pelo estado de Minas Gerais. De acordo com dados do Instituto Brasileiro de Geografia e Estatística (IBGE), **mais de 5 milhões de pessoas** viveram em domicílios onde **faltou alimento ao longo de 2023**, o que representa **21,6% dos lares mineiros**.

Embora existam campanhas solidárias, feiras e supermercados com promoções em alimentos básicos, grande parte da população em situação de vulnerabilidade **não tem acesso adequado a essas informações**. Barreiras como a falta de conectividade, ausência de comunicação direcionada e limitação de recursos dificultam o alcance dessas oportunidades por parte de quem mais precisa.

## 🎯 Objetivo

Este projeto visa atuar diretamente nessa lacuna. Propomos o desenvolvimento de uma **solução digital acessível**, composta por:

- ✅ Um **chatbot**, para envio automático de promoções de alimentos;

A escolha de um chat como principal canal de comunicação se justifica por ser uma ferramenta de comunicação amplamente presente no cotidiano da população, independentemente da faixa de renda. Ao utilizá-lo como ponto central para a divulgação de promoções e ofertas, facilita-se o acesso à informação, especialmente para quem possui recursos limitados — uma vez que as mensagens chegariam diretamente para a pessoa, sem exigir que a pessoa ativamente as procure em outros meios.

---
### 📊 Relevância do problema

A seguir, alguns dos dados que comprovam a urgência da iniciativa:

- 🧾 **5 milhões de pessoas** enfrentaram falta de comida em 2023 em Minas Gerais;  
- 📉 **21,6% dos lares** mineiros convivem com insegurança alimentar;  
- 🚨 Várias cidades do estado estão entre os piores índices do Brasil em acesso regular à alimentação.

Diante desse cenário, é evidente a necessidade de **soluções inovadoras e inclusivas**, que atuem não apenas na distribuição de alimentos, mas também na **democratização da informação e das oportunidades**.

---

### 🔗 Referências

- [G1 - Insegurança alimentar afeta cerca de 5 milhões de pessoas em MG (2025)](https://g1.globo.com/mg/minas-gerais/noticia/2025/06/07/inseguranca-alimentar-afeta-cerca-de-5-milhoes-de-pessoas-em-minas-gerais.ghtml)  
- [O Tempo - MG tem mais de 5 milhões de pessoas vivendo em casas onde faltou comida em 2023](https://www.otempo.com.br/cidades/mg-tem-mais-de-5-milhoes-de-pessoas-vivendo-em-casas-onde-faltou-comida-em-2023-1.3462800)  
- [Estado de Minas - Cidades mineiras entre as piores em segurança alimentar (2024)](https://www.em.com.br/politica/2024/11/6995082-cidades-mineiras-estao-entre-as-piores-em-seguranca-alimentar.html)

---

# 🚀 Como Usar?

## Iniciando a aplicação

### Pré-requisitos

- Docker
- Docker Compose
- Docker Desktop (opcional)
- Git
- MongoDB (Chave de cluster)
- API Key do Gemini
- API Key do locationiq

### Instalação e Execução

1. Clone o repositório:

```bash
git clone <repository-url>
cd food-provider-chatbot
```

2. Crie um arquivo .env na pasta "backend" do projeto com o seguinte formato:

```bash
PORT=3000
DB_STRING=<CONNECTION_STRING_DO_MONGO_DB>
GEMINI_API_KEY=<API_KEY_DO_GEMINI>
GEOCODER_API_KEY=<API_KEY_DO_LOCATIONIQ>
```

3. Execute no terminal estando na pasta "backend"

```bash
npm install
```

Para instalar as dependências do backend

4. Popule o Mongo DB com os dados a serem utilizados. Execute no terminal:

```bash
npm run seed:food-providers

npm run seed:static-responses
```

5. Execute o backend com o seguinte comando:

```bash
npm run dev
```

Isso já subirá a aplicação e os containers.

O backend estará rodando na porta 3000 e a IA local na porta 11434

# 📂 Estrutura do Projeto
```bash

food-providers/
├── 📂 .vscode/                         
│   └── 📄 launch.json                  # Configurações de debug do VSCode
│
├── 📂 backend/                         # Backend da aplicação (Node.js + TypeScript)
│   ├── 📂 src/                         
│   │   ├── 📂 agents/                  # Agentes de integração
│   │   │   ├── 📄 externalAgents.ts            # Define integrações com serviços externos
│   │   │   └── 📄 localAgents.ts               # Implementa agentes locais, como chamadas à IA local ou outras rotinas internas
│   │   │
│   │   ├── 📂 controllers/             # Controladores de rotas 
│   │   │   ├── 📄 chatController.ts            # Lógica para receber mensagens do usuário e passar para agentes
│   │   │   └── 📄 staticResponsesController.ts  # Retorna respostas predefinidas da base 
│   │   │
│   │   ├── 📂 db/                      # Configurações de banco de dados
│   │   │   └── 📄 config.ts                    # Monta a conexão com o banco de dados
│   │   │
│   │   ├── 📂 models/                  # Modelos de dados
│   │   │   ├── 📄 FoodProvider.ts              # Modelo Mongoose para documento FoodProvider, representando informações de um fornecedor
│   │   │   └── 📄 StaticResponse.ts            # Modelo Mongoose para StaticResponse, guarda respostas fixas usadas pelo bot
│   │   │
│   │   ├── 📂 routes/                  # Rotas da API
│   │   │   ├── 📄 chatRoutes.ts                # Define rota /chat, conecta POST de mensagens ao chatController
│   │   │   └── 📄 staticResponsesRoutes.ts     # Expõe rota para obter respostas estáticas via staticResponsesController
│   │   │
│   │   ├── 📂 seed/                    # Scripts de seed (dados iniciais)
│   │   │   ├── 📄 seedFoodProviders.ts         # Script para popular o DB com dados iniciais de fornecedores
│   │   │   └── 📄 seedStaticResponses.ts       # Script para inserir respostas fixas de exemplo
│   │   │
│   │   ├── 📄 app.ts                   # Configura a aplicação Express, middlewares, roteamento das rotas principais e tratamento de erros
│   │   └── 📄 server.ts                # Inicializa o servidor, conecta ao banco e executa o app
│   │
│   ├── 📄 .gitignore                   # Define arquivos e pastas a serem ignorados no controle de versão
│   ├── 📄 Dockerfile                   # Construções Docker para o backend
│   ├── 📄 Food Providers.postman_collection.json  # Coleção Postman com endpoints prontos para testes
│   ├── 📄 docker-compose.yml          # Orquestração entre backend, banco e IA local
│   ├── 📄 entrypoint.sh               # Script de inicialização do container Docker
│   ├── 📄 package.json                # Dependências e scripts
│   ├── 📄 package-lock.json           # Lockfile de dependências
│   └── 📄 tsconfig.json               # Configuração do TypeScript
│
├── 📂 frontend/                        # Em desenvolvimento
│
└── 📘 README.md                        # Documentação principal
```
