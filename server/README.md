# Spring Framework (back-end)

## Introdução

O Spring é um conjunto de projetos que focam em levar produtividade ao programador. Auxiliando de maneira a aumentar a produtividade no desenvolvimento de aplicações Java com simplicidade e flexibilidade.
O conjunto de *frameworks* Spring possui o Spring MVC para criação de aplicações web e serviços RESTful, o Spring Data, para  acesso a banco de dados, o Spring Security, para prover segurança em aplicações, e diversos outros projetos como computação em nuvem, microsserviços e *big data*, por exemplo.  
Os *frameworks* Spring são todos **Open Source** e o seu código-fonte pode ser encontrado no [GitHub](https://github.com/spring-projects) [1].

## Spring e Java EE

O Spring possui uma série de recursos implementados que não estão presentes no Java EE. Entretanto, o *framework* Spring também utiliza várias tecnologias que estão implementadas dentro do Java EE. Não existe uma concorrência entre o Spring e o Java EE, o Spring apenas veio para dar maior produtividade ao desenvolvedor com os recursos disponibilizados no *framework*.

## Inversão  de Controle (IoC) e  Injeção de Dependências (DI) com Spring

A inversão de controle (IoC, do inglês *Inversion of Control*) consiste em transferir o controle da execução da aplicação para um contêiner de IoC, o qual chama a aplicação em determinados momentos da execução do software, como na ocorrência de um evento. Por meio da IoC o contêiner controla quais métodos da aplicação e em que contexto eles serão chamados [2].

A Injeção de dependências (DI, do inglês *Dependency Injection*) é um padrão de projeto usado para desacoplar classes de suas dependências dentro de uma aplicação, dessa maneira é possível  obter uma melhor divisão em módulos do software [3].

## Spring Data JPA
O *framework* Spring Data JPA atua na camada de persistência de dados [4]. Ele auxilia o programador na criação dos repositórios da aplicação. O projeto (Spring Data JPA) está dentro do Spring Data que possui diversos outros projetos que auxiliam no processo de acesso e persistência de dados. Sendo os principais projetos:
-   Spring Data Commons
-   Spring Data for Apache Cassandra
-   Spring Data Gemfire
-   Spring Data KeyValue
-   Spring Data LDAP
-   Spring Data MongoDB
-   Spring Data Redis
-   Spring Data REST

## REST

REST é a sigla para **Representational State Transfer** ou em português **Transferência de Estado Representacional.** Uma aplicação web RESTful expõe informações sobre si na apresentando seus recursos. Ela também possibilita ao cliente executar ações nesses recursos, como criar novos recursos (por exemplo, criar um novo usuário) ou alterar recursos existentes (por exemplo, editar os dados de um usuário).

Para que uma API web seja RESTful, é necessário  seguir um conjunto de regras ao escrevê-la. O conjunto de regras para uma API REST às tornará mais fáceis de usar e também mais fáceis de descobrir, o que significa que um desenvolvedor que está apenas começando a usar suas APIs terá mais facilidade em aprender como fazê-lo. Isso significa que quando uma API RESTful é chamada, o servidor _transfere_ para o cliente uma _representação_ do _estado_ do recurso solicitado.

REST não é uma arquitetura, biblioteca ou *framework*, é simplesmente um  **modelo** que é utilizado para projetar arquitetura de softwares distribuídos que fazem comunicação de dados pela rede, seja local ou a famosa Internet.

REST não é uma arquitetura ou *framework* pronto, é apenas um conjunto de regras que serve como modelo para desenvolver uma API. Esse modelo foi criado por Roy Fielding [5]  um dos principais responsáveis e criadores do protocolo HTTP, basicamente, tudo que está online utiliza o protocolo HTTP ou o HTTPS que é a evolução do mesmo.

# Iniciando o projeto

Durante as aulas será desenvolvido um projeto para controle de produtos classificados por categorias, com validação de usuários para acesso ao sistema. O desenvolvimento do projeto irá iniciar com o cadastro de usuários do sistema, tanto a API REST quanto o cliente utilizando React. Então será realizada a etapa de autenticação dos usuários do sistema. Na sequência serão realizados os CRUDs de categoria e produtos.

### Criação do projeto

O projeto será criado utilizando como base o *framework* Spring Boot, que por sua vez permite que projetos com o Spring MVC, Data JPA e Security já venham configurados por meio de convenções.
Será criado um projeto [Maven](https://maven.apache.org/) por meio da ferramenta web [Spring Initializr](https://start.spring.io/) com as seguintes configurações:
O projeto será do tipo **Maven Project**.
A linguagem será **Java**.
A versão do Spring Boot será a última versão estável na data de criação do projeto (**3.3.4**).
Os metadados do projeto são:
- Group: **br.edu.utfpr.pb.pw44s**
- Artifact: **server**
- Options:
  - Packaging: **Jar**
  - Java: **17** ou superior (utilizar a versão instalada na máquina, preferência pela mais atual).

Em dependências devem ser selecionados os *frameworks*:
- Spring Data JPA
- Spring Web
- Spring Security
- Spring Devtools
- H2 Database (ou o driver do banco de sua preferência PostgreSQL, MySQL, etc...)
- Lombok
- Validation

Além das bibliotecas acima também será necessário adicionar à *tag* *<dependencies>* do pom.xml as bibliotecas:
- java-jwt
- modelmapper
- httpclient5

Conforme o código abaixo:
```xml
<!-- ... restante do pom -->
<dependencies>
	<!-- ... restante das dependências -->  
	<!-- JWT Authentication -->  
	<dependency>  
		<groupId>com.auth0</groupId>  
		<artifactId>java-jwt</artifactId>  
		<version>4.4.0</version>  
	</dependency>  
  
	<!-- convert DTOs -->  
	<dependency>  
		<groupId>org.modelmapper</groupId>  
		<artifactId>modelmapper</artifactId>  
		<version>3.2.0</version>  
	</dependency>  
	
	<!-- requisições nos testes -->  
	<dependency>  
		<groupId>org.apache.httpcomponents.client5</groupId>  
		<artifactId>httpclient5</artifactId>  
		<version>5.3</version>  
		<scope>test</scope>  
	</dependency>
<dependencies>
```

O projeto está configurado e pode ser realizado o download do mesmo e importado na IDE. O conteúdo do arquivo `pom.xml` pode ser visualizado em: [arquivo pom.xml](https://github.com/viniciuspegorini/pw44s/blob/main/server/pom.xml).

### Estrutura do projeto back-end

O projeto Spring Boot vêm com uma série de configurações inicias que não precisamos nos preocupar, iniciando com a classe principal da aplicação a **ServerApplication**, nela por meio da anotação **@SpringBootApplication** todas as configurações serão carregadas. O **Spring Security** por exemplo, já vem pré-configurado protegendo todas as URLs, como ainda não vamos configurar, é necessário adicionar a propriedade **exclude = SecurityAutoConfiguration.class**, dessa maneira o **SpringBoot** vai ignorar as configurações de segurança, na sequência do desenvolvimento essa configuração será alterada para o processo de autenticação e autorização funcionar. O banco de dados em memória utilizando o **H2** também já é criado por padrão nesse momento, ou seja, todas as configurações necessárias para o início do desenvolvimento estão prontas. Abaixo está o código editado na classe principal do projeto a **ServerApplication.java**:

```java
@SpringBootApplication(exclude = SecurityAutoConfiguration.class)  
public class ServerApplication {  
   public static void main(String[] args) {  
      SpringApplication.run(ServerApplication.class, args);  
  }   
}
``` 
Com as configurações básicas definidas será possível iniciar o desenvolvimento do projeto.


### Cadastro de Usuário (*back-end*)

O desenvolvimento irá iniciar o cadastro de usuário o primeiro passo será criar o cadastro de um novo usuário. Entretanto, como o desenvolvimento será realizado por meio de *Test Driven Development* (TDD), a primeira classe a ser criada é a **UserControllerTest** dentro da pasta **/src/test**, que no momento da criação irá ficar com o conteúdo abaixo:

```java
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ActiveProfiles("test")
public class UsuarioControllerTest {
}
```` 

A anotação **@SpringBootTest** permite que o teste execute a partir das configurações padrão do Spring Boot, ou seja, as várias convenções do *framework* para iniciar o projeto já estão pré-configuradas. A propriedade *webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT* serve para que sempre que executar o teste a aplicação seja executada em uma porta diferente, evitando executar em uma porta que já ocupada na máquina em que esteja rodando os testes. O Spring permite que a aplicação seja executada em diferentes ambientes (*profiles*), ou seja, ambiente teste, desenvolvimento, produção, etc.. Assim, por meio da anotação **@ActiveProfiles("test")** está sendo informado que o projeto será executado com base no *profile test*, isso irá permitir que na sequência do desenvolvimento do projeto ele possa ser executado por meio de configurações diferentes dentro de cada ambiente em que deve ser executado.

O próximo passo é criar o primeiro teste, para nomear cada teste será utilizada a convenção:
**methodName_condition_expectedBehaviour**
Ou seja, nome do método, condição do teste e comportamento esperado após a execução do teste.

Dentro da classe  **UserControllerTest** será criado o método ***postUser_whenUserIsValid_receiveOk()***. Esse método irá testar se: ao realizar uma requisição do tipo HTTP POST, quando o objeto enviado ao servidor for um Usuário válido, se a API irá retornar como resposta um ***HTTP Status: 200 OK***.  Para realizar a requisição ao servidor será utilizado um objeto do tipo ***TestRestTemplate***, que permite realizar requisições HTTP para uma URL, no caso do exemplo */users*, conforme o código abaixo. Nesse teste, é instanciado um objeto do tipo *User*, são adicionadas e valorizados os atributos *username, displayName e password*, então é realizada uma requisição HTTP POST para o servidor, enviado no corpo da requisição o objeto usuário e então o teste irá se certificar que o código de *status* HTTP que retornou do servidor, seja um **200 OK**.

```java
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ActiveProfiles("test")
public class UsuarioControllerTest {
	@Autowired
	TestRestTemplate testRestTemplate;
	
	@Test
	public void postUser_whenUserIsValid_receiveOk() {
		User user = new User();
		user.setUsername(“test-user”);
		user.setDisplayName(“test-Display”);
		user.setPassword(“P4ssword”);
		ResponseEntity<Object> response = testRestTemplate.postForEntity(“/users”, user, Object.class);
		assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
	}
}
```

Com o teste implementado será necessário começar resolver os problemas de código para obter-se o comportamento esperado da API. Inicialmente será criado uma classe **User**, com os atributos **username**, **displayName** e **password**. A classe deve ser criada na pasta **/src/main/java** no pacote **br.edu.utfpr.pb.pw44s.model**.  Note que no exemplo a classe possui as anotações **@Getter e @Setter** que vem do **lombok**, dependência que foi adicionada ao projeto. Por meio dessa anotação, ao compilar a classe, a biblioteca **lombok** gera os métodos *getters* e *setters* evitando assim que seja necessário criar esses códigos manualmente durante o desenvolvimento. Outras anotações do **lombok** serão utilizadas dentro deste projeto, sempre com a mesma intenção, evitar escrever código e deixar nossas classes mais limpas. Agora a classe **User** pode ser importada dentro da classe de teste.

```java
package br.edu.utfpr.pb.pw44s.model;

@Getter @Setter
public class User {
	private String username;
	private String displayName;
	private String password;
}
```
O próximo passo é criar a versão inicial da classe **UserController**, dentro do pacote **br.edu.utfpr.pb.pw44s.controller**, essa classe deve ter um método que aceita uma requisição do tipo HTTP POST para a URL  */users*. Por meio da anotação **@RestController** uma classe pode criar métodos para receber requisições HTTP. A anotação **@RequestMapping("users")** serve para que essa classe trate todas as requisições vindas em **/users**, independente do método HTTP. Por fim, foi criado o método **createUser()** o qual, por meio da anotação **@PostMapping** irá atender uma requisição do tipo HTTP POST na URL */users*. Feito isso será possível executar o teste. Esse vai passar, por mais que o método não tenha nada implementado, ao ser chamado ele vai retornar como resposta o ***HTTP Status: 200 OK***, que é o parâmetro esperado pelo primeiro teste criado. Ou seja, agora foi criado o primeiro *endpoint* da API REST.

```java
package br.edu.utfpr.pb.pw44s.controller;

@RestController
@RequestMapping("users")
public class UserController {

	@PostMapping
	void createUser() {
	}
}
```

O próximo teste será utilizado para verificar se após receber a requisição HTTP do tipo POST, o usuário enviado na requisição HTTP POST foi efetivamente salvo no banco de dados. Agora será utilizado o *framework* **Spring Data** para armazenar o usuário no banco de dados.

```java
//...
public class UsuarioControllerTest {
	@Autowired
	UserRepository userRepository;
	//...
	@Test
	public void postUser_whenUserIsValid_userSavedToDatabase() {
		User user = createValidUser();
		testRestTemplate.postForEntity(“/users”, user, Object.class);
		// Agora será necessário garantir que os dados do usuário foram salvos no Banco de Dados.
		assertThat(userRepository.count()).isEqualTo(1);
	}
}
```
O primeiro passo para resolver o teste é fazer com que a classe **User** possa ser lida como uma entidade que pode ser persistida no banco de dados por meio da anotação **@Entity**. Essa anotação faz parte da Java™ Persistence API (JPA), que é uma especificação oficial que descreve como deve ser o comportamento dos *frameworks* de persistência Java que desejarem implementá-la. Toda a classe que é mapeada com a anotação @Entity deve possuir uma chave primária e a mesma deve ser anotada com **@Id**. Além disso é necessário informar como será gerado o incremento da chave primária, o que deve ser feito por meio da anotação **@GeneratedValue**, a qual por padrão incrementa o **Id** automaticamente somando 1 ao valor da chave primária a cada novo registro.
```java
\\...
@Entity
@Getter @Setter
public class User {

	@Id
	@GeneratedValue
	private long id;
	private String username;
	\\... o restante da classe permanece igual
}
```
Agora é necessário criar as operações de escrita e leitura no banco de dados, isso por ser feito por meio da *interface* **JpaRepository**, disponibilizada pelo *framework* Spring Data. A *interface* **UserRepository** será criada dentro do pacote **br.edu.utfpr.pb.pw44s.repository**. Ao herdar as características de **JpaRepository** a *interface* conta com os principais métodos CRUD, tais como *save(), delete(), findAll(), findById()*, entre outros. Agora a classe **UserRepository** pode ser importada dentro da classe de teste.

```java
public interface UserRepository extends JpaRepository<User, Long> {
}
```
Agora é possível utilizar a interface **UserRepository ** para persistir um usuário no banco de dados. Nesse momento será criada a classe **UserService**, dentro do pacote **br.edu.utfpr.pb.pw44s.service**, para controlar as operações realizadas com a interface **UserRepository** e o banco de dados. Assim é possível manter todas as regras de negócio da aplicação fora da classe **controller**, além disso também é possível fazer o controle transacional do banco de dados por meio da classe **UserService**.

```java
@Service
public class UserService {
	UserRepository userRepository;
	
	public UserService(UserRepository userRepository) {
		super();
		this.userRepository = userRepository;
	}
	public User save (User user){
		return userRepository.save(user);
	}
}
```
Para salvar o usuário basta fazer a injeção de **UserService **, então utilizar o método ***userService.save()*** que espera como parâmetro de entrada um objeto do tipo **User**, o objeto será persistido no banco de dados. Nesse momento é possível executar o teste e o mesmo vai passar.

```java
@RestController  
@RequestMapping("users")  
public class UserController {  
	@Autowired  
	private UserService userService;  
  
    @PostMapping  
	void createUser(@RequestBody User user) {  
        userService.save(user);    
	}
}
```

Para evitar problemas durante a execução dos testes é importante limpar o banco de dados a cada execução, para isso será criado um método que remove os registros do banco a cada execução, ou seja, cada teste irá executar de maneira independente. O método **cleanup()** será precedido da anotação **@BeforeEach** que irá garantir que o método seja executado, limpando a tabela de usuários, antes de cada teste.

``` java
//...
public class UsuarioControllerTest {
	//...
	@BeforeEach
	public void cleanup() {
		userRepository.deleteAll();
		testRestTemplate.getRestTemplate().getInterceptors().clear();
	}
	//...
}
```

Agora é possível testar a API fazendo uma requisição HTTP fora do ambiente de testes. Como ainda não foi iniciada a criação do cliente com React, é necessário utilizar um *software* como o Postman ou Insomnia para fazer as requisições. Antes de realizar o teste no **software** é necessário fazer alguns ajustes no projeto. Primeiro será necessário criar um arquivo de configuração para que tenhamos acesso ao banco de dados que está sendo utilizado durante os testes, o H2. Dentro da pasta **/src/main/resources/** deverá ser criado o arquivo **application.yml**.  Muito cuidado na **indentação** do código do aquivo **yml** pois é a maneira que ele utiliza para acessar a árvore de propriedades. As configurações servem para que seja possível gerar um nome de banco de dados único ao executara aplicação (*jdbc:h2:mem:testdb*) e para que possa ser acessado o console do banco de dados por meio da URL [http://localhost:8080/h2-console](http://localhost:8080/h2-console).

```yml
spring:
	datasource:
		generate-unique-name: false
	h2:
		console:
			enabled: true
			path: /h2-console
```

Ao acessar a URL [http://localhost:8080/h2-console](http://localhost:8080/h2-console) em um navegador irá abrir a tela de conexão com o banco de dados **H2** a configuração está praticamente pronta, bastando alterar a URL de conexão com o banco para: **jdbc:h2:mem:testdb**. Ao clicar para realizar a conexão temos acesso ao banco de dados gerado, por enquanto foi criada apenas a tabela **tb_user**, ao clicar na tabela é habilitado o console no qual podemos realizar consultas. Ao fazer um **select * from tb_user** e executar o comando irá resultar em uma tabela vazia como resultado, para adicionar um usuário no banco de dados será utilizado o Postman.

### Realizando uma requisição HTTP POST por meio do Postman
Ao abrir o Postam basta clicar em **File > New Tab** e uma nova aba para realizar requisições HTTP será aberta. No método selecionar a opção **POST** e na URL [http://localhost:8080/users](http://localhost:8080/users). O próximo passo é configurar o corpo da requisição com um objeto JSON representando um usuário. Clicar na aba **Body** marcar a opção **raw** e no final das opções selecionar **JSON**. Com isso é possível adicionar no corpo da requisição o objeto que representa um usuário.

```json
{
	"username" : "user-test",
	"displayName" : "user-dispay-test",
	"password": "P4ssword"
}
```
Adicionado o **JSON** basta clicar em send e a requisição será enviada para a API, o retorno que aparece em **Response** é um **200 OK** sem nenhum outro texto, pois é assim que está o código por enquanto. Agora é possível executar novamente o comando **select * from tb_user** no console do banco de dados e consultar o usuário que foi adicionado.

### Continuando o desenvolvimento da API

No próximo teste será retornado ao cliente que chama a API além do **status HTTP**, uma mensagem de sucesso. A mensagem irá retornar por meio de um objeto da classe **GenericResponse**. O código foi refatorado para adicionar a constante **API_USERS** que irá armazenar a **URL** para os recursos disponíveis no *controller* de usuário. Outra ajuste foi a adição do método **createValidUser()**, já que a criação de um usuário válido irá ser realizada em vários testes, assim não será necessário ficar repetindo código para instanciar um usuário. Então, após criado um usuário válido, é realizada uma requisição do tipo **HTTP POST** para **/users** e como resultado espera-se que um objeto do tipo **GenericResponse** possua um atributo chamado **message** e que esse atributo não seja nulo.

```java
//...
public class UsuarioControllerTest {
	private static final String API_USERS = "/users";
	
	//... testes anteriores
	
	@Test
	public void postUser_whenUserIsValid_receiveSuccessMessage() {
		User user = createValidUser();
		ResponseEntity<GenericResponse> response = testRestTemplate.postForEntity(API_USERS, user, GenericResponse.class);
		assertThat(response.getBody().getMessage()).isNotNull();
	}
	
	private User createValidUser() {  
	    User user = new User();  
	    user.setUsername("test-user");  
	    user.setDisplayName("test-display");  
	    user.setPassword("P4ssword");  
	    return user;
	}
}
```

A classe **GenericResponse** será criada no pacote **br.edu.utfpr.pb.pw44s.shared** e por enquanto terá apenas o atributo **message**.

```java
@Data  
@NoArgsConstructor  
public class GenericResponse {  
	private String message;  
	public GenericResponse(String message) {  
	    this.message = message;  
	}  
}
```

A próxima alteração de código será realizado no método **createUser()** da classe **UserController**, que agora deverá retornar um objeto do tipo **GenericResponse**. Após essa alteração o teste criado irá passar. Para visualizar o comportamento na prática a requisição pode ser realizada novamente por meio do Postman.

```java
	\\...
	@PostMapping  
	public ResponseEntity<GenericResponse> createUser(@RequestBody User user) {  
		userService.save(user); 
		GenericResponse genericResponse = new GenericResponse();  
		genericResponse.setMessage("User saved."); 
		return ResponseEntity.ok(genericResponse);  
	}
	\\...
```
Com essa etapa finalizada, agora serão adicionadas algumas melhorias no código e na maneira com que os dados são persistidos. Ao fazer o **select** no banco de dados é possível observar que a coluna **password** está sendo armazenada como texto, o que não é uma boa prática. O teste a seguir irá validar se a senha salva no banco está diferente da senha que foi enviada para cadastro, o que sinaliza que ela estará criptografada no banco de dados.

```java
	@Test
	public void postUser_whenUserIsValid_passwordIsHashedInDatabase() {
		User user = createValidUser();
		testRestTemplate.postForEntity(API_USERS, user, Object.class);
		List<User> users = userRepository.findAll();
		User userBD = users.get(0);
		assertThat(userBD.getPassword()).isNotEqualTo(user.getPassword());
}
```

A criptografia da senha será realizada na classe **UserService** para evitar que regras de negócio da aplicação sejam implementadas na classe *controller*. Para criptografia da senha será utilizada a classe **BCryptPasswordEncoder**[6]. Ao executar o método **bCryptPasswordEncoder.encode()** a senha será criptografada antes de ser salva no banco. Ao executar o teste ele vai passar. Para visualizar na prática só executar a requisição via Postman e executar o comando **select * from tb_user** no console do **H2**.

```java
@Service  
public class UserService {
	UserRepository userRepository;  
	BCryptPasswordEncoder bCryptPasswordEncoder;  
  
	public UserService(UserRepository userRepository) {  
	    this.userRepository = userRepository;  
		this.bCryptPasswordEncoder = new BCryptPasswordEncoder();  
	}  
	
	public User save(User user) {
		user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()) );  
		return userRepository.save(user);
	}
}
```

Com isso está finalizado o básico do cadastro de usuário na API, agora será realizada a validação dos dados obrigatórios do usuário, pois por enquanto é possível cadastrar um usuário sem informar todos os dados, pois os mesmos não estão sem validados.

### Validando os dados de cadastro do usuário

Para realizar a validação dos dados obrigatórios da entidade na API, será utilizada a especificação **Java Bean Validation** [7] por meio da implementação Hibernate Validator. Serão utilizados os validadores padrão e será tratada a customização das mensagens de erro.

Até o momento só foram testados os casos de sucesso na API. Mas sabe-se que não é a realidade, pois constantemente os usuário preenchem os formulários no lado cliente e acabam passando dados inválidos para o servidor. Por isso serão validadas todas as entradas de usuário, tanto no *front-end* quanto no *back-end* da aplicação.

Nesse primeiro teste será validado o caso de recebimento do campo **username** como nulo. Esse teste também será criado na classe **UsuarioControllerTest ** e irá testar se, caso o campo **username** estiver nulo, a resposta **HTTP** recebida deverá ser **400 BAD_REQUEST**.

```java
//...
public class UsuarioControllerTest {
	//...
	@Test
	public void postUser_whenUserHasNullUsername_receiveBadRequest() {
		User user = createValidUser();
		user.setUsername(null);
		ResponseEntity<Object> response = postSignUp(user, Object.class);
		assertThat(response.getStatusCode()).isEqualTo(HttpStatus.BAD_REQUEST);
	}
	//...
}
```

Para resolver esse teste o inicialmente será adicionada a anotação **@NotNull** (importada de: import jakarta.validation.constraints.NotNull;) no campo **username** da classe **User**, conforme o código abaixo.

```java
//...
import jakarta.validation.constraints.NotNull;

@Entity(name = "tb_user")  
@Getter @Setter
public class User {  
  
    @Id  
	@GeneratedValue  private long id;  
     
	@NotNull
    private String username;  
	private String displayName;  
    private String password;  
}
```

Com a anotação feita será delegado ao *controller* (**UserController**) validar o usuário antes da entrada no método que realiza a persistência dos dados. Será utilizada a anotação **@Valid** (importado de: import jakarta.validation.Valid;) antes da declaração do objeto user no médoto *createUser()*. Com isso o campo será validado e o cliente da API irá receber uma mensagem criada pelo Spring informando que o campo **username** não pode ser nulo.

```java
@RestController  
@RequestMapping("users")  
public class UserController {  
    private final UserService userService;  
  
    public UserController(UserService userService) {  
        this.userService = userService;  
    }  
  
	@PostMapping  
	public ResponseEntity<GenericResponse> createUser(@RequestBody @Valid User user) {  
		userService.save(user); 
		GenericResponse genericResponse = new GenericResponse();  
		genericResponse.setMessage("User saved."); 
		return ResponseEntity.ok(genericResponse);  
	}
```

O mesmo teste (**UserControllerTest**) será realizado para o campo **password** da classe **User**.

```java
	@Test
	public void postUser_whenUserHasNullPassword_receiveBadRequest() {
		User user = createValidUser();
		user.setPassword(null);
		ResponseEntity<Object> response = postSignUp(user, Object.class);
		assertThat(response.getStatusCode()).isEqualTo(HttpStatus.BAD_REQUEST);
	}
```
Para resolver o teste será adicionada a anotação **@NotNull** no atributo **password**. E será a única modificação necessária, pois o **@Valid** presente na classe **UserController** será responsável por todas as validações necessárias de cada atributo da classe **User**. Existem outras validações que podem ser utilizadas nos atributos das classes, para conhecê-las basta acessar a documentação do  **Java Bean Validation** [7]. No código abaixo algumas outras anotações foram adicionadas nos atributos da classe **User**.

```java
@Entity(name = "tb_user")  
@Getter @Setter
public class User {  
  
    @Id  
	@GeneratedValue  private long id;  
     
	@NotNull
	@Size(min = 4, max = 255)  // valida para que o atributo tenha entre 4 e 255 caracteres
	private String username;  
	  
	@NotNull // valida para que o atributo não seja nulo 
	private String displayName;  
	  
	@NotNull  
	@Size(min = 6, max = 254)  
	@Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).*$")   //valida para que o atributo tenha pelo menos 1 letra maiúscula, 1 letra minúscula e 1 número.
	private String password; 
}
```

### Utilizando *Data Transfer Object* (DTO) para transferência de dados entre o cliente e o servidor

O *Data Transfer Object* (DTO) é um padrão de design de software utilizado para transferência de dados entre diferentes camadas de uma aplicação. No projeto será utilizado para transferência de dados entre o cliente e a API Rest. O primeiro passo para isso será a criação de um DTO para representar a classe de usuário, será a classe UserDTO e será criada no pacote: **br.edu.utfpr.pb.pw44s.server.dto**, conforme o código abaixo:

```java
package br.edu.utfpr.pb.pw44s.server.dto;  
 
import br.edu.utfpr.pb.pw44s.server.model.User;  
import lombok.AllArgsConstructor;  
import lombok.Data;  
import lombok.NoArgsConstructor;  
  
import jakarta.validation.constraints.NotNull;  
import jakarta.validation.constraints.Pattern;  
import jakarta.validation.constraints.Size;  
  
@Data  
@NoArgsConstructor  
@AllArgsConstructor  
public class UserDTO {  
    private Long id;  
  
    @NotNull  
 @Size(min = 4, max = 50)  
    private String username;  
  
    @NotNull  
 @Size(min = 4, max = 50)  
    private String displayName;  
  
    @NotNull
    @Size(min = 6)  
    @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).*$")  
    private String password;  
  
    public UserDTO(User user) {  
        this.id = user.getId();  
        this.displayName = user.getDisplayName();  
        this.username = user.getUsername();  
    }  
}
```
O DTO criado para representar a classe User é bem semelhante a classe, apenas não possui a anotação *@Entity* pois os objetos dessa classe não serão persistidos no banco de dados, eles vão servir apenas para a transferência de dados entre o cliente e a API.
A próxima etapa vai ser ajustar a classe **UserController**, pois ao invés de receber diretamente um objeto do tipo **User**, agora a aplicação vai esperar um objeto do tipo **UserDTO**. Antes disso vamos criar uma classe de configuração para instanciar  um objeto do tipo modelMapper, pois uma tarefa que será sempre necessária ao utilizar DTOs é a conversão da classe *model* para DTO e vise-versa. A classe **WebConfig** vai ter um único método para instanciar um objeto do tipo **ModelMapper** e será criada no pacote **br.edu.utfpr.pb.pw44s.server.config**.

```java
package br.edu.utfpr.pb.pw44s.server.config;  

import org.modelmapper.ModelMapper;  
import org.springframework.context.annotation.Bean;  
import org.springframework.context.annotation.Configuration;  
  
@Configuration  
public class WebConfig {  
    @Bean  
	public ModelMapper modelMapper() {  
        return new ModelMapper();  
    }  
}
```
Agora será ajustada a classe **UserController**:

```java
package br.edu.utfpr.pb.pw44s.server.controller;  
  
import br.edu.utfpr.pb.pw44s.server.dto.UserDTO;  
import br.edu.utfpr.pb.pw44s.server.model.User;  
import br.edu.utfpr.pb.pw44s.server.service.UserService;  
import br.edu.utfpr.pb.pw44s.server.shared.GenericResponse;  
import org.modelmapper.ModelMapper;  
import org.springframework.http.ResponseEntity;  
import org.springframework.web.bind.annotation.PostMapping;  
import org.springframework.web.bind.annotation.RequestBody;  
import org.springframework.web.bind.annotation.RequestMapping;  
import org.springframework.web.bind.annotation.RestController;  
import jakarta.validation.Valid;  
  
@RestController  
@RequestMapping("users")  
public class UserController {    
    private final UserService userService;  
    private final ModelMapper modelMapper;  
  
    public UserController(UserService userService, ModelMapper modelMapper) {  
        this.userService = userService;  
        this.modelMapper = modelMapper;  
    }  
  
    @PostMapping  
	public ResponseEntity<GenericResponse> createUser(@Valid @RequestBody UserDTO user) {  
        User userEntity = modelMapper.map(user, User.class);  
        userService.save(userEntity);  
        GenericResponse genericResponse = new GenericResponse();  
        genericResponse.setMessage("User saved.");  
        return ResponseEntity.ok(genericResponse) ;  
    }    
}
```

Após esse ajuste, não será necessário fazer mais nenhuma modificação na aplicação e os testes e as requisições realizadas anteriormente irão funcionar da mesma maneira. Apenas adicionamos uma camada de abstração dos dados que trafegam entre as diferentes camadas da solução que está sendo desenvolvida.


### Adicionando Autenticação e Autorização com Spring Security

O conteúdo abordado na sequência é o conceito de autenticação e autorização com o *framework* **Spring Security**[8]. Neste projeto será criado um arquivo de configuração para sobrescrever alguns comportamentos padrão do **Spring Security**. A classe **User** será utilizada para criar os objetos dos usuários que poderão se autenticar na API. E a interface **UserRepository** será utilizada para criar a consulta que irá retornar o usuário do banco de dados.

Além disso, foram criadas dentro dos pacotes **security** e **service** as demais classes utilizadas na configuração do Spring Security:
- **AuthenticationResponse**:
- **EntryPointUnauthorizedHandler**:  classe utilizada para definir o tipo de resposta ao cliente quando ocorrer um erro no processo de autenticação.
- **JWTAuthenticationFilter**: classe utilizada durante o processo de autenticação de usuário.
- **JWTAuthorizationFilter**: classe utilizada durante o processo de autorização de um usuário já autenticado.
- **SecurityConstants**: classe contendo as constantes utilizadas pelas classes de configuração do Spring Security.
- **WebSecurity**: classe em que serão realizadas todas as configurações do Spring Security.
- **AuthService**: classe de serviço que estará no pacote *service* e vai ser utilizada para implementar o método de busca do usuário no banco de dados.
- **AuthenticationResponse**: classe utilizada para definir o objeto de retorno com o Token criado e dados do usuário ao finalizar a autenticação.
- **UserResponseDTO**: classe que será utilizada para  montar a resposta ao usuário autenticado com sucesso, irá representar o usuário autenticado.
- **AuthorityResponseDTO**: classe que será utilizada para  montar a resposta ao usuário autenticado com sucesso, irá representar uma permissão de usuário.

#### Ajuste na classe ServerApplication
O primeiro passo a ser realizado para o **Spring Security** funcionar é retirar o trecho de código *exclude = SecurityAutoConfiguration.class* da classe **ServerApplication**, pois agora é necessário que o *framework* Spring traga algumas configurações já definidas por convenção no Spring Boot. Por padrão, ao retirar essa configuração o **Spring Security** volta a funcionar na aplicação e todas as rotas da API passam a necessitar de autenticação. Ou seja nesse momento os testes vão parar de funcionar e, ao tentar fazer uma requisição **HTTP POST** para a URL **/users** da API o retorno será um código **HTTP** **403 FORBIDEN**, mesmo todos os campos estando corretos, pois o Spring Security está validando o acesso às rotas. Abaixo está o código da classe *ServerApplication* após a remoção da configuração *exclude = SecurityAutoConfiguration.class*.

```java
@SpringBootApplication
public class ServerApplication {  
   public static void main(String[] args) {  
      SpringApplication.run(ServerApplication.class, args);  
  }   
}
``` 

#### Criação da classe SecurityConstants
A classe **SecurityConstants** irá conter as constantes utilizadas pelas classes de configuração do Spring Security. As constantes da classe são a chave utilizada para gerar o Token, o tempo de validade do Token, o prefixo do Token e o nome do atributo do cabeçalho da requisição HTTP que irá conter o Token no processo de autorização.

```java
package br.edu.utfpr.pb.pw44s.server.security;  
public class SecurityConstants {  
    public static final String SECRET = "utfpr"; // secret utilizado para gerar o token  
	public static final long EXPIRATION_TIME = 86400000; // 1 dia = 60*60*24*1000  
	public static final String TOKEN_PREFIX = "Bearer "; // tipo da autenticação  
	public static final String HEADER_STRING = "Authorization"; // header que será passado ao server com o token  
}
```

#### Criação da classe EntryPointUnauthorizedHandler
A classe **EntryPointUnauthorizedHandler** implementa a interface *AuthenticationEntryPoint * do *framework* Spring Security e será utilizada para definir o tipo de resposta ao cliente quando ocorrer um erro no processo de autenticação, ao ocorrer a exceção durante a autenticação o Spring irá chamar o método  **commence()** presente na classe.

```java
package br.edu.utfpr.pb.pw44s.server.security;  
  
import org.springframework.http.HttpStatus;  
import org.springframework.security.core.AuthenticationException;  
import org.springframework.security.web.AuthenticationEntryPoint;  
import org.springframework.stereotype.Component;  
import jakarta.servlet.ServletException;  
import jakarta.servlet.http.HttpServletRequest;  
import jakarta.servlet.http.HttpServletResponse;  
import java.io.IOException;  
  
@Component("authenticationEntryPoint")  
public class EntryPointUnauthorizedHandler implements AuthenticationEntryPoint {

    @Override  
	public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException, ServletException {  
        response.setStatus(HttpStatus.UNAUTHORIZED.value());  
        response.sendError(HttpStatus.UNAUTHORIZED.value(), HttpStatus.UNAUTHORIZED.getReasonPhrase());  
    }
}
```

#### Criação da classe Web Security
Para configurar o **Spring Security** será criada a classe **Web Security** no pacote **br.edu.utfpr.pb.pw44s.server.security**. Nessa classe serão sobrescritas as configurações padrão do Spring Security, por isso ela recebe a anotação **@EnableWebSecurity** e como serão criados objetos compartilhados a anotação **@Configuration**. O objeto **authService** será explicado na sequência do texto e é utilizado para buscar um usuário no banco.  O objeto **authenticationEntryPoint** é responsável por realizar o tratamento de exceção quando o usuário informar credenciais incorretas ao autenticar-se. O método **filterChain()** retorna um objeto do tipo **SecurityFilterChain**, nesse método serão sobrescritas algumas configurações padrão do Spring Security. Essas configurações serão alteradas por meio do objeto **http** instanciado de **HttpSecurity**, nele podem ser alteados os objetos de tratamento de erro, quais rotas da aplicação serão autenticadas/autorizadas, as rotas para autenticação, controle do tipo de sessão e no caso desse projeto os filtros utilizados na Autenticação (**authenticationManager**) e autorização dos usuários (**authorizationManager**), conforme pode ser observado nos comentários do código abaixo.

```java
package br.edu.utfpr.pb.pw44s.server.security;  
  
import br.edu.utfpr.pb.pw44s.server.service.AuthService;  
import lombok.SneakyThrows;  
import org.springframework.context.annotation.Bean;  
import org.springframework.context.annotation.Configuration;  
import org.springframework.http.HttpMethod;  
import org.springframework.security.authentication.AuthenticationManager;  
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;  
import org.springframework.security.config.annotation.web.builders.HttpSecurity;  
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;  
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;  
import org.springframework.security.config.annotation.web.configurers.HeadersConfigurer;  
import org.springframework.security.config.http.SessionCreationPolicy;  
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;  
import org.springframework.security.crypto.password.PasswordEncoder;  
import org.springframework.security.web.AuthenticationEntryPoint;  
import org.springframework.security.web.SecurityFilterChain;  
import org.springframework.web.cors.CorsConfiguration;  
import org.springframework.web.cors.CorsConfigurationSource;  
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;  
  
import java.util.List;  
  
import static org.springframework.security.web.util.matcher.AntPathRequestMatcher.antMatcher;  
  
@EnableWebSecurity  
@Configuration  
public class WebSecurity {  
	// Service responsável por buscar um usuário no banco de dados por meio do método loadByUsername()  
	private final AuthService authService;  
    // Objeto responsável por realizar o tratamento de exceção quando o usuário informar credenciais incorretas ao autenticar-se.  
	private final AuthenticationEntryPoint authenticationEntryPoint;  
  
    public WebSecurity(AuthService authService, AuthenticationEntryPoint authenticationEntryPoint) {  
        this.authService = authService;  
        this.authenticationEntryPoint = authenticationEntryPoint;  
    }  
  
    @Bean  
	@SneakyThrows
	public SecurityFilterChain filterChain(HttpSecurity http) {  
        AuthenticationManagerBuilder authenticationManagerBuilder =  
                http.getSharedObject(AuthenticationManagerBuilder.class);  
        authenticationManagerBuilder.userDetailsService(authService).passwordEncoder(passwordEncoder());  
        // authenticationManager -> responsável por gerenciar a autenticação dos usuários  
		AuthenticationManager authenticationManager = authenticationManagerBuilder.build();  
  
        //Configuração para funcionar o console do H2.  
		http.headers(headers -> headers.frameOptions(HeadersConfigurer.FrameOptionsConfig::disable));  
        // desabilita o uso de csrf  
		http.csrf(AbstractHttpConfigurer::disable);  
        // Adiciona configuração de CORS  
		http.cors(cors -> corsConfigurationSource());  
        //define o objeto responsável pelo tratamento de exceção ao entrar com credenciais inválidas  
		http.exceptionHandling(exceptionHandling -> exceptionHandling.authenticationEntryPoint(authenticationEntryPoint));  
		  
        // configura a authorização das requisições  
		http.authorizeHttpRequests((authorize) -> authorize  
                //permite que a rota "/users" seja acessada, mesmo sem o usuário estar autenticado desde que o método HTTP da requisição seja POST  
				.requestMatchers(antMatcher(HttpMethod.POST, "/users/**")).permitAll()  
                //permite que a rota "/error" seja acessada por qualquer requisição mesmo o usuário não estando autenticado
                .requestMatchers(antMatcher("/error/**")).permitAll()  
                //permite que a rota "/h2-console" seja acessada por qualquer requisição mesmo o usuário não estando autenticado  
				.requestMatchers(antMatcher("/h2-console/**")).permitAll()  
                //as demais rotas da aplicação só podem ser acessadas se o usuário estiver autenticado  
				.anyRequest().authenticated()  
        );  
        http.authenticationManager(authenticationManager)  
                //Filtro da Autenticação - sobrescreve o método padrão do Spring Security para Autenticação.  
				.addFilter(new JWTAuthenticationFilter(authenticationManager, authService))  
                //Filtro da Autorização - - sobrescreve o método padrão do Spring Security para Autorização.  
				.addFilter(new JWTAuthorizationFilter(authenticationManager, authService))  
                //Como será criada uma API REST e todas as requisições que necessitam de autenticação/autorização serão realizadas com o envio do token JWT do usuário, não será necessário fazer controle de sessão no *back-end*.  
				.sessionManagement(sessionManagement -> sessionManagement.sessionCreationPolicy(SessionCreationPolicy.STATELESS));  
		return http.build();  
	}  
  
    // Criação do objeto utilizado na criptografia da senha, ele é usado no UserService ao cadastrar um usuário e pelo authenticationManagerBean para autenticar um usuário no sistema.  
	@Bean  
	public PasswordEncoder passwordEncoder() {  
	    return new BCryptPasswordEncoder();  
    }
```

#### Ajustes na classe User

Para autenticar-se em um sistema qualquer geralmente precisamos ter credenciais, no caso deste projeto as credenciais para acesso serão gerenciadas pela classe **User** por meio dos campos **username** e **password**. Dessa maneira os objetos instanciados de **User** serão armazenados no banco de dados e utilizados posteriormente para autenticação e autorização. O processo de salvar um novo usuário já foi explicado no início deste projeto, já o processo de autenticação e autorização está sendo descrito agora. Por padrão, para autenticar-se em uma aplicação Spring Security é necessário realizar uma requisição do tipo **HTTP POST** para URL **/login**  (no caso dessa aplicação: http://localhost:8080/login), enviando no corpo da requisição os dados de usuário e senha no formato JSON, essa URL e verbo HTTP são padrão do Spring Security, mas caso necessário pode ser alterado na classe de configuração.

Agora serão descritas as configurações na classe **User**, **UserRepository** e a criação da classe **AuthService**. Como será utilizado o *framework* **Spring Security** para gerenciar a autenticação e autorização da API, deve-se obedecer a documentação do mesmo, que define que para utilizar uma classe criada na API a mesma deverá implementar a *interface* **UserDetails**. Essa *interface* exige a implementação de alguns métodos padrão , sendo os principais o **getUsername()**, o **getPassword()** e o **getAuthorities() **. O método **getUsername()** deve retornar o nome de usuário utilizado na autenticação (que pode ser outro campo da classe **User**, por exemplo, o campo email), nesse caso basta retornar **this.email** no método. O método **getPassword()** deverá retornar a senha e, por fim o método **getAuthorities() ** deverá retornar as permissões de usuário, nesse caso só teremos uma permissão, por isso o retorno é **return AuthorityUtils.createAuthorityList("Role_USER");**, ou seja será retornada uma *string* padrão para todos os usuários *Role_USER*.

```java
//... imports e pacotes
@Getter @Setter //Vai ser por meio do @Getter que serão retornados o getUsername e getPassowrd, uma vez que os campos utilizados na criação da classe tem os mesmos nomes dos métodos obrigatórios.
//É necessário implementar a interface UserDetails
public class User implements UserDetails {  
    @Id  
	@GeneratedValue
	private long id;  
  
    @UniqueUsername  
	@NotNull(message = "{br.edu.utfpr.pb.pw25s.username}")  
    @Size(min = 4, max = 255)  
    private String username;
  
    @NotNull  
    private String displayName;  
  
    @NotNull  
    @Size(min = 6, max = 254)  
    @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).*$")  
    private String password;  
  
	//Método que irá retornar a lista de permissões
    @Override  
    @Transient 
    @JsonIgnore  
    public Collection<? extends GrantedAuthority> getAuthorities() {  
        return AuthorityUtils.createAuthorityList("Role_USER");  
    }  
  
    @Override  
    @Transient  
    public boolean isAccountNonExpired() {  
        return true;  
    }  
  
    @Override  
    @Transient  public boolean isAccountNonLocked() {  
        return true;  
    }  
  
    @Override  
    @Transient  public boolean isCredentialsNonExpired() {  
        return true;  
    }  
  
    @Override  
    @Transient  public boolean isEnabled() {  
        return true;  
    }  
}
```
Os demais métodos: **isAccountNonExpired(), isAccountNonLocked**, etc. estão retornando **true** por padrão, pois o Spring Security utiliza esses dados para verificar se a conta de usuário é válida. Nesse caso não foi implementado nenhum tipo de validação, mas esses métodos poderiam retornar valores armazenados no banco de dados.

#### Ajustes na UserRepository

Continuando a implementação do processo de autenticação e autorização, na interface **UserRepository** foi adicionadio a assinatura do método **findByUsername**. Esse método recebe como parâmetro o atributo **username** e retorna um objeto **User**. Esse método será utilizado pela classe **AuthService** para buscar o usuário que está tentando autenticar-se no sistema.

```java
\\...
@Repository  
public interface UserRepository extends JpaRepository<User, Long> {  
    User findByUsername(String username);  
}
```

#### Criação da classe AuthUserService

A classe **AuthUserService** implementa a interface do Spring Security **UserDetailsService**, a qual necessita a implementação do método **loadUserByUsername**, que recebe uma *string* (*username*) por parâmetro e retorna uma instancia de um objeto do tipo **UserDetails**, pois o Spring Security utiliza esse objeto para verificar se um usuário existe no banco. Caso exista o usuário o Spring Security irá comparar a senha criptografada no banco com a senha informada pelo usuário durante o processo de autenticação, além das permissões de usuário.

```java
\\...
@Service  
public class AuthUserService implements UserDetailsService {  
	private final UserRepository userRepository;  
	
	public AuthUserService(UserRepository userRepository) {  
        this.userRepository = userRepository;  
    }  

    @Override  
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {  
	    User user = userRepository.findByUsername(username);  
	    if(user == null) {  
	        throw new UsernameNotFoundException("User not found!");  
		}  
		return user;  
	}  
}
```

#### Criação das classes **AutenticationResponse**, **UserResponseDTO**, **AuthorityResponseDTO** e JWTAuthenticationFilter

Conforme configurado na classe **WebSecurity** um filtro chamado **JWTAuthenticationFilter** será criado para realizar o processo de autenticação. Essa classe herda as características de **UsernamePasswordAuthenticationFilter** que é a classe do Spring Security que é utilizada para autenticação via usuário e senha. O método **attemptAuthentication** que foi sobrescrito é chamado quando o usuário realiza uma requisição **HTTP** do tipo **POST** para URL **/login**. Esse método recebe como parâmetros um objeto **HttpServletRequest ** que contém todos os dados da requisição, ou seja, é possível extrair do corpo da requisição o usuário e senha informado pelo usuário no momento da autenticação. Como está sendo utilizado JSON para transferência de dados entre o cliente e a API será necessário enviar os dados nesse formato ({"username":"user","password":"P4ssword"}). Esses dados são recuperados dentro do método. É realizada  uma consulta no banco de dados para verificar se o usuário existe, caso exista a senha informada durante a autenticação é comparada com a senha armazenada no banco de dados e no caso de sucesso o usuário será autenticado. No caso de falha uma exceção (*Exception*) é gerada e o usuário irá receber como retorno o erro **HTTP 401**. No caso de sucesso será chamado o método **successfulAuthentication**, que também foi sobrescrito, para que seja gerado o **Token JWT** que será enviado para o cliente na resposta da requisição, assim o cliente poderá utilizar esse Token para realizar a autorização nas próximas requisições. O método **successfulAuthentication** recebe como parâmetro um objeto do tipo **HttpServletResponse** que é utilizado para enviar a resposta ao cliente que solicitou a autenticação. A aplicação irá retornar como resposta um **Token JWT** por meio de um objeto do tipo **AuthenticationResponse** que foi criado para retornar o Token e os dados do usuário autenticado para o cliente no formato JSON. Antes da classe **JWTAuthenticationFilter** serão implementadas as classes **AutenticationResponse**, **UserResponseDTO** e **AuthorityResponseDTO**, que servirão para montar a resposta enviada ao usuário, essas classes ficarão no pacote **br.edu.utfpr.pb.pw44s.server.security.dto**.

```java
package br.edu.utfpr.pb.pw44s.server.security.dto;  

import lombok.*;  
  
@Data  
@AllArgsConstructor  
@NoArgsConstructor  
@Builder  
public class AuthenticationResponse {  
    private String token;  
    private UserResponseDTO user;  
}
```

```java
package br.edu.utfpr.pb.pw44s.server.security.dto;  
  
import br.edu.utfpr.pb.pw44s.server.model.User;  
import lombok.*;  
import org.springframework.security.core.GrantedAuthority;    
import java.util.HashSet;  
import java.util.Set;  
  
@Data  
@Builder  
@NoArgsConstructor  
@AllArgsConstructor  
public class UserResponseDTO {  
  
    private String displayName;  
    private String username;  
    private Set<AuthorityResponseDTO> authorities;  
  
    public UserResponseDTO(User user) {  
        this.displayName = user.getDisplayName();  
        this.username = user.getUsername();  
        this.authorities = new HashSet<>();  
        for (GrantedAuthority authority: user.getAuthorities()) {  
            authorities.add( new AuthorityResponseDTO(authority.getAuthority()) );  
        }  
    }  
}
```

```java
package br.edu.utfpr.pb.pw44s.server.security.dto;  
 
import lombok.*;  
  
@Data  
@NoArgsConstructor  
@AllArgsConstructor  
@Builder  
public class AuthorityResponseDTO {    
    private String authority;  
}
```
Agora, com as classes para compor a resposta criadas, será criada a classe **JWTAuthenticationFilter**:
```java
package br.edu.utfpr.pb.pw44s.server.security;  
  
import br.edu.utfpr.pb.pw44s.server.model.User;  
import br.edu.utfpr.pb.pw44s.server.security.dto.AuthenticationResponse;  
import br.edu.utfpr.pb.pw44s.server.security.dto.UserResponseDTO;  
import br.edu.utfpr.pb.pw44s.server.service.AuthService;  
import com.auth0.jwt.JWT;  
import com.auth0.jwt.algorithms.Algorithm;  
import com.fasterxml.jackson.core.exc.StreamReadException;  
import com.fasterxml.jackson.databind.DatabindException;  
import com.fasterxml.jackson.databind.ObjectMapper;  
import lombok.NoArgsConstructor;  
import org.springframework.security.authentication.AuthenticationManager;  
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;  
import org.springframework.security.core.Authentication;  
import org.springframework.security.core.AuthenticationException;  
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;  
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;  
  
import jakarta.servlet.FilterChain;  
import jakarta.servlet.ServletException;  
import jakarta.servlet.http.HttpServletRequest;  
import jakarta.servlet.http.HttpServletResponse;  
import java.io.IOException;  
import java.util.Date;  
  
  
@NoArgsConstructor  
public class JWTAuthenticationFilter extends UsernamePasswordAuthenticationFilter {  
    private AuthenticationManager authenticationManager;  
    private AuthService authService;  
  
    public JWTAuthenticationFilter(AuthenticationManager authenticationManager, AuthService authService) {  
        this.authenticationManager = authenticationManager;  
        this.authService = authService;  
    }  
  
    @Override  
	public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {    
        try {  
            //Ao realizar um HTTP.POST com o conteúdno no formato JSON: {"username":"admin", "password":"P4ssword"}  
			//Obtém os dados de username e password utilizando o ObjectMapper para converter o JSON //em um objeto User com esses dados.  User credentials = new User();  
            User user = new User();  
            //Verifica se o usuário existe no banco de dados, caso não exista uma Exception será disparada  
 //e o código será parado de executar nessa parte e o usuário irá receber uma resposta //com falha na autenticação (classe: EntryPointUnauthorizedHandler)  if (request.getInputStream() != null && request.getInputStream().available() > 0) {  
                credentials = new ObjectMapper().readValue(request.getInputStream(), User.class);  
                user = (User) authService.loadUserByUsername(credentials.getUsername());  
            }  
            //Caso o usuário seja encontrado, o objeto authenticationManager encarrega-se de autenticá-lo.  
		    /* Como o authenticationManager foi configurado na classe WebSecurity e, foi informado o método  
			  de criptografia da senha, a senha informada durante a autenticação é criptografada e  
			  comparada com a senha armazenada no banco. Caso não esteja correta uma Exception será 
			  disparada Caso ocorra sucesso será chamado o método: successfulAuthentication dessa classe */
			return authenticationManager.authenticate(  
                    new UsernamePasswordAuthenticationToken(  
                            credentials.getUsername(),  
                            credentials.getPassword(),  
                            user.getAuthorities()  
                    )  
            );  
        } catch (StreamReadException e) {  
            throw new RuntimeException(e);  
        } catch (DatabindException e) {  
            throw new RuntimeException(e);  
        } catch (IOException e) {  
            throw new RuntimeException(e);  
        }  
    }  
  
    @Override  
	protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authResult) throws IOException, ServletException {  
	    User user = (User) authService.loadUserByUsername(authResult.getName());  
        // o método create() da classe JWT é utilizado para criação de um novo token JWT  
		String token = JWT.create()  		          
			   .withSubject(authResult.getName()) // o objeto authResult possui os dados do usuário autenticado, nesse caso o método getName() retorna o username do usuário foi autenticado no método attemptAuthentication. 
                //a data de validade do token é a data atual mais o valor armazenado na constante EXPIRATION_TIME, nesse caso 1 dia  
				.withExpiresAt( new Date(System.currentTimeMillis()  + SecurityConstants.EXPIRATION_TIME) )  
                //Por fim é informado o algoritmo utilizado para assinar o token e por parâmetro a chave utilizada para assinatura. O Secret também pode ser alterado na classe SecurityConstants que armazena alguns dados de configuração do Spring Security  
				.sign(Algorithm.HMAC512(SecurityConstants.SECRET));  
		response.setContentType("application/json");  
        response.getWriter().write(  
                new ObjectMapper().writeValueAsString(  
                        new AuthenticationResponse(token, new UserResponseDTO(user)))  
        );  
  
    }  
  
    @Override  
	protected AuthenticationSuccessHandler getSuccessHandler() {  
        return super.getSuccessHandler();  
    }  
}
```

#### Criação da classe JWTAuthorizationFilter

Entretanto, para que o Token sejá utilizado para autorizar no usuário nas novas requisições foi criada a classe **JWTAuthorizationFilter**, que será responsável por extrair o Token do cabeçalho da requisição **HTTP** e verificar se ele é válido. A classe herda de **BasicAuthenticationFilter ** e implementa o método **doFilterInternal**, esse método recebe como parâmetro um objeto do tipo HttpServletRequest, e é desse objeto que é extraído o Token do cabeçalho da requisição. Após pegar o Token do cabeçalho o mesmo é passado por parâmetro para o método **getAuthentication**, no qual é verificado a validade do Token, então é recuperado o **username** que está  no corpo do Token. Na sequência é verificado se o usuário que está tentando autorização ainda existe no banco de dados, caso exista o usuário é autorizado e a autorização é adicionada no contexto do Spring Security.

```java
public class JWTAuthorizationFilter extends BasicAuthenticationFilter {    
    private final AuthService authService;  
  
    public JWTAuthorizationFilter(AuthenticationManager authenticationManager,AuthService authService) {  
        super(authenticationManager);  
        this.authService = authService;  
    }  
  
    @Override  
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws IOException, ServletException {  
        //Recuperar o token do Header(cabeçalho) da requisição
        String header = request.getHeader(SecurityConstants.HEADER_STRING);  
        //Verifica se o token existe no cabeçalho
        if (header == null || !header.startsWith(SecurityConstants.TOKEN_PREFIX)) {  
            chain.doFilter(request, response);  
            return;  
        }  
		//Chama o método getAuthentication e retorna o usuário autenticado para dar sequência na requisição
        UsernamePasswordAuthenticationToken authenticationToken =  
                getAuthentication(request);  
		//Adiciona o usuário autenticado no contexto do spring security
		
		SecurityContextHolder.getContext().setAuthentication(authenticationToken);  
		chain.doFilter(request, response);  
    }  
  
    private UsernamePasswordAuthenticationToken  
                getAuthentication(HttpServletRequest request) {  
        String token = request.getHeader(SecurityConstants.HEADER_STRING);  
        if (token != null) {
	        //verifica se o token é válido e retorna o username  
            String username =  
                    JWT.require(Algorithm.HMAC512(SecurityConstants.SECRET))  
                            .build()  
                            .verify(token.replace(SecurityConstants.TOKEN_PREFIX, ""))  
                            .getSubject();  
            if (username != null) { 
	            // com posse do username é verificado se ele existe na base de dados 
                User user = (User) authService.loadUserByUsername(username);  
                //caso exista o usuário é autenticado e a requisição continua a ser executada.
                return new UsernamePasswordAuthenticationToken(username, null,  
                                    user.getAuthorities());  
            }  
        }  
        return null;  
    }  
}
```

#### Testes da autenticação e autorização

Para testar, poder ser utilizado o Postman ou Insomia para realizar uma requisição do tipo HTTP POST para a url */login*. Abaixo está o JSON que deverá ser enviado via **HTTP POST** para URL **/login** para autenticar-se na aplicação.
```json
	{"username":"user","password":"P4ssword"}
```

Abaixo está um exemplo de resposta ao cliente após a autenticação realizada com sucesso.
```json
{"token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.restante.dotoken"}
```

Com posse do Token recebido o cliente poderá realizar novas requisições ao servidor nas rotas que necessitam de autorização. Para isso basta enviar o Token no cabeçalho da requisição utilizando a chave **Authorization**.
`Authorization:  Bearer  <token>`

Com o Token validado e o usuário autenticado e autorizado adicionado adicionado no contexto do Spring Security, qualquer **endpoint** da aplicação que necessite de autorização para acesso precisa ser acessado enviando o token gerado durante a autenticação.

### Implementando o CRUD de Categorias
#### TO-DO

### Implementando o CRUD de Produtos
#### TO-DO

# Referências
[1] Spring Framework, https://spring.io/.

[2] JOHNSON, R. E.; FOOTE, B.. Designing reusable classes. Journal of Object-Oriented Programming, 1(2):22–35, 1988.

[3] Prasanna, D.R., Dependency Injection: Design Patterns Using Spring and Guice, isbn=9781933988559, Manning- Manning Pubs Co Series,  url: https://books.google.com.br/books?id=b6O6OgAACAAJ, 2009.

[4] Spring Data JPA - Disponível em: https://docs.spring.io/spring-data/jpa/docs/current/reference/html/#reference

[5] Fielding, Roy. Architectural Styles and the Design of Network-based Software Architectures  Disponível em: https://www.ics.uci.edu/~fielding/pubs/dissertation/fielding_dissertation.pdf

[6] BCryptPasswordEncoder. Disponível em: https://docs.spring.io/spring-security/site/docs/current/api/org/springframework/security/crypto/bcrypt/BCryptPasswordEncoder.html

[7] Java Bean Validation. Disponível em:  https://beanvalidation.org/3.0/

[8] Spring Security [https://spring.io/projects/spring-security](https://spring.io/projects/spring-security)

[9] CSRF Attack [https://docs.spring.io/spring-security/reference/features/exploits/csrf.html#csrf-explained](https://docs.spring.io/spring-security/reference/features/exploits/csrf.html#csrf-explained)
