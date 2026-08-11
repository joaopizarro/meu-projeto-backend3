# 🚀 Backend com Node.js, TypeScript e Express

Projeto desenvolvido para configurar um servidor **Backend** utilizando **Node.js**, **TypeScript** e o framework **Express**.

---

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

* 🟢 Node.js
* 💻 Visual Studio Code
* 📦 npm

---

## 1️⃣ Preparando o ambiente

Abra o terminal do VS Code e execute:

```bash
npm init -y
npm i -D typescript @types/node tsx
npx tsc --init
```

### 🔎 O que cada comando faz?

| Comando                               | Função                                     |
| ------------------------------------- | ------------------------------------------ |
| `npm init -y`                         | Cria o arquivo `package.json`              |
| `npm i -D typescript @types/node tsx` | Instala TypeScript, tipos do Node.js e TSX |
| `npx tsc --init`                      | Cria o arquivo `tsconfig.json`             |

---

## 2️⃣ Instalando o Express

Execute no terminal:

```bash
npm install express
npm install -D @types/express
```

O **Express** será utilizado para criar o servidor web da aplicação.

---

## 3️⃣ Criando a estrutura do projeto

Crie uma pasta chamada `src` e, dentro dela, o arquivo `app.ts`.

A estrutura ficará assim:

```text
meu-projeto-backend
│
├── node_modules/
├── src/
│   └── app.ts
├── package.json
└── tsconfig.json
```

> 💡 A pasta `node_modules` é criada automaticamente durante a instalação das dependências.

---

## 4️⃣ Criando o servidor com Express

Abra o arquivo:

```text
src/app.ts
```

Adicione o seguinte código:

```typescript
// Importa a biblioteca Express e também o tipo Express
// O Express será utilizado para criar o servidor web
import express from "express";
import type { Express } from "express";

// Cria uma aplicação Express
// A função express() devolve um objeto que representa o servidor da aplicação
const app: Express = express();

// Define a porta onde o servidor ficará disponível
// Neste caso, o servidor poderá ser acessado pela porta 8081
const PORT: number = 8081;

// Inicializa o servidor utilizando a porta definida
// O método listen() faz o servidor começar a "escutar" requisições HTTP
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
```

### 🧠 Resumindo

O código:

1. 📦 Importa o Express;
2. ⚙️ Cria a aplicação;
3. 🔢 Define a porta `8081`;
4. ▶️ Inicia o servidor;
5. 🌐 Disponibiliza o servidor em `localhost:8081`.

---

## 5️⃣ Configurando o script de execução

Abra o arquivo:

```text
package.json
```

Localize a seção `"scripts"` e configure:

```json
"scripts": {
  "dev": "tsx watch src/app.ts"
}
```

O comando `tsx watch` executa o arquivo TypeScript e reinicia automaticamente o servidor quando o código é alterado.

---

## 6️⃣ Executando o servidor

No terminal do VS Code, execute:

```bash
npm run dev
```

Se tudo estiver correto, o terminal exibirá:

```text
Servidor rodando em http://localhost:8081
```

Agora acesse no navegador:

**http://localhost:8081**

---

## 📁 Estrutura final do projeto

```text
meu-projeto-backend
│
├── node_modules/
│
├── src/
│   └── app.ts
│
├── package.json
├── package-lock.json
└── tsconfig.json
```

---

## ✅ Checklist

* [ ] Node.js instalado
* [ ] Projeto inicializado com `npm init -y`
* [ ] TypeScript instalado
* [ ] TSX instalado
* [ ] Express instalado
* [ ] Pasta `src` criada
* [ ] Arquivo `app.ts` criado
* [ ] Servidor configurado na porta `8081`
* [ ] Script `dev` configurado
* [ ] Servidor executado com `npm run dev`
* [ ] Mensagem do servidor exibida no terminal

---

## 🛠️ Tecnologias utilizadas

| Tecnologia        | Utilização               |
| ----------------- | ------------------------ |
| 🟢 **Node.js**    | Ambiente de execução     |
| 🔷 **TypeScript** | Linguagem utilizada      |
| 🚂 **Express**    | Criação do servidor      |
| ⚡ **TSX**         | Execução do TypeScript   |
| 📦 **npm**        | Gerenciamento de pacotes |
| 💻 **VS Code**    | Editor de código         |

---

## 🎓 Objetivo

O objetivo desta atividade é configurar um ambiente **Backend** utilizando **Node.js, TypeScript e Express**, criando e executando um servidor HTTP local.

---

### 👨‍💻 Projeto desenvolvido para fins acadêmicos.
