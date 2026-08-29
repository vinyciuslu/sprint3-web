# InterGuide

Landing page desenvolvida como projeto acadêmico, apresentando a solução, público-alvo, galeria, equipe e canal de contato do InterGuide — um projeto voltado para explorar novas possibilidades para a câmera.

## Tecnologias utilizadas

- **React 19** — biblioteca para construção da interface
- **Vite** — bundler e servidor de desenvolvimento
- **JavaScript (JSX)**
- **CSS puro** — estilização com **CSS Grid**, Flexbox e **media queries** para responsividade
- **ESLint** — padronização e qualidade do código

## Funcionalidades

- **Layout responsivo**: construído com **CSS Grid** como base de várias seções (ex.: grid da Home, da Galeria e do Público-alvo), com media queries ajustando o número de colunas e o comportamento dos elementos em diferentes tamanhos de tela (mobile, tablet e desktop).
- **Formulário de contato com localStorage**: os dados enviados no formulário da seção Contato são salvos no `localStorage` do navegador, simulando a persistência de mensagens sem a necessidade de um backend.
- **Navegação em âncora com scroll suave** (`scroll-behavior: smooth`) entre as seções: Home, Solução, Público-alvo, Galeria, Equipe e Contato.

## Como instalar as dependências

Após clonar o repositório, entre na pasta do projeto e instale as dependências com npm:

```bash
git clone <url-do-repositorio>
cd sprint-3
npm install
```

## Como executar o projeto

Com as dependências instaladas, inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O terminal vai exibir um endereço local (algo como `http://localhost:5173`) — basta abrir esse link no navegador para visualizar o projeto.

### Outros comandos disponíveis

```bash
npm run build     # gera a versão de produção na pasta /dist
npm run preview   # serve localmente a versão de produção já buildada
npm run lint      # roda o ESLint para checar padrões de código
```

## Testando o localStorage do formulário

Depois de enviar uma mensagem pelo formulário de contato, é possível visualizar todas as mensagens salvas abrindo o console do navegador (F12) e digitando:

```js
JSON.parse(localStorage.getItem('mensagens'))
```

## Estrutura do projeto

```
sprint-3/
├── public/
├── src/
│   ├── assets/          # imagens utilizadas no projeto
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Solucao.jsx
│   │   ├── Publico.jsx
│   │   ├── Galeria.jsx
│   │   ├── Equipe.jsx
│   │   ├── Contato.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## Site

  <a href="https://sprint3-web-pi.vercel.app/">
    <strong> Acessar o site do InterGuide</strong>
  </a>

## Autor

Projeto acadêmico desenvolvido por Vinycius Lu, Matheus Tamataya, Leonardo Daniel e Bernardo SukJoo
