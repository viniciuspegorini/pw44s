# *Front-end* com React

Neste projeto será desenvolvida a camada de visualização da solução proposta na disciplina. A aplicação web será desenvolvida utilizando a biblioteca React e algumas bibliotecas auxiliares.

## React

O React é uma biblioteca JavaScript para criar interfaces de usuário. O React é **declarativo** fazendo com que a criação de UIs interativas seja uma tarefa fácil. Uma das premissas do React é que o desenvolvedor crie *views* simplificadas para cada estado da aplicação, e o React irá atualizar e renderizar de forma eficiente apenas os componentes necessários na medida em que os dados mudam. A criação de *views* declarativas fazem com que seu código seja mais previsível e simples de depurar [[1](#Referências)].

O React assim como outras bibliotecas e *frameworks* JavaScript é baseado em componentes. O que facilita gerenciar de maneira mais eficaz os diferentes módulos da aplicação. O React permite criar componentes encapsulados que gerenciam seu próprio estado, para então combina-lo para formar UIs complexas.

No React toda lógica do componente é escrita em JavaScript ou TypeScript e não em templates, permitindo ao desenvolvedor passar diversos tipos de dados ao longo da sua aplicação e ainda manter o estado da aplicação fora do DOM.

## O JSX - JavaScript XML ou JavaScript Syntax Extension

O React utiliza JSX (**JavaScript XML ou JavaScript Syntax Extension**) ou TSX (**TypeScript + JSX**)  para a criação dos componentes, que é uma extensão de sintaxe para JavaScript. O **JSX** é uma extensão de sintaxe para JavaScript que permite escrever elementos de interface de usuário de forma declarativa em um formato similar ao HTML, diretamente dentro do código JavaScript. 

Apesar do JSX ser semelhante, não é HTML, por exemplo, o  JSX parece com HTML, mas é renderizado como elementos do React:
```jsx 
const element = <h1>Hello, world!</h1>;
```
Permite integração com JavaScript. É possível inserir expressões JavaScript dentro do JSX usando `{}`. Exemplo:
```jsx
const name = "João";
const element = <h1>Olá, {name}!</h1>;
```
E no final é Transpilado para JavaScript. O JSX não é entendido nativamente pelos navegadores, então ele é convertido em JavaScript puro (geralmente pelo Babel ou TypeScript). Por exemplo, o código:
```jsx
//JSX
const element = <h1>Olá!</h1>;
```
É transpilado para:
```js
//JS
const element = React.createElement('h1', null, 'Olá!');
```
## Criação da estrutura do projeto *front-end*

Para criação do projeto será utilizado o Vite [2], que é uma ferramenta de construção para projetos web que visa fornecer uma experiência de desenvolvimento mais rápida e com uma quantidade menor de arquivos e configurações necessárias.
Para criar o projeto basta ter instalado no computador o **node.js** versão **18 ou superior**, então basta executar no terminal o comando:

```cmd
npm create vite@latest
```

Então informar o nome do projeto: **client**, a biblioteca: **React** e a linguagem de programação: **TypeScript**.

Na sequência é importante instalar as dependências do projeto, bastando executar no terminal dois comandos, o primeiro para entrar na pasta da aplicação criada e o segundo para instalar as dependências:

```cmd
cd client

npm install
```
Após finalizado esse processo abrir a pasta do projeto (*client*) no editor ou IDR que será utilizado no desenvolvimento do projeto.

Entendendo a estrutura do projeto criado:
- **node_modules**: pasta com as dependências do projeto.
- **public**: pasta com os arquivos públicos da aplicação, no caso do projeto apenas uma imagem.
- **src**: pasta com os arquivos de código do projeto, componentes, services, folhas de estilo, entre outros.
	-   **main.tsx**: esse arquivo declara a renderização da aplicação utilizando a biblioteca _react-dom_. Esse arquivo não precisa ser modificado, ele serve de _entrypoint_ da aplicação e por isso deve ter a configuração mínima para tal.
	- **App.tsx**: é um componente componente React que vem criado no projeto inicial. Ao abrir o arquivo, é possível observar que existe código JSX dentro dele. Esse código é retornado pelo método _render()_, que é padrão de todos os objetos  _Component_  do React. Ele retorna a representação HTML daquele componente que será exibida no navegador.
	- **App.css**: é o arquivo com os estilos CSS para o componente _App.js_.
- **index.html**: é o único arquivo HTML da aplicação e é obrigatório. É onde todos os componentes da aplicação serão renderizados. Não será necessário modificá-lo e deve ser mantida a div _root_, pois o conteúdo dinâmico da aplicação será exibido dentro dessa div.
 - **eslint.config.js**: é usado para configurar o **ESLint**, que é uma ferramenta de análise estática que identifica e corrige problemas no código JavaScript ou TypeScript. Serve para garantir que o código escrito seja consistente, siga boas práticas e evite erros.
- **package.json**:  é um dos principais arquivos do projeto, serve como um **manifesto** que descreve o projeto e gerencia suas dependências, scripts e metadados. Permite definir as informações de identificação do Projeto. Gerenciamento de Dependências. Definição de Scripts para iniciar o projeto, executar a rotina de testes, realizar o *build* da aplicação.
- **tsconfig.json** (*.app.json e *.node.json): Esses arquivos especificam como o TypeScript deve compilar o código. Isso inclui opções como: definição de diretórios de entrada e saída; **Target do JavaScript, por exemplo, `"target": "ES6"` para compilar o código TypeScript em JavaScript compatível com ES6; Integração com JSX do React, entre outras opções.
- **vite.config.ts**: define as configurações para o Vite, incluindo opções de construção, *plugins* e comportamento do servidor de desenvolvimento.


### Executando o projeto

Para executar o projeto basta abrir o terminal na pasta do projeto e executar o comando:

```cmd
npm run dev
```
O terminal irá gerar uma resposta semelhante a essa:

```cmd
PS C:\dev\client> npm run dev

> client@0.0.0 dev
> vite


  VITE v3.2.0  ready in 480 ms

  ➜  Local:   http://127.0.0.1:5173/
  ➜  Network: use --host to expose
```
Na mensagem gerada é possível visualizar que a aplicação foi iniciada e está sendo executada na porta **5173**. Portanto, para testar a aplicação em um navegador basta acessar o endereço: [http://127.0.0.1:5173/](http://127.0.0.1:5173/)  ou [http://localhost:5173/](http://localhost:5173/). A página que irá abrir possui um botão que incrementa um contador a cada clique, essa página será alterada durante o desenvolvimento do projeto. Uma característica importante do projeto criado, é que ao alterarmos qualquer item do código **JSX** do componente **App.tsx** ele será automaticamente atualizado no navegador ao salvar o arquivo, não necessitando reiniciar o servidor toda vez que uma nova alteração é feita no código.

### Iniciando o desenvolvimento da aplicação

O primeiro passo a ser realizado será alterar o conteúdo dos arquivos **App.tsx** e **App.css**.  O conteúdo do arquivo **App.css** será todo removido, deixando o arquivo em branco. E o arquivo **App.tsx** ficará com o seguinte conteúdo:

```ts
export function App() {
	return (
		<div>
			<h1>Bem vindo!</h1>
		</div>
	)
}
```

Como o projeto criado com Vite possui [Hot Module Replacement (HMR)](https://vite.dev/guide/features.html#hot-module-replacement) basta ir para página aberta no navegador e visualizar o resultado das alterações efetuadas. 

#### Adicionando o estilo da aplicação (CSS)

Para melhorar a visualização e usabilidade da aplicação será utilizada a biblioteca de estilização **Bootstrap** [10]. O primeiro passo é adicionar a dependência da biblioteca ao projeto, primeiro deve ser parada a execução do projeto **client** executando um **Ctrl+C**, então deve ser executado no terminal o comando:

```cmd
npm i bootstrap @popperjs/core
```
Após a execução do comando a dependência da biblioteca será adicionada no arquivo `package.json` e o CSS poderá ser importado no arquivo **main.tsx** que ficará com o seguinte conteúdo:

```jsx
import React from  'react'
import ReactDOM from  'react-dom/client'
import { App } from  './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from  'react-router-dom';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<App  />
	</React.StrictMode>
)
```
A linha `import  'bootstrap/dist/css/bootstrap.min.css'` irá permitir que todos os componentes do projeto possam utilizar as classes CSS presentes na biblioteca Bootstrap.

#### Configurando o *import* de componentes

Continuando a configuração do projeto, agora será otimizado o processo de importar os componentes na aplicação, instalando a dependência de desenvolvimento *@types/node*.

```cmd
npm i --include=dev @types/node
```
O próximo passo será configurar o aquivo **vite.config.ts** que irá ficar com o seguinte conteúdo:
```ts
import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src')
		}
	}
})
```
Assim, todos a importação de componentes agora, pode ser realizadas a partir do diretório raiz, desde que o caminho usado no *import* inicie-se por '@'. Para finalizar basta configurar o arquivo **tsconfig.app.json** adicionando o conteúdo abaixo na propriedade *compilerOptions*:

```json
...
"compilerOptions": {
	...,
	"baseUrl": ".",
	"paths": {
		"@/*": ["./src/*"]
	}
}
...
```

### Criando o componente HomePage

O componente **HomePage** será o primeiro componente a ser criado na aplicação. Esse componente será criado dentro da pasta **/src/pages/HomePage**, essa estrutura de pastas não existe e deverá ser criada. Dentro da pasta **HomePage** deverá ser criado o arquivo **index.tsx**, com o seguinte conteúdo:

```jsx
export function HomePage() {
  return (
    <>
      <main className="container">
        <div className="text-center">
          <h1 className="h3 mb-3 fw-normal">HOME PAGE</h1>
        </div>
      </main>
    </>
  );
}
```

Com o componente **HomePage** criado, agora é necessário exibi-lo para os usuários, para isso será necessário substituir o componente que está sendo renderizado no arquivo **main.tsx** com o código:

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { HomePage } from './pages/HomePage'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <HomePage/>
  </React.StrictMode>
)
```

Com o primeiro componente criado, agora o processo será repetido, criando os componentes para cadastro de usuário e autenticação. O React permite exibir um componente a cada momento ou fazer uma pilha de componentes, mas como cada componente que será criado irá representar uma funcionalidade específica da aplicação, será necessário controlar a exibição dos componentes de acordo com as rotas (URL) solicitadas pelo usuário, por exemplo, ao acessar http://localhost:5473/login será exibido o componente de autenticação, ao ao acessar http://localhost:5473/ será exibido o componente HomePage.

### Configurando as rotas para os componentes da aplicação

Para controlar as rotas da aplicação será utilizada a biblioteca React Router [5]. Assim, de acordo com a URL informada no navegador um componente será renderizado para o usuário. Será necessário parar a execução do projeto e adicionar a dependência ao projeto utilizando o **npm**, basta executar no terminal:

```cmd
npm install react-router-dom
```

Com o React Router instalado o próximo passo é configurar as rotas da aplicação para os componentes que precisam de autenticação (CRUDs de categorias e produtos, que serão criados) e os que não precisam (cadastro de novos usuários e autenticação). Antes disso é necessário criar o ponto de partida para que o React Router controle as demais rotas do sistema, adicionando o *provider* **BrowserRouter** no código do arquivo **main.tsx**:

```ts
import  React  from  'react'
import  ReactDOM  from  'react-dom/client'
import { App } from  '@/App'
import  'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from  'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as  HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<App  />
		</BrowserRouter>
	</React.StrictMode>
)
```

#### Criando o componente BaseRoutes

Para criação do componente será criada uma pasta chamada **/src/routes** e dentro uma pasta chamada **BaseRoutes** com um arquivo **index.tsx** dentro. O componente **BaseRoutes** vai ser o ponto de entrada dos usuários da aplicação. Nesse componente as rotas para cada componente da aplicação serão configuradas. 

Utilizando os componentes Routes e Route do React Router será passado como parâmetro o caminho (*path*) e o componente que será renderizado (*element*) ao chamar a URL. Ou seja, ao informar a URL **/login** no navegador, o componente que será renderizado será o **LoginPage**.

```jsx
import { Route, Routes } from "react-router-dom";
import { HomePage } from "@/pages/HomePage";

export function BaseRoutes() {
  return (
    <>
      <Routes>
			<Route path="/home" element={<HomePage />} />
            <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}
```

Também será necessário alterar o componente **App**, adicionando o componente **BaseRoutes**, conforme o código abaixo:

```jsx
import { BaseRoutes } from "@/routes/BaseRoutes";

export function App() {
  return (
    <>
      <BaseRoutes />
    </>
  );
}
```

E, após esse passo será possível acessar a URL da aplicação no endereço: [http://127.0.0.1:5173/](http://127.0.0.1:5173/)  ou [http://localhost:5173/](http://127.0.0.1:5173/). O componente home pode ser acessado também pela rota **/home**, conforme o componente **BaseRoutes**.


### Cadastro de usuários e outros componentes 

Agora será iniciado o desenvolvimento dos componentes da aplicação. A aplicação que será desenvolvida irá consumir os recursos da API REST criada nas aulas em que foi desenvolvido o lado servidor da aplicação Web, para isso será necessário realizar requisições HTTP ao servidor. Para o cadastro de usuários será necessário criar uma interface para representar o objeto que será enviado ao servidor, instalar a dependência da biblioteca Axios, que será utilizada para realizar as requisições HTTP ao servidor e por fim, criar o componente que será utilizado como formulário para preenchimento dos dados do usuário. E, para abordar um pouco mais do conceito de componentes, serão criados um componente do tipo Input e um componente do tipo Button que serão utilizados na tela de cadastro de usuário.

#### Criando o componente Input

O componente Input vai ter comportamento semelhante à uma tag input HTML. Esse componente irá ser criado dentro da pasta **/src/components/Input/** no arquivo **index.tsx**.

```jsx
import { ChangeEvent } from "react";

interface IInputProps {
  name: string;
  className: string;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  hasError: boolean;
  error: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function Input({
  name,
  className,
  label,
  type,
  placeholder,
  value,
  hasError,
  error,
  onChange,
}: IInputProps) {
  let inputClassName = className;
  if (hasError) {
    inputClassName += hasError ? " is-invalid" : " is-valid";
  }

  return (
    <>
      <input
        type={type}
        className={inputClassName}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        name={name}
      />
      {label && <label htmlFor={name}>{label}</label>}
      {hasError && <div className="invalid-feedback">{error}</div>}
    </>
  );
}
```
#### Criando o componente ButtonWithProgress

O componente ButtonWithProgress vai ter comportamento semelhante à uma tag button HTML. Esse componente irá ser criado dentro da pasta **/src/components/ButtonWithProgress/** no arquivo **index.tsx**.

```jsx
interface IButtonWithProgress {
  className: string;
  disabled: boolean;
  pendingApiCall: boolean;
  text: string;
  onClick: () => void;
}

export function ButtonWithProgress({
  className,
  disabled,
  pendingApiCall,
  text,
  onClick
}: IButtonWithProgress) {

  return (
    <button
      disabled={disabled}
      className={className || "btn btn-primary"}
      onClick={onClick}
    >
      {pendingApiCall && (
        <div
          className="spinner-border text-light-spinner spinner-border-sm mr-sm-1"
          role="status"
        >
          <span className="visually-hidden">Aguarde...</span>
        </div>
      )}
      {text}
    </button>
  );
}
```

#### Instalando e configurando o Axios

Para instalar o Axios para executar no console o comando:

```cmd
npm i axios
```
Com isso as dependências necessárias estarão configuradas no arquivo package.json e disponíveis para uso no projeto. O próximo passo será criar um arquivo para configurar e compartilhar o Axios para todo o projeto. Para isso criar um arquivo chamado **axios.ts** e criar a **/src/lib**, sendo o caminho completo **/src/lib/axios.ts**:

```ts
import axios from 'axios'

export  const api = axios.create({
    baseURL: "http://localhost:8080", // URL base para as requisições
})
```
Dessa maneira configuramos um Singleton do axios, que pode ser utilizando em toda a aplicação, tendo como URL base `http://localhost:8080`, o qual é o endereço que o servidor em que foi  criada a API REST.

#### Interface IUserSignUp

Para representar o objeto que irá conter as propriedades do usuário será criada a interface IUserSignUp. Deve ser criada uma pasta chamada **commons** dentro da pasta raiz (**/src**), e dentro dessa pasta um arquivo chamado **interfaces.ts**, ficando o seguinte caminho: **/src/commons/interfaces.ts** o arquivo terá o seguinte conteúdo:

```ts
export interface IUserSignup {
    displayName: string;
    username: string;
    password: string;
    passwordRepeat: string;
}
```
#### Criando o serviço para realizar requisições HTTP AuthService

O arquivo **AuthService.ts** irá conter as funções para realizar o cadastro e a autenticação na API. Inicialmente será implementada a função **signup** que será responsável por realizar uma requisição HTTP do tipo POST para API. As requisições HTTP serão realizadas utilizando a biblioteca **Axios**, conforme configuração realizada.

```ts
import { IUserLogin, IUserSignUp } from "@/commons/interfaces";
import { api } from "@/lib/axios";

/**
 * Função para cadastrar um novo usuário
 * @param user - Dados do usuário que será cadastrado do tipo IUserSignUp
 * @returns - Retorna a resposta da API
 */
const signup = async (user: IUserSignUp): Promise<any> => {
  let response;
  try {
    response = await api.post("/users", user);
  } catch (err: any) {
    response = err.response;
  }
  return response;
};

const  AuthService  = {
	signup,
};

export  default  AuthService;
```

#### Componente de cadastro de usuário

Agora será desenvolvido o componente que irá representar o cadastro de um novo usuário, para isso será necessário criar dentro da pasta **/src** a pasta **/src/pages/UserSignUpPage**. Na pasta **pages** serão criados todos os componentes que serão renderizados ao usuário. Dentro da pasta **UserSignUpPage** criar os arquivos **index.tsx** e **index.css**, com o seguinte conteúdo  (comentários no código):

```ts
/* 
	O ChangeEvent será utilizado para tipar o parâmetro do método onChange, que será utilizado para recuperar os valores digitados nos campos de texto ao cadastrar um novo usuário.
	O Hook[4] useState será utilizado para manter os valores informados pelo usuário nos campos de texto no estado (State[3]) da aplicação.	
	IUserSignUp - interface utilizada para tipar os objeto que armazena os dados de usuário
	AuthService - contém as funções para realizar as requisições HTTP para a API REST. No caso do cadastro de usuário uma requisição do tipo HTTP POST
*/
import { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IUserSignUp } from "@/commons/interfaces";
import { ButtonWithProgress } from "@/components/ButtonWithProgress";
import { Input } from "@/components/Input";
import AuthService from "@/service/AuthService";
import "./style.css";

export function UserSignupPage() {
  /* Criação de um objeto chamado `form` no state para armazenar o username e passord do usuário */
  const [form, setForm] = useState<IUserSignUp>({
    displayName: "",
    username: "",
    password: "",
    passwordRepeat: "",
  });
  /* Criação de um objeto chamado `errors` no state para armazenar os erros de validação retornados pelo servidor */
  const [errors, setErrors] = useState({
    displayName: "",
    username: "",
    password: "",
  });
  const [pendingApiCall, setPendingApiCall] = useState(false);
  const [passwordRepeatError, setPasswordRepeatError] = useState("");
  const [apiError, setApiError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (form.password || form.passwordRepeat) {
      setPasswordRepeatError(
        form.password === form.passwordRepeat
          ? ""
          : "As senhas devem ser iguais"
      );
    }
  }, [form]);

  /* função criada para monitorar o evento Change dos componentes input */
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setForm((previousForm) => {
      return {
        ...previousForm,
        [name]: value,
      };
    });
    /* Limpa o valor do erro relacionado à propriedade do input que está sendo editada */
    setErrors((previousErrors) => {
      return {
        ...previousErrors,
        [name]: undefined,
      };
    });
  };

  /* trata o click o botão para cadastrar um novo usuário */
  const onClickSignup = async () => {
    /* recupera o valor do state e cria um objeto do tipo IUserSignUp */
    const user: IUserSignUp = {
      displayName: form.displayName,
      username: form.username,
      password: form.password,
      passwordRepeat: form.passwordRepeat,
    };
    setPendingApiCall(true);
    /* Chama o método signup do service AuthService, passando o usuário que será enviado via POST para API */
    const response = await AuthService.signup(user);

    /* Em caso de sucesso navega para o componente LoginPage (acessando a url `/login`), esse componente ainda não foi criado, portanto inicialmente será exibida uma página em branco.  */
    if (response.status === 200 || response.status === 201) {
      navigate("/login");
    } else if (response) { 
      /* Em caso de erro preenche o conjunto de erros armazenado no State com os dados vindos da validação realizada na API. */
      if (response.data && response.data.validationErrors) {
        setErrors(response.data.validationErrors);
      }
      setApiError("Ocorreu um erro ao salvar o usuário.");
    }
    setPendingApiCall(false);
  };

  /*Retorna o TSX com o formulário de cadastro. */
  return (
    <main className="form-signup w-100 m-auto">
      <form>
        <div className="text-center">
          <h1 className="h3 mb-3 fw-normal">Novo usuário</h1>
        </div>
        <div className="form-floating">
          <input
            type="text"
            className={errors.displayName ? "is-invalid form-control" : "form-control"} 
            placeholder="Informe o seu nome"
            onChange={onChange}
            value={form.displayName}
            name="displayName"
            id="displayName"
          />
          <label htmlFor="displayName">Informe o seu nome</label>
          {errors.displayName && <div className="invalid-feedback">{errors.displayName}</div>}
        </div>
        <div className="form-floating">
          <Input
            name="username"
            label="Informe o usuário"
            className="form-control"
            type="text"
            placeholder="Informe o usuário"
            onChange={onChange}
            value={form.username}
            hasError={errors.username ? true : false}
            error={errors.username}
          />
        </div>
        <div className="form-floating">
          <Input
            name="password"
            label="Informe a senha"
            className="form-control"
            type="text"
            placeholder="Informe a senha"
            onChange={onChange}
            value={form.password}
            hasError={errors.password ? true : false}
            error={errors.password}
          />
        </div>
        <div className="form-floating">
          <Input
            name="passwordRepeat"
            label="Confirme sua senha"
            className="form-control"
            type="password"
            placeholder="Informe sua senha"
            onChange={onChange}
            value={form.passwordRepeat}
            hasError={passwordRepeatError ? true : false}
            error={passwordRepeatError ? passwordRepeatError : ""}
          />
        </div>
        {apiError && (
          <div className="col-12 mb-3">
            <div className="alert alert-danger">{apiError}</div>
          </div>
        )}

        <ButtonWithProgress
          className="w-100 btn btn-lg btn-primary mb-3"
          onClick={onClickSignup}
          disabled={pendingApiCall || passwordRepeatError ? true : false}
          text="Cadastrar"
          pendingApiCall={pendingApiCall}
        />

        <div className="text-center">
          Já possui cadastro? <br />
          <Link className="link-primary" to="/">
            Login
          </Link>
        </div>
      </form>
    </main>
  );
}
```

Arquivo **index.css**:
```css
.form-signup {
  max-width: 400px;
  padding: 15px;
}

.form-signup .form-floating:focus-within {
  z-index: 2;
}

.form-signup input {
  margin-bottom: 10px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signup input[type="text"] {
  margin-bottom: 10px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signup input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
```

Com o cadastro de usuário criado, agora é necessário exibir o componente que acabou de ser criado na página. Para isso será necessário ajustar o componente **BaseRoutes** que irá ficar com o código:

```jsx
import { Route, Routes } from "react-router-dom";
import { UserSignupPage } from "@/pages/UserSignupPage";
import { HomePage } from "@/pages/HomePage";

export function BaseRoutes() {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/signup" element={<UserSignupPage />} />

        {/* Protected Routes */}
		<Route path="/home" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}
```

Agora é possível executar novamente a aplicação executando no terminal o comando:

```cmd
npm run dev
```

E, após esse passo será possível acessar a URL da aplicação no endereço: [http://127.0.0.1:5173/](http://127.0.0.1:5173/)  ou [http://localhost:5173/](http://127.0.0.1:5173/) e testar a funcionalidade de cadastro de usuário. Lembrando que para o cadastro de usuário funcionar, a API REST desenvolvida no projeto da pasta **server** deve ser executada.

### Autenticação

Com o processo de criação de um novo usuário finalizado, o próximo passo é permitir a autenticação desse usuário no sistema, para isso será criado o componente **LoginPage** que vai conter o formulário para o usuário informar o seu **username** e **password**. 

#### Atualizando o arquivo AuthService com a função de login

O primeiro passo antes da criação do componente é realizar a alteração do arquivo AuthService.ts adicionando a função responsável por realizar a requisição HTTP POST contendo um JSON com os atributos **username e password**. Para o processo de autenticação do usuário também será necessário criar a interface **IUserLogin** para representar o objeto que será enviado ao servidor, essa alteração será realizada no arquivo **interfaces.ts** na pasta */src/commons*:

```ts
//...
export  interface  IUserLogin {
	username:  string;
	password:  string;
}
//...
```

Além da função para autenticar o usuário, também será criada uma função para verificar se o usuário está autenticado e outra para efetuar o *logout* do usuário, assim, arquivo AuthService.ts irá ficar com o seguinte conteúdo:

```ts
import { IUserLogin, IUserSignUp } from "@/commons/interfaces";
import { api } from "@/lib/axios";

/**
 * Função para cadastrar um novo usuário
 * @param user - Dados do usuário que será cadastrado do tipo IUserSignUp
 * @returns - Retorna a resposta da API
 */
const signup = async (user: IUserSignUp): Promise<any> => {
  let response;
  try {
    response = await api.post("/users", user);
  } catch (err: any) {
    response = err.response;
  }
  return response;
};

/**
 * Função para realizar a autenticação do usuário
 * @param user - Dados do usuário que será autenticado do tipo IUserLogin (username e password)
 * @returns - Retorna a resposta da API
 * Além disso salva o token no localStorage e adiciona o token no cabeçalho da requisição
 */
const login = async (user: IUserLogin) => {
  let response;
  try {
    response = await api.post("/login", user);
    localStorage.setItem("token", JSON.stringify(response.data.token));
    api.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;
  } catch (err: any) {
    response = err.response;
  }
  return response;
};

/**
 * Função para verificar se o usuário está autenticado
 * @returns - Retorna true se o usuário estiver autenticado, caso contrário false
 * além de adicionar o token no cabeçalho da requisição
 */
const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${JSON.parse(
      token
    )}`;
  }
  return token ? true : false;
};

/**
 * Função para realizar o logout do usuário
 * Remove o token do localStorage 
 */
const logout = () => {
  localStorage.removeItem("token");
};

const AuthService = {
  signup,
  login,
  isAuthenticated,
  logout,
};
export default AuthService;
```

Com a camada responsável por realizar as requisições HTTP implementada será possível criar o componente responsável por exibir o formulário de entrada de dados e o CSS responsável pela estilização, na pasta **/src/pages/LoginPage/** serão criados os arquivos **index.tsx** e **style.css**:

```ts
import React, { ChangeEvent, useState } from "react";
import { IUserLogin } from "@/commons/interfaces";
import { ButtonWithProgress } from "@/components/ButtonWithProgress";
import AuthService from "@/service/AuthService";
import { Input } from "@/components/Input";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

export function LoginPage() {
  const [form, setForm] = useState<IUserLogin>({
    username: "",
    password: "",
  });

  const [pendingApiCall, setPendingApiCall] = useState(false);
  const [disableSubmit, setDisableSubmit] = useState(true);

  const [apiError, setApiError] = useState("");
  const navigate = useNavigate();

  const { login } = AuthService;

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setForm((previousForm) => {
      return {
        ...previousForm,
        [name]: value,
      };
    });
    if (form.username === "" || form.password === "") {
      setDisableSubmit(true);
    } else {
      setDisableSubmit(false);
    }
    setApiError("");
  };

  const onClickLogin = async () => {
    setPendingApiCall(true);

    const userLogin: IUserLogin = {
      username: form.username,
      password: form.password,
    };
    const response = await login(userLogin);
    if (response.status === 200) {
      setPendingApiCall(false);
      navigate("/home");
    } else {
      setApiError(
        "Falha ao autenticar no sistema, verifique os dados informados"
      );
      setPendingApiCall(false);
    }
  };

  return (
    <>
      <main className="form-signin w-100 m-auto">
        <form>
          <div className="text-center">
            <h1 className="h3 mb-3 fw-normal">Autenticação</h1>
          </div>
          <div className="form-floating">
            <Input
              label="Usuário"
              className="form-control"
              type="text"
              placeholder="username"
              value={form.username}
              onChange={onChange}
              name="username"
              hasError={false}
              error=""
            />
          </div>
          <div className="form-floating">
            <Input
              label="Senha"
              className="form-control"
              type="password"
              placeholder="Your password"
              value={form.password}
              onChange={onChange}
              name="password"
              hasError={false}
              error=""
            />
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Lembrar
            </label>
          </div>
          {apiError && (
            <div className="col-12 mb-3">
              <div className="alert alert-danger">{apiError}</div>
            </div>
          )}
          <ButtonWithProgress
            className="w-100 btn btn-lg btn-primary mb-3"
            onClick={onClickLogin}
            disabled={pendingApiCall || disableSubmit}
            text="Autenticar"
            pendingApiCall={pendingApiCall}
          />
          <div className="text-center">
            Não possui cadastro? <br />
            <Link className="link-primary" to="/signup">
              Cadastrar-se
            </Link>
          </div>

          <p className="mt-5 mb-3 text-muted">UTFPR &copy; 2010–2024</p>
        </form>
      </main>
    </>
  );
}
```
Arquivo **style.css**:

```css
.form-signin {
  max-width: 330px;
  padding: 15px;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="text"] {
  margin-bottom: 5px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
```

Por fim, será necessário exibir o componente **LoginPage** na página principal, para isso basta alterar o arquivo **main.tsx**:
```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { LoginPage } from './pages/LoginPage'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <LoginPage />
  </React.StrictMode>
)
```

Para testar o processo de autenticação, basta adicionar a rota para o componente **LoginPage** no componente **BaseRoutes** e após renderizado o componente de autenticação, preencher os dois campos do formulário com os dados de **username** e **password** informados na página de cadastro. Atualização do componente **BaseRoutes**:

```jsx
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "@/pages/LoginPage";
import { HomePage } from "@/pages/HomePage";

export function BaseRoutes() {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<UserSignupPage />} />

        {/* Protected Routes */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />

      </Routes>
    </>
  );
}
```

Com isso o componente para realizar o cadastro e autenticação no sistema estão finalizados. O próximo passo é gerenciar as rotas que possuem ou não permissão de acesso para usuários não autenticados, para controlar o acesso às rotas entre usuários autenticados e não autenticados será criado o componente **AuthenticatedRoutes**.

#### Criando o componente AuthenticatedRoutes 

O componente **AuthenticatedRoutes** irá validar se o usuário está autenticado ou não, caso esteja autenticado será exibido o componente solicitado, caso contrário será exibida a tela de autenticação (componente **LoginPage**).

Caso a rota solicitada seja para cadastrar-se ou autenticar-se, será exibido o respectivo componente ao usuário. Agora, caso a rota que o usuário deseja acessar necessite de autenticação, ela será tratada no componente **AuthenticatedRoutes **, em que é verificado se o usuário está autenticado por meio da função **isAuthenticated()** do **AuthService**. A função apresentada abaixo utiliza o token *JWT* vindo da **API** no momento da autenticação. Durante o processo de autenticação o **token** foi adicionado no `localStorage` e nesse momento recuperado para verificar se o usuário autenticou-se.

```jsx
import { Navigate, Outlet, useLocation } from "react-router-dom";
import AuthService from "@/service/AuthService";
import { NavBar } from "@/components/NavBar";

export function AuthenticatedRoutes() {
  // O método isAuthenticated do AuthService retorna se o usuário está autenticado
  const isAuthenticated = AuthService.isAuthenticated();
  const location = useLocation();
  
  //Caso o usuário esteja autenticado é exibido o componente <Outlet />, que faz parte do React Router e irá fazer o render do componente solicitado pelo usuário que irá estar descrito no componente <BaseRoutes />
  return isAuthenticated ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}
```

Com a criação do componente **AuthenticatedRoutes** é necessário ajustá-lo ao componente **BaseRoutes** que é o local em que estão configuradas as rotas da aplicação. O código do componente **BaseRoutes** irá ficar com o seguinte conteúdo:

```jsx
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "@/pages/LoginPage";
import { UserSignupPage } from "@/pages/UserSignupPage";
import { AuthenticatedRoutes } from "../AuthenticatedRoutes";
import { HomePage } from "@/pages/HomePage";

export function BaseRoutes() {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<UserSignupPage />} />
        {/* Protected Routes */}
        <Route element={<AuthenticatedRoutes />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}
```

Nota-se que agora o componente **HomePage** poderá ser acessado apenas pelos usuários que estiverem autenticados no sistema, pois o componente **AuthenticatedRoutes ** filtra o acesso dos usuários. As demais rotas (*/login* e */signup*) continuam com acesso para qualquer usuário, estando autenticados ou não.
Visando melhorar a usabilidade da página o próximo passo será criar uma barra de navegação para comportar as URLs de acesso aos demais componentes que vão ser desenvolvidos na aplicação, por isso será criado o componente **NavBar**.

#### Criando e exibindo o componente NavBar

O componente **NavBar** será criado na pasta **/src/components** e irá exibir o link de acesso a cada um dos componentes de lista de dados que será criado (componentes para as listas de Categorias e Produtos). Para isso, criar a pasta **/src/components/NavBar** e dentro dela um arquivo chamado **index.tsx**. Inicialmente estará funcionando apenas o link para HomePage,. As rotas são apresentadas no menu por meio do componente **NavLink** do **React Router**, nesse componente é informado a rota do componente que será renderizado. O componente NavBar também conta com o botão de Sair, que ao ser clicado será limpado o valor do token do localstorage e o usuário será direcionado para tela de autenticação (LoginPage).

Para esse componente também será necessário copiar a logo marca da UTFPR para dentro da pasta **/src/assets** como pode ser observado no código: `import logo from "@/assets/utfpr-logo.png";`.

```jsx
import { Link, NavLink } from "react-router-dom";
import logo from "@/assets/utfpr-logo.png";
import AuthService from "@/service/AuthService";

export function NavBar() {
  const onClickLogout = () => {
    AuthService.logout();
    window.location.reload();
  };

  return (
    <div className="bg-white shadow-sm mb-2">
      <div className="container">
        <nav className="navbar navbar-light navbar-expand">
          <Link to="/" className="navbar-brand">
            <img src={logo} width="60" alt="UTFPR" />
          </Link>
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <NavLink
                to="/"
                className={(navData) =>
                  navData.isActive ? "nav-link active" : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/categories"
                className={(navData) =>
                  navData.isActive ? "nav-link active" : "nav-link"
                }
              >
                Categorias
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/products"
                className={(navData) =>
                  navData.isActive ? "nav-link active" : "nav-link"
                }
              >
                Produtos
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/products-v2"
                className={(navData) =>
                  navData.isActive ? "nav-link active" : "nav-link"
                }
              >
                Produtos V2
              </NavLink>
            </li>

            <li className="nav-item">
              <button className="btn btn-light" onClick={onClickLogout}>
                &times; Sair
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
```
No componente **NavBar** é possível observar que já existem atalhos para os componentes que representam a Lista de Categorias e Produdos, os quais ainda não foram criados, por isso ao clicar nos links será exibido uma página em branco, esses componentes serão criados no decorrer do projeto. 

O componente **NavBar** foi criado mas ainda não está sendo exibido em nenhum lugar. Como  as rotas que será exibidas dependem da autenticação do usuário esse componente será exibido dentro do componente **AuthenticatedRoutes** que ficará com o seguinte código:

```jsx
import { Navigate, Outlet, useLocation } from "react-router-dom";
import AuthService from "@/service/AuthService";
import { NavBar } from "@/components/NavBar";

export function AuthenticatedRoutes() {
  const isAuthenticated = AuthService.isAuthenticated();
  const location = useLocation();
  
  return isAuthenticated ? (
    <>
      <NavBar />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}
```

Agora que o cadastro de usuário, autenticação, página home e barra de navegação estão prontos o próximo passo será criar o CRUD de Categorias e Produtos. O desenvolvimento das próximas etapas será iniciado pela lista de Categorias, então o cadastro de categorias e por fim a lista e cadastro de produtos.

### Lista de Categorias

Para criar o CRUD de categoria o primeiro passo será criar a interface que irá representar uma categoria no arquivos **/src/commons/interfaces.ts**. Após será criado o service de categoria dentro da pasta **/src/service** com o arquivo **CategoryService.ts**. Esse service vai ter as funções **save, 	findAll, remove e	findById**, todas utilizam o **axios** por meio do objeto **api**. Todas essas requisições necessitam de autenticação, entretanto, como o **token jwt** já foi adicionado ao cabeçalho das requisições na função **isAuthenticaded**, não é necessário fazer isso novamente. 

#### Ajustando o arquivo interfaces.ts

```jsx
//... demais interfaces
export interface ICategory {
    id?: number;
    name: string;
}
``` 

#### Arquivo CategoryService.ts

O arquivo **CategoryService.ts** será implementado com todas as funções que serão utilizadas nos componentes de lista e cadastro de categorias. Serão realizadas requisições HTTP do tipo GET, POST e DELETE para URL `/categories` da API.

```jsx
import { ICategory } from "@/commons/interfaces";
import { api } from "@/lib/axios";

// URL base para as requisições de categoria
const categoryURL = "/categories";

/**
 * Função para salvar uma categoria
 * @param category - Dados da categoria que será salva
 * @returns - Retorna uma Promise com a resposta da API
 **/
const save = async (category: ICategory): Promise<any> => {
  let response;
  try {
    response = await api.post(categoryURL, category);
  } catch (err: any) {
    response = err.response;
  }
  return response;
};

/**
 * Função para buscar todas as categorias
 * @returns - Retorna uma Promise com a resposta da API
 * com a lista de categorias
 **/
const findAll = async (): Promise<any> => {
  let response;
  try {
    response = await api.get(categoryURL);
  } catch (err: any) {
    response = err.response;
  }
  return response;
};

/**
 * Função para remover uma categoria
 * @param id - Recebe o id da categoria que será removida
 * @returns - Retorna uma Promise com a resposta da API
 */
const remove = async (id: number): Promise<any> => {
  let response;
  try {
    response = await api.delete(`${categoryURL}/${id}`);
  } catch (err: any) {
    response = err.response;
  }
  return response;
};

/**
 * Função para buscar uma categoria pelo id
 * @param id - Recebe o id da categoria que será buscada
 * @returns - Retorna uma Promise com a resposta da API
 */
const findById = async (id: number): Promise<any> => {
  let response;
  try {
    response = await api.get(`${categoryURL}/${id}`);
  } catch (err: any) {
    response = err.response;
  }
  return response;
};

// Objeto que exporta todas as funções
const CategoryService = {
  save,
  findAll,
  remove,
  findById,
};

export default CategoryService;
```

O componente **CategoryListPage** será criado dentro da pasta **/src/pages/CategoryListPage/index.tsx**. Por meio do **Hook** **useEffect** do React será chamada a função *loadData()* na qual será chamada a função *findAll()* do **CategoryService**, a lista de categorias será adicionada na variável de estado **data**, que será utilizada para exibir as linhas da tabela com as categorias que estão armazenadas no banco de dados.

```jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ICategory } from "@/commons/interfaces";
import CategoryService from "@/service/CategoryService";

export function CategoryListPage() {
  // variável de estado para armazenar a lista de categorias
  const [data, setData] = useState<ICategory[]>([]);
  // variável de estado para armazenar a mensagem de erro da API
  const [apiError, setApiError] = useState<String>("");
  // funções do service de categoria
  const { findAll, remove } = CategoryService;

  // hook do react para executar ações ao carregar o componente
  // carrega a lista de categorias
  useEffect(() => {
    loadData();
  }, []);

  // função para carregar a lista de categorias
  const loadData = async () => {
    const response = await findAll();

    if (response.status === 200) {
      setData(response.data);
      setApiError("");
    } else {
      setApiError("Falha ao carregar lista de categorias.");
    }
  };

  // função para remover uma categoria
  const onClickRemove = async (id?: number) => {
    if (id) {
      const response = await remove(id);
      if (response.status === 204) {
        loadData();
        setData(
          data.filter((category) => {
            return category.id !== id;
          })
        );
      } else {
        setApiError("Falha ao remover o registro.");
      }
    }
  };

  return (
    <>
      <main className="container">
        <div className="text-center">
          <span className="h3 mb-3 fw-normal">Lista de Categorias</span>
        </div>
        <Link className="btn btn-success" to="/categories/new">
          Nova Categoria
        </Link>
        <table className="table table-striped">
          <thead>
            <tr>
              <td>#</td>
              <td>Nome</td>
              <td>Editar</td>
              <td>Remover</td>
            </tr>
          </thead>
          <tbody>
            {data.map((category: ICategory) => (
              <tr key={category.id}>
                <td>{category.id}</td>
                <td>{category.name}</td>
                <td>
                  <Link
                    className="btn btn-primary"
                    to={`/categories/${category.id}`}
                  >
                    Editar
                  </Link>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => onClickRemove(category.id)}
                  >
                    Remover
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {apiError && <div className="alert alert-danger">{apiError}</div>}
      </main>
    </>
  );
}
```
 Com o componente finalizado será necessário criar a rota para esse componente no componente **BaseRoutes**:
```jsx
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "@/pages/LoginPage";
import { UserSignupPage } from "@/pages/UserSignupPage";
import { AuthenticatedRoutes } from "../AuthenticatedRoutes";
import { HomePage } from "@/pages/HomePage";
import { CategoryListPage } from "@/pages/CategoryListPage";

export function BaseRoutes() {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<UserSignupPage />} />

        {/* Protected Routes */}
        <Route element={<AuthenticatedRoutes />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/categories" element={<CategoryListPage />} />
            
      </Routes>
    </>
  );
}
```
Finalizado essa etapa será possível visualizar o componente na tela ao clicar no atalho da NavBar.

### Cadastro de Categorias

Para o cadastro e edição de categorias será criado o componente **CategoryFormPage**, que ficara no arquivo **/src/pages/CategoryFormPage/index.tsx**, nessa etapa do projeto será utilizado o React Hook Form para o gerenciamento e validação do formulário. Para instalar a biblioteca para a execução do projeto e no terminal executar o comando:

```cmd
npm install react-hook-form
```

Com a biblioteca instalada será possível desenvolver o componente **CategoryFormPage**:
```jsx
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ICategory } from "@/commons/interfaces";
import CategoryService from "@/service/CategoryService";
import { useForm } from "react-hook-form";

export function CategoryFormPage() {
  // hook useForm do react-hook-forms que irá controlar o estado do formulário.
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ICategory>();
  // váriavel de estado para armazenar a mensagem de erro da API.
  const [apiError, setApiError] = useState("");
  // hook do react-router-dom para navegação entre as páginas.
  const navigate = useNavigate();
  // hook do react-router-dom para capturar o id da URL.
  const { id } = useParams();
  // funções do serviço de categoria.
  const { save, findById } = CategoryService;

  /* 
  hook do react para executar ações ao carregar o componente.
  se o id estiver preenchido, carrega os dados da categoria.
  */
  useEffect(() => {
    if (id) {
      loadData(parseInt(id));
    }
  }, []);

  // função para carregar os dados da categoria.
  const loadData = async (id: number) => {
    const response = await findById(id);
    if (response.status === 200) {
      reset(response.data);
    } else {
      setApiError("Falha ao carregar o registro.");
    }
  };

  // função para salvar a categoria.
  const onSubmit = async (data: ICategory) => {
    const response = await save(data);
    if (response.status === 201 || response.status === 200) {
      navigate("/categories");
    } else {
      setApiError("Falha ao carregar o registro.");
    }
  };

  return (
    <>
      <main className="container row justify-content-center">
        <form
          className="form-floating col-md-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="text-center   mb-3">
            <span className="h3 fw-normal">Cadastro de Categoria</span>
          </div>
          <div className="form-floating mb-3">
            <input type="hidden" {...register("id")} />
            <input
              className={"form-control" + (errors.name ? " is-invalid" : "")}
              placeholder="Informe o nome"
              type="text"
              {...register("name", {
                required: "O campo nome é obrigatório.",
                minLength: {
                  value: 2,
                  message: "O tamanho deve ser entre 2 e 100 caracteres.",
                },
                maxLength: {
                  value: 100,
                  message: "O tamanho deve ser entre 2 e 100 caracteres.",
                },
              })}
            />
            <label htmlFor="name">Nome</label>
            {errors.name && (
              <div className="invalid-feedback">{errors.name.message}</div>
            )}
          </div>
          {apiError && <div className="alert alert-danger">{apiError}</div>}
          <button
            className="w-100 btn btn-lg btn-primary mb-3"
            disabled={isSubmitting ? true : false}
          >
            Salvar
          </button>
        </form>
      </main>
    </>
  );
}
```

Após criado o componente será necessário adicionar as rotas para acessá-lo. Nesse caso serão criadas duas rotas a `/categories/new` para o cadastro de uma nova categoria e `/categories/:id` para edição de uma categoria de acordo com o campo ID (chave primária). Para criação das rotas para adicionar junto às rotas privadas da aplicação o seguinte código:

```jsx
{//...}
	<Route  path="/categories/new"  element={<CategoryFormPage  />}  />
	<Route  path="/categories/:id"  element={<CategoryFormPage  />}  />
{//...}
```

O componente de cadastro de categorias poderá ser acessado tanto pelo botão de nova categoria quanto pelo botão de editar no cadastro de categoria. Na próxima etapa será desenvolvido o CRUD de Produtos.


### Lista de Produtos
A lista e cadastro de produtos segue a mesma lógica dos componentes de categorias. Sendo os componentes **ProductListPage**, **ProductFormPage** e o service **ProductService** responsáveis pelo correto funcionamento dessas telas.

Será necessário criar a interface IProduct no arquivo **/src/commons/interfaces.ts**:

```ts
export interface IProduct {
    id?: number;
    name: string;
    description: string;
    price: number;
    category: ICategory;
}
```

O **ProductService** assim como no service de categorias, irá conter o as funções para realizar as requisições HTTP para API REST, seguindo a mesma implementação com as funções *findAll, save, findById e remove.

```ts
import { IProduct } from "@/commons/interfaces";
import { api } from "@/lib/axios";

const productURL = "/products";

const save = async (product: IProduct): Promise<any> => {
  let response;
  try {
    response = await api.post(productURL, product);
  } catch (err: any) {
    response = err.response;
  }
  return response;
};

const findAll = async (): Promise<any> => {
  let response;
  try {
    response = await api.get(productURL);
  } catch (err: any) {
    response = err.response;
  }
  return response;
};

const findById = async (id: number): Promise<any> => {
  let response;
  try {
    response = await api.get(`${productURL}/${id}`);
  } catch (err: any) {
    response = err.response;
  }
  return response;
};

const remove = async (id: number): Promise<any> => {
  let response;
  try {
    response = await api.delete(`${productURL}/${id}`);
  } catch (err: any) {
    response = err.response;
  }
  return response;
};

const ProductService = {
  save,
  findAll,
  findOne,
  remove,
};

export default ProductService;
```

Com o service implementado dentro da pasta **src/pages/ProductListPage/index.tsx** será implementado o componente **ProductListPage**:

```jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IProduct } from "@/commons/interfaces";
import ProductService from "@/service/ProductService";

export function ProductListPage() {
  const [data, setData] = useState<IProduct[]>([]);
  const [apiError, setApiError] = useState("");
  const [showDeleteMessage, setShowDeleteMessage] = useState(false);
  const { findAll, remove } = ProductService;

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await findAll();
    if (response.status === 200) {
      setData(response.data);
      setApiError("");
    } else {
      setApiError("Falha ao carregar a lista de produtos");
    }
  };

  const onRemove = async (id: number) => {
    const response = await remove(id);
    if (response.status === 204) {
      setShowDeleteMessage(true);

      data.filter((product) => {
        return product.id !== id;
      });

      setTimeout(() => {
        setShowDeleteMessage(false);
      }, 1500);
      setApiError("");
    } else {
      setApiError("Falha ao remover o produto");
    }
  };

  return (
    <main className="container">
      <div className="text-center">
        <span className="h3 mb-3 fw-normal">Lista de Produtos</span>
      </div>
      <div className="text-center">
        <Link className="btn btn-success" to="/products/new">
          Novo Produto
        </Link>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Código</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product: IProduct) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.category!.name}</td>
              <td>
                <Link
                  className="btn btn-primary"
                  to={`/products/${product.id}`}
                >
                  Editar
                </Link>

                <button
                  className="btn btn-danger"
                  onClick={() => onRemove(product.id!)}
                >
                  Remover
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {apiError && <div className="alert alert-danger">{apiError}</div>}
      {showDeleteMessage && (
        <div className="alert alert-success">
          Registro removido com sucesso!
        </div>
      )}
    </main>
  );
}
```

Seguindo o mesmo ciclo de desenvolvimento utilizado nos componentes de categoria, agora será necessário criar a rota para acessar o componente **ProductListPage** no componente **BaseRoutes** junto com as demais rotas privadas:

```jsx:
{//...}
	<Route  path="/products"  element={<ProductListPage  />}  /> 
{//...}
```

### Cadastro de Produtos

Como o service e interface de produto já estão implementados, basta criar o componente **ProductFormPage** :

```jsx
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ICategory, IProduct } from "@/commons/interfaces";
import CategoryService from "@/service/CategoryService";
import ProductService from "@/service/ProductService";
import { useForm } from "react-hook-form";

export function ProductFormPage() {
  // hook useForm do react-hook-forms que irá controlar o estado do formulário.
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<IProduct>();
  // controla a situação da requisição HTTP que está sendo realizada ao servidor ao cadastrar um novo produto.
  const [pendingApiCall, setPendingApiCall] = useState(false);
  // apiError controla a exibição das mensagem de erro que ocorrem ao realizar uma requisição HTTP para o servidor.
  const [apiError, setApiError] = useState("");
  // lista de categorias utilizada para carregar o select
  const [categories, setCategories] = useState<ICategory[]>([]);
  const navigate = useNavigate();
  const { id } = useParams();
  const { findAll } = CategoryService;
  const { save, findById } = ProductService;

  // Executa uma vez ao carregar o componente
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    // Busca a lista de categorias na API
    const responseCategories = await findAll();
    if (responseCategories.status === 200) {
      // caso sucesso, adiciona a lista de categorias na variável de estado categories
      setCategories(responseCategories.data);
      setApiError("");
    } else {
      setApiError("Falha ao carregar a combo de categorias.");
    }

    if (id) {
      // ao editar um produto, busca ele na API e carrega no objeto form que está no state.
      const responseProduct = await findById(parseInt(id));
      if (responseProduct.status === 200) {
        reset(responseProduct.data);
        setApiError("");
      } else {
        setApiError("Falha ao carregar o produto");
      }
    } else {
      // ao cadastrar um novo produto, valoriza no objeto form a primeira categoria do select
      reset((previousForm) => {
        return {
          ...previousForm,
          category: { id: categories[0]?.id, name: "" },
        };
      });
    }
  };

  const onSubmit = async (data: IProduct) => {
    const product: IProduct = {
      ...data,
      category: { id: data.category.id, name: "" },
    };
    if (id) {
      product.id = parseInt(id);
    }
    const response = await save(product);
    if (response.status === 200 || response.status === 201) {
      navigate("/products");
    } else {
      setApiError("Falha ao salvar o produto.");
    }
  };

  return (
    <>
      <main className="container row justify-content-center">
        <form
          className="form-floating col-md-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="text-center">
            <h1 className="h3 mb-3 fw-normal">Cadastro de Produto</h1>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className={"form-control" + (errors.name ? " is-invalid" : "")}
              placeholder="Informe o nome"
              {...register("name", {
                required: "O campo nome é obrigatório.",
                minLength: {
                  value: 2,
                  message: "O tamanho deve ser entre 2 e 100 caracteres.",
                },
                maxLength: {
                  value: 100,
                  message: "O tamanho deve ser entre 2 e 100 caracteres.",
                },
              })}
            />
            <label htmlFor="name">Nome</label>
            {errors.name && (
              <div className="invalid-feedback">{errors.name.message}</div>
            )}
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className={"form-control" + (errors.price ? " is-invalid" : "")}
              placeholder="Informe o preço"
              {...register("price", {
                required: "O campo preço é obrigatório.",
              })}
            />
            <label htmlFor="price">Preço</label>
            {errors.price && (
              <div className="invalid-feedback">{errors.price.message}</div>
            )}
          </div>
          <div className="form-floating mb-3">
            <textarea
              className={
                "form-control" + (errors.description ? " is-invalid" : "")
              }
              placeholder="Informe a descrição"
              {...register("description", {
                required: "O campo descrição é obrigatório.",
              })}
            ></textarea>
            <label htmlFor="description">Descrição</label>
            {errors.description && (
              <div className="invalid-feedback d-block">
                {errors.description.message}
              </div>
            )}
          </div>
          <div className="form-floating mb-3">
            <select
              className={
                "form-control" + (errors.category ? " is-invalid" : "")
              }
              {...register("category.id", {
                required: "O campo descrição é obrigatório.",
              })}
            >
              {/* Monta a lista de options do Select de acordo com a lista de categorias vindas do servidor */}
              {categories.map((category: ICategory) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            <label htmlFor="category">Categoria</label>
            {errors.category && (
              <div className="invalid-feedback d-block">
                {errors.category.message}
              </div>
            )}
          </div>
          {apiError && <div className="alert alert-danger">{apiError}</div>}
          <div className="text-center mb-3">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={pendingApiCall ? true : false}
            >
              Salvar
            </button>
          </div>
          <div className="text-center">
            <Link to="/products" className="nav nav-link">
              Voltar
            </Link>
          </div>
        </form>
      </main>
    </>
  );
}
```
Para que o componente **ProductFormPage** possa ser visualizado ao clicar no botão `NovoProduto` ou `Editar` na tela de lista de produtos, basta adicionar o componente à lista de rotas:

```jsx
{//...}
	<Route  path="/products/new"  element={<ProductFormPage  />}  />
	<Route  path="/products/:id"  element={<ProductFormPage  />}  />
{//...}
```
Com a adição das rotas estão finalizados os componentes da aplicação. Nesse momento é possível realizar o CRUD de Categorias e Produtos. O próximo passo será criar um segundo conjunto de componentes para representar o CRUD de Produtos, entretanto, utilizando uma biblioteca externa de componentes para camada visual.

### CRUD de Produtos com a Biblioteca para Formulário (React Hook Forms [7]), Interface Gráfica (Chakra UI [8]) e ícones (React Icons [9])

Até o momento as únicas bibliotecas externas ao react que foram utilizadas para o desenvolvimento das funcionalidades foram o Axios para auxiliar nas requisições HTTP o React Router para auxiliar na criação das rotas para exibição dos componentes e a bibliteca **React Hook Form** para auxiliar no gerenciamento do preenchimento dos formulários e sua validação. Agora será adicionada a biblioteca **Chakra UI** que fornece componentes de interface gráfica para utilizarmos nos componentes desenvolvidos e, a biblioteca **React Icons** que fornece itens que podem ser utilizados nas interfaces exibidas aos usuários. Essas bibliotecas serão utilizadas nos componentes **ProductListPage** e **ProductFormPage**.

Para instalar  a bibliteca **React Icons**, basta executar no terminal:

```cmd
npm i react-icons
```

E, para instalar  a bibliteca **Chakra UI** e suas dependências, basta executar no terminal:

```cmd
npm i @chakra-ui/react@2.10.4 @emotion/react@^11 @emotion/styled@^11 framer-motion@^6
```
Depois de intalar o Chakra UI, é necessário adicionar o `ChakraProvider` na raiz da aplicação. Para isso, o componente **App.tsx** passará a ter o seguinte conteúdo:

```ts
import { ChakraProvider } from  '@chakra-ui/react'
import { BaseRoutes } from  './routes/BaseRoutes'

export  function App() {
	return (
		<ChakraProvider>
			<BaseRoutes  />
		</ChakraProvider>
	)
}
```

Agora é possível utilizar as funcionalidades disponíveis nesses bibliotecas nos componentes desenvolvidos. Abaixo está o código do componente **ProductListPageV2**, que exibe uma lista de produtos. Diferente dos componentes de lista anteiores, agora a tabela exibida não é mais uma tag HTML `<table>` e sim um componente do **Chakra UI** `<Table>`, que permite personalizações, por exemplo, o menu exibido com as ações de editar e remover, os quais também são componentes do Chakra UI e possuem ícones vindos do **React Icons**, como pode ser observado nas importações das dependências. 

O processo para busca dos dados, por meio do **ProductService** e de criação da tabela, percorrendo a lista vinda da API, é semelhante ao componente de lista de categorias, mudando apenas o componente que será exibido ao usuário, nesse caso a `<Table>` do Chakra UI.

```jsx
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProductService from "@/service/ProductService";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import {
  BsThreeDotsVertical,
  BsPencilSquare,
  BsTrash,
  BsPlusCircle,
} from "react-icons/bs";
import { IProduct } from "@/commons/interfaces";

export function ProductListPageV2() {
  const [data, setData] = useState<IProduct[]>([]);
  const [apiError, setApiError] = useState("");
  const navigate = useNavigate();
  const { findAll, remove } = ProductService;

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await findAll();
    if (response.status === 200) {
      setData(response.data);
      setApiError("");
    } else {
      setApiError("Falha ao carregar a lista de produtos.");
    }
  };

  const onEdit = (url: string) => {
    navigate(url);
  };

  const onRemove = async (id: number) => {
    const response = await remove(id);
    if (response.status === 200 || response.status === 204) {
      setData(
        data.filter((product) => {
          return product.id !== id;
        })
      );
      console.log(data);
      setApiError("");
    } else {
      setApiError("Falha ao remover o produto.");
    }
  };

  return (
    <div className="container">
      <h1 className="fs-2 mb-4 text-center">Lista de Produto V2</h1>
      <div className="text-center">
        <Link
          className="btn btn-success btn-icon mb-3"
          to="/products-v2/new"
          title="Novo Produto"
          style={{ display: "inline-block" }}
        >
          <BsPlusCircle style={{ display: "inline-block" }} /> Novo Produto
        </Link>
      </div>
      <TableContainer>
        <Table>
          <TableCaption>Lista de Produtos</TableCaption>
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>Nome</Th>
              <Th isNumeric>Preço</Th>
              <Th>Categoria</Th>
              <Th>Ações</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((product: IProduct) => (
              <Tr
                key={product.id}
                _hover={{ cursor: "pointer", background: "#eee" }}
              >
                <Td>{product.id}</Td>
                <Td>{product.name}</Td>
                <Td isNumeric>{product.price}</Td>
                <Td>{product.category?.name}</Td>
                <Td>
                  <Menu>
                    <MenuButton
                      as={IconButton}
                      aria-label="Actions"
                      icon={<BsThreeDotsVertical size={20} />}
                      variant="ghost"
                    />
                    <MenuList>
                      <MenuItem
                        icon={<BsPencilSquare />}
                        onClick={() => onEdit(`/products-v2/${product.id}`)}
                      >
                        Editar
                      </MenuItem>
                      <MenuItem
                        icon={<BsTrash />}
                        onClick={() => onRemove(product.id!)}
                      >
                        Remover
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>#</Th>
              <Th>Nome</Th>
              <Th isNumeric>Preço</Th>
              <Th>Categoria</Th>
              <Th>Ações</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      {apiError && <div className="alert alert-danger">{apiError}</div>}
    </div>
  );
}
```

Já na tela de cadastro de produtos, o componente **ProductFormPageV2**, além dos componentes do Chakra UI e React Icons, também será utilizado novamente o React Hook Form, para controlar o preenchimento do formulário e validação dos campos.

```jsx
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Textarea,
  Select,
  Button,
} from "@chakra-ui/react";
import CategoryService from "@/service/CategoryService";
import ProductService from "@/service/ProductService";
import { ICategory, IProduct } from "@/commons/interfaces";

export function ProductFormPageV2() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<IProduct>();
  const [apiError, setApiError] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [entity, setEntity] = useState<IProduct>({
    id: undefined,
    name: "",
    price: 0,
    description: "",
    category: { id: undefined, name: "" },
  });
  const { save, findById } = ProductService;
  const { findAll } = CategoryService;

  // Executa ao carregar o componente
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    // Busca a lista de categorias
    const response = await findAll();
    if (response.status === 200) {
      setCategories(response.data);
      setApiError("");
    } else {
      setApiError("Falha ao carregar a combo de categorias.");
    }
    if (id) {
      // ao editar um produto, busca ele no back-end e carrega no objeto form que está no state.
      const response = await findById(parseInt(id));
      if (response.status === 200) {
        setEntity({
          id: response.data.id,
          name: response.data.name,
          price: response.data.price,
          description: response.data.description,
          category: { id: response.data.category.id, name: "" },
        });
        setApiError("");
      } else {
        setApiError("Falha ao carregar o produto.");
      }
    } else {
      // ao cadastrar um novo produto, valoriza no objeto form a primeira categoria do select
      setEntity((previousEntity) => {
        return {
          ...previousEntity,
          category: { id: categories[0]?.id, name: "" },
        };
      });
    }
  };

  useEffect(() => {
    reset(entity);
  }, [entity, reset]);

  const onSubmit = async (data: IProduct) => {
    const product: IProduct = {
      ...data,
      id: entity.id,
      category: { id: data.category.id, name: "" },
    };
    const response = await save(product);
    if (response.status === 200 || response.status === 201) {
      navigate("/products-v2");
    } else {
      setApiError("Falha ao salvar o produto.");
    }
  };

  return (
    <div className="container">
      <h1 className="fs-2 text-center">Cadastro de Produto - V2</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.name && true}>
          <FormLabel htmlFor="name">Nome</FormLabel>
          <Input
            id="name"
            placeholder="Nome do produto"
            {...register("name", {
              required: "O campo nome é obrigatório",
            })}
          />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.price && true}>
          <FormLabel htmlFor="price">Preço</FormLabel>
          <Input
            id="price"
            placeholder="0.0"
            {...register("price", {
              required: "O campo preço é obrigatório",
              min: { value: 0.01, message: "O valor deve ser maior que zero" },
            })}
            type="number"
            step="any"
          />

          <FormErrorMessage>
            {errors.price && errors.price.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.description && true}>
          <FormLabel htmlFor="description">Descrição</FormLabel>
          <Textarea
            id="description"
            placeholder="Descrição do produto"
            {...register("description", {
              required: "O campo descrição é obrigatório",
              minLength: {
                value: 2,
                message: "O tamanho deve ser entre 2 e 1024 caracteres",
              },
              maxLength: {
                value: 1024,
                message: "O tamanho deve ser entre 2 e 1024 caracteres",
              },
            })}
            size="sm"
          />
          <FormErrorMessage>
            {errors.description && errors.description.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.category && true}>
          <FormLabel htmlFor="category">Categoria</FormLabel>

          <Select
            id="category"
            {...register("category.id", {
              required: "O campo categoria é obrigatório",
            })}
            size="sm"
          >
            {categories.map((category: ICategory) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </Select>

          <FormErrorMessage>
            {errors.description && errors.description.message}
          </FormErrorMessage>
        </FormControl>
        <div className="text-center">
          <Button
            mt={4}
            colorScheme="teal"
            isLoading={isSubmitting}
            type="submit"
          >
            Salvar
          </Button>
        </div>
      </form>
      {apiError && <div className="alert alert-danger">{apiError}</div>}
      <div className="text-center">
        <Link to="/products-v2">Voltar</Link>
      </div>
    </div>
  );
}
```

Por fim, basta editar o componente **BaseRoutes** com as rotas para os novos componentes, a versão final desse arquivo terá o seguinte conteúdo:

```jsx
import { Route, Routes } from "react-router-dom";
import { CategoryFormPage } from "@/pages/CategoryFormPage";
import { ProductListPage } from "@/pages/ProductListPage";
import { ProductFormPage } from "@/pages/ProductFormPage";
import { ProductListPageV2 } from "@/pages/ProductListPageV2";
import { ProductFormPageV2 } from "@/pages/ProductFormPageV2";
import { LoginPage } from "@/pages/LoginPage";
import { UserSignupPage } from "@/pages/UserSignupPage";
import { AuthenticatedRoutes } from "../AuthenticatedRoutes";
import { HomePage } from "@/pages/HomePage";
import { CategoryListPage } from "@/pages/CategoryListPage";

export function BaseRoutes() {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<UserSignupPage />} />

        {/* Protected Routes */}
        <Route element={<AuthenticatedRoutes />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/categories" element={<CategoryListPage />} />
            <Route path="/categories/new" element={<CategoryFormPage />} />
            <Route path="/categories/:id" element={<CategoryFormPage />} />

            <Route path="/products" element={<ProductListPage />} />
            <Route path="/products/new" element={<ProductFormPage />} />
            <Route path="/products/:id" element={<ProductFormPage />} />

            <Route path="/products-v2" element={<ProductListPageV2 />} />
            <Route path="/products-v2/new" element={<ProductFormPageV2 />} />
            <Route path="/products-v2/:id" element={<ProductFormPageV2 />} />
        </Route>
      </Routes>
    </>
  );
}
```

# Referências

[1] React. Disponível em: https://pt-br.reactjs.org/.

[2] Vite. Disponível em: https://vitejs.dev/

[3] React. Disponível em: https://reactjs.org/docs/state-and-lifecycle.html

[4] React Hooks. Disponível em: https://reactjs.org/docs/hooks-intro.html

[5] React Router Dom. Disponível em: https://reactrouter.com/

[6] useEffect. Disponível em: https://reactjs.org/docs/hooks-effect.html

[7] React Hook Form. Disponível em: https://react-hook-form.com/

[8] Chakra UI. Disponível em: https://chakra-ui.com/

[9] React Icons. Disponível em: https://react-icons.github.io/react-icons/

[10] Bootstrap. Disponível em: https://getbootstrap.com/