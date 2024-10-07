# React  (front-end)

## Introdução

O React é uma biblioteca JavaScript para criar interfaces de usuário. O React é **declarativo** fazendo com que a criação de UIs interativas seja uma tarefa fácil. Uma das premissas do React é que o desenvolvedor crie *views* simplificadas para cada estado da aplicação, e o React irá atualizar e renderizar de forma eficiente apenas os componentes necessários na medida em que os dados mudam. A criação de *views* declarativas fazem com que seu código seja mais previsível e simples de depurar [1].

O React assim como outras bibliotecas e *frameworks* JavaScript é baseado em componentes. O que facilita gerenciar de maneira mais eficaz os diferentes módulos da aplicação. O React permite criar componentes encapsulados que gerenciam seu próprio estado, para então combina-lo para formar UIs complexas.

No React toda lógica do componente é escrita em JavaScript ou TypeScript e não em templates, permitindo ao desenvolvedor passar diversos tipos de dados ao longo da sua aplicação e ainda manter o estado da aplicação fora do DOM.

O React normalmente utiliza JSX (**JavaScript Syntax Extension**) ou TSX (**TypeScript Syntax Extension**)  para a criação dos componentes, que é uma extensão de sintaxe para JavaScript/TypeScript. A utilização do TSX e a criação de componentes será abordada mais abaixo deste texto.

#### Estrutura do projeto front-end

Para criação do projeto foi utilizado o Vite [2], que é uma ferramenta de construção para projetos web que visa fornecer uma experiência de desenvolvimento mais rápida e enxuta.
Para criar o projeto para executar no terminal o comando:

```cmd
npm create vite@latest
```

Então informar o nome do projeto: **client**, o *framework*: **React** e a linguagem de programação: **TypeScript**.

Na sequência é importante instalar as dependências do projeto, bastando executar no terminal dois comandos, o primeiro para entrar na pasta da aplicação criada e o segundo para instalar as dependências:

```cmd
cd client
npm install
```
Após finalizado esse processo abrir a pasta do projeto (*client*) no editor que será utilizado no desenvolvimento do projeto.

Entendendo a estrutura do projeto criado:
- **node_modules**: pasta com as dependências do projeto.
- **public**: pasta com os arquivos públicos da aplicação.
- **src**: pasta com os códigos do projeto.
	-   **main.tsx**: esse arquivo declara a renderização da aplicação utilizando a biblioteca _react-dom_. Esse arquivo não precisa ser modificado, ele serve de _entrypoint_ da aplicação e por isso deve ter a configuração mínima para tal.
	- **App.tsx**: é um componente componente React que vem criado no projeto inicial. Ao abrir o arquivo, é possível observar que existe código TSX dentro dele. Esse código é retornado pelo método _render()_, que é padrão de todos os objetos  _Component_  do React. Ele retorna a representação HTML daquele componente que será exibida no navegador.
	- **App.css**: é o arquivo com os estilos CSS para o componente _App.js_.
- **index.html**: é o único arquivo HTML da aplicação e é obrigatório. Não será necessário modificá-lo e deve ser mantida a div _root_, pois o conteúdo dinâmico da aplicação será exibido dentro dessa div.
- **package.json**: arquivo de dependências do projeto. Todo projeto que utiliza o NodeJS precisa desse arquivo. As principais dependências do React já estão declaradas assim como os scripts de deploy da aplicação.

#### Executando o projeto

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
Na mensagem gerada é possível visualizar que a aplicação foi iniciada e está sendo executada na porta **5173**. Portanto, para testar a aplicação em um navegador basta acessar o endereço: **http://127.0.0.1:5173/**  ou **http://localhost:5173/**. Esse código gerado por padrão possui um botão que incrementa um contador a cada clique, essa página será alterada durante o desenvolvimento do projeto. Uma característica importante do projeto criado, é que ao alterarmos qualquer item do código **JSX** do componente **App.tsx** ele será automáticamente atualizado no navegador ao salvar o arquivo, não necessitando reiniciar o servidor toda vez que uma nova alteração é feita no código.

#### Iniciando o desenvolvimento da aplicação

O primeiro passo a ser realizado será alterar o conteúdo dos arquivos **App.tsx** e **App.css**.  O conteúdo do arquivo **App.css** será todo removido, deixando o arquivo em branco. E o arquivo **App.tsx** ficará com o seguinte conteúdo:

```ts
export  function App() {
	return (
		<div>
			<h1>Bem vindo!</h1>
		</div>
	)
}
```
##### Adicionando o estilo da aplicação (CSS)

Para melhorar a visualização e usabilidade da aplicação será utilizada a bibilioteca CSS **Bootstrap** [10]. O primeiro passo é adicionar a dependência da biblioteca ao projeto, executando o comando:

```cmd
npm i bootstrap@5.3.2
```
Com isso a dependência da biblioteca será adicionada no arquivo `package.json` e o CSS poderá ser importado no arquivo **main.tsx**, que ficará com o seguinte conteúdo:

```jsx
import React from  'react'
import ReactDOM from  'react-dom/client'
import { App } from  './App'
import  'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from  'react-router-dom';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<App  />
	</React.StrictMode>
)
```
A linha `import  'bootstrap/dist/css/bootstrap.min.css'` irá permitir que todos os componentes da árvore possam utilizar as classes CSS presentes na biblioteca Bootstrap.

##### Cadastro de usuários

O próximo passo é iniciar o desenvolvimento dos componentes da aplicação. A aplicação que será desenvolvida irá consumir os recursos da API REST criada nas aulas sobre o lado servidor de uma aplicação Web. Logo o primeiro componente a ser desenvolvido será o cadastro de um novo usuário, para isso criar a pasta **/src/pages/UserSignUpPage**. Na pasta **pages** serão criados todos os componentes que serão renderizados ao usuário. Dentro da pasta **UserSignUpPage** criar o arquivo **index.tsx**, com o seguinte conteúdo  (comentários no código):

```ts
/* 
	O ChangeEvent será utilizado para tipar o parâmetro do método onChange, que será utilizado para recuperar os valores digitados nos campos de texto ao cadastrar um novo usuário.
	O hook[4] useState será utilizado para manter os valores informados pelo usuário nos campos de texto no estado (state[3]) da aplicação.	
	IUserSignUp - interface utilizada para tipar os objeto que armazena os dados de usuário
	AuthService - contém as funções para realizar as requisições HTTP à API REST. No caso do cadastro de usuário uma requisição do tipo HTTP POST
*/
import { ChangeEvent, useState } from  'react'
import { IUserSignUp } from  '../../commons/interfaces';
import AuthService from  '../../service/AuthService';

export  function UserSignUpPage() {
	/* Criação de um objeto chamado `form` no state para armazenar o username e passord do usuário */
	const [form, setForm] = useState({
		displayName: '',
		username: '',
		password: '',
	});
	/* Criação de um objeto chamado `errors` no state para armazenar os erros de validação retornados pelo servidor */
	const [errors, setErrors] = useState({
		displayName: '',
		username: '',
		password: '',
	});
	/* função criada para monitorar o evento Change dos componentes input */
	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { value, name } = event.target;
		/* Recuperar o valor do state e altera apenas a propriedade relacionada ao input que está sendo editado
		*/
		setForm((previousForm) => {
			return {
				...previousForm,
				[name]: value,
			}
		});
		/* Limpa o valor do erro relacionado à propriedade do input que está sendo editada */
		setErrors((previousErrors) => {
			return {
				...previousErrors,
				[name]: '',
			}
		});
	}
	/* trata o click o botão para cadastrar um novo usuário */
	const onClickSignUp = () => {
		/* recupera o valor do state e cria um objeto do tipo IUserSignUp */
		const userSignUp: IUserSignUp = {
			displayName: form.displayName,
			username: form.username,
			password: form.password,
		};
		/* Chama o método signup do service AuthService, passando o usuário que será enviado via POST para API */
		AuthService.signup(userSignUp)
			.then((response) => {
				/* Em caso de sucesso imprime o resultado no console */
				console.log(response);
			})
			.catch((errorResponse) => {
				/* Em caso de erro imprime o resultado no console e preenche o conjunto de erros armazenado no state com os dados vindos da validação realizada na API. */
				console.log(errorResponse);
				if (errorResponse.response.data.validationErrors) {
					setErrors(errorResponse.response.data.validationErrors);
				}
			}
		);
	}
	/*Retorna o TSX com o formulário de cadastro. */
	return (
		<>
		<main  className="container">
		<form>
			<div  className="text-center">
				<h1  className="h3 mb-3 fw-normal">User Signup Page</h1>
			</div>
			<div  className="form-floating mb-3">
				{/*input utilizado para informar o nome do usuário. Nos atributos onChange e value são informados o método que trata a atualização do state e a ligação com o valor armazenado no state, respectivamente.*/}
				<input 
					type="text"
					className={errors.displayName ? "form-control is-invalid" : "form-control"}
					placeholder="Informe o seu nome"
					onChange={onChange}
					value={form.displayName}
					name="displayName"
				/>
				<label>Nome</label>
				{errors.displayName && <div  className="invalid-feedback">{errors.displayName}</div>}
			</div>
			<div  className="form-floating mb-3">
				<input
					type="text"
					className="form-control"
					placeholder="Informe o seu usuário"
					onChange={onChange}
					value={form.username}
					name="username"
				/>
				<label>Usuário</label>
				{errors.username && <div  className="invalid-feedback">{errors.username}</div>}
			</div>
			<div  className="col-12 mb-3">
				<input
					type="password"
					className="form-control"
					placeholder="Informe a sua senha"
					onChange={onChange}
					value={form.password}
					name="password"  
				/>
				<label>Senha</label>
				{errors.password&& <div  className="invalid-feedback">{errors.password}</div>}
			</div>
			<div  className="text-center">
				{/* Ao clicar no botão é chamado o método onClickSignUp */}
				<button
					className="btn btn-primary"
					onClick={onClickSignUp}
				>Cadastrar</button>
			</div>
		</div>
	)
}
```
O código dos arquivos **interfaces** e **AuthService** serão apresentados na sequência. Dentro da pasta **src** criar uma pasta chamada **commons** e dentro dela o arquivo **interfaces.ts**. O arquivo **interfaces.ts** irá armazenar todas as interfaces que serão utilizados para tipar os objetos que serão trocados nas funções dentro da aplicação. A interface **IUserSignUp** contém os atributos necessários para o cadastro de um novo usuário no servidor, seguindo os mesmos nomes de atributos da classe **User** desenvolvida na API REST.

```ts
 export interface IUserSignUp {
	displayName: string;
	username: string;
	password: string;
}
```

O arquivo **AuthService.ts** irá conter as funções para realizar o cadastro e a autenticação na API. Inicialmente será implementada a função **signup** que será responsável por realizar uma requisição HTTP do tipo POST para API. As requisições HTTP serão realizadas utilizando a biblioteca **axios**. Para padronizar a configuração da biblioteca **axios** foi criado o arquivo **src/lib/axios.ts**, nesse arquivo é configurado a rota base para API, no caso dos testes locais: **http://localhost:8025**.

```ts
import { IUserSignUp } from  '../commons/interfaces';
import { api } from  '../lib/axios'

const signup = (user: IUserSignUp) => {
	return api.post('/users', user);
}

const AuthService = {
	signup,
}

export  default AuthService;
```

O arquivo **axios.ts** possui a configuração da baseURL para que a biblioteca **axios** realize todas as requisições a partir da URL informada, no caso desse projeto: **http://localhost:8025**.

```ts
import axios from  'axios';

export  const api = axios.create({
	baseURL: 'http://localhost:8025'
});
```
Para testar a funcionalidade criada é necessário adicionar o componente **UserSignUpPage** ao componente **App**, dessa maneira, o arquivo **App.tsx** irá ficar com o seguinte conteúdo:

```ts
import { UserSignUpPage} from './pages/UserSignUpPage'

export  function App() {
	return (
		<div>
			<UserSignUpPage />
		</div>
		)
}
```

Após esse passo será possível acessar a URL da aplicação no endereço: **http://127.0.0.1:5173/**  ou **http://localhost:5173/** e testar a funcionalidade de cadastro de usuário. Lembrando que para o cadastro funcionar, devemos executar antes do cliente a API REST desenvolvida no projeto da pasta **server**.

##### Autenticação

Com o processo de criação de um novo usuário finalizado, o próximo passo é permitir a autenticação no sistema, para isso será criado o componente **LoginPage** que vai conter o formulário para o usuário informar o seu **username** e **password**.

```ts
import { ChangeEvent, useState } from  "react"; 
import { IUserLogin } from  "../../commons/interfaces";
import AuthService from  "../../service/AuthService";
 
export  function LoginPage() {
	
	const [form, setForm] = useState({
		username: "",
		password: "",
	});
	const [pendingApiCall, setPendingApiCall] = useState(false);
	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { value, name } = event.target;
		setForm((previousForm) => {
			return {
				...previousForm,
				[name]: value,
			};
		});
	};
	const onClickLogin = () => {
		setPendingApiCall(true);
		const userLogin: IUserLogin = {
			username: form.username,
			password: form.password,
			};
		AuthService.login(userLogin).then((response) => {
			setPendingApiCall(false);
			console.log(response);
			}).catch((errorResponse) => {
				setPendingApiCall(false);
				console.log(errorResponse);
			}
		);
	};
	return (
		<>
		  <main className="container">
		    <form>
		      <div className="text-center">
		        <h1 className="h3 mb-3 fw-normal">Login</h1>
		      </div>
	          <div className="form-floating mb-3">
				<input
					type="text"
					className="form-control"
					placeholder="Informe o seu usuário"
					onChange={onChange}
					value={form.username}
					name="username"
				/>
				<label>Usuário</label>
			</div>
            <div className="form-floating mb-3">
				<input
					type="password"
					className="form-control"
					placeholder="Informe a sua senha"
					onChange={onChange}
					value={form.password}
					name="password"
				/>
				<label>Senha</label>
			</div>
			<div  className="text-center">
				<button
					disabled={pendingApiCall}
					className="btn btn-primary"
					onClick={onClickLogin}
				> {pendingApiCall && (
					<div className="spinner-border text-light-spinner spinner-border-sm mr-sm-1"
						role="status"><span  className="visually-hidden">Aguarde...</span>
					</div>
				   )}
				   Entrar
			   </button>
			</div>
		</div>
	);
}
```

O próximo passo é criar a função **login** no arquivo **AuthService.ts**. A interface  **IUserLogin ** deve ser adicionada no arquivo **interfaces.ts** dentro da pasta **commons**, contento os atribnutos *username* e *passowrd*.

```ts
export  interface  IUserLogin {
	username: string;
	password: string;
}
```
Agora é possível criar a função login no arquivo **AuthService.ts**.
```ts
import { IUserLogin, IUserSignUp } from  '../commons/interfaces';
import { api } from  '../lib/axios'

const  signup = (user: IUserSignUp) => {
	return  api.post('/users', user);
}

const  login = (user: IUserLogin) => {
	return  api.post('/login', user);
}

const  AuthService = {
	signup,
	login,
}

export  default  AuthService;
```
Agora basta alterar o arquivo **App.tsx** do cliente para exibir o componente de **Login**.
```ts
import  './App.css'
import { LoginPage } from './pages/LoginPage'

export  function App() {
	return (
		<div>
			<LoginPage />
		</div>
		)
}
```
Para testar o componente de **Login** basta informar o **username** e **password** cadastrados pelo componente **UserSignUpPage**. Ao clicar no botão **Entrar** e abrindo o console do navegador será possível visualizar as mensagens de erro ou sucesso, pois no código foi adicionado o código `console.log(response);`.

O código ainda está bem básico, será necessário adicionar mensagens de erro e sucesso e também criar uma maneira de navegar entre os diferentes componentes do sistema e, essa será o próximo conteúdo a ser abordado.

Pode-se observar que foi necessário trocar o componente UserSignUpPage pelo componente LoginPage, a outra opção seria exibir ambos na tela. Essa não é a situação ideal, a melhor opção seria abrir a tela de autenticação, caso o usuário não tenha um cadastro ele clica em um botão para cadastrar-se e depois do cadastro efetuado o usuário é direcionado para página de autenticação. Para tornar esse comportamento possível na sequência do texto será apresentada a adição de rotas na aplicação.

##### Melhorando as referências de caminho dos componentes

Um dos problemas que geralmente acontecem em aplicações que possuem um grande número de componentes é a dificuldade de gerenciar a importação dos componentes nos diferentes módulos da aplicação, isso devido à estrutura de diretórios, dependendo de onde está o componente é comum termos que importar ele voltando pastas (por exemplo: `../../` volta dois diretórios). Para resolver esse problema, podemos tratar a pasta `src` como sendo raiz da aplicação e importar todos os componentes a partir da raiz independente do nível do diretório. Para isso será necessário adicionar a dependência de desenvolvimento `@types/node`:
```cmd
npm i @types/node -D
```
Depois é necessário modificar o arquivo `vite.config.ts`, que ficará com o seguinte conteúdo:
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
E, por fim, basta alterar o arquivo `tsconfig,json`, dentro da propriedade `compilerOptions`, adicionar:
```json
{
	"compilerOptions": {
	...
		"baseUrl": ".",
		"paths": {
			"@/*": ["./src/*"]
		},
	}...
},
```
Com isso para importar qualquer componente, basta adicionar `@/caminho`, por exemplo: `import { App } from  '@/App'` importa o componente **App**.

##### Controle de Rotas

Para controlar as rotas será utilizada a biblioteca React Router [5]. Inicialmente é necessário adicionar a dependência ao projeto utilizando o **npm**, basta abrir um terminal na pasta do projeto e executar:

```cmd
npm install react-router-dom
```
Com o React Router instalado o próximo passo é configurar as rotas da aplicação para os componentes que precisam de autenticação (CRUDs de categorias e produtos, que serão criados) e os que não precisam (cadastro de novos usuários e autenticação). Ante disso é necessário criar o ponto de partida para que o React Router controle as demais rotas do sistema, adicionando o **BrowserRouter** no código do arquivo **main.tsx**.

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

Então, será criada uma pasta chamada **routes** e dentro três pastas **BaseRoutes** e **AuthenticatedRoutes**, cada uma delas com um arquivo **index.tsx**.

O componente **BaseRoutes** vai ser o ponto de entrada dos usuários e, caso o usuário esteja autenticado ele será validado pelo componente **AuthenticatedRoutes** que irá fazer o *render* do menu de navegação e do componente solicitado. O componente **BaseRoutes** contém tanto as rotas em que o usuário não necessita estar autenticado quanto as que o usuário precisa estar autenticado.

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

Caso a rota solicitada seja para cadastrar-se ou autenticar-se, será exibido o respectivo componente ao usuário. Agora, caso a rota que o usuário deseja acessar necessite de autenticação, ela será tratada no componente **AuthenticatedRoutes **, em que é verificado se o usuário está autenticado por meio da função **isAuthenticated()** do **AuthService**. A função apresentada abaixo utiliza o token *JWT* vindo da **API** no momento da autenticação. Durante o processo de autenticação o **token** é adicionado no `localStorage` e nesse momento recuperado para verificar se o usuário autenticou-se. Na sequência será apresentado o código modificado no componente **LoginPage** para que o token seja adicionado no `localStorage`. Na função **isAuthenticaded** está sendo adicionado o token nas configurações das requisições realizadas por meio do **axios**, no código `api.defaults.headers.common['Authorization'] = Bearer ${JSON.parse(token)};`, o **token** será adicionado ao cabeçalho, com isso, toda requisição HTTP enviará o **token** para o servidor. Função *isAuthenticated()* do **AuthService**:

```ts
const  isAuthenticated = () => {
	const  token = localStorage.getItem('token');
	if (token) {
		api.defaults.headers.common['Authorization'] = `Bearer ${JSON.parse(token)}`;
	}
	return  token ? true : false;
}
```
No código abaixo será modificada apenas a função  **onClickLogin** do componente **LoginPage**. Agora é possível realizar a autenticação, armazenar o **token** recebido no **localStorage** e então redirecionar o usuário para o componente com as rotas autenticadas.

```ts
//...
import { Link, useNavigate } from  "react-router-dom"
//...

export  function LoginPage() {
	//...
	const navigate = useNavigate();
	//...
	
	const  onClickLogin = () => {
		setPendingApiCall(true);
		const  userLogin: IUserLogin = {
			username:  form.username,
			password:  form.password,
		};
		AuthService.login(userLogin).then((response) => {
			localStorage.setItem("token", JSON.stringify(response.data.token));
			localStorage.setItem("user", JSON.stringify(response.data.user));
			setPendingApiCall(false);
			navigate("/home");
			})
			.catch((errorResponse) => {
				setApiError(true);
				setPendingApiCall(false);
			});
		//...
	return (
		//... Depois do botão de autenticação:
          <div className="text-center">
            <span>Não possui cadastro? </span>
            <Link className="btn btn-outline-secondary" to="/signup">
              Cadastrar-se
            </Link>
          </div>
        </form>
      </main>
    </>
  );
}
```
O componente **AuthenticatedRoutes** faz o render do componente **NavBar** que adiciona uma barra de navegação na página principal e, o `Outlet` que será responsável por fazer o render do componente de acordo com a rota selecionada pelo usuário. A primeira rota (`/`) que necessita de autenticação será o caminho para o componente **HomePage**, que será apresentado na sequência.

O componente **NavBar**  apresenta o link de acesso a cada um dos componentes de lista de dados que será criado. Inicialmente estará funcionando apenas o link para HomePage,. As rotas são apresentadas no menu por meio do componente **NavLink** do **React Router**, esse componente permite alterar a classe para o link que está ativo, assim alterando a cor do menu para a rota selecionada pelo usuário. O componente também conta com o botão de Sair, que ao ser clicado será limpado o valor do token do localstorage e o usuário será direcionado para tela de autenticação (LoginPage).

```jsx
import { Link, NavLink } from  "react-router-dom";
import logo from  "@/assets/utfpr-logo.png";
import AuthService from  "@/service/AuthService";
 
export  function NavBar() {
	const onClickLogout = () => {
		AuthService.logout();
		window.location.reload();
	};

return (
	<div  className="bg-white shadow-sm mb-2">
		<div  className="container">
			<nav  className="navbar navbar-light navbar-expand">
				<Link  to="/"  className="navbar-brand">
					<img  src={logo}  width="60"  alt="UTFPR"  />
				</Link>
				<ul  className="navbar-nav me-auto mb-2 mb-md-0">
					<li  className="nav-item">
						<NavLink  to="/" 
							className={(navData) => navData.isActive ? "nav-link active" : "nav-link"}> Home
						</NavLink>
					</li>
					<li  className="nav-item">
						<NavLink to="/categories"
							className={(navData) => navData.isActive ? "nav-link active" : "nav-link"}>Categorias
						</NavLink>
					</li>
					<li  className="nav-item">
						<NavLink to="/products"
							className={(navData) => navData.isActive ? "nav-link active" : "nav-link"}>Produtos
						</NavLink>
					</li>
					<li  className="nav-item">
						<NavLink to="/product-v2"
							className={(navData) =>navData.isActive ? "nav-link active" : "nav-link"}>Produtos V2
						</NavLink>
					</li>
					<li  className="nav-item">
						<button  className="btn btn-light"  onClick={onClickLogout}>&times; Sair
						</button>
					</li>
				</ul>
			</nav>
		</div>
	</div>
	);
}
```
Componente **HomePage**:
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
Dentro da pasta **pages** será criada a pasta **HomePage** com o arquivo **index.tsx**.

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
##### CRUD de Categorias

Com o cadastro de usuário e tela de autenticação funcionando serão adicionadas as operações CRUD de categoria. Inicialmente será criado o service de categoria dentro da pasta **service** criar o arquivo **CategoryService.ts**. Esse service vai ter as funções **save, 	findAll, remove e	findById**, todas utilizam o **axios** por meio do objeto **api**. Todas essas requisições necessitam de autenticação, entretanto, como o **token jwt** já foi adicionado ao cabeçalho das requisições na função **isAuthenticaded**, não é necessário fazer isso novamente. 

```ts
import { ICategory } from  '@/commons/interfaces';
import { api } from  '@/lib/axios'

const  save = (category: ICategory) => {
	return  api.post('/categories', category);
}
const  findAll = () => {
	return  api.get('/categories');
}
const  remove = (id: number) => {
	return  api.delete(`/categories/${id}`);
}
const  findById = (id: number) => {
	return  api.get(`/categories/${id}`);
}
const  CategoryService = {
	save,
	findAll,
	remove,
	findById,
}

export  default  CategoryService;
```
Nesse service também pode ser observado o uso da interface **Category** a qual será criada no arquivo **interfaces** dentro da pasta **commons**.

```ts
export  interface  ICategory {
	id?: number;
	name: string;
}
```

Agora será criado o componente para listar as categorias, dentro da pasta **page** será criada a pasta **CategoriaListPage** com o arquivo **index.tsx**. Esse componente vai carregar a lista de categorias cadastradas na API por meio da função `loadData()`, que é chamada uma vez no início do carregamento do componente por meio do hook **useEffect**[6]. O objeto **data** armazenado no state irá ser utilizado para exibir os dados de categoria para o usuário em uma tabela conforme comentários no código abaixo. A tela exibida ao usuário irá contar também com um botão para cadastrar uma nova categoria, o qual irá direcionar o usuário para a rota **/categories/new** que irá fazer o render do componente **CategoryFormPage** que será criado futuramente.  Na tabela de exibição dos dados serão apresentados dois botões: Editar e Remover. O botão Editar irá direcionar o usuário para o componente **CategoryFormPage** para que o mesmo possa editar a categoria. Já o botão Remover irá excluir a categoria do banco de dados.

```ts
import { useEffect, useState } from  'react';
import { Link } from  'react-router-dom';
import { ICategory } from  '@/commons/interfaces';
import  CategoryService  from  '@/service/CategoryService';

export  function  CategoryListPage() {
	const [data, setData] = useState<ICategory[]>([]);
	const [apiError, setApiError] = useState("");

	useEffect(() => {
		loadData();
	}, []); // executado apenas no render do componente e carregando a lista de categorias.

	const  loadData = () => {
		//O método findAll do service faz chamada a API e retorna uma lista com todas as categorias cadastradas
		CategoryService.findAll()
			.then((response) => {
				setData(response.data);
				setApiError("");
			})
			.catch((responseError) => {
				setApiError("Falha ao carregar lista de categorias.");
			});
	}
	// A função de remover recebe o ID registro que será removido e faz uma requisição à API por meio do service de categoria. Em caso de sucesso carrega a lista novamente.
	const  onClickRemove = (id?: number) => {
		if (id) {
			CategoryService.remove(id)
				.then((response) => {
					loadData();
					setApiError("");
				})
				.catch((responseError) => {
					setApiError("Falha ao remover o registro.");
			});
		}
	}
	return (
		<div  className="container">
			<h1  className="text-center">Lista de Categoria</h1>
			<div  className="text-center">
				<Link  className="btn btn-success" to="/categories/new">
				Nova Categoria
				</Link>
			</div>
			<table  className="table table-striped">
				<thead>
					<tr>
						<td>#</td>
						<td>Nome</td>
						<td>Editar</td>
						<td>Remover</td>
					</tr>
				</thead>
				<tbody>
				     {/* Percorrendo a lista de categorias para exibir os dados ao usuário */}
					{data.map((category: ICategory) => (
					<tr  key={category.id}>
						<td>{category.id}</td>
						<td>{category.name}</td>
						<td>
							<Link  className="btn btn-primary"
								to={`/categories/${category.id}`}>
								Editar
							</Link>
						</td>
						<td>
							<button  className="btn btn-danger" onClick={() =>  onClickRemove(category.id)}>
							Remover
							</button>
						</td>
					</tr>
					))}
				</tbody>
			</table>
			{apiError && <div  className="alert alert-danger">{apiError}</div>}
		</div>
	)
}
```

Por fim, para exibir o componente **CategoryListPage** será adicionada a rota no arquivo **BaseRoutes**. Agora o link presente no componente **NavBar** estará funcionando, bastando clicar no atalho o componente de lista de categorias será exibido.

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
        </Route>
      </Routes>
    </>
  );
}
```
Ao clicar no link que aponta para o componente de Categorias, será exibido o componente CategoryListPage, entretanto como não foi cadastrada nenhuma categoria, a tabela será exibida sem nenhum item. Para criar uma categoria será criado o componente **CategoryFormPage**, para isso criar a pasta **CategoryFormPage** dentro da pasta **pages** e dentro o arquivo **index.tsx**.

```ts
import { ChangeEvent, useEffect, useState } from  'react';
import { useNavigate, useParams } from  'react-router-dom';
import { ICategory } from  '@/commons/interfaces';
import { ButtonWithProgress } from  '@/components/ButtonWithProgress';
import { Input } from  '@/components/Input';
import CategoryService from  '@/service/CategoryService';

export  function CategoryFormPage() {
	// Adiciona o objeto que irá armazenar a categoria no state
	const [form, setForm] = useState<>({
		id: undefined,
		name: "",
	});
	// Adiciona o objeto que irá armazenar os erros de preenchimento da categoria no state
	const [errors, setErrors] = useState({
		id: undefined,
		name: "",
	});
	// Utilizado para alterar a propriedade disable do botão durante a requisição à API
	// Evitando que o usuário clique mais de uma vez no mesmo
	const [pendingApiCall, setPendingApiCall] = useState(false);
	// Caso ocorra algum erro durante a chamada da API ao servidor é valorizado como true
	const [apiError, setApiError] = useState(false);
	// Utilizado para direcionar o usuário para tela de lista de categiruas após salvo o registro com sucesso
	const navigate = useNavigate();
	// Recupera o ID da categoria da URL para carregar os dados da categoria para o usuário poder editar
	const { id } = useParams();
	
	useEffect(() => {
		if (id) { // Caso seja edição de uma categoria
			CategoryService.findById( parseInt(id) ) //Carrega a categoria no state
				.then((response) => {
				if (response.data) {
					setForm({
						id: response.data.id,
						name: response.data.name,
					});
				}
			})
			.catch((responseError) => {
				setApiError(true);
			});
		}
	},[]);

	// Verifica as mudanças nos elementos do formulário para atualizar os valores do state
	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { value, name } = event.target;
		setForm((previousForm) => {
			return {
				...previousForm,
				[name]: value,
			}
		});
		setErrors((previousErrors) => {
			return {
				...previousErrors,
				[name]: '',
			}
		});
	}
	 // Ao clicar no botão de submit recupera a categoria do state, crioa um objeto para ser enviado à API
	const onSubmit = () => {
		const category: ICategory = {
			id: form.id,
			name: form.name,
		}
		setPendingApiCall(true);
		CategoryService.save(category) // Executa o método save que recebe a categoria a ser salva e retorna uma promessa
			.then((response) => { //Em caso de sucesso retorna o usuário para lista de categorias
				setPendingApiCall(false);
				navigate('/categories');
			})
			.catch((responseError) => { // Em caso de erro exibe erro para os usuários na tela.
				if (responseError.response.data.validationErrors) {
					setErrors(responseError.response.data.validationErrors);
				}
				setPendingApiCall(false);
				setApiError(true);
			}
		);
	}
	return (
	    <>
	      <main className="container">
	        <form>
	          <div className="text-center">
	            <h1 className="h3 mb-3 fw-normal">Cadastro de Categoria</h1>
	          </div>

	          <div className="form-floating mb-3">
				<Input
					className="form-control"
					name="name"
					label="Nome"
					placeholder="Informe o nome"
					type="text"
					value={form.name}
					onChange={onChange}
					hasError={errors.name ? true : false}
					error={errors.name}
				/>
			</div>
			{apiError && <div  className="alert alert-danger">Falha ao cadastrar a categoria.</div>}		
			<ButtonWithProgress
				className="btn btn-primary"
				onClick={onSubmit}
				disabled={pendingApiCall ? true : false}
				pendingApiCall={pendingApiCall}
				text="Salvar"
			/>
		</form>
	</main>
</>
)
}
```

##### CRUD de Produtos
A lista e cadastro de produtos segue a mesma lógica dos componentes de categorias. Sendo os componentes **ProductListPage**, **ProductFormPage** e o service **ProductService** responsáveis pelo correto funcionamento dessas telas.

#### Biblioteca para Formulário (React Hook Forms [7]), Interface Gráfica (Chakra UI [8]) e ícones (React Icons [9])

Até o momento as únicas bibliotecas externas ao react que foram utilizadas para o desenvolvimento das funcionalidades foram o Axios para auxiliar nas requisições HTTP e o React Router para auxiliar na criação das rotas para exibição dos componentes. O próximo passo será utilizar a bibliteca **React Hook Form** para auxiliar no gerenciamento do preenchimento dos formulários e sua validação, a biblioteca **Chakra UI** que fornece componentes de interface gráfica para utilizarmos nos componentes desenvolvidos e, a biblioteca **React Icons** que fornece itens que podem ser utilizados nas interfaces exibidas aos usuários. Essas bibliotecas serão utilizadas nos componentes **ProductListPage** e **ProductFormPage**.

Para instalar  a bibliteca **React Hook Form**, basta executar no terminal:

```cmd
npm i react-hook-form
```
Para instalar  a bibliteca **React Icons**, basta executar no terminal:

```cmd
npm i react-icons
```

E, para instalar  a bibliteca **Chakra UI** e suas dependências, basta executar no terminal:

```cmd
npm i @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^6
```
Depois de intalar o Chakra UI, é necessário adicionar o `ChakraProvider` na raiz da aplicação. Para isso, o componente **App.tsx** terá o seguinte conteúdo:

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

```ts
import { useState, useEffect } from  "react";
import { Link, useNavigate } from  "react-router-dom";
import ProductService from  "@/service/ProductService";
import {Table,Thead,Tbody,Tfoot,Tr,Th,Td,TableCaption,TableContainer,Menu,MenuButton,MenuList,MenuItem,IconButton,} from  "@chakra-ui/react";
import {BsThreeDotsVertical,BsPencilSquare,BsTrash,BsPlusCircle,} from  "react-icons/bs";
import { IProduct } from  "@/commons/interfaces";

export  function ProductListPageV2() {
	const [data, setData] = useState<IProduct[]>([]);
	const [apiError, setApiError] = useState("");
	const navigate = useNavigate();
	useEffect(() => {
		loadData();
	}, []);
	const loadData = () => {
		ProductService.findAll()
			.then((response) => {
				setData(response.data);
				setApiError("");
			})
			.catch((error) => {
				setApiError("Falha ao carregar a lista de produtos.");
			});
	}
	const onEdit = (url: string) => {
		navigate(url);
	}
	const onRemove = (id: number) => {
		ProductService.remove(id)
			.then((response) => {
				loadData();
				setApiError("");})
			.catch((error) => {
				setApiError("Falha ao remover o produto.");
			});
	}
	return (
		<div  className="container">
			<h1  className="fs-2 mb-4 text-center">Lista de Produto V2</h1>
			<div  className="text-center">
				<Link className="btn btn-success btn-icon mb-3" to="/product-v2/new" title="Novo Produto" style={{ display: 'inline-block' }} >
					<BsPlusCircle  style={{ display: 'inline-block' }}  /> Novo Produto
				</Link>
			</div>
			<TableContainer>
				<Table>
					<TableCaption>Lista de Produtos</TableCaption>
					<Thead>
						<Tr>
						<Th>#</Th>
						<Th>Nome</Th>
						<Th  isNumeric>Preço</Th>
						<Th>Categoria</Th>
						<Th>Ações</Th>
					</Tr>
				</Thead>
				<Tbody>
					{data.map((product: IProduct) => (
					<Tr key={product.id} _hover={{ cursor: "pointer", background: "#eee" }}>
						<Td>{product.id}</Td>
						<Td>{product.name}</Td>
						<Td  isNumeric>{product.price}</Td>
						<Td>{product.category?.name}</Td>
						<Td>
							<Menu>
								<MenuButton as={IconButton} aria-label="Actions" icon={<BsThreeDotsVertical  size={20}  />} variant="ghost"/>
								<MenuList>
									<MenuItem icon={<BsPencilSquare  />} onClick={() => onEdit(`/product-v2/${product.id}`)}>Editar
									</MenuItem>
									<MenuItem icon={<BsTrash  />} onClick={() => onRemove(product.id!)}>Remover</MenuItem>
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
						<Th  isNumeric>Preço</Th>
						<Th>Categoria</Th>
						<Th>Ações</Th>
					</Tr>
				</Tfoot>
			</Table>
		</TableContainer>
		{apiError && <div  className="alert alert-danger">{apiError}</div>}
	</div>
	)
}
```

Já na tela de cadastro de produtos, o componente **ProductFormPageV2**, além dos componentes do Chakra UI e React Icons, também será utilizado o React Hook Form, para controlar o preenchimento do formulário e validação dos campos.

```ts
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
import CategoryService from "../../service/CategoryService";
import ProductService from "../../service/ProductService";
import { ICategory, IProduct } from "../../commons/interfaces";

export function ProductFormPageV2() {
  const {
    handleSubmit, //controla o envio do formulário
    register, //permite que o valor de um input esteja dispoível para a validação e envio do formulário ao servidor
    formState: { errors, isSubmitting }, // conjunto de erros de preenchimento do formulário, e situação de envio do formulário
    reset, //Atualiza o formulário de acordo com o conjunto de dados passados por parâmetro
  } = useForm<IProduct>();
  const [apiError, setApiError] = useState("");
  const navigate = useNavigate();
  // Recupera da URL o código do produto que será editado
  const { id } = useParams();
  // Lista de categorias utilizada no campo de seleção
  const [categories, setCategories] = useState<ICategory[]>([]);
  // Utilizado para atualizar o formulário na edição de um produto
  const [entity, setEntity] = useState<IProduct>({
    id: undefined,
    name: "",
    price: 0,
    description: "",
    category: { id: undefined, name: "" },
  });

  useEffect(() => {
    CategoryService.findAll() //Carrega a lista de categorias
      .then((response) => {
        setCategories(response.data);
        if (id) { // no caso de edição, carrega o produto a ser editado
          ProductService.findOne(parseInt(id))
            .then((response) => {
              if (response.data) {
                setEntity({
                  id: response.data.id,
                  name: response.data.name,
                  price: response.data.price,
                  description: response.data.description,
                  category: response.data.category.id,
                });
                setApiError("");
              } else {
                setApiError("Falha ao carregar o produto.");
              }
            })
            .catch((error) => {
              setApiError("Falha ao carregar o produto.");
            });
        } else {
          setEntity((previousEntity) => {
            return {
              ...previousEntity,
              category: response.data[0]?.id, // caso não seja edição, atribui no form id da primeira categoria, evitando enviar valor nulo.
            };
          });
        }
        setApiError("");
      })
      .catch((error) => {
        setApiError("Falha ao carregar a lista de categorias.");
      });
  }, [id]);

  useEffect(() => { //atualiza o form com os dados do produto ao editá-lo
    reset(entity);
  }, [entity, reset]);

  //envio dos dados ao servidor
  const onSubmit = (data: IProduct) => {
    const product: IProduct = {
      ...data,
      id: entity.id,
      category: { id: data.category.id, name: "" },
    };
    ProductService.save(product)
      .then((response) => {
        navigate("/product-v2");
      })
      .catch((error) => {
        setApiError("Falha ao salvar o produto.");
      });
  };
  return (
    <div className="container">
      <h1 className="fs-2 text-center">Cadastro de Produto - V2s</h1>
      {/*ao clicar no botão submit será chamado o método onSubmit*/}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/*Caso exista erro na propriedade name, vai atualizar a visualização do componente na tela*/}
        <FormControl isInvalid={errors.name && true}>
          <FormLabel htmlFor="name">Nome</FormLabel>
          {/*o register vincula o atributo name a esse Input, juntamente com a validação de campo obrigatório, o procedimento é o mesmo para os demais campos.*/}
          <Input
            id="name"
            placeholder="Nome do produto"
            {...register("name", {
              required: "O campo nome é obrigatório",
            })}
          />
          {/*Caso tenha erro no campos nome, a mensagem será exibida*/}
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
        <Link to="/product-v2">Voltar</Link>
      </div>
    </div>
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