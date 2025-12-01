# Backend NestJS - Navarro Advocacia

Backend completo com todas as camadas de segurança implementadas.

## 🔒 Camadas de Segurança Implementadas

### 1. **Guards**

- `JwtAuthGuard`: Proteção de rotas com JWT
- Suporte a rotas públicas com decorator `@Public()`

### 2. **Pipes**

- `ValidationPipe`: Validação automática de DTOs com class-validator
- `ParseUuidPipe`: Validação de parâmetros UUID

### 3. **Interceptors**

- `LoggingInterceptor`: Log de todas as requisições e respostas
- `TransformInterceptor`: Padronização de respostas da API

### 4. **Exception Filters**

- `AllExceptionsFilter`: Tratamento global de erros

### 5. **Middlewares**

- `LoggerMiddleware`: Log detalhado de requisições HTTP
- `helmet`: Proteção contra vulnerabilidades web comuns
- `compression`: Compressão de respostas
- `CORS`: Controle de origem cruzada

### 6. **Decorators Customizados**

- `@Public()`: Marca rotas como públicas
- `@CurrentUser()`: Extrai usuário autenticado

## 📦 Módulos

- **AuthModule**: Autenticação JWT (login/register)
- **UsersModule**: Gerenciamento de usuários
- **PostsModule**: CRUD de posts do blog
- **AreasModule**: CRUD de áreas de atuação
- **SchedulesModule**: CRUD de horários de funcionamento
- **DatabaseModule**: Integração com Neon Database

## 🚀 Como Usar

### 1. Configurar variáveis de ambiente

Copie o arquivo `.env.example` para `.env` e configure:

```bash
cp .env.example .env
```

### 2. Executar o SQL no Neon

Execute o arquivo `database/schema.sql` no seu banco Neon para criar as tabelas.

### 3. Instalar dependências

```bash
npm install
```

### 4. Rodar em desenvolvimento

```bash
npm run start:dev
```

### 5. Build para produção

```bash
npm run build
npm run start:prod
```

## 🐳 Docker

```bash
# Build
docker build -t navarro-backend .

# Run
docker run -p 3001:3001 --env-file .env navarro-backend
```

## 📡 Endpoints

### Autenticação (Públicos)

- `POST /api/auth/register` - Registrar usuário
- `POST /api/auth/login` - Login

### Posts (GET público, CUD protegido)

- `GET /api/posts` - Listar posts
- `GET /api/posts/:id` - Buscar post
- `POST /api/posts` - Criar post (requer JWT)
- `PATCH /api/posts/:id` - Atualizar post (requer JWT)
- `DELETE /api/posts/:id` - Deletar post (requer JWT)

### Áreas (GET público, CUD protegido)

- `GET /api/areas` - Listar áreas
- `GET /api/areas/:id` - Buscar área
- `POST /api/areas` - Criar área (requer JWT)
- `PATCH /api/areas/:id` - Atualizar área (requer JWT)
- `DELETE /api/areas/:id` - Deletar área (requer JWT)

### Horários (GET público, CUD protegido)

- `GET /api/schedules` - Listar horários
- `GET /api/schedules/:id` - Buscar horário
- `POST /api/schedules` - Criar horário (requer JWT)
- `PATCH /api/schedules/:id` - Atualizar horário (requer JWT)
- `DELETE /api/schedules/:id` - Deletar horário (requer JWT)

## 🔐 Autenticação

Todas as rotas protegidas requerem header:

```
Authorization: Bearer <token_jwt>
```

## 📝 Validações

Todos os DTOs possuem validações completas usando class-validator:

- Emails válidos
- Senhas mínimas de 6 caracteres
- URLs válidas para imagens
- Horários no formato HH:MM
- UUIDs válidos nos parâmetros

## 🛡️ Segurança

- Senhas com hash bcrypt
- JWT com expiração configurável
- Helmet para headers de segurança
- Validação de entrada em todas as rotas
- Tratamento global de erros
- Logs detalhados de requisições
