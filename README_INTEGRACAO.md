# Integração Frontend + Backend - Navarro Advocacia

## 📋 Visão Geral

O projeto agora está completamente integrado com backend NestJS e frontend Next.js.

## 🚀 Como Iniciar

### Opção 1: Rodar tudo junto (Recomendado)

```bash
npm run dev:all
```

### Opção 2: Rodar separadamente

**Frontend:**

```bash
npm run dev
```

Acessível em: `http://localhost:3000`

**Backend:**

```bash
npm run dev:backend
# ou
cd backend
npm run start:dev
```

Acessível em: `http://localhost:3001/api`

## 🔧 Configuração Inicial

### 1. Variáveis de Ambiente

**Frontend (`.env.local`):**

```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

**Backend (`backend/.env`):**

```env
PORT=3001
NODE_ENV=development
JWT_SECRET=lottle_will_navarro
JWT_EXPIRATION=1d
DATABASE_URL='postgresql://...'
CORS_ORIGIN=http://localhost:3000
```

### 2. Banco de Dados

Execute as migrações do Drizzle:

```bash
cd backend
npm run db:push
```

Para visualizar os dados:

```bash
cd backend
npm run db:studio
```

## 📁 Estrutura da Integração

```
src/
├── lib/
│   └── api.ts          # Cliente API com todos os endpoints
├── types/
│   └── api.ts          # Tipos TypeScript compartilhados
└── app/
    ├── blog/
    │   ├── page.tsx        # Lista de posts (integrado)
    │   └── [slug]/
    │       └── page.tsx    # Post individual (integrado)
    └── areadeatuacao/
        └── page.tsx        # Áreas de atuação (integrado)
```

## 🔌 Endpoints Integrados

### Posts

- `GET /api/posts` - Lista todos os posts
- `GET /api/posts?published=true` - Posts publicados
- `GET /api/posts/:slug` - Post por slug

### Áreas

- `GET /api/areas` - Lista todas as áreas
- `GET /api/areas/:id` - Área por ID

### Horários

- `GET /api/schedules` - Lista todos os horários

### Autenticação (Admin)

- `POST /api/auth/login` - Login
- `GET /api/auth/profile` - Perfil do usuário autenticado

## 🎨 Páginas Integradas

### Blog (`/blog`)

- ✅ Busca posts do backend
- ✅ Exibe lista com excerpt e data
- ✅ Mensagem quando não há posts

### Post Individual (`/blog/[slug]`)

- ✅ Busca post por slug
- ✅ Renderiza conteúdo HTML
- ✅ Mostra imagem se disponível
- ✅ 404 automático quando post não existe

### Áreas de Atuação (`/areadeatuacao`)

- ✅ Busca áreas do backend
- ✅ Exibe ícone e imagem quando disponível
- ✅ Navegação por âncoras
- ✅ Mensagem quando não há áreas

## 🛠️ Scripts Disponíveis

### Desenvolvimento

- `npm run dev` - Inicia apenas o frontend
- `npm run dev:backend` - Inicia apenas o backend
- `npm run dev:all` - Inicia frontend e backend simultaneamente

### Build

- `npm run build` - Build do frontend
- `npm run build:backend` - Build do backend

### Produção

- `npm start` - Inicia frontend em produção
- `npm start:backend` - Inicia backend em produção

### Qualidade de Código

- `npm run lint` - Lint do frontend
- `npm run lint:backend` - Lint do backend

## 📝 Próximos Passos

### Para usar o backend:

1. **Configure o DATABASE_URL** no `backend/.env`
2. **Execute as migrações**: `cd backend && npm run db:push`
3. **Popule o banco com dados iniciais** (opcional)
4. **Inicie os servidores**: `npm run dev:all`

### Para adicionar novos dados:

Você pode usar o Drizzle Studio para adicionar dados manualmente:

```bash
cd backend
npm run db:studio
```

Ou criar seeds/scripts de inicialização no backend.

## 🔒 Segurança

- ✅ CORS configurado entre frontend e backend
- ✅ JWT para autenticação de admin
- ✅ Validação de dados com class-validator
- ✅ Sanitização de inputs
- ✅ Headers de segurança com helmet

## 📦 Dependências Adicionadas

**Frontend:**

- Nenhuma dependência externa necessária (usa fetch nativo)

**Backend:**

- @nestjs/core, @nestjs/common
- @neondatabase/serverless
- drizzle-orm, drizzle-kit
- bcrypt, helmet, compression
- class-validator, class-transformer

## 🐛 Troubleshooting

### Erro de CORS

Verifique se o `CORS_ORIGIN` no backend está configurado corretamente para `http://localhost:3000`

### Erro de conexão com API

1. Verifique se o backend está rodando em `http://localhost:3001`
2. Confirme que `NEXT_PUBLIC_API_URL` está correto no `.env.local`

### Dados não aparecem

1. Verifique se o banco de dados está populado
2. Confirme que as migrações foram executadas
3. Use o Drizzle Studio para verificar os dados
