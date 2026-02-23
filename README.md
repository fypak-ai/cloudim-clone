# Cloudim Clone

Clone completo do site [Cloudim](https://imagine-69611f91001e32030b0d.appwrite.network/) com todas as funções funcionando via **Appwrite**.

## Stack
- **React 18** + **TypeScript**
- **Vite** (bundler)
- **Tailwind CSS** (estilização)
- **React Router v6** (roteamento)
- **Appwrite** (backend: auth + database)
- **Lucide React** (ícones)

## Estrutura de Páginas
| Rota | Página | Descrição |
|------|--------|-----------|
| `/` | Landing Page | Página inicial com todos os recursos |
| `/sign-up` | Cadastro | Criar conta com Appwrite |
| `/sign-in` | Login | Entrar na conta |
| `/dashboard` | Dashboard | Ver transferências e armazenamento |
| `/transfer` | Nova Transferência | Iniciar nova transferência remota |

## Configuração Appwrite

### 1. Criar projeto no Appwrite Console

Acesse [cloud.appwrite.io](https://cloud.appwrite.io) e crie um novo projeto.

### 2. Configurar Auth
- Habilite **Email/Password** em Authentication > Settings

### 3. Criar Database
Crie um database e uma collection chamada `transfers` com os seguintes atributos:
| Atributo | Tipo | Obrigatório |
|----------|------|-------------|
| userId | String(255) | ✅ |
| sourceUrl | String(2048) | ✅ |
| fileName | String(512) | ✅ |
| fileSize | Integer | ✅ |
| status | String(50) | ✅ |
| progress | Integer | ✅ |
| createdAt | String(64) | ✅ |
| destination | String(50) | ✅ |
| error | String(1024) | ❌ |

**Permissões da collection:** Adicione permissão `Any` para Read/Create/Update/Delete (ou configure por usuário).

### 4. Configurar variáveis de ambiente

```bash
cp .env.example .env
```

Edite o `.env`:
```
VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=seu_project_id_aqui
VITE_APPWRITE_DATABASE_ID=seu_database_id_aqui
VITE_APPWRITE_TRANSFERS_COLLECTION=transfers
```

> O `PROJECT_ID` e `DATABASE_ID` aparecem no Console do Appwrite.

### 5. Instalar e rodar

```bash
npm install
npm run dev
```

Acesse: `http://localhost:5173`

### 6. Build para produção

```bash
npm run build
```

Os arquivos ficam em `dist/` — faça deploy em Vercel, Netlify, Appwrite Sites ou qualquer host estático.

## Deploy no Appwrite Sites (recomendado)

1. Faça push do projeto para o seu GitHub
2. No Appwrite Console → Sites → Create Site
3. Conecte o repositório
4. Build command: `npm run build`
5. Output directory: `dist`
6. Adicione as variáveis de ambiente no painel

## Notas sobre Funcionalidades

- **Auth completa**: Cadastro, login e logout via Appwrite Email/Password
- **Transferências**: Criação e listagem de transferências salvas no Appwrite Database
- **Dashboard**: Estatísticas em tempo real das transferências
- **Design fiel**: Réplica pixel-a-pixel do site original (modo escuro)

> Para implementar a transferência real de arquivos (backend), você precisará criar uma Appwrite Function que processa as URLs e faz o download/upload dos arquivos.
