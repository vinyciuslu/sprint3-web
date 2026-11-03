# InterGuide

---

## Índice

- [Sobre o projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias-utilizadas)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Como executar](#como-executar-o-projeto)
- [API e integração](#api-e-integração)
- [Acesso administrativo](#acesso-administrativo)
- [Equipe](#equipe)
- [Deploy](#deploy)
- [Inteligência artificial](#utilização-de-inteligência-artificial)

---

## Sobre o projeto

O **InterGuide** é uma proposta de extensão inteligente para o aplicativo de câmera dos smartphones JOVI, desenvolvida para tornar a experiência de estudantes durante as aulas mais intuitiva, contextualizada e eficiente.

A solução busca transformar a câmera em uma ferramenta de apoio ao aprendizado, facilitando o registro e a organização de conteúdos apresentados em sala de aula.

Este projeto foi desenvolvido como parte das atividades acadêmicas da **FIAP**, evoluindo a aplicação construída na Sprint 3 e incorporando novos conceitos de desenvolvimento com React.

## Funcionalidades

- **Página inicial:** apresentação da solução e de seus principais benefícios.
- **Apresentação do público-alvo:** descrição dos estudantes que podem utilizar a solução.
- **Galeria:** apresentação visual do conceito do InterGuide.
- **Equipe:** apresentação dos integrantes responsáveis pelo projeto.
- **Contato:** formulário para envio de mensagens.
- **Autenticação:** acesso administrativo com persistência de sessão.
- **Rotas protegidas:** restrição de acesso ao painel administrativo para usuários não autenticados.
- **Painel administrativo:** visualização das mensagens recebidas pelo formulário.
- **Integração com API:** armazenamento e recuperação de mensagens por meio de uma API externa.

## Tecnologias utilizadas

| Tecnologia | Aplicação |
|---|---|
| React 19 | Construção da interface por componentes |
| JavaScript | Lógica e funcionalidades |
| Vite | Ambiente de desenvolvimento e build |
| Tailwind CSS 4 | Estilização da aplicação |
| React Router DOM | Navegação e gerenciamento de rotas |
| React Hooks | Gerenciamento de estado e efeitos |
| Custom Hooks | Reutilização de lógica |
| Context API | Compartilhamento do estado de autenticação |
| MockAPI | API externa para armazenamento de mensagens |
| Git e GitHub | Versionamento e colaboração |
| Vercel | Hospedagem da aplicação |

## Estrutura do projeto

```text
sprint-3/
├── public/
├── src/
│   ├── components/
│   │   ├── Contato.jsx
│   │   ├── Equipe.jsx
│   │   ├── Footer.jsx
│   │   ├── Galeria.jsx
│   │   ├── Hero.jsx
│   │   ├── Membro.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProtectedRoute.jsx
│   │   ├── Publico.jsx
│   │   └── Solucao.jsx
│   │
│   ├── contexts/
│   │   ├── AuthContext.jsx
│   │   └── context.js
│   │
│   ├── hooks/
│   │   ├── useAuth.js
│   │   └── useMensagens.js
│   │
│   ├── pages/
│   │   ├── Admin.jsx
│   │   ├── Home.jsx
│   │   └── Login.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
└── vite.config.js
```

## Como executar o projeto

### Pré-requisitos

Antes de começar, você precisa ter instalado:

- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)

### 1. Clone o repositório

```bash
git clone https://github.com/vinyciuslu/sprint3-web.git
```

### 2. Entre na pasta do projeto

```bash
cd sprint3-web
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute o projeto

```bash
npm run dev
```

O Vite disponibilizará a aplicação localmente, normalmente em:

```text
http://localhost:5173
```

### 5. Verifique o projeto

Para executar a verificação de código:

```bash
npm run lint
```

Para gerar a versão de produção:

```bash
npm run build
```

## API e integração

O projeto utiliza a **MockAPI** como serviço externo para armazenar e recuperar as mensagens enviadas pelo formulário de contato.

O recurso utilizado é `mensagens`, com os seguintes campos:

| Campo | Descrição |
|---|---|
| `id` | Identificador do registro |
| `nome` | Nome do remetente |
| `email` | E-mail do remetente |
| `mensagem` | Conteúdo enviado |
| `data` | Data e horário do envio |

A aplicação realiza requisições HTTP para consultar e cadastrar mensagens.

**Endpoint:**

```text
https://6ae919001a7b15aaa50fa227.mockapi.io/mensagens
```

Não é necessário executar um servidor JSON local para utilizar a integração hospedada.

## Acesso administrativo

Para fins de demonstração, o projeto disponibiliza um acesso administrativo:

| Campo | Credencial |
|---|---|
| E-mail | `admin@interguide.com` |
| Senha | `123456` |

O sistema utiliza Context API e `localStorage` para gerenciar a sessão de autenticação.

> **Observação:** a autenticação é demonstrativa e implementada no frontend. Não deve ser considerada um mecanismo seguro de autenticação para produção.

## Equipe

| Integrante | RM |
|---|---|
| Vinycius Lu | 569300 |
| Matheus Tamataya | 572842 |
| Leonardo Daniel | 574142 |
| Bernardo SukJoo | 568968 |

## Deploy

<a href="https://sprint3-web-pi.vercel.app/">
    <strong> Acessar o site do InterGuide</strong>
  </a>

## Utilização de inteligência artificial

Durante o desenvolvimento do projeto, ferramentas de inteligência artificial foram utilizadas como apoio ao processo de aprendizagem e desenvolvimento, auxiliando na compreensão de conceitos, identificação e correção de erros, organização do código e resolução de dúvidas relacionadas às tecnologias utilizadas.

A implementação, análise das sugestões e validação das funcionalidades foram realizadas pelos integrantes da equipe.

---

<p align="center">
  Desenvolvido com dedicação pelos estudantes da FIAP.
</p>

<p align="center">
  **InterGuide — Transformando a câmera em uma ferramenta de aprendizado.**
</p>
