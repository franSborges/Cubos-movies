
# 🎬 Aplicação Cubos Movies
### Gerenciamento de filmes.

## Frontend **React.js**  **Next.js** com **TypeScript** 

## 🚀 Tecnologias

- **React.js**
- **TypeScript**
- **Next.js**

## 📋 Funcionalidades

### Requisitos das Páginas:
- ✅ Página de Login(Estrutura)
- ✅ Página de Cadastro(Estrutura)
- ✅ Página de Listagem de Filmes(Estrutura)

### 1. Clone o repositório
 
```bash
cd Cubos-movies/frontend
```

### 2. Instale as dependências
```bash
yarn add
```


### 3. Rode o projeto
```bash
yarn dev
```

O projeto estará rodando em: 
**http://localhost:3000/home**
**http://localhost:3000/signup**
**http://localhost:3000/login**


## Backend em **Express.js** com **TypeScript** 

## 🚀 Tecnologias

- **Node.js** + **Express.js**
- **TypeScript**
- **PostgreSQL** (via Docker)
- **Prisma ORM** (migrations)
- **JWT** (autenticação)
- **Bcrypt** (hash de senhas)


## 📋 Funcionalidades

### Autenticação
- ✅ Registro de usuário com validação
- ✅ Login com JWT
- ✅ Proteção de rotas
  

##  Pré-requisitos
- Node.js 18+ e Yarn (ou npm)
- Docker Desktop (para rodar o PostgreSQL)
- Porta 5432 livre no host (ou ajuste a porta no docker-compose/.env)

## 📦 Instalação

### 1. Clone o repositório
```bash
cd Cubos-movies/backend
```

### 2. Instale as dependências
```bash
yarn add
```

### 3. Configure as variáveis de ambiente
Copie o arquivo `.env.example` para `.env` e preencha com suas credenciais:


# Porta da aplicação

PORT=3333

# URL do banco de dados (deve coincidir com o docker-compose)
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/meubanco?schema=public"

# JWT
JWT_SECRET="sua_chave_secreta_super_segura"
JWT_EXPIRES_IN="1d"



#### Opção 4: Com Docker (recomendado)
```bash
# Inicie o PostgreSQL com Docker
# Rode o comando abaixo no caminho do projeto que contém o arquivo docker-compose.yml(docker desktop)

docker compose up -d

```


### 5. Execute as migrations do Prisma
```bash
# Gera o Prisma Client
yarn prisma generate

# Executa as migrations (cria as tabelas)
yarn prisma migrate dev --name init

# (Opcional) Visualize o banco com Prisma Studio
yarn prisma studio
```



### 6. Gerar o cliente do Prisma

### Gerar o cliente do Prisma
```bash
npx prisma generate
```

### Rodar as migrations
```bash
npx prisma migrate dev --name init
```

### Visualizar o banco (opcional)
```bash
npx prisma studio
```


O servidor estará rodando em: **http://localhost:3000**


### Rodar o servidor
```bash
yarn dev
```

## 📚 Documentação da API

### Autenticação

#### Registro
```http
POST /api/auth/signup
Content-Type: application/json

{
  "name": "João Silva",
  "email": "joao@example.com",
  "password": "senha123",
}
```

#### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "joao@example.com",
  "password": "senha123"
}

Response:
{
  "message": "Login realizado com sucesso",
  "user": { "id": "...", "name": "...", "email": "..." },
  "token": "eyJhbGciOiJIUzI1..."
}
```

#### Perfil do usuário
```http
GET /api/auth/user
Authorization: Bearer {token}
```



