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

2.Instale as dependências da raiz (e dos workspaces frontend/backend):
```bash
npm install
```

3. Crie um arquivo .env na pasta "backend" do projeto com o seguinte formato:

```bash
PORT=3000
DB_STRING=<CONNECTION_STRING_DO_MONGO_DB>
GEMINI_API_KEY=<API_KEY_DO_GEMINI>
GEOCODER_API_KEY=<API_KEY_DO_LOCATIONIQ>
```

Para instalar as dependências do backend

4. Popule o Mongo DB com os dados a serem utilizados. Execute no terminal:

```bash
npm run seed:food-providers

npm run seed:static-responses
```

5. Inicie o projeto completo (frontend + backend) com:

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
├── 📂 frontend/                       
│     ├── 📂 src/
│     │   ├── 📂 components/         # Componentes reutilizáveis (ex: Chatbot)
│     │   ├── 📂 assets/             # Ícones e imagens
│     │   ├── 📄 App.css             # Estilo principal da página
│     │   ├── 📄 App.tsx             # Componente raiz
│     │   ├── 📄 main.tsx            # Ponto de entrada
│     │   └── 📄 index.css           # Estilização global
│     ├── 📄 index.html              # HTML base
│     ├── 📄 package.json            # Scripts e dependências
│     ├── 📄 tsconfig.json           # Configuração do TypeScript
│     └── 📄 vite.config.ts          # Configuração do Vite
│
└── 📘 README.md                        # Documentação principal
```

## 📄 Documentação Arquitetônica

### 📌 Objetivos do Documento

- Descrever a arquitetura do sistema em nível alto e detalhado.
- Identificar e documentar ameaças de segurança a partir da metodologia STRIDE.
- Propor controles e contramedidas que fortaleçam a segurança do sistema.
- Evidenciar a evolução da arquitetura antes e depois da modelagem de ameaças.
- Apresentar diagramas e matrizes de risco que fundamentam a priorização e mitigação dos problemas identificados.
- Servir como referência técnica para desenvolvedores, professores e revisores.

---

## 🎯 Visão Geral da Arquitetura

### 🏛️ Descrição da Arquitetura em Alto Nível
O sistema é composto por três camadas principais:

1. **Frontend**
   - Interface da landing page e chatbot.
   - Comunicação com o backend via HTTP (inicial) ou HTTPS (final).

2. **Backend**
   - API RESTful implementada em Node.js + TypeScript.
   - Processamento de requisições e integração com IA.

3. **Infraestrutura de IA**
   - Serviços de IA externa (Google Gemini API).
   - Serviço de IA local (Tinyllama em Docker).

---

### 🛠️ Tecnologias e Padrões Utilizados
- Node.js e Express.js
- TypeScript
- MongoDB e Mongoose
- Docker / Docker Compose
- Gemini API
- Tinyllama
- HTTPS
- CORS restrito
- Rate Limiting
- Variáveis de ambiente

---

## Decomposição em Componentes

### 🌐 Frontend

- **Landing Page:** Cadastro de mercados e usuários.
- **Chatbot:** Envio de mensagens automáticas.
- Comunicação via HTTP/HTTPS.

---

### 🧩 Backend

**Controllers**
- `chatController.ts`: Processa requisições do chatbot.
- `staticResponsesController.ts`: Fornece respostas estáticas.

**Agents**
- `externalAgent.ts`: Integração com Gemini.
- `localAgent.ts`: Integração com Tinyllama.

**Modelos**
- `FoodProvider`: Estrutura de fornecedores.
- `StaticResponse`: Mensagens pré-cadastradas.

**Rotas**
- `/chat`
- `/static-response/:id`

**Banco de Dados**
- MongoDB.

---

### ⚙️ Infraestrutura
- Docker Compose (orquestra containers).
- Entrypoint.sh (garante inicialização ordenada).
- Variáveis de ambiente para segredos.

---

## 🔧 Visão Arquitetônica Inicial (Pré-Modelagem de Ameaças)

**Características da versão inicial:**
- Sem autenticação.
- Comunicação HTTP.
- Sem rate limiting.
- CORS permissivo.

---

### 🗺️ Diagrama de Fluxo de Dados Inicial

O diagrama de fluxo de dados inicial foi criado para retratar a arquitetura do sistema **Food Providers** no estágio anterior à aplicação de controles de segurança. Ele mostra como as requisições dos usuários eram processadas, evidenciando características como a comunicação em texto claro via HTTP, a ausência de autenticação para acessar os endpoints e a falta de mecanismos robustos de validação de entradas. Esse panorama inicial permitiu identificar pontos críticos de vulnerabilidade, que poderiam ser explorados por atacantes para comprometer a confidencialidade, a integridade ou a disponibilidade do sistema. A visualização detalhada desse fluxo é fundamental para entender a origem dos riscos e embasar as decisões de mitigação que foram aplicadas posteriormente.

- [Acesse o Diagrama de Fluxo de Dados Inicial](https://drive.google.com/file/d/1xv_3Oseo4VHd8HpLwZ3kmVgtl5wNdeYT/view?usp=sharing)

---

## 🔧 Visão Arquitetônica Final (Após Mitigação)

**Controles aplicados:**
- HTTPS obrigatório.
- Rate limiting.
- Validação e sanitização.
- Timeouts em requisições externas.
- Logs estruturados.
- CORS restrito.

---

### 🗺️ Diagrama de Fluxo de Dados Final

O diagrama de fluxo de dados final representa a arquitetura do **Food Providers** após a implementação das medidas de segurança levantadas durante o processo de modelagem de ameaças. Ele destaca mudanças significativas, como a adoção de comunicação criptografada por HTTPS, a autenticação de usuários, a aplicação de rate limiting para conter abusos, e a validação rigorosa de dados recebidos pelo backend. Além disso, evidencia a utilização de logs estruturados e mecanismos de monitoramento para rastrear operações críticas. Esta versão do diagrama reflete um sistema mais maduro, resiliente e alinhado às melhores práticas de segurança, mostrando de maneira visual como as contramedidas reforçaram os limites de confiança e protegeram os fluxos de dados.

- [Acesse o DFD Final](https://drive.google.com/file/d/1_9A3rL0RJ-SFiO4GxHxZiGlkeGaqN-H9/view?usp=sharing)

---

## 📋 Tabela de Ameaças e Mitigação (STRIDE)

Para identificar de maneira sistemática os riscos de segurança presentes no sistema, foi utilizada a metodologia **STRIDE**, que classifica ameaças em seis categorias principais: falsificação de identidade (spoofing), manipulação de dados (tampering), repúdio, divulgação de informações, negação de serviço e elevação de privilégio. A seguir, apresenta-se uma tabela que relaciona cada ameaça identificada no **Food Providers**, apontando qual categoria STRIDE se aplica, qual parte do sistema é afetada, o impacto potencial, a probabilidade de ocorrência e as principais medidas de mitigação propostas ou implementadas.

- [Acesse a tabela de Ameaças e Mitigação](https://docs.google.com/spreadsheets/d/1idsdAQcXF_bmplIQDVyxMy1uKEcTooMwsVxtbOtEBKw/edit?usp=sharing)

---

## 📉 Matriz de Riscos

Com base nas ameaças identificadas e classificadas na tabela anterior, foi construída uma matriz de riscos que considera dois fatores principais: **impacto** e **probabilidade**. Essa matriz auxilia na priorização das ações de mitigação, permitindo identificar quais ameaças requerem tratamento imediato e quais podem ser acompanhadas de forma preventiva. A escala utilizada varia de baixa a alta severidade, conforme descrito abaixo.

- [Acesse a Matriz de Riscos](https://docs.google.com/spreadsheets/d/1idsdAQcXF_bmplIQDVyxMy1uKEcTooMwsVxtbOtEBKw/edit?usp=sharing)

---

## ✅ Conclusão e Recomendações

A evolução do sistema **Food Providers** ao longo do processo de modelagem de ameaças evidencia como práticas de segurança estruturadas podem transformar profundamente uma aplicação distribuída. Com a aplicação das melhorias propostas, o sistema tornou-se mais robusto e confiável, preparado para proteger informações sensíveis e lidar com possíveis ataques.

Entre os principais avanços implementados, destacam-se:

- **Autenticação e autorização robustas**, garantindo que apenas usuários devidamente validados possam acessar funcionalidades críticas da API.
- **Criptografia obrigatória em todas as comunicações**, assegurando integridade e confidencialidade dos dados trafegados entre frontend, backend e serviços externos.
- **Monitoramento detalhado e logs estruturados**, que aumentam a rastreabilidade e facilitam investigações em caso de incidentes.
- **Aplicação de rate limiting**, prevenindo ataques de negação de serviço (DoS) e garantindo maior disponibilidade da plataforma.
- **Segregação de dados sensíveis** por meio de variáveis de ambiente, reduzindo riscos de exposição acidental de credenciais ou chaves.

Apesar desses avanços significativos, alguns pontos exigem atenção contínua no ciclo de vida do sistema. Para manter o nível de segurança alcançado, recomenda-se:

- A realização periódica de **testes de penetração**, de modo a identificar vulnerabilidades que possam surgir em novas versões do código ou em mudanças na infraestrutura.
- O monitoramento constante de **métricas de uso e de segurança**, permitindo detectar comportamentos suspeitos ou padrões de ataque de maneira proativa.
- A atualização sistemática de **dependências e bibliotecas de terceiros**, prevenindo exploração de falhas conhecidas.
- A criação e manutenção de **políticas formais de resposta a incidentes**, com definição de responsabilidades, fluxos de comunicação e procedimentos para conter e remediar problemas de forma organizada.

A combinação dessas práticas reforça não apenas a capacidade do **Food Providers** de cumprir sua missão social de reduzir a insegurança alimentar, mas também seu compromisso com a proteção dos dados e da confiança dos usuários. Uma abordagem integrada, preventiva e bem documentada é essencial para garantir a resiliência e a sustentabilidade do projeto no longo prazo.
