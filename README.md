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
