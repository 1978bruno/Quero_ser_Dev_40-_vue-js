# 📱 Agenda de Contatos - Vue.js

Uma aplicação web interativa e reativa desenvolvida com **Vue.js 3** para gerenciamento e visualização de contatos, consumindo dados dinâmicos da API pública [Random User Generator](https://randomuser.me/).

---

## 📌 Sobre o Projeto

Este projeto consiste em uma agenda de contatos onde é possível visualizar uma listagem de pessoas, filtrar contatos por nome em tempo real, recarregar novos registros via requisição assíncrona à API e remover contatos da listagem.

Foi construído com foco no aprendizado prático dos conceitos fundamentais de reatividade e ciclo de vida do **Vue.js 3** sem a necessidade de etapas complexas de compilação ou empacotamento (*build tools*), utilizando a versão global via CDN.

Parte integrante dos exercícios práticos da Imersão do programa Quero Ser Dev 40+ da CampusCode.

---

## ✨ Funcionalidades

- **Consumo de API Externa**: Busca automática de 15 perfis aleatórios através da [Random User API](https://randomuser.me/) na inicialização do aplicativo.
- **Filtro em Tempo Real**: Campo de busca reativo que filtra os contatos exibidos à medida que o usuário digita.
- **Exclusão de Contatos**: Opção de remover individualmente qualquer contato da lista.
- **Carregamento sob Demanda**: Botão para atualizar e recarregar uma nova lista de contatos diretamente da API.
- **Feedback Visual**: Mensagem informativa automática quando nenhum contato for encontrado ou a lista estiver vazia.
- **Interface Limpa**: Exibição em cards com imagem de perfil, nome, sobrenome, e-mail e cidade.

---

## 🛠️ Tecnologias Utilizadas

- **[Vue.js 3](https://vuejs.org/)**: Framework JavaScript progressivo (utilizado via CDN unpkg).
- **HTML5**: Estrutura semântica e templates reativos com diretivas Vue.
- **CSS3**: Estilização personalizada de cards, botões e campos de entrada.
- **JavaScript (ES6+)**: Funções assíncronas (`async`/`await`), manipulação de arrays e consumo de APIs via `Fetch API`.
- **[Random User Generator API](https://randomuser.me/)**: API REST para geração de dados fictícios de usuários.

---

## 📂 Estrutura de Arquivos

```plaintext
vue-js/
├── index.html       # Estrutura HTML da página e template do Vue
├── main.js          # Instância do Vue, estado reativo, propriedades computadas e métodos
├── style.css        # Folha de estilos e layout visual dos componentes
└── README.md        # Documentação do projeto
```

---

## 🧠 Conceitos do Vue.js Explorados

- `Vue.createApp()`: Criação da instância da aplicação.
- `data()`: Declaração das variáveis reativas de estado (`searchtext` e `listcontacts`).
- `computed`: Propriedade computada (`listresult`) para filtragem reativa e otimizada da lista de contatos.
- `mounted()`: Hook do ciclo de vida utilizado para disparar o carregamento inicial dos dados assim que o componente é montado no DOM.
- `methods`: Definição de métodos e ações (`getData`, `removecontact`, `changeData`).
- **Diretivas Vue**:
  - `v-model`: *Two-way data binding* para capturar o valor digitado no campo de pesquisa.
  - `v-for`: Renderização de listas para iterar sobre os contatos.
  - `v-if`: Renderização condicional para mensagens de estado vazio.
  - `v-bind:` (`:`): Associação dinâmica de atributos (como URLs de imagens em `src`).
  - `v-on:` (`@`): Escuta e tratamento de eventos de clique nos botões.

---

## 🚀 Como Executar o Projeto

Como a aplicação é totalmente estática e utiliza o Vue 3 via CDN, você não precisa instalar o Node.js ou gerenciadores de pacotes como npm/yarn.

### Pré-requisitos
- Um navegador de internet moderno (Google Chrome, Firefox, Microsoft Edge, etc.).
- Conexão com a internet para o carregamento do Vue via CDN e da API de usuários.

### Opção 1: Abrir diretamente no navegador
1. Clone o repositório ou faça o download dos arquivos:
   ```bash
   git clone https://github.com/1978bruno/Quero_ser_Dev_40-_vue-js.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd Quero_ser_Dev_40-_vue-js
   ```
3. Dê um duplo clique no arquivo `index.html` ou abra-o diretamente no seu navegador.

### Opção 2: Utilizando uma extensão de servidor local (ex: Live Server)
1. Abra a pasta do projeto no **VS Code**.
2. Com a extensão **Live Server** instalada, clique com o botão direito no arquivo `index.html` e selecione **"Open with Live Server"**.
3. O projeto abrirá no endereço local (geralmente `http://127.0.0.1:5500`).

### Opção 3: Servidor HTTP simples via Python
Se você possui o Python instalado:

```bash
# Para Python 3
python -m http.server 8000
```
Depois acesse `http://localhost:8000` no seu navegador.

---

## 📄 Licença

Este projeto foi desenvolvido para fins didáticos e práticos de estudo.

