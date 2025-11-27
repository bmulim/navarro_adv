# Navarro Advocacia

> Website institucional moderno para escritório de advocacia especializado em Direito Empresarial, Civil e Trabalhista.

[English](#english) | [Português](#português)

---

## Português

### 📋 Sobre o Projeto

Website institucional desenvolvido para o escritório Navarro Advocacia, oferecendo uma plataforma completa para apresentação de serviços, blog jurídico e sistema de gestão de conteúdo.

### ✨ Funcionalidades

#### Área Pública
- **Home Page**: Apresentação do escritório com estatísticas e áreas de atuação
- **Áreas de Atuação**: Detalhamento dos serviços oferecidos
- **Blog Jurídico**: Artigos sobre temas de Direito Empresarial, Civil e Trabalhista
- **Página de Contato**: Formulário de contato e informações de atendimento
- **Modo Dark/Light**: Alternância suave entre temas claro e escuro
- **Design Responsivo**: Otimizado para desktop, tablet e mobile

#### Painel Administrativo
- **Gestão de Blog**: Criar, editar e excluir artigos
- **Editor de Artigos**: Interface completa com suporte a imagens
- **Gestão de Horários**: Configuração de horários de funcionamento
- **Gestão de Áreas**: Edição das áreas de atuação do escritório
- **Sistema de Autenticação**: Login seguro para administradores

### 🚀 Tecnologias

- **Framework**: [Next.js 16.0.4](https://nextjs.org/) (App Router + Turbopack)
- **React**: 19.2.0
- **TypeScript**: 5.x
- **Estilização**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Otimização de Imagens**: Next.js Image
- **Lint**: ESLint 9

### 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/bmulim/navarro_adv.git

# Entre na pasta do projeto
cd navarro_adv

# Instale as dependências
npm install

# Execute o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

### 🛠️ Scripts Disponíveis

```bash
npm run dev      # Inicia o servidor de desenvolvimento
npm run build    # Cria build de produção
npm run start    # Inicia servidor de produção
npm run lint     # Executa verificação de lint
```

### 🔐 Acesso Administrativo

**URL**: `/admin/login`

**Credenciais de Demo**:
- Email: `admin@navarroadv.com`
- Senha: `admin123`

> ⚠️ Nota: Este é um sistema frontend-only. As credenciais são apenas para demonstração.

### 📱 Estrutura de Páginas

```
/                    # Página inicial
/areadeatuacao       # Áreas de atuação
/blog                # Lista de artigos
/blog/[slug]         # Artigo individual
/contato             # Formulário de contato
/admin/login         # Login administrativo
/admin               # Painel de administração
```

### 🎨 Recursos de Design

- **Paleta de Cores Profissional**: Tons de azul marinho e bege
- **Tipografia**: Montserrat (configurável)
- **Animações Suaves**: Transições entre modos e interações
- **Componentes Reutilizáveis**: Arquitetura modular
- **CSS Variables**: Temas dinâmicos com variáveis CSS

### 📝 Gerenciamento de Conteúdo

O painel administrativo permite:

1. **Blog**
   - Criar novos artigos com editor completo
   - Adicionar imagens via URL
   - Definir categoria e status (publicado/rascunho)
   - Editar e excluir artigos existentes

2. **Horários de Funcionamento**
   - Editar dias e horários
   - Toggle aberto/fechado
   - Adicionar novos horários

3. **Áreas de Atuação**
   - Editar título e descrição
   - Adicionar novas áreas
   - Excluir áreas existentes

### 🌐 Deploy

O projeto está otimizado para deploy na [Vercel](https://vercel.com/):

```bash
# Build de produção
npm run build

# O projeto gera páginas estáticas sempre que possível
# ✓ 12 páginas geradas com SSG
```

### 📄 Licença

Este projeto é privado e desenvolvido exclusivamente para Navarro Advocacia.

### 👨‍💻 Desenvolvimento

Desenvolvido com ❤️ para oferecer a melhor experiência digital para clientes do escritório Navarro Advocacia.

---

## English

### 📋 About

Modern institutional website for Navarro Law Firm, specializing in Corporate, Civil, and Labor Law.

### ✨ Features

#### Public Area
- **Home Page**: Firm presentation with statistics and practice areas
- **Practice Areas**: Detailed service information
- **Legal Blog**: Articles on Corporate, Civil, and Labor Law
- **Contact Page**: Contact form and office information
- **Dark/Light Mode**: Smooth theme switching
- **Responsive Design**: Optimized for desktop, tablet, and mobile

#### Admin Panel
- **Blog Management**: Create, edit, and delete articles
- **Article Editor**: Complete interface with image support
- **Schedule Management**: Configure business hours
- **Practice Areas Management**: Edit firm's practice areas
- **Authentication System**: Secure login for administrators

### 🚀 Tech Stack

- **Framework**: [Next.js 16.0.4](https://nextjs.org/) (App Router + Turbopack)
- **React**: 19.2.0
- **TypeScript**: 5.x
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Image Optimization**: Next.js Image
- **Linting**: ESLint 9

### 📦 Installation

```bash
# Clone the repository
git clone https://github.com/bmulim/navarro_adv.git

# Navigate to project folder
cd navarro_adv

# Install dependencies
npm install

# Run development server
npm run dev
```

Access [http://localhost:3000](http://localhost:3000) in your browser.

### 🛠️ Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Create production build
npm run start    # Start production server
npm run lint     # Run lint check
```

### 🔐 Admin Access

**URL**: `/admin/login`

**Demo Credentials**:
- Email: `admin@navarroadv.com`
- Password: `admin123`

> ⚠️ Note: This is a frontend-only system. Credentials are for demonstration purposes only.

### 📱 Page Structure

```
/                    # Home page
/areadeatuacao       # Practice areas
/blog                # Articles list
/blog/[slug]         # Individual article
/contato             # Contact form
/admin/login         # Admin login
/admin               # Admin dashboard
```

### 🎨 Design Features

- **Professional Color Palette**: Navy blue and beige tones
- **Typography**: Montserrat (customizable)
- **Smooth Animations**: Theme transitions and interactions
- **Reusable Components**: Modular architecture
- **CSS Variables**: Dynamic themes with CSS variables

### 📝 Content Management

The admin panel allows:

1. **Blog**
   - Create new articles with complete editor
   - Add images via URL
   - Set category and status (published/draft)
   - Edit and delete existing articles

2. **Business Hours**
   - Edit days and hours
   - Toggle open/closed
   - Add new schedules

3. **Practice Areas**
   - Edit title and description
   - Add new areas
   - Delete existing areas

### 🌐 Deployment

Project is optimized for [Vercel](https://vercel.com/) deployment:

```bash
# Production build
npm run build

# Project generates static pages whenever possible
# ✓ 12 pages generated with SSG
```

### 📄 License

This project is private and developed exclusively for Navarro Law Firm.

### 👨‍💻 Development

Developed with ❤️ to provide the best digital experience for Navarro Law Firm clients.

---

**Repository**: [github.com/bmulim/navarro_adv](https://github.com/bmulim/navarro_adv)

**Version**: 0.1.0
