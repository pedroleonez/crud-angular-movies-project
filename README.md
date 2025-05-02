# 🎬 Movies Catalog - CRUD Angular Application

Um aplicativo de catálogo de filmes completo desenvolvido com Angular e Spring Boot, permitindo operações CRUD (Create, Read, Update, Delete) para gerenciar uma coleção de filmes.

## 📋 Funcionalidades

- **Listagem de Filmes**: Visualize todos os filmes cadastrados com informações como título, ano, gênero e diretor
- **Adicionar Filmes**: Cadastre novos filmes com validação de dados
- **Editar Filmes**: Atualize informações dos filmes existentes
- **Excluir Filmes**: Remova filmes da coleção com diálogo de confirmação
- **Validação de Formulários**: Validação completa com mensagens de erro personalizadas
- **Design Responsivo**: Interface adaptável para diferentes tamanhos de tela

## 🛠️ Tecnologias

### Frontend (Angular)
- Angular 17+ (usando o novo sistema de controle de fluxo com @if, @for)
- Angular Material para componentes de UI
- Reactive Forms com validação personalizada
- Pipes personalizados para formatação de dados
- Lazy loading para módulos

### Backend (Spring Boot - em repositório separado)
- API RESTful com Spring Boot
- Spring Data JPA para persistência
- H2/PostgreSQL para banco de dados
- Spring Validation para validação de dados

## 🚀 Começando

### Pré-requisitos
- Node.js (v18+)
- NPM ou Yarn
- Angular CLI (v17+)
- Java 17+ (para o backend)
- Maven ou Gradle (para o backend)

### Instalação e Execução

1. Clone o repositório:
```bash
git clone <https://github.com/pedroleonez/crud-angular-movies-project.git>
cd crud-angular-movies-project
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm start
```

4. Acesse o aplicativo em `http://localhost:4200/`

### Conectando ao Backend

O aplicativo está configurado para se conectar ao backend Spring Boot através de um proxy. Verifique o arquivo `proxy.conf.js` para detalhes da configuração.

## 📐 Estrutura do Projeto

```
src/
├── app/
│   ├── app.component - Componente raiz
│   ├── movies/ - Módulo principal de filmes
│   │   ├── components/ - Componentes de apresentação
│   │   ├── containers/ - Componentes inteligentes (com lógica)
│   │   ├── guards/ - Guards de rota e resolvers
│   │   ├── models/ - Interfaces e modelos
│   │   └── services/ - Serviços para API
│   └── shared/ - Módulo compartilhado
│       ├── components/ - Componentes reutilizáveis
│       ├── form/ - Utilitários para formulários
│       └── pipes/ - Pipes personalizados
└── assets/ - Recursos estáticos
```

## 🧪 Testes

Execute os testes unitários com:
```bash
npm test
```

## 📦 Build

Para gerar a build de produção:
```bash
npm run build
```

Os arquivos estarão disponíveis no diretório `dist/`.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## 📄 Licença

Este projeto está licenciado sob a licença MIT - consulte o arquivo LICENSE para obter detalhes.
