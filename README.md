# Shoptrix

Este projeto é uma aplicação de e-commerce focada em implementar server-side rendering, consequentemente melhorando a performance e SEO, além de um design responsivo. 

A aplicação consome a API pública da [Platzi Fake Store](https://fakeapi.platzi.com/) para exibir produtos e gerenciamento de carrinho de compras.

A arquitetura utiliza o framework **React Router 7**, aproveitando recursos de renderização eficiente e navegação otimizada.

## Funcionalidades

- **Home / Listagem de Produtos**: Exibição dos produtos disponíveis com imagens, títulos e preços.
- **Detalhes do Produto**: Página dedicada com informações completas do item, galeria de imagens e produtos relacionados.
- **Carrinho de Compras (CRUD)**:
  - Adição e remoção de produtos em tempo real.
  - Controle de quantidade (incrementar/decrementar).
  - Persistência básica do estado do carrinho.
- **Design Responsivo**: Interface totalmente adaptável para dispositivos móveis, tablets e desktops utilizando Tailwind CSS.
- **Navegação Fluida**: Implementação de Breadcrumbs e Menu Mobile para uma melhor experiência do usuário.

## Tecnologias Utilizadas

- **React 19**: Biblioteca UI de alto desempenho.
- **React Router 7**: Framework para roteamento, data fetching e renderização.
- **Tailwind CSS 4**: Estilização baseada em utilitários para design rápido e consistente.
- **TypeScript**: Garantia de tipagem e maior segurança no código.
- **Vite**: Ferramenta de build moderna e extremamente rápida.
- **Axios**: Cliente HTTP para integração com a API externa.

## Como Instalar e Rodar

Siga as instruções abaixo para configurar o projeto em sua máquina local:

### Pré-requisitos
- Node.js (versão 18 ou superior recomendada)
- npm (ou yarn/pnpm)

### Passo a Passo

1.  **Clone o repositório**:
    ```bash
    git clone [URL_DO_REPOSITORIO]
    cd teste-tecnico-e-commerce
    ```

2.  **Instale as dependências**:
    ```bash
    npm install
    ```

3.  **Inicie o servidor de desenvolvimento**:
    ```bash
    npm run dev
    ```

4.  **Acesse no navegador**:
    A aplicação estará disponível por padrão em `http://localhost:5173`.


## Scripts Disponíveis

- `npm run dev`: Inicia o projeto em modo de desenvolvimento.
- `npm run build`: Gera a versão otimizada para produção.
- `npm start`: Roda o servidor de produção (após o build).

## Limitações e Melhoria Futuras

Embora nesta aplicação SSR seja o foco principal, a navegação pode ser afetada devido a latência no tempo de resposta entre as páginas que utilizam loaders SSR. Para melhorar a experiência do usuário, seria ideal implementar uma solução de cache para os dados carregados pelos loaders. Além disso, a implementação de mecanismos de feedback, como skeletons a fim de dar a sensação de fluidez na navegação, mitigando o risco de desistência do usuário. 

Devido a natureza do projeto, ainda há possibilidade de ampliação na quantidade de funcionalidades, como implementaãi de filtros avançados, barra de pesquisa e criação de páginas de checkout e pagamento.

