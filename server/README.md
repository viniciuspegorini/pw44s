# Criando uma API RESTful com Spring Framework + Java

Neste projeto será desenvolvida uma API RESTFul (*back-end*) como parte da solução web proposta na disciplina PW44S - Programação para Web - Turma 4SI da Universidade Tecnológica Federal do Paraná - Campus Pato Branco. A API será desenvolvida utilizando o Spring Framework com auxílio de outras bibliotecas.

## <img src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/spring.png" alt="Spring" width="20" /> Spring Framework

O *framework* Spring é um conjunto de projetos que focam em levar produtividade ao programador. Auxiliando de maneira a aumentar a produtividade no desenvolvimento de aplicações Java com simplicidade e flexibilidade.   
No conjunto de *frameworks* Spring existe o Spring MVC para criação de aplicações web e serviços RESTful, o Spring Data, para  acesso a banco de dados, o Spring Security, para prover segurança em aplicações, e diversos outros projetos como computação em nuvem, microsserviços e *big data*, por exemplo.    
Os *frameworks* Spring são todos de código-fonte aberto (***Open Source***) e podem ser encontrados no [GitHub](https://github.com/spring-projects) [1].

## <img src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/java.png" alt="Java" width="20" /> Java EE  e Spring Framework

O Spring possui uma série de recursos implementados que não estão presentes no Java EE. Entretanto, o *framework* Spring também utiliza várias tecnologias que estão implementadas dentro do Java EE. Não existe uma concorrência entre o Spring e o Java EE, o Spring apenas veio para dar maior produtividade ao desenvolvedor com os recursos disponibilizados no *framework*.

## 💉 Injeção de Dependências (DI) e Inversão  de Controle (IoC) com Spring

A inversão de controle (IoC, do inglês *Inversion of Control*) consiste em transferir o controle da execução da aplicação para um contêiner de IoC, o qual chama a aplicação em determinados momentos da execução do software, como na ocorrência de um evento. Por meio da IoC o contêiner controla quais métodos da aplicação e em que contexto eles serão chamados [2].

A Injeção de dependências (DI, do inglês *Dependency Injection*) é um padrão de projeto usado para desacoplar classes de suas dependências dentro de uma aplicação, dessa maneira é possível  obter uma melhor divisão em módulos do software [3].

## <img src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/spring.png" alt="Spring" width="20" /> Spring Data JPA
O *framework* Spring Data JPA atua na camada de persistência de dados [4]. Ele auxilia o programador na criação dos repositórios da aplicação. O projeto (Spring Data JPA) está dentro do Spring Data que possui diversos outros projetos que auxiliam no processo de acesso e persistência de dados. Sendo os principais projetos:
- Spring Data Commons
- Spring Data for Apache Cassandra
- Spring Data Gemfire
- Spring Data KeyValue
- Spring Data LDAP
- Spring Data MongoDB
- Spring Data Redis
- Spring Data REST

## <img width="20" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rest.png" alt="REST" title="REST"/> REST

REST é a sigla para **Representational State Transfer** ou em português **Transferência de Estado Representacional.** Uma aplicação web RESTful expõe informações sobre si na apresentando seus recursos. Ela também possibilita ao cliente executar ações nesses recursos, como criar novos recursos (por exemplo, criar um novo usuário) ou alterar recursos existentes (por exemplo, editar os dados de um usuário).

Para que uma API web seja RESTful, é necessário  seguir um conjunto de regras ao escrevê-la. O conjunto de regras para uma API REST às tornará mais fáceis de usar e também mais fáceis de descobrir, o que significa que um desenvolvedor que está apenas começando a usar suas APIs terá mais facilidade em aprender como fazê-lo. Isso significa que quando uma API RESTful é chamada, o servidor _transfere_ para o cliente uma _representação_ do _estado_ do recurso solicitado.

REST não é uma arquitetura, biblioteca ou *framework*, é simplesmente um  **modelo** que é utilizado para projetar arquitetura de softwares distribuídos que fazem comunicação de dados pela rede, seja local ou a famosa Internet.

REST não é uma arquitetura ou *framework* pronto, é apenas um conjunto de regras que serve como modelo para desenvolver uma API. Esse modelo foi criado por Roy Fielding [5] um dos principais responsáveis e criadores do protocolo HTTP, basicamente, tudo que está online utiliza o protocolo HTTP ou o HTTPS que é a evolução do mesmo.

---
### ⚙️ Lista de Ferramentas

- <img src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/java.png" alt="Java" width="20" /> JDK 25

- IDE:
  - <img width="20" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/intellij.png" alt="IntelliJ" title="IntelliJ"/> [IntelliJ Idea](https://www.jetbrains.com/idea/) ou 
  - <img width="20" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/eclipse.png" alt="eclipse" title="eclipse"/> [Eclipse](https://eclipseide.org/)
  
---  
## 🛠️Criação do Projeto com Spring Boot

Durante as aulas será desenvolvido um projeto para controle de produtos classificados por categorias, com validação de usuários para acesso ao sistema. O desenvolvimento do projeto irá iniciar com o as configurações iniciais do projeto. Na sequência será desenvolvido o cadastro de usuários do sistema. Então, será realizada a etapa de autenticação dos usuários do sistema. Na sequência serão realizados os CRUDs de categoria e produtos.

### 1. <img width="20" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/spring_boot.png" alt="Spring Boot" title="Spring Boot"/> Spring Initializr

O projeto será criado utilizando como base o *framework* Spring Boot, que por sua vez permite que projetos com o Spring MVC, Data JPA e Security já venham configurados por meio de convenções.   
Será criado um projeto [Maven](https://maven.apache.org/) por meio da ferramenta web Spring Initializr: [https://start.spring.io/](https://start.spring.io/) com as seguintes configurações:  
O projeto será do tipo **Maven Project**.  
A linguagem será **Java**.  
A versão do Spring Boot será a última versão estável na data de criação do projeto (**4.0.3**).  
Os metadados do projeto são:
- Group: **br.edu.utfpr.pb.pw44s**
- Artifact: **server**
- Options:
  - Packaging: **Jar**
- Java: **25** ou superior (utilizar a versão instalada na máquina, preferência pela mais atual).

Em dependências devem ser selecionados os *frameworks*:
- Spring Web
- Spring Data JPA
- Spring Security
- Spring Devtools
- H2 Database (ou o driver do banco de sua preferência PostgreSQL, MySQL, etc...)
- Lombok
- Validation

O projeto está configurado e pode ser realizado o *download* do mesmo por meio do botão **GENERATE**. Extrair o conteúdo da arquivo para uma pasta e então importar o projeto na IDE. O conteúdo do arquivo `pom.xml` pode ser visualizado em: [arquivo pom.xml](https://github.com/viniciuspegorini/pw44s/blob/main/server/pom.xml).

**Importante**: Para importar o projeto na IDE deve ser selecionada a pasta em que está localizada o arquivo **pom.xml**, caso contrário a IDE não irá reconhecer os arquivos do projeto.

---
### 2. 🎨 Adicionando as novas bibliotecas

Além das bibliotecas selecionadas ao criar o projeto também será necessário adicionar à *tag* *<dependencies>* do pom.xml as seguintes bibliotecas:
- [java-jwt](https://mvnrepository.com/artifact/com.auth0/java-jwt)  - na versão 4.4.0 - utilizada na autenticação para gerar o *token* JWT.
- [mapstruct](https://mvnrepository.com/artifact/org.mapstruct/mapstruct) - na versão 1.6.3 - utilizada para conversão de objetos.

Conforme o código abaixo:
```xml 
<!-- ... restante do pom -->    
	<properties>  
		<java.version>25</java.version>
		<mapstruct.version>1.6.3</mapstruct.version>
	</properties>
	<dependencies>    
		<!-- ... restante das dependências -->      
		<!-- Autenticação JWT -->  
		<dependency>  
			<groupId>com.auth0</groupId>  
			<artifactId>java-jwt</artifactId>  
			<version>4.5.1</version>  
		</dependency>  
		<!-- Conversão de Objetos e DTOs - MapStruct -->  
		<dependency>  
			<groupId>org.mapstruct</groupId>  
			<artifactId>mapstruct</artifactId>  
			<version>${mapstruct.version}</version>  
		</dependency>
	</dependencies>
	<build>  
		<plugins>
			<plugin>
				<groupId>org.apache.maven.plugins</groupId>  
				<artifactId>maven-compiler-plugin</artifactId>  
				<configuration>
					<annotationProcessorPaths>
						<path>
							<groupId>org.mapstruct</groupId>  
							<artifactId>mapstruct-processor</artifactId>  
							<version>${mapstruct.version}</version>  
						</path>
						<path>
							<groupId>org.projectlombok</groupId>  
							<artifactId>lombok</artifactId>  
						</path>
						<path>
							<groupId>org.projectlombok</groupId>  
							<artifactId>lombok-mapstruct-binding</artifactId>  
							<version>0.2.0</version>  
						</path>
					</annotationProcessorPaths>
				</configuration>
			</plugin>
			<plugin>
				<groupId>org.springframework.boot</groupId>  
				<artifactId>spring-boot-maven-plugin</artifactId>  
				<configuration>
					<excludes>
						<exclude>
							<groupId>org.projectlombok</groupId>  
							<artifactId>lombok</artifactId>  
						</exclude>
					</excludes>
				</configuration>
			</plugin>
		</plugins>
	</build>  
</project>
```
---
### 3. 🗂️ Estrutura do projeto

Os pacotes serão criados durante o desenvolvimento do projeto.

```
src/
├── main/
│   ├── java/
│   │   └── br/
│   │       └── edu/utfpr/pb/
│   │           └── server/
│   │               ├── ServerApplication.java          # Classe principal anotada com @SpringBootApplication
│   │               ├── controller/                     # Controllers REST (ex: UserController)
│   │               ├── model/                          # Entidades JPA (ex: User)
│   │               ├── repository/                     # Interfaces de acesso a dados (ex: UserRepository)
│   │               ├── service/                        # Lógica de negócio (ex: UserService)
│   │               ├── security/                       # Configurações do Spring Security
│   │               ├── mapper/                         # Conversão de DTOs e Entities
│   │               └── dto/                            # Data Transfer Objects com validações
│   └── resources/
│       ├── application.properties                      # Configurações da aplicação
│       └── import.sql						            # Script de inicialização
├── test/                                               # Testes unitários e de integração
└── pom.xml                                             # Gerenciador de dependências Maven
```
---  
## ⌨️ Desenvolvimento da aplicação

### 1. ⚒️ Ajustando a estrutura inicial do projeto

O projeto Spring Boot vêm com uma série de configurações inicias que não precisamos nos preocupar, iniciando com a classe principal da aplicação a `ServerApplication`, nela por meio da anotação `@SpringBootApplication` todas as configurações serão carregadas.

#### 1.1 Desabilitando o Spring Security
O *framework* **Spring Security** por exemplo, já vem pré-configurado protegendo todas as URLs. Como ainda não vamos configurar a camada de segurança, será necessário adicionar a propriedade `exclude = SecurityAutoConfiguration.class` na classe `ServerApplication`, dessa maneira o **SpringBoot** vai ignorar as configurações de segurança, na sequência do desenvolvimento essa configuração será alterada para o processo de autenticação e autorização funcionar. O banco de dados em memória utilizando o **H2** também já é criado por padrão nesse momento, ou seja, todas as configurações necessárias para o início do desenvolvimento estão prontas. Abaixo está o código editado na classe principal do projeto a classe `ServerApplication`:

```java  
@SpringBootApplication(exclude = SecurityAutoConfiguration.class) 
public class ServerApplication {    
	public static void main(String[] args) {    
	    SpringApplication.run(ServerApplication.class, args);    
	} 
}  
``` 
Com as configurações básicas definidas será possível iniciar o desenvolvimento do projeto.

---
### 2. 🧔‍♂️Cadastro de Usuário

O desenvolvimento irá iniciar o cadastro de usuário o primeiro passo será criar o cadastro de um novo usuário.

#### 2.1 Classe UserControllerTest

O desenvolvimento será realizado por meio de *Test Driven Development* (TDD), e a primeira classe a ser criada será a `UserControllerTest` no pacote `test` dentro da pasta **/src/test**, que no momento da criação irá ficar com o conteúdo abaixo:

```java  
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)  
@ActiveProfiles("test")  
public class UsuarioControllerTest {  
}  
```

A anotação `@SpringBootTest` permite que o teste execute a partir das configurações padrão do Spring Boot, ou seja, as várias convenções do *framework* para iniciar o projeto já estão pré-configuradas. A propriedade `webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT` indica que ao executar o teste a aplicação será executada em uma porta aleatória, evitando executar em uma porta que já ocupada pela aplicação. O Spring permite que a aplicação seja executada em diferentes ambientes (*profiles*), ou seja, ambiente teste, desenvolvimento, produção, etc.. Assim, por meio da anotação `@ActiveProfiles("test")` está sendo informado que o projeto será executado com base no *profile test*, isso irá permitir que na sequência do desenvolvimento do projeto ele possa ser executado por meio de configurações diferentes dentro de cada ambiente em que deve ser executado.

O próximo passo é criar o primeiro teste, para nomear cada teste será utilizada a convenção:  
`methodName_condition_expectedBehaviour`  
Ou seja, nome do método, condição do teste e comportamento esperado após a execução do teste.

Dentro da classe  `UserControllerTest` será criado o método `postUser_whenUserIsValid_receiveOk()`. Esse método irá testar se: ao realizar uma requisição do tipo HTTP POST, quando o objeto enviado ao servidor for um Usuário válido, se a API irá retornar como resposta um ***HTTP Status: 201 CREATED***.  Para realizar a requisição ao servidor será utilizado um objeto do tipo `TestRestTemplate`, que permite realizar requisições HTTP para uma URL, no caso do exemplo `/users`, conforme o código abaixo. Nesse teste, é instanciado um objeto do tipo *User*, são adicionadas e valorizados os atributos *username, displayName e password*, então é realizada uma requisição HTTP POST para o servidor, enviado no corpo da requisição o objeto usuário e então o teste irá se certificar que o código de *status* HTTP que retornou do servidor, seja um **201 CREATED**.

```java  
package br.edu.utfpr.pb.pw44s.server;  
  
import br.edu.utfpr.pb.pw44s.server.model.User;  
import org.junit.jupiter.api.Test;  
import org.springframework.beans.factory.annotation.Autowired;  
import org.springframework.boot.test.context.SpringBootTest;  
import org.springframework.boot.test.web.client.TestRestTemplate;  
import org.springframework.http.HttpStatus;  
import org.springframework.http.ResponseEntity;  
import org.springframework.test.context.ActiveProfiles;  
  
import static org.assertj.core.api.Assertions.assertThat;  
  
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)  
@ActiveProfiles("test")  
public class UserControllerTest {  
    private static final String API_USER = "/users";  
    @Autowired  
	private TestRestTemplate testRestTemplate;
  
    @Test  
	public void postUser_whenUserIsValid_receiveOk() {  
        User user = createValidUser();  
  
        ResponseEntity<Object> response = testRestTemplate.postForEntity(API_USER, user, Object.class);  
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.CREATED);  
    }      
  
    private User createValidUser() {  
        return User.builder()  
                .username("test-user")  
                .displayName("test-Display")  
                .password("P4ssword")  
                .build();  
    }    
}
```  

#### 2.2 Classe User
Com o teste implementado será necessário começar resolver os problemas de código para obter-se o comportamento esperado da API. Inicialmente será criado a classe `User`, com os atributos `username, displayName e password`. A classe deve ser criada na pasta `/src/main/java` no pacote `br.edu.utfpr.pb.pw44s.server.model`.  Note que no exemplo a classe possui as anotações `@Getter e @Setter`, entre outras, importadas da biblioteca **Lombok**, dependência que foi adicionada ao projeto. Por meio dessa anotação, ao compilar a classe, a biblioteca **lombok** gera os métodos *getters*, *setters* e demais, evitando assim que seja necessário criar esses códigos manualmente durante o desenvolvimento. Outras anotações da biblioteca **Lombok** serão utilizadas dentro deste projeto, sempre com a mesma intenção, evitar escrever código e deixar nossas classes mais limpas.

```java  
package br.edu.utfpr.pb.pw44s.server.model;  
  
import lombok.*;  
  
@Getter  
@Setter  
@AllArgsConstructor  
@NoArgsConstructor  
@Builder  
public class User {  
    private String username;  
    private String displayName;  
    private String password;  
}
```  
Agora a classe **User** pode ser importada dentro da classe de teste (**UserControllerTest**).
```java
import br.edu.utfpr.pb.pw44s.server.model.User;
//...
```

#### 2.3 Classe UserController

O próximo passo para resolução do teste será criar a versão inicial da classe `UserController`, dentro do pacote `br.edu.utfpr.pb.pw44s.server.controller`, essa classe deve ter um método que aceita uma requisição do tipo HTTP POST para a URL  */users*. Por meio da anotação `@RestController` uma classe pode criar métodos para receber requisições HTTP. A anotação `@RequestMapping("users")` serve para que essa classe trate todas as requisições vindas em ***/users***, independente do método HTTP.
Por fim, foi criado o método `createUser()` o qual, por meio da anotação `@PostMapping` irá atender requisições do tipo HTTP POST na URL ***/users***. E, a anotação `@ResponseStatus(HttpStatus.CREATED)` retorna o *status* HTTP de sucesso: ***201 CREATED***.

Agora será possível executar o teste. Esse vai passar, por mais que o método não tenha nada implementado, ao ser chamado ele vai retornar como resposta o ***HTTP Status: 201 CREATED***, que é o parâmetro esperado pelo primeiro teste criado. Ou seja, agora foi criado o primeiro *endpoint* da API RESTful.

```java  
package br.edu.utfpr.pb.pw44s.server.controller;  
  
import org.springframework.http.HttpStatus;  
import org.springframework.web.bind.annotation.PostMapping;  
import org.springframework.web.bind.annotation.RequestMapping;  
import org.springframework.web.bind.annotation.ResponseStatus;  
import org.springframework.web.bind.annotation.RestController;  
  
@RestController  
@RequestMapping("users")  
public class UserController {  
  
    @PostMapping  
	@ResponseStatus(HttpStatus.CREATED)  
    void createUser() {  
    }  
}
```  

#### 2.4 Teste para verificar se o usuário está armazenado no banco de dados

O próximo teste será utilizado para verificar se após receber a requisição HTTP do tipo POST, o usuário enviado na requisição HTTP POST foi efetivamente salvo no banco de dados. Para armazenar os dados no banco de dados será utilizado o *framework* **Spring Data**. Será reutilizado o método `createValidUser()` para  criar um usuário válido a ser enviado para API. Nesse caso será utilizado o Repositório `UserRepository` para verificar se existem usuários no banco de dados, esse recurso ainda não existe e deverá ser implementado.

```java  
//...  
	@Test  
	public void postUser_whenUserIsValid_userSavedToDatabase() {  
	    User user = createValidUser();  
	    testRestTemplate.postForEntity(API_USER, user, Object.class);  
	    assertThat(userRepository.count()).isEqualTo(1);  
	}
//... 
```

O primeiro passo para resolver o teste é fazer com que a classe `User` possa ser lida como uma entidade que pode ser persistida no banco de dados por meio da anotação `@Entity`. Essa anotação faz parte da Java™ Persistence API (JPA), que é uma especificação oficial que descreve como deve ser o comportamento dos *frameworks* de persistência Java que desejarem implementá-la. Toda a classe que é mapeada com a anotação `@Entity` deve possuir uma chave primária e a mesma deve ser anotada com `@Id`.

Além disso, é necessário informar como será gerado o incremento da chave primária, por meio da anotação `@GeneratedValue`, a qual por padrão incrementa o atributo `Id` automaticamente somando 1 ao valor da chave primária a cada novo registro. Outra modificação que se faz necessária é a adição do nome da tabela que será gerada, por meio da anotação `@Table`, pois em alguns bancos de dados a palavra User é reservada pela linguagem SQL utilizada pelo Sistema Gerenciador de Banco de Dados (SGBD). As demais anotações antes da declaração da classe são do **Lombok** ,  que é um *framework* java que serve para eliminar a verbosidade do código durante o desenvolvimento. As anotações `@Getter e @Setter` geram os métodos *getters e setters*,    `@AllArgsConstructor e @NoArgsConstructor` geram construtores com todos os parâmetros e sem parâmetros, respetivamente e a anotação `@Builder` gera o método *builder*, em todos os casos os métodos são gerados em tempo de compilação.  Após as modificações a classe `User` terá o seguinte código:

```java  
package br.edu.utfpr.pb.pw44s.server.model;  
  
import jakarta.persistence.Entity;  
import jakarta.persistence.GeneratedValue;  
import jakarta.persistence.Id;  
import jakarta.persistence.Table;  
import lombok.*;  
  
@Entity  
@Table(name = "tb_user" )  
@Getter  
@Setter  
@AllArgsConstructor  
@NoArgsConstructor  
@Builder  
public class User {  
  
    @Id  
	@GeneratedValue  
	private long id;  
    private String username;  
    private String displayName;  
    private String password;  
}
```  

Agora é necessário criar as operações de criação, leitura, atualização e remoção (CRUD - *create, read, update and delete*) no banco de dados, isso por ser feito por meio da *interface* `JpaRepository`, disponibilizada pelo *framework* Spring Data. A *interface* `UserRepository` será criada dentro do pacote `br.edu.utfpr.pb.pw44s.server.repository`. Ao herdar as características de `JpaRepository` a *interface* conta com os principais métodos CRUD, tais como *save(), delete(), findAll(), findById()*, entre outros.

```java  
package br.edu.utfpr.pb.pw44s.server.repository;  

import br.edu.utfpr.pb.pw44s.server.model.User;  
import org.springframework.data.jpa.repository.JpaRepository;  

public interface UserRepository extends JpaRepository<User, Long> {
}
```  

Agora a classe `UserRepository` pode ser importada dentro da classe de teste, `UserControllerTest`:

```java
package br.edu.utfpr.pb.pw44s.server;  
  
import br.edu.utfpr.pb.pw44s.server.model.User;  
import br.edu.utfpr.pb.pw44s.server.repository.UserRepository;  
import org.junit.jupiter.api.Test;  
import org.springframework.beans.factory.annotation.Autowired;  
import org.springframework.boot.test.context.SpringBootTest;  
import org.springframework.boot.test.web.client.TestRestTemplate;  
import org.springframework.http.HttpStatus;  
import org.springframework.http.ResponseEntity;  
import org.springframework.test.context.ActiveProfiles;  
  
import static org.assertj.core.api.Assertions.assertThat;  
  
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)  
@ActiveProfiles("test")  
public class UserControllerTest {  
    private static final String API_USER = "/users";  
    @Autowired  
	private TestRestTemplate testRestTemplate;  
    @Autowired  
	private UserRepository userRepository;  
  
    @Test  
  public void postUser_whenUserIsValid_receiveOk() {  
        User user = createValidUser();  
  
        ResponseEntity<Object> response = testRestTemplate.postForEntity(API_USER, user, Object.class);  
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.CREATED);  
    }  
  
    @Test  
	public void postUser_whenUserIsValid_userSavedToDatabase() {  
        User user = createValidUser();  
        testRestTemplate.postForEntity(API_USER, user, Object.class);  
        assertThat(userRepository.count()).isEqualTo(1);  
    }  
  
    private User createValidUser() {  
        return User.builder()  
                .username("test-user")  
                .displayName("test-Display")  
                .password("P4ssword")  
                .build();  
    }  
  
}
``` 

Ao executar o teste ele vai falhar, pois por mais que seja possível realizar a consulta no banco de dados o retorno da expressão `userRepository.count()` será 0, pois não existe nenhum usuário armazenado no banco de dados.

#### 2.5 Armazenando o usuário no banco de dados, ajustando o *controller* e resolvendo o teste

Agora é possível utilizar a interface `UserRepository` para persistir um usuário no banco de dados. Nesse momento será criada a classe `UserService`, dentro do pacote `br.edu.utfpr.pb.pw44s.server.service`, para controlar as operações realizadas com a interface `UserRepository` e o banco de dados. Assim é possível manter todas as regras de negócio da aplicação fora da classe `UserController`, além disso também é possível fazer o controle transacional do banco de dados por meio da classe `UserService`. Para que a **IoC e DI** funcionem será necessário anotar a classe com a *annotation* `@Service`, assim o *framework* Spring vai assumir o ciclo de vida do objeto `userService`.

```java  
package br.edu.utfpr.pb.pw44s.server.service;  
  
import br.edu.utfpr.pb.pw44s.server.model.User;  
import br.edu.utfpr.pb.pw44s.server.repository.UserRepository;  
import org.springframework.stereotype.Service;  
  
@Service  
public class UserService {  
    private final UserRepository userRepository;  
  
    public UserService(UserRepository userRepository) {  
        this.userRepository = userRepository;  
    }  
  
    public User save(User user) {  
        return this.userRepository.save(user);  
    }  
  
}  
```
Podemos voltar a editar o código na classe `UserController` para salvar o usuário. Será necessário injetar um objeto do tipo `UserService`, então utilizar o método `userService.save()` que espera como parâmetro de entrada um objeto do tipo `User`, o objeto será persistido no banco de dados.
```java  
package br.edu.utfpr.pb.pw44s.server.controller;  
  
import br.edu.utfpr.pb.pw44s.server.model.User;  
import br.edu.utfpr.pb.pw44s.server.service.UserService;  
import org.springframework.http.HttpStatus;  
import org.springframework.web.bind.annotation.*;  
  
@RestController  
@RequestMapping("users")  
public class UserController {  
  
    private final UserService userService;  
  
    public UserController(UserService userService) {  
        this.userService = userService;  
    }  
  
    @PostMapping  
	@ResponseStatus(HttpStatus.CREATED)  
    void createUser(@RequestBody User user) {  
        this.userService.save(user);  
    }  
      
}  
```  

#### 2.6 Limpando o banco de dados na execução dos testes

Devemos garantir que todos os testes executem apenas com os parâmetros necessários para que se obtenha sucesso no teste. Assim, para evitar problemas durante a execução dos testes é importante limpar o banco de dados a cada execução, para isso será criado um método que remove os registros do banco a cada execução, ou seja, cada teste irá executar de maneira independente. O método `cleanup()` será precedido da anotação `@BeforeEach` que irá garantir que o método seja executado, limpando a tabela de usuários, antes de cada teste:

```java
package br.edu.utfpr.pb.pw44s.server;  
  
//... Ocultando código repetido... 
public class UserControllerTest {  
	//... Ocultando código repetido... 
	
	@Autowired  
	private UserRepository userRepository;
	    
    @BeforeEach  
	public void cleanup() {  
        userRepository.deleteAll();  
        testRestTemplate.getRestTemplate().getInterceptors().clear();  
    }  
    //... Ocultando código repetido... 
}
```  
#### 2.7  Configurando o arquivo: *application.properties*
Agora é possível testar a API fazendo uma requisição HTTP fora do ambiente de testes. Como ainda não foi iniciada a criação da aplicação web cliente com React, será necessário utilizar um *software* como o Postman ou Insomnia para fazer as requisições HTTP, ou alguma extensão para o Chrome ([Talend API Tester](https://chromewebstore.google.com/detail/aejoelaoggembcahagimdiliamlcdmfm?utm_source=item-share-cb)) ou Firefox([RESTED](https://addons.mozilla.org/en-US/firefox/addon/rested/)).

Antes de realizar o teste na API será necessário fazer alguns ajustes no projeto. Primeiro será necessário criar um arquivo de configuração para que tenhamos acesso ao banco de dados que está sendo utilizado durante os testes, o H2. Dentro da pasta **/src/main/resources/** deverá ser editado o arquivo **application.properties**. As configurações servem para que seja possível gerar um nome de banco de dados único ao executara aplicação (`jdbc:h2:mem:testdb`) e para que possa ser acessado o console do banco de dados por meio da URL [http://localhost:8080/h2-console](http://localhost:8080/h2-console).

```properties
spring.application.name=server
server.port=8080
  
spring.datasource.generate-unique-name=false
spring.datasource.url=jdbc:h2:mem:testdb
spring.h2.console.enabled=true
spring.h2.console.path=/h2-console
```  

Ao acessar a URL [http://localhost:8080/h2-console](http://localhost:8080/h2-console) em um navegador irá abrir a tela de conexão com o banco de dados **H2** a configuração está praticamente pronta, bastando alterar a URL de conexão com o banco para: `jdbc:h2:mem:testdb`. Ao clicar para realizar a conexão temos acesso ao banco de dados gerado, por enquanto foi criada apenas a tabela **tb_user**, ao clicar na tabela é habilitado o console no qual podemos realizar consultas. Ao fazer um **select * from tb_user** e executar o comando irá resultar em uma tabela vazia como resultado, para adicionar um usuário no banco de dados será utilizado o Postman.

#### 2.8 Realizando uma requisição HTTP POST por meio do Postman

Ao abrir o Postam basta clicar em **File > New Tab** e uma nova aba para realizar requisições HTTP será aberta. No método selecionar a opção **POST** e na URL informar [http://localhost:8080/users](http://localhost:8080/users). O próximo passo será configurar o corpo da requisição com um objeto JSON representando um usuário. Clicar na aba **Body** marcar a opção **raw** e no final das opções selecionar **JSON**. Com isso é possível adicionar no corpo da requisição o objeto que representa um usuário.

```json  
{
	"displayName"  :  "test-displayName",
	"username"  :  "test-username",
	"password"  :  "P4ssword"
}
```  
Adicionado o **JSON** basta clicar em send e a requisição será enviada para a API, o retorno que aparece em **Response** é um **201 CREATED** sem nenhum outro texto, pois é assim que está o código por enquanto. Agora executando novamente o comando **select * from tb_user** no console do banco de dados será possível visualizar o registro do usuário que foi adicionado.

#### 2.9 Continuando o desenvolvimento do cadastro de usuários

No próximo teste será retornado ao cliente que chama a API além do *status* HTTP, uma mensagem de sucesso. A mensagem irá retornar por meio de um objeto da classe `GenericResponse`.  No teste, após criado um usuário válido, será realizada uma requisição do tipo **HTTP POST** para **/users** e como resultado espera-se que um objeto do tipo `GenericResponse` possua um atributo chamado **message** e que esse atributo não seja nulo.

```java  
//... ocultando código repetido  
public class UsuarioControllerTest {  
	//... ocultando código repetido  
	@Test  
	public void postUser_whenUserIsValid_receiveSuccessMessage() {  
	    User user = createValidUser();  
	    var response = postSignup(user, GenericResponse.class);  
	    Assertions.assertNotNull(response.getBody());  
	    assertThat(response.getBody().getMessage()).isNotNull();  
	}
	//... ocultando código repetido      
} 
```  

A classe `GenericResponse` será criada no pacote `br.edu.utfpr.pb.pw44s.server.shared` e por enquanto terá apenas o atributo `message`.

```java  
package br.edu.utfpr.pb.pw44s.server.shared;  
  
import lombok.Builder;  
import lombok.Data;  
import lombok.NoArgsConstructor;  
  
@Data  
@NoArgsConstructor
@AllArgsConstructor
@Builder  
public class GenericResponse {  
  
    private String message;  
  
}
```  

A próxima alteração de código será realizado no método `createUser()` da classe `UserController`, que agora deverá retornar um objeto do tipo `GenericResponse`. Após essa alteração o teste criado irá passar. Para visualizar o comportamento na prática a requisição pode ser realizada novamente por meio do Postman.

```java  
package br.edu.utfpr.pb.pw44s.server.controller;  
  
import br.edu.utfpr.pb.pw44s.server.model.User;  
import br.edu.utfpr.pb.pw44s.server.service.UserService;  
import br.edu.utfpr.pb.pw44s.server.shared.GenericResponse;  
import org.springframework.http.HttpStatus;  
import org.springframework.http.ResponseEntity;  
import org.springframework.web.bind.annotation.*;  
  
@RestController  
@RequestMapping("users")  
public class UserController {  
  
    private final UserService userService;  
  
    public UserController(UserService userService) {  
        this.userService = userService;  
    }  
  
    @PostMapping  
	@ResponseStatus(HttpStatus.CREATED)  
    public ResponseEntity<GenericResponse> createUser(@RequestBody User user) {  
        this.userService.save(user);
          
        return ResponseEntity.status(HttpStatus.CREATED).body(new GenericResponse("Usuário salvo com sucesso"));  
    }  
  
} 
```  
#### 2.10 Testando se a senha está criptografada

Com essa etapa finalizada, agora serão adicionadas algumas melhorias no código e na maneira com que os dados são persistidos. Ao fazer uma consulta (***select***) no banco de dados é possível observar que a coluna **password** está sendo armazenada como texto, o que não é uma boa prática. O teste a seguir irá validar se a senha salva no banco está diferente da senha que foi enviada para cadastro, o que sinaliza que ela estará criptografada no banco de dados.

```java  
	//...
	@Test  
	public void postUser_whenUserIsValid_passwordIsHashedInDatabase() {  
	    User user = createValidUser();  
	      
	    testRestTemplate.postForEntity(API_USER, user, GenericResponse.class);  
	  
	    List<User> users = userRepository.findAll();  
	    User userBD = users.getFirst();  
	  
	    assertThat(userBD.getPassword()).isNotEqualTo(user.getPassword());  
	} 
	//...
```  

A criptografia da senha será realizada na classe `UserService` para evitar que regras de negócio da aplicação sejam implementadas na classe *controller*. Para criptografia da senha será utilizada a classe `BCryptPasswordEncoder`[6]. Ao executar o método `bCryptPasswordEncoder.encode()` a senha será criptografada antes de ser salva no banco. Ao executar o teste ele vai passar. Para visualizar na prática só executar a requisição via Postman e executar o comando **select * from tb_user** no console do **H2**.

```java  
package br.edu.utfpr.pb.pw44s.server.service;  
  
import br.edu.utfpr.pb.pw44s.server.model.User;  
import br.edu.utfpr.pb.pw44s.server.repository.UserRepository;  
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;  
import org.springframework.security.crypto.password.PasswordEncoder;  
import org.springframework.stereotype.Service;  
  
@Service  
public class UserService {  
    private final UserRepository userRepository;  
    private final PasswordEncoder passwordEncoder;  
  
    public UserService(UserRepository userRepository) {  
        this.userRepository = userRepository;  
        this.passwordEncoder = new BCryptPasswordEncoder();  
    }  
  
    public User save(User user) {  
        user.setPassword( passwordEncoder.encode(user.getPassword()) );  
        return this.userRepository.save(user);  
    }  
      
}
```  

O cadastro de usuário com criptografia da senha está funcional na API, agora será realizada a validação dos dados obrigatórios do usuário, pois, na versão atual do código será possível cadastrar um usuário sem informar todos os dados, pois os mesmos não estão sendo validados como obrigatórios.

#### 2.11 Validando o atributo *username* cadastro do usuário

Para realizar a validação dos dados obrigatórios da entidade na API, será utilizada a especificação **Java Bean Validation** [7] por meio da implementação Hibernate Validator. Serão utilizados os validadores padrão e será tratada a customização das mensagens de erro.

Até o momento só foram testados os casos de sucesso na API. Mas sabe-se que não é a realidade, pois constantemente os usuário preenchem os formulários no lado cliente e acabam passando dados inválidos para o servidor. Por isso serão validadas todas as entradas de usuário, tanto no *front-end* quanto no *back-end* da aplicação.

Nesse primeiro teste será validado o caso de recebimento do atributo `username` como nulo. Esse teste também será criado na classe `UsuarioControllerTest` e irá testar se, caso o atributo `username` estiver nulo, a resposta **HTTP** recebida deverá ser **400 BAD_REQUEST**.

```java  
//...  
public class UsuarioControllerTest {  
	//...
	 @Test  
	public void postUser_whenUserHasNullUsername_receiveBadRequest() {  
	    User user = createValidUser();  
		user.setUsername(null);  
		ResponseEntity<Object> response = testRestTemplate.postForEntity(API_USER, user, Object.class);  
	    assertThat(response.getStatusCode()).isEqualTo(HttpStatus.BAD_REQUEST);  
	} 
	//...
}  
```  

Para resolver esse teste o inicialmente será adicionada a anotação `@NotNull` (importada de: `import jakarta.validation.constraints.NotNull;`) no atributo `username` da classe `User`, conforme o código abaixo:

```java  
package br.edu.utfpr.pb.pw44s.server.model;  
  
import jakarta.persistence.Entity;  
import jakarta.persistence.GeneratedValue;  
import jakarta.persistence.Id;  
import jakarta.persistence.Table;  
import jakarta.validation.constraints.NotNull;  
import lombok.*;  
  
@Entity  
@Table(name = "tb_user" )  
@Getter  
@Setter  
@AllArgsConstructor  
@NoArgsConstructor  
@Builder  
public class User {  
  
    @Id  
	@GeneratedValue  
	private long id;  
  
    @NotNull  
	private String username;  
	private String displayName;  
    private String password;  
}
```  

Com a anotação feita será delegado ao *controller* (`UserController`) validar o usuário antes da entrada no método que realiza a persistência dos dados. Será utilizada a anotação `@Valid` (importado de: `import jakarta.validation.Valid;`) antes da declaração do objeto user no método `createUser()`. Com isso o campo será validado e o cliente da API irá receber uma mensagem criada pelo Spring informando que o atributo `username` não pode ser nulo.

```java  
package br.edu.utfpr.pb.pw44s.server.controller;  
  
import br.edu.utfpr.pb.pw44s.server.model.User;  
import br.edu.utfpr.pb.pw44s.server.service.UserService;  
import br.edu.utfpr.pb.pw44s.server.shared.GenericResponse;  
import jakarta.validation.Valid;  
import org.springframework.http.HttpStatus;  
import org.springframework.http.ResponseEntity;  
import org.springframework.web.bind.annotation.*;  
  
@RestController  
@RequestMapping("users")  
public class UserController {  
  
    private final UserService userService;  
  
    public UserController(UserService userService) {  
        this.userService = userService;  
    }  
  
    @PostMapping  
	@ResponseStatus(HttpStatus.CREATED)  
    public ResponseEntity<GenericResponse> createUser(@RequestBody @Valid User user) {  
        this.userService.save(user);  
  
        return ResponseEntity.status(HttpStatus.CREATED).body(new GenericResponse("Usuário salvo com sucesso"));  
    }  
  
}
```  
#### 2.12 Validando os demais dados de User
Os testes a serem realizados no cadastro de um novo usuário devem seguir a mesma lógica utilizada agora, validando todas as possibilidades de erro ou mensagens que devem ser recebidas ao cadastrar o usuário. Assim, esses casos de teste serão omitidos nesse trecho do tutorial, agora será apresentada a classe `User` com todas as demais validações necessárias:
```java  
package br.edu.utfpr.pb.pw44s.server.model;  
  
import jakarta.persistence.*;  
import jakarta.validation.constraints.NotNull;  
import jakarta.validation.constraints.Pattern;  
import jakarta.validation.constraints.Size;  
import lombok.*;  
  
@Entity  
@Table(name = "tb_user" )  
@Getter  
@Setter  
@AllArgsConstructor  
@NoArgsConstructor  
@Builder  
public class User {
  
    @Id  
    @GeneratedValue(strategy = GenerationType.IDENTITY)  
    private long id;  
  
    @NotNull  
    @Size(min = 4, max = 50)  
    @Column(length = 50)  
    private String username;  
  
    @NotNull  
	@Size(min = 4, max = 50)  
    @Column(length = 50, name = "display_name")  
    private String displayName;  
  
    @NotNull  
	@Size(min = 6)
	// A expressão regular da anotação @Pattern valida para que o atributo tenha pelo menos 1 letra maiúscula, 1 letra minúscula e 1 número.  
    @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).*$")  
    private String password;  
}
```  
Com esses ajustes na classe `User` estão validados todos os atributos, e nenhuma modificação adicional precisa ser realizada para a validação funcionar. A anotação `@Valid` presente no método `createUser()` da classe `UserController` irá verificar se os atributos são válidos em todas as requisições HTTP que forem realizadas.

---  
### 3. 🔖Personalizando o tratamento de erros

Por meio da anotação `@Valid` o objeto enviado no corpo da requisição é validado antes da execução do método `createUser()` do *controller*, porém as mensagens de erro enviadas ao cliente que está consumindo a API são geradas automaticamente pelo *framework* Spring, e são verbosas, dificultando o tratamento de erros no lado cliente da aplicação. Com o objetivo de customizar as mensagens de erro enviadas aos clientes da API, será criada uma estrutura de tratamento de erros composta por três classes:

As classes serão criadas dentro do pacote `br.edu.utfpr.pb.pw44s.server.error`:
- `ApiError`: Classe que vai representar um objeto com o retorno da mensagem de erro.
- `ExceptionHandlerAdvice`: Classe que irá tratar erros personalizados da API.
- `ErrorHandler`: Classe que irá tratar todos os erros da API, que não foram personalizados na classe *ExceptionHandlerAdvice*.

#### 3.1 A classe ApiError

A classe `ApiError` possui os atributos `timestamp` que armazena o *timestamp* em que ocorreu o erro, o atributo `status` com o código de resposta HTTP que representa o erro. O atributo `message` irá armazenar a mensagem de erro, o atributo `url` irá representar a URL da API em que aconteceu o erro e, por fim, o atributo `validationErrors` irá representar uma lista com os erros no caso de erros de validação de dados do formulário.  As classes para tratamento de erro ficarão dentro do pacote: `br.edu.utfpr.pb.pw44s.server.error`.

```java  
package br.edu.utfpr.pb.pw44s.server.error;  
  
import lombok.Data;  
import lombok.NoArgsConstructor;  
import java.util.Date;  
import java.util.Map;  
  
@Data  
@NoArgsConstructor  
public class ApiError {  
    private long timestamp = new Date().getTime();  
    private int status;  
    private String message;  
    private String url;  
    private Map<String, String> validationErrors;  
  
    public ApiError(int status, String message, String url, Map<String, String> validationErrors) {  
        this.status = status;  
        this.message = message;  
        this.url = url;  
        this.validationErrors = validationErrors;  
    }  
  
    public ApiError(String message, String url, Integer status) {  
        this.message = message;  
        this.url = url;  
        this.status = status;  
    }  
}
```  

#### 3.2 A classe ErrorHandler

A classe `ErrorHandler` implementa a interface `ErrorController` que permite com que a classe seja um *controller* responsável por tratar os erros da API. A classe deve ser anotada com `@RestController`. Essa classe por padrão irá tratar todos os erros que acontecem na API.

```java  
package br.edu.utfpr.pb.pw44s.server.error;  
  
import jakarta.servlet.http.HttpServletResponse;  
import org.springframework.boot.web.error.ErrorAttributeOptions;  
import org.springframework.boot.web.servlet.error.ErrorAttributes;  
import org.springframework.boot.web.servlet.error.ErrorController;  
import org.springframework.web.bind.annotation.RequestMapping;  
import org.springframework.web.bind.annotation.RestController;  
import org.springframework.web.context.request.WebRequest;  
  
import java.util.Map;  
  
@RestController  
public class ErrorHandler implements ErrorController {  
  
    private final ErrorAttributes errorAttributes;  
  
    public ErrorHandler(ErrorAttributes errorAttributes) {  
        this.errorAttributes = errorAttributes;  
    }  
  
    @RequestMapping("error")  
    public ApiError handlerError(WebRequest webRequest, HttpServletResponse response) {  
        Map<String, Object> attributes = errorAttributes.getErrorAttributes(webRequest,  
                                            ErrorAttributeOptions.of(ErrorAttributeOptions.Include.MESSAGE));  
  
        if (attributes.get("status") == null) {  
            attributes.put("status", response.getStatus());              
        }  
  
        return new ApiError( (String) attributes.get("message"),  
                             (String) attributes.get("path"),  
                             (Integer) attributes.get("status") );  
    }  
}
```  

#### 3.3 A classe ExceptionHandlerAdvice

A classe `ExceptionHandlerAdvice` irá tratar os erros que ocorrem *controllers* e que precisamos personalizar o retorno ao cliente. A anotação responsável por permitir esse comportamento é o `@RestControllerAdvice`. O tratamento das exceções geradas nas operações de CRUD em que o método do *controller* é validado pela anotação `@Valid` deverão tratar uma exceção do tipo `MethodArgumentNotValidException.class`, assim as validações que foram adicionadas ao model poderão ser utilizadas para montar a mensagem de erro de resposta, que vamos personalizar para ficar mais clara para o cliente que consumir os recursos da API.

Além das validações dos *models* outras validações de error podem ser realizadas na classe, bastando criar um método para cada tipo de erro a ser tratado.


```java  
package br.edu.utfpr.pb.pw44s.server.error;  
  
import jakarta.servlet.http.HttpServletRequest;  
import org.springframework.http.HttpStatus;  
import org.springframework.http.converter.HttpMessageNotReadableException;  
import org.springframework.validation.BindingResult;  
import org.springframework.validation.FieldError;  
import org.springframework.web.bind.MethodArgumentNotValidException;  
import org.springframework.web.bind.annotation.ExceptionHandler;  
import org.springframework.web.bind.annotation.ResponseStatus;  
import org.springframework.web.bind.annotation.RestControllerAdvice;  
  
import java.util.HashMap;  
import java.util.Map;  
  
@RestControllerAdvice  
public class ExceptionHandlerAdvice {  
  
    @ExceptionHandler({MethodArgumentNotValidException.class})  
    @ResponseStatus(HttpStatus.BAD_REQUEST)  
    public ApiError handlerValidationException(MethodArgumentNotValidException exception,  
                                               HttpServletRequest request) {  
        BindingResult result = exception.getBindingResult();  
        Map<String, String> validationErrors = new HashMap<>();  
        for (FieldError fieldError : result.getFieldErrors()) {  
            validationErrors.put(fieldError.getField(), fieldError.getDefaultMessage());  
        }  
  
        return new ApiError(HttpStatus.BAD_REQUEST.value(), "Validation error!",  
                request.getServletPath(), validationErrors);  
    }  
  
    @ExceptionHandler({IllegalStateException.class})  
    @ResponseStatus(HttpStatus.BAD_REQUEST)  
    public ApiError handlerValidationException(IllegalStateException exception,  
                                               HttpServletRequest request) {  
        return new ApiError(HttpStatus.BAD_REQUEST.value(), "Validation error!",  
                request.getServletPath(), null);  
    }  
  
    @ExceptionHandler({HttpMessageNotReadableException.class})  
    @ResponseStatus(HttpStatus.BAD_REQUEST)  
    public ApiError handlerValidationException(HttpMessageNotReadableException exception,  
                                               HttpServletRequest request) {  
        return new ApiError(HttpStatus.BAD_REQUEST.value(), "Validation error!",  
                request.getServletPath(), null);  
    }  
} 
```  

Após finalizadas a criação das classes é possível realizar uma requisição **HTTP POST** com os dados de usuário inválidos para API para verificar como ficou a resposta ao cliente.

Por exemplo, ao enviar:

```json
{
	"displayName"  :  null,
	"username"  :  "aa",
	"password"  :  "password"
}
```

O retorno da API será:

```json
{
	"timestamp":  4102477200,
	"status":  400,
	"message":  "Validation error!",
	"url":  "/users",
	"validationErrors":  {
		"password":  "deve corresponder a \"^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).*$\"",
		"displayName":  "não deve ser nulo",
		"username":  "tamanho deve ser entre 4 e 50"
	}
}
```
---
### 4. 📃 Utilizando *Data Transfer Object* (DTO) para transferência de dados entre o cliente e o servidor

O *Data Transfer Object* (DTO) é um padrão de design de software utilizado para transferência de dados entre diferentes camadas de uma aplicação. No projeto será utilizado para transferência de dados entre o cliente e a API Rest. O primeiro passo para isso será a criação de um DTO para representar a classe de usuário, será a classe `UserDTO` e será criada no pacote `br.edu.utfpr.pb.pw44s.server.dto`, conforme o código abaixo:

```java  
package br.edu.utfpr.pb.pw44s.server.dto;  
  
import jakarta.validation.constraints.NotNull;  
import jakarta.validation.constraints.Pattern;  
import jakarta.validation.constraints.Size;  
import lombok.AllArgsConstructor;  
import lombok.Builder;  
import lombok.Data;  
import lombok.NoArgsConstructor;  
  
@Data  
@NoArgsConstructor  
@AllArgsConstructor  
@Builder  
public class UserDTO {  

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
      
}
```  

O DTO criado para representar a classe User é bem semelhante a classe original, apenas não possui a anotação *@Entity* pois os objetos dessa classe não serão persistidos no banco de dados, eles vão servir apenas para a transferência de dados entre o cliente e a API.  Também não possui o atributo `id` pois como será utilizado apenas para cadastrar um novo usuário o atributo `id` não será enviado pelo cliente.

Na próxima etapa será ajustada a classe `UserController`, pois ao invés de receber diretamente um objeto do tipo `User`, agora a aplicação vai esperar um objeto do tipo `UserDTO`. Mas para isso ser possível, antes devemos criar uma classe para realizar a conversão entre os objetos dos tipos `User` e `UserDTO`.

A classe `UserMapper` será responsável por realizar as conversões e será criada no pacote `br.edu.utfpr.pb.pw44s.server.mapper`.

```java  
package br.edu.utfpr.pb.pw44s.server.mapper;

import br.edu.utfpr.pb.pw44s.server.dto.UserDTO;
import br.edu.utfpr.pb.pw44s.server.model.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingConstants;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface UserMapper {

    @Mapping(target = "id", ignore = true)
    User toEntity(UserDTO dto);

    UserDTO toDto(User entity);
} 
```  
Agora será ajustada a classe `UserController`, que após o uso do objeto do tipo `UserMapper` irá ficar com o seguinte conteúdo:
```java  
package br.edu.utfpr.pb.pw44s.server.controller;

import br.edu.utfpr.pb.pw44s.server.dto.UserDTO;
import br.edu.utfpr.pb.pw44s.server.mapper.UserMapper;
import br.edu.utfpr.pb.pw44s.server.service.UserService;
import br.edu.utfpr.pb.pw44s.server.shared.GenericResponse;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("users")
public class UserController {

    private final UserService userService;
    private final UserMapper userMapper;

    public UserController(UserService userService, UserMapper userMapper) {
        this.userService = userService;
        this.userMapper = userMapper;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<GenericResponse> createUser(@RequestBody @Valid UserDTO userDTO) {
        this.userService.save(userMapper.toEntity(userDTO));
        return ResponseEntity.status(HttpStatus.CREATED).body(new GenericResponse("Usuário salvo com sucesso"));
    }

} 
```  
Após esse ajuste, não será necessário fazer mais nenhuma modificação na aplicação e os testes e as requisições realizadas anteriormente irão funcionar da mesma maneira. Apenas adicionamos uma camada de abstração dos dados que trafegam entre as diferentes camadas da solução que está sendo desenvolvida.

---  
### 5. 🔐 Adicionando Autenticação e Autorização com Spring Security
O conteúdo abordado agora é o conceito de autenticação e autorização com o *framework* **Spring Security**[8]. Neste projeto será criado uma classe de configuração para sobrescrever alguns comportamentos padrão do **Spring Security**. A classe `User` será utilizada para criar os objetos dos usuários que poderão se autenticar na API. E a interface `UserRepository` será utilizada para criar a consulta que irá retornar o usuário do banco de dados.

Além disso, foram criadas dentro dos pacotes `security` e `service` as demais classes utilizadas na configuração do Spring Security:
- `EntryPointUnauthorizedHandler`:  classe utilizada para definir o tipo de resposta ao cliente quando ocorrer um erro no processo de autenticação.
- `JWTAuthenticationFilter`: classe utilizada durante o processo de autenticação de usuário.
- `JWTAuthorizationFilter`: classe utilizada durante o processo de autorização de um usuário já autenticado.
- `SecurityConstants` : classe contendo as constantes utilizadas pelas classes de configuração do Spring Security.
- `WebSecurity`: classe em que serão realizadas todas as configurações do Spring Security.
- `AuthService`: classe de serviço que estará no pacote *service* e vai ser utilizada para implementar o método de busca do usuário no banco de dados.
- `AuthenticationResponse`: classe utilizada para definir o objeto de retorno com o Token criado e dados do usuário ao finalizar a autenticação.
- `UserResponseDTO`: classe que será utilizada para  montar a resposta ao usuário autenticado com sucesso, irá representar o usuário autenticado.
- `AuthorityResponseDTO`: classe que será utilizada para  montar a resposta ao usuário autenticado com sucesso, irá representar uma permissão de usuário.

#### 5.1 Ajuste na classe ServerApplication

O primeiro passo a ser realizado para o **Spring Security** voltar funcionar é retirar o trecho de código `exclude = SecurityAutoConfiguration.class` da classe `ServerApplication`, pois será necessário que o *framework* Spring traga algumas configurações já definidas por convenção no Spring Boot. Por padrão, ao retirar essa configuração o **Spring Security** volta a funcionar na aplicação e todas as rotas da API passam a necessitar de autenticação. Ou seja nesse momento os testes vão parar de funcionar e, ao tentar fazer uma requisição **HTTP POST** para a URL **/users** da API o retorno será um código **HTTP** **403 FORBIDEN**, mesmo todos os campos estando corretos, pois o Spring Security está validando o acesso às rotas. Abaixo está o código da classe *ServerApplication* após a remoção da configuração `exclude = SecurityAutoConfiguration.class`.

```java  
package br.edu.utfpr.pb.pw44s.server;  
  
import org.springframework.boot.SpringApplication;  
import org.springframework.boot.autoconfigure.SpringBootApplication;  
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;  
  
@SpringBootApplication  
public class ServerApplication {  
  
    public static void main(String[] args) {  
       SpringApplication.run(ServerApplication.class, args);  
    }  
  
}
```   
#### 5.2 Criação da classe SecurityConstants

A classe `SecurityConstants` irá conter as constantes utilizadas pelas classes de configuração do Spring Security. As constantes da classe são a chave utilizada para gerar o Token, o tempo de validade do Token, o prefixo do Token e o nome do atributo do cabeçalho da requisição HTTP que irá conter o Token no processo de autorização.

```java  
package br.edu.utfpr.pb.pw44s.server.security;  
  
public class SecurityConstants {  
	public static final String SECRET = "utfpr"; // secret utilizado para gerar o token  
	public static final long EXPIRATION_TIME = 86400000; // 1 dia = 60*60*24*1000  
	public static final String TOKEN_PREFIX = "Bearer "; // tipo da autenticação  
	public static final String HEADER_STRING = "Authorization"; // header que será passado ao server com o token  
}
```  

#### 5.3 Criação da classe EntryPointUnauthorizedHandler

A classe `EntryPointUnauthorizedHandler` implementa a interface `AuthenticationEntryPoint` do *framework* Spring Security e será utilizada para definir o tipo de resposta ao cliente quando ocorrer um erro no processo de autenticação, ao ocorrer a exceção durante a autenticação o Spring irá chamar o método  `commence()` presente na classe.

```java  
package br.edu.utfpr.pb.pw44s.server.security;  
  
import jakarta.servlet.ServletException;  
import jakarta.servlet.http.HttpServletRequest;  
import jakarta.servlet.http.HttpServletResponse;  
import org.springframework.http.HttpStatus;  
import org.springframework.security.core.AuthenticationException;  
import org.springframework.security.web.AuthenticationEntryPoint;  
import org.springframework.stereotype.Component;  
  
import java.io.IOException;  
  
@Component("authenticationEntryPoint")  
public class EntryPointUnauthorizedHandler  
        implements AuthenticationEntryPoint {  
  
    @Override  
    public void commence(HttpServletRequest request, HttpServletResponse response,  
                         AuthenticationException authException) throws IOException, ServletException {  
        response.setStatus(HttpStatus.UNAUTHORIZED.value());  
        response.sendError(HttpStatus.UNAUTHORIZED.value(), HttpStatus.UNAUTHORIZED.getReasonPhrase());  
    }  
  
}
```  

#### 5.4 Criação da classe Web Security

Para configurar o **Spring Security** será criada a classe `WebSecurity` no pacote `br.edu.utfpr.pb.pw44s.server.security`. Nessa classe serão sobrescritas as configurações padrão do Spring Security, por isso ela recebe a anotação `@EnableWebSecurity` e como serão criados objetos compartilhados a anotação `@Configuration`. O objeto `authService` será explicado na sequência do texto e é utilizado para buscar um usuário no banco.  O objeto `authenticationEntryPoint` é responsável por realizar o tratamento de exceção quando o usuário informar credenciais incorretas ao autenticar-se. O método `filterChain()` retorna um objeto do tipo `SecurityFilterChain`, nesse método serão sobrescritas algumas configurações padrão do Spring Security. Essas configurações serão alteradas por meio do objeto `http` do tipo `HttpSecurity`, nele podem ser alteados os objetos de tratamento de erro, quais rotas da aplicação serão autenticadas/autorizadas, as rotas para autenticação, controle do tipo de sessão e no caso desse projeto os filtros utilizados na Autenticação (`authenticationManager`) e autorização dos usuários (`authorizationManager`), conforme pode ser observado nos comentários do código abaixo.

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
        authenticationManagerBuilder  
                .userDetailsService(authService)  
                .passwordEncoder(passwordEncoder());  
        // authenticationManager -> responsável por gerenciar a autenticação dos usuários  
        AuthenticationManager authenticationManager =  
                authenticationManagerBuilder.build();  
  
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
                .requestMatchers(HttpMethod.POST, "/users/**").permitAll()  
                //permite que a rota "/error" seja acessada por qualquer    requisição mesmo o usuário não estando autenticado
                .requestMatchers("/error/**").permitAll()  
                //permite que a rota "/h2-console" seja acessada por qualquer requisição mesmo o usuário não estando autenticado
                .requestMatchers("/h2-console/**").permitAll()
                .requestMatchers("/products/**").permitAll()  
                .requestMatchers("/categories/**").permitAll()  
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
  
    /*  
	   O compartilhamento de recursos de origem cruzada (CORS) é um mecanismo para integração de aplicativos. O CORS define uma maneira de os aplicativos Web clientes carregados em um domínio interagirem com recursos em um domínio diferente. */  @Bean  
	private CorsConfigurationSource corsConfigurationSource() {  
        CorsConfiguration configuration = new CorsConfiguration();  
        /* 
        Lista das origens autorizadas, no nosso caso que iremos rodar a aplicação localmente o * poderia ser trocado
        por: http://localhost:porta, em que :porta será a porta em que a aplicação cliente será executada
        */
        configuration.setAllowedOrigins(List.of("*"));  
        // Lista dos métodos HTTP autorizados
        configuration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS", "HEAD", "TRACE", "CONNECT"));  
        // Lista dos Headers autorizados, o Authorization será o header que iremos utilizar para transferir o Token
        configuration.setAllowedHeaders(List.of("Authorization","x-xsrf-token",  
                "Access-Control-Allow-Headers", "Origin",  
                "Accept", "X-Requested-With", "Content-Type",  
                "Access-Control-Request-Method",  
                "Access-Control-Request-Headers", "Auth-Id-Token"));  
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();  
        source.registerCorsConfiguration("/**", configuration);  
        return source;  
    }  
}
```  

#### 5.5 Ajustes na classe User

Para autenticar-se em um sistema qualquer geralmente precisamos ter credenciais, no caso deste projeto as credenciais para acesso serão gerenciadas pela classe `User` por meio dos atributos `username` e `password`. Dessa maneira os objetos instanciados a partir da classe `User` serão armazenados no banco de dados e utilizados posteriormente para autenticação e autorização. O processo de salvar um novo usuário já foi explicado no início deste projeto, já o processo de autenticação e autorização está sendo descrito agora. Por padrão, para autenticar-se em uma aplicação Spring Security é necessário realizar uma requisição do tipo **HTTP POST** para URL **/login** (no caso dessa aplicação: http://localhost:8080/login), enviando no corpo da requisição os dados de usuário e senha no formato JSON, essa URL e verbo HTTP são padrão do Spring Security, mas caso necessário pode ser alterado na classe de configuração.

Agora serão realizadas os ajustes nas classes `User` e `UserRepository` e a criação da classe `AuthService`. Como será utilizado o *framework* **Spring Security** para gerenciar a autenticação e autorização da API, deve-se obedecer a documentação do mesmo, que define que para utilizar uma classe criada na API a mesma deverá implementar a *interface* `UserDetails`. Essa *interface* exige a implementação de alguns métodos padrão , sendo os principais o `getUsername()`, o `getPassword()` e o `getAuthorities()`. O método `getUsername()` deve retornar o nome de usuário utilizado na autenticação (que pode ser outro campo da classe `User`, por exemplo, o campo email), nesse caso basta retornar `this.email` no método. O método `getPassword()` deverá retornar a senha e, por fim o método `getAuthorities()` deverá retornar as permissões de usuário, nesse caso só teremos uma permissão, por isso o retorno é `return AuthorityUtils.createAuthorityList("ROLE_USER");`, ou seja será retornada uma *string* padrão para todos os usuários *ROLE_USER*.

```java  
package br.edu.utfpr.pb.pw44s.server.model;  
  
import com.fasterxml.jackson.annotation.JsonIgnore;  
import jakarta.persistence.*;  
import jakarta.validation.constraints.NotNull;  
import jakarta.validation.constraints.Pattern;  
import jakarta.validation.constraints.Size;  
import lombok.*;  
import org.springframework.security.core.GrantedAuthority;  
import org.springframework.security.core.authority.AuthorityUtils;  
import org.springframework.security.core.userdetails.UserDetails;  
  
import java.util.Collection;  
  
@Entity  
@Table(name = "tb_user")  
@AllArgsConstructor  
@NoArgsConstructor  
@Builder  
@Getter @Setter  
public class User implements UserDetails {  
  
    @Id  
	@GeneratedValue(strategy = GenerationType.IDENTITY)  
    private long id;  
  
    @NotNull  
	@Size(min = 4, max = 50)  
    @Column(length = 50)  
    private String username;  
  
    @NotNull  
	@Size(min = 4, max = 50)  
    @Column(length = 50, name = "display_name")  
    private String displayName;  
  
    @NotNull  
	@Size(min = 6)  
    @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).*$")  
    private String password;  
  
    @Override  
	@Transient 
	@JsonIgnore  
	public Collection<? extends GrantedAuthority> getAuthorities() {  
        return AuthorityUtils.createAuthorityList("ROLE_USER");  
    }  
  
    @Override  
	@Transient 
	@JsonIgnore  
	public boolean isAccountNonExpired() {  
        return true;  
    }  
  
    @Override  
	@Transient 
	@JsonIgnore  
	public boolean isAccountNonLocked() {  
        return true;  
    }  
  
    @Override  
	@Transient 
	@JsonIgnore  
	public boolean isCredentialsNonExpired() {  
        return true;  
    }  
  
    @Override  
	@Transient 
	@JsonIgnore  
	public boolean isEnabled() {  
        return true;  
    }  
  
}
```  

Os demais métodos: `isAccountNonExpired(), isAccountNonLocked`, etc. estão retornando `true` por padrão, pois o Spring Security utiliza esses dados para verificar se a conta de usuário é válida. Nesse caso não foi implementado nenhum tipo de validação, mas esses métodos poderiam retornar valores armazenados no banco de dados.

#### 5.6 Ajustes na interface UserRepository

Continuando a implementação do processo de autenticação e autorização, na interface `UserRepository` foi adicionadio a assinatura do método `findByUsername`. Esse método recebe como parâmetro o atributo `username` e retorna um objeto `User`. Esse método será utilizado pela classe `AuthService` para buscar o usuário que está tentando autenticar-se no sistema.

```java  
package br.edu.utfpr.pb.pw44s.server.repository;  
  
import br.edu.utfpr.pb.pw44s.server.model.User;  
import org.springframework.data.jpa.repository.JpaRepository;  
  
public interface UserRepository extends JpaRepository<User, Long> {  
  
    User findUserByUsername(String username);  
  
}  
```  

#### 5.7 Criação da classe AuthService

A classe `AuthService` implementa a interface do Spring Security `UserDetailsService`, a qual necessita a implementação do método `loadUserByUsername`, que recebe uma *string* (`username`) por parâmetro e retorna uma instancia de um objeto do tipo `UserDetails`, pois o Spring Security utiliza esse objeto para verificar se um usuário existe no banco. Caso exista o usuário o Spring Security irá comparar a senha criptografada no banco com a senha informada pelo usuário durante o processo de autenticação, além das permissões de usuário.

```java  
package br.edu.utfpr.pb.pw44s.server.service;  
  
import br.edu.utfpr.pb.pw44s.server.model.User;  
import br.edu.utfpr.pb.pw44s.server.repository.UserRepository;  
import org.springframework.security.core.userdetails.UserDetails;  
import org.springframework.security.core.userdetails.UserDetailsService;  
import org.springframework.security.core.userdetails.UsernameNotFoundException;  
import org.springframework.stereotype.Service;  
  
@Service  
public class AuthService implements UserDetailsService {  
  
    private final UserRepository userRepository;  
  
    public AuthService(UserRepository userRepository) {  
        this.userRepository = userRepository;  
    }  
  
    @Override  
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {  
        User user = userRepository.findUserByUsername(username);  
        if (user == null) {  
            throw new UsernameNotFoundException("Usuário não encontrado!");  
        }  
        return user;  
    }  
}
```  

#### 5.8 Criação das classes **AutenticationResponse**, **UserResponseDTO**, **AuthorityResponseDTO** e JWTAuthenticationFilter

Conforme configurado na classe `WebSecurity` um filtro chamado `JWTAuthenticationFilter` será criado para realizar o processo de autenticação. Essa classe herda as características de `UsernamePasswordAuthenticationFilter` que é a classe do Spring Security que é utilizada para autenticação via usuário e senha. O método `attemptAuthentication` que foi sobrescrito é chamado quando o usuário realiza uma requisição **HTTP** do tipo **POST** para URL **/login**. Esse método recebe como parâmetros um objeto `HttpServletRequest` que contém todos os dados da requisição, ou seja, é possível extrair do corpo da requisição o usuário e senha informado pelo usuário no momento da autenticação. Como está sendo utilizado JSON para transferência de dados entre o cliente e a API será necessário enviar os dados nesse formato (`{"username":"user","password":"P4ssword"}`). Esses dados são recuperados dentro do método. É realizada  uma consulta no banco de dados para verificar se o usuário existe, caso exista a senha informada durante a autenticação é comparada com a senha armazenada no banco de dados e no caso de sucesso o usuário será autenticado. No caso de falha uma exceção (`Exception`) é gerada e o usuário irá receber como retorno o erro **HTTP 401**. No caso de sucesso será chamado o método `successfulAuthentication`, que também foi sobrescrito, para que seja gerado o **Token JWT** que será enviado para o cliente na resposta da requisição, assim o cliente poderá utilizar esse Token para realizar a autorização nas próximas requisições. O método `successfulAuthentication` recebe como parâmetro um objeto do tipo `HttpServletResponse` que é utilizado para enviar a resposta ao cliente que solicitou a autenticação. A aplicação irá retornar como resposta um **Token JWT** por meio de um objeto do tipo `AuthenticationResponse` que foi criado para retornar o Token e os dados do usuário autenticado para o cliente no formato JSON. Antes da classe `JWTAuthenticationFilter` serão implementadas as classes `AutenticationResponse`, `UserResponseDTO` e `AuthorityResponseDTO`, que servirão para montar a resposta enviada ao usuário, essas classes ficarão no pacote `br.edu.utfpr.pb.pw44s.server.security.dto`.

##### 5.8.1 AuthorityResponseDTO
```java  
package br.edu.utfpr.pb.pw44s.server.security.dto;  
  
import lombok.AllArgsConstructor;  
import lombok.Builder;  
import lombok.Data;  
import lombok.NoArgsConstructor;  
  
@Data  
@NoArgsConstructor  
@AllArgsConstructor  
@Builder  
public class AuthorityResponseDTO {  
  
    private String authority;  
  
} 
```  
##### 5.8.2 UserResponseDTO
```java  
package br.edu.utfpr.pb.pw44s.server.security.dto;  
  
import br.edu.utfpr.pb.pw44s.server.model.User;  
import lombok.AllArgsConstructor;  
import lombok.Builder;  
import lombok.Data;  
import lombok.NoArgsConstructor;  
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
##### 5.8.3 AuthenticationResponse
```java  
package br.edu.utfpr.pb.pw44s.server.security.dto;  
  
import lombok.AllArgsConstructor;  
import lombok.Builder;  
import lombok.Data;  
import lombok.NoArgsConstructor;  
  
@Data  
@AllArgsConstructor  
@NoArgsConstructor  
@Builder  
public class AuthenticationResponse {  
  
    private String token;  
    private UserResponseDTO user;  
  
}
```  

Com as classes para compor a resposta ao cliente criadas, será criada a classe `JWTAuthenticationFilter`:

```java  
package br.edu.utfpr.pb.pw44s.server.security;  
  
import br.edu.utfpr.pb.pw44s.server.dto.AuthRequestDTO;  
import br.edu.utfpr.pb.pw44s.server.model.User;  
import br.edu.utfpr.pb.pw44s.server.security.dto.AuthenticationResponse;  
import br.edu.utfpr.pb.pw44s.server.security.dto.UserResponseDTO;  
import br.edu.utfpr.pb.pw44s.server.service.AuthService;  
import com.auth0.jwt.JWT;  
import com.auth0.jwt.algorithms.Algorithm;  
import tools.jackson.core.exc.StreamReadException;  
import tools.jackson.databind.DatabindException;  
import tools.jackson.databind.ObjectMapper;  
import jakarta.servlet.FilterChain;  
import jakarta.servlet.ServletException;  
import jakarta.servlet.http.HttpServletRequest;  
import jakarta.servlet.http.HttpServletResponse;  
import lombok.NoArgsConstructor;  
import org.jspecify.annotations.NonNull;  
import org.springframework.security.authentication.AuthenticationManager;  
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;  
import org.springframework.security.core.Authentication;  
import org.springframework.security.core.AuthenticationException;  
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;  
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;  
  
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
        //HTTP.POST {"username":"admin", "password":"P4ssword"}  
        //Obtém os dados de username e password utilizando o ObjectMapper para converter o JSON //em um objeto User com esses dados.              
        //Verifica se o usuário existe no banco de dados, caso não exista uma Exception será disparada  
        User credentials = new User();  
        User user = new User();  
        try {  
            
			//e o código será parado de executar nessa parte e o usuário irá receber uma resposta //com falha na autenticação (classe: EntryPointUnauthorizedHandler)  if (request.getInputStream() != null || request.getInputStream().available() > 0) {  
            credentials = new ObjectMapper().readValue(request.getInputStream(), User.class);  
            user = (User) authService.loadUserByUsername(credentials.getUsername());  
		}  
		//Caso o usuário seja encontrado, o objeto authenticationManager encarrega-se de autenticá-lo.  
		//Como o authenticationManager foi configurado na classe WebSecurity e, foi informado o método  
		//de criptografia da senha, a senha informada durante a autenticação é criptografada e  
		//comparada com a senha armazenada no banco. Caso não esteja correta uma Exception será disparada 		
		//Caso ocorra sucesso será chamado o método: successfulAuthentication dessa classe  
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
	protected void successfulAuthentication(HttpServletRequest request,  
                                            HttpServletResponse response,  
                                            FilterChain chain,  
                                            Authentication authResult) throws IOException, ServletException {  
  
        User user = (User) authService.loadUserByUsername(authResult.getName());  
        // o método create() da classe JWT é utilizado para criação de um novo token JWT  
		String token = JWT.create()  
        // o objeto authResult possui os dados do usuário autenticado, nesse caso o método getName() retorna o username do usuário foi autenticado no método attemptAuthentication.  
		.withSubject(authResult.getName())  
        //a data de validade do token é a data atual mais o valor armazenado na constante EXPIRATION_TIME, nesse caso 1 dia  
		.withExpiresAt(  
	        new Date(System.currentTimeMillis()  + SecurityConstants.EXPIRATION_TIME)  
        )
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

#### 5.9 Criação da classe JWTAuthorizationFilter

Entretanto, para que o Token sejá utilizado para autorizar no usuário nas novas requisições foi criada a classe `JWTAuthorizationFilter`, que será responsável por extrair o Token do cabeçalho da requisição **HTTP** e verificar se ele é válido. A classe herda de `BasicAuthenticationFilter` e implementa o método `doFilterInternal`, esse método recebe como parâmetro um objeto do tipo HttpServletRequest, e é desse objeto que é extraído o Token do cabeçalho da requisição. Após pegar o Token do cabeçalho o mesmo é passado por parâmetro para o método `getAuthentication`, no qual é verificado a validade do Token, então é recuperado o **username** que está  no corpo do Token. Na sequência é verificado se o usuário que está tentando autorização ainda existe no banco de dados, caso exista o usuário é autorizado e a autorização é adicionada no contexto do Spring Security.

```java  
package br.edu.utfpr.pb.pw44s.server.security;  
  
import br.edu.utfpr.pb.pw44s.server.model.User;  
import br.edu.utfpr.pb.pw44s.server.service.AuthService;  
import com.auth0.jwt.JWT;  
import com.auth0.jwt.algorithms.Algorithm;  
import jakarta.servlet.FilterChain;  
import jakarta.servlet.ServletException;  
import jakarta.servlet.http.HttpServletRequest;  
import jakarta.servlet.http.HttpServletResponse;  
import org.springframework.security.authentication.AuthenticationManager;  
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;  
import org.springframework.security.core.context.SecurityContextHolder;  
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;  
  
import java.io.IOException; 
  
public class JWTAuthorizationFilter extends BasicAuthenticationFilter {  
  
    private final AuthService authService;  
  
    public JWTAuthorizationFilter(AuthenticationManager authenticationManager,  
                                  AuthService authService) {  
        super(authenticationManager);  
        this.authService = authService;  
    }  
  
    @Override  
  protected void doFilterInternal(HttpServletRequest request,  
                                    HttpServletResponse response,  
                                    FilterChain chain) throws IOException, ServletException {  
  
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
  
    private UsernamePasswordAuthenticationToken getAuthentication(HttpServletRequest request) {  
        String token = request.getHeader(SecurityConstants.HEADER_STRING);  
  
        //verifica se o token é válido e retorna o username  
  String username = JWT.require(Algorithm.HMAC512(SecurityConstants.SECRET))  
                .build()  
                .verify(token.replace(SecurityConstants.TOKEN_PREFIX, ""))  
                .getSubject();  
  
        if (username != null) {  
            // com posse do username é verificado se ele existe na base de dados  
  User user = (User) authService.loadUserByUsername(username);  
            //caso exista o usuário é autenticado e a requisição continua a ser executada.  
  return new UsernamePasswordAuthenticationToken(  
                    user.getUsername(),  
                    null,  
                    user.getAuthorities());  
        }  
        // senão é retornado null, se a url que o usuário solicitou necessita de autenticação ele vai receber erro 401 - Unauthorized  
  return null;  
    }  
}
```  

#### 5.10 Testando a autenticação e autorização via Postman

Para testar, poder ser utilizado o Postman ou Insomia para realizar uma requisição do tipo HTTP POST para a url */login*.

##### 5.10.1 Criando um novo usuário

Abaixo está o JSON que deverá ser enviado via **HTTP POST** para URL **/users** para criar um novo usuário.
```json  
 {
	"displayName"  :  "test-user-Display",
	"username"  :  "test-user",
	"password"  :  "P4ssword"
}
```  
##### 5.10.2 Autenticando-se

Abaixo está o JSON que deverá ser enviado via **HTTP POST** para URL **/login** para autenticar-se na aplicação.
```json  
{
	"username"  :  "test-user",
	"password"  :  "P4ssword"
}
```  

Abaixo está a resposta enviada ao cliente após a autenticação realizada com sucesso.
```json  
{
	"token":  "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0LXVzZXIiLCJleHAiOjE3NDU5NTgxMDh9.hol5Y7HrmDTSAFXKXzYDaeJXKVSW_QWWwDhye64nBdCsXzzcOh2lYzNee92bT4evwffXqlstC4PVCwqGPTQfHA",
	"user":  {
		"displayName":  "test-user-Display",
		"username":  "test-user",
		"authorities":  [
			{
				"authority":  "ROLE_USER"
			}
		]
	}
}
```  

Com posse do Token recebido o cliente poderá realizar novas requisições ao servidor nas rotas que necessitam de autorização. Para isso basta enviar o Token no cabeçalho da requisição utilizando a chave **Authorization**.  
`Authorization:  Bearer  <token>`   
Com o Token validado e o usuário autenticado e autorizado adicionado adicionado no contexto do Spring Security, qualquer ***endpoint*** da aplicação que necessite de autorização para acesso precisa ser acessado enviando o token gerado durante a autenticação.

---
### 6. 🏷️ CRUD de Categorias

Considerando o escopo do projeto em que serão armazenados Categorias e Produtos após o cadastro e autenticação do usuário, o próximo passo será a criação das operações CRUD de categorias. Para isso serão criados a classe *model*, a classe *DTO*, a interface e classe de implementação do *service* e a classe *controller*.

- `Category`: classe que será criada no pacote *model* para representar uma categoria.
- `CategoryDTO`: classe que será criada no pacote *DTO* para representar uma categoria que será utilizada para transferir o objeto entre as camadas de *view* e *controller*.
- `CategoryRepository`: interface que irá implementar JPA Repository e será responsável por realizar as operações de CRUD.
- `ICategoryService`: interface que que irá representar as operações de CRUD de Categoria.
- `CategoryServiceImpl`: classe que irá herdar as características da interface *ICategoryService* e por meio da interface *CategoryRepository* será responsável pela persistência dos dados.
- `CategoryController`: classe que irá tratar as requisições HTTP vindas do cliente e fazer a comunicação com a camada de persistência de dados.

#### 6.1 Criando o *model* Category

O *model* que irá representar uma categoria, por meio da classe `Category`, possui os atributos `id` e `name`. A classe deverá ser criada no pacote `model` e deverá possuir a anotação `@Entity`, pois os dados de categoria serão persistidos no banco de dados e o nome da tabela gerada será *tb_category*, como pode ser observado na anotação `@Table(name = "tb_category")`, as demais anotações são do Lombok e do JPA, seguindo as mesmas características da classe `User`.

```java  
package br.edu.utfpr.pb.pw44s.server.model;  
  
import jakarta.persistence.*;  
import jakarta.validation.constraints.NotNull;  
import jakarta.validation.constraints.Size;  
import lombok.*;  
  
import java.util.Objects;  
  
@Entity  
@Table(name = "tb_category")  
@NoArgsConstructor  
@AllArgsConstructor  
@Builder  
@Getter @Setter  
public class Category {  
  
    @Id  
	@GeneratedValue(strategy = GenerationType.IDENTITY)  
    private Long id;  
  
    @NotNull  
	@Size(min = 2, max = 50)  
    @Column(length = 50, nullable = false)  
    private String name;  
  
    @Override  
	public boolean equals(Object o) {  
        if (this == o) return true;  
        if (o == null || getClass() != o.getClass()) return false;  
        Category category = (Category) o;  
        return Objects.equals(id, category.id);  
    }  
  
    @Override  
	public int hashCode() {  
        return Objects.hash(id);  
    }  
}
```  

#### 6.2 Criando o *DTO* CategoryDTO e o *Mapper* CategoryMapper

Agora será apresentado o código-fonte da classe `CategoryDTO` que será utilizada na transferência de dados nas requisições HTTP entre cliente e servidor da aplicação.

```java  
package br.edu.utfpr.pb.pw44s.server.dto;  
  
import jakarta.validation.constraints.NotNull;  
import jakarta.validation.constraints.Size;  
import lombok.*;  
  
@Getter @Setter  
@NoArgsConstructor  
@AllArgsConstructor  
@Builder  
public class CategoryDTO {  
    private Long id;  
  
    @NotNull  
	@Size(min = 2, max = 50)  
    private String name;  
}
```  

```java 
package br.edu.utfpr.pb.pw44s.server.mapper;

import br.edu.utfpr.pb.pw44s.server.dto.CategoryDTO;
import br.edu.utfpr.pb.pw44s.server.model.Category;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface CategoryMapper {

    CategoryDTO toDto(Category entity);

    Category toEntity(CategoryDTO dto);
}
```

#### 6.3 Criação da interface CategoryRepository

A interface `CategoryRepository` será utilizada na consulta, remoção e persistência de dados e herdará as características da interface JPARepository do *framework* Spring Data.

```java  
package br.edu.utfpr.pb.pw44s.server.repository;  
  
import br.edu.utfpr.pb.pw44s.server.model.Category;  
import org.springframework.data.jpa.repository.JpaRepository;  
  
public interface CategoryRepository extends JpaRepository<Category, Long> {  
  
} 
```  

#### 6.4 Interface ICategoryService e classe CategoryServiceImpl
Na sequência serão criadas a interface `ICategoryService` e a classe `CategoryServiceImpl`. Na interface `ICategoryService` serão definidas as assinaturas dos métodos que serão utilizados nas operações de CRUD de Categoria.

```java  
package br.edu.utfpr.pb.pw44s.server.service;  
  
import br.edu.utfpr.pb.pw44s.server.model.Category;  
import org.springframework.data.domain.Page;  
import org.springframework.data.domain.Pageable;  
  
import java.util.List;  
  
public interface ICategoryService {  
    List<Category> findAll();  
    Page<Category> findAll(Pageable pageable);  
    Category findById(Long id);  
    Category save(Category category);  
    void deleteById(Long id);  
    boolean exists(Long id);  
    long count();  
}
```  

A classe `CategoryServiceImpl` implementará os métodos da interface `ICategoryService`. Além disso será necessário injetar a dependência do objeto `categoryRepository` que é gerenciado pelo *framework* Spring. Outra característica que deve ser observada nessa classe é a anotação `@Service`, a qual tornará o ciclo de vida dessa classe também gerenciável pelo *framework* Spring, para podermos utilizar do conceito de injeção de dependências no *controller*.

```java  
package br.edu.utfpr.pb.pw44s.server.service.impl;  
  
import br.edu.utfpr.pb.pw44s.server.model.Category;  
import br.edu.utfpr.pb.pw44s.server.repository.CategoryRepository;  
import br.edu.utfpr.pb.pw44s.server.service.ICategoryService;  
import org.springframework.data.domain.Page;  
import org.springframework.data.domain.Pageable;  
import org.springframework.stereotype.Service;  
import org.springframework.transaction.annotation.Transactional;  
  
import java.util.List;  
  
@Service  
public class CategoryServiceImpl implements ICategoryService {  
  
    private final CategoryRepository categoryRepository;  
  
    public CategoryServiceImpl(CategoryRepository categoryRepository) {  
        this.categoryRepository = categoryRepository;  
    }  
  
    @Override  
	@Transactional(readOnly = true)  
    public List<Category> findAll() {  
        return this.categoryRepository.findAll();  
    }  
  
    @Override  
	@Transactional(readOnly = true)  
    public Page<Category> findAll(Pageable pageable) {  
        return this.categoryRepository.findAll(pageable);  
    }  
  
    @Override  
	@Transactional(readOnly = true)  
    public Category findById(Long id) {  
        return this.categoryRepository.findById(id).orElse(null);  
    }  
  
    @Override  
	public Category save(Category category) {  
        return this.categoryRepository.save(category);  
    }  
  
    @Override  
	public void deleteById(Long id) {  
        this.categoryRepository.deleteById(id);  
    }  
  
    @Override  
	public boolean exists(Long id) {  
        return this.categoryRepository.existsById(id);  
    }  
  
    @Override  
	public long count() {  
        return this.categoryRepository.count();  
    }  
}
```  

Com a criação da camada *service* está finalizada a camada de acesso e persistência de dados, o próximo passo será implementar a camada *controller* para entidade categoria.

#### 6.5 Criando a classe CategoryController

A classe `CategoryController` terá como atributos o objeto `categoryService` para persistência de dados e o `modelMapper` para conversão entre o *model* e o DTO.

```java  
package br.edu.utfpr.pb.pw44s.server.controller;

import br.edu.utfpr.pb.pw44s.server.dto.CategoryDTO;
import br.edu.utfpr.pb.pw44s.server.mapper.CategoryMapper;
import br.edu.utfpr.pb.pw44s.server.model.Category;
import br.edu.utfpr.pb.pw44s.server.service.ICategoryService;
import jakarta.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("categories")
public class CategoryController {
    private final ICategoryService categoryService;
    private final CategoryMapper categoryMapper;

    public CategoryControllerV1(ICategoryService categoryService, CategoryMapper categoryMapper) {
        this.categoryService = categoryService;
        this.categoryMapper = categoryMapper;
    }

    @PostMapping
    public ResponseEntity<CategoryDTO> save(@RequestBody @Valid CategoryDTO category) {
        Category categorySaved = categoryService.save(categoryMapper.toEntity(category));
        return ResponseEntity.status(HttpStatus.CREATED).body(categoryMapper.toDto(categorySaved));
    }

    @PutMapping
    public ResponseEntity<CategoryDTO> update(@RequestBody @Valid CategoryDTO category) {
        Category categorySaved = categoryService.save(categoryMapper.toEntity(category));
        return ResponseEntity.status(HttpStatus.OK).body(categoryMapper.toDto(categorySaved));
    }

    @GetMapping
    public ResponseEntity<List<CategoryDTO>> findAll() {
        return ResponseEntity.ok(
                categoryService.findAll()
                        .stream()
                        .map(categoryMapper::toDto)
                        .collect(Collectors.toList())
        );
    }

    // http://localhost:8080/categories/1
    // http://localhost:8080/categories?id=1
    @GetMapping("{id}")
    public ResponseEntity<Category> findById(@PathVariable Long id) {
        Category category = categoryService.findById(id);
        if (category != null) {
            return ResponseEntity.status(HttpStatus.OK).body(category);
        } else {
            return ResponseEntity.noContent().build();
        }
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) {
        categoryService.deleteById(id);
    }

    @GetMapping("count")
    public ResponseEntity<Long> count() {
        return ResponseEntity.status(HttpStatus.OK).body(categoryService.count());
    }

    @GetMapping("exists/{id}")
    public ResponseEntity<Boolean> exists(@PathVariable Long id) {
        return ResponseEntity.status(HttpStatus.OK).body(categoryService.exists(id));
    }
    //http://localhost:8080/categories/page?page=1&size=5
    @GetMapping("page")
    public ResponseEntity<Page<CategoryDTO>> findPage(@RequestParam int page,
                                                   @RequestParam int size,
                                                   @RequestParam(required = false) String order,
                                                   @RequestParam(required = false) Boolean asc) {
        PageRequest pageRequest = PageRequest.of(page, size);
        if (order != null && asc != null) {
            pageRequest = PageRequest.of(page, size,
                    asc ? Sort.Direction.ASC : Sort.Direction.DESC, order);
        }
        return ResponseEntity.status(HttpStatus.OK).body(
                categoryService.findAll(pageRequest).map(categoryMapper::toDto));
    }
}
```  

Com a finalização do *controller* já é possível realizar requisições HTTP para adicionar, atualizar, buscar e remover categorias. Por exemplo, realizando um HTTP POST para URL [http://localhost:8080/categories](http://localhost:8080/categories), com um JSON no corpo da requisição com a propriedade `name` uma nova categoria será armazenada no banco de dados.

```json  
{
	"name": "Categoria 1"
}  
```  
E, ao realizar um HTTP GET para URL [http://localhost:8080/categories](http://localhost:8080/categories) uma lista de categorias no formato JSON será exibida como resultado.

---
### 7. 📱CRUD de Produtos

Para a implementação do CRUD de Produtos, os passos são os mesmos utilizados ao implementar as operações CRUD de categoria. Para isso serão criados a classe *model*, a interface *repository*, a classe *DTO*, a interface e implementação do *service* e a classe *controller*.

- `Product`: classe que será criada no pacote *model* para representar um produto.
- `ProductDTO`: classe que será criada no pacote *DTO* para representar um produto que será utilizado para transferir o objeto entre as camadas de *view* e *controller*.
- `ProductRepository`: interface que irá implementar JPA Repository e será responsável por realizar as operações de CRUD.
- `IProductService`: interface que representa os métodos CRUD de produtos e deverá ser implementada para persistência dos dados.
- `ProductServiceImpl`: classe que irá herdar as características da interface *IProductService* e por meio da interface *ProductRepository* será responsável pela persistência dos dados.
- `ProductController`: classe que irá tratar as requisições HTTP vindas do cliente e fazer a comunicação com a camada de persistência de dados.

#### 7.1 Classe Product
No pacote `model` deverá ser criada a classe `Product` com os atributos `id`, `name`, `description`, `price` e `category`.
```java  
package br.edu.utfpr.pb.pw44s.server.model;  
  
import jakarta.persistence.*;  
import jakarta.validation.constraints.NotNull;  
import lombok.*;  
  
import java.math.BigDecimal;  
import java.util.Objects;  
  
@Entity  
@Table(name = "tb_product")  
@AllArgsConstructor  
@NoArgsConstructor  
@Builder  
@Getter @Setter  
public class Product {  
  
    @Id  
	@GeneratedValue(strategy = GenerationType.IDENTITY)  
    private Long id;  
  
    @NotNull  
	private String name;  
  
    @NotNull  
    @Column(length = 1024)  
    private String description;  
  
    @NotNull  
	private BigDecimal price;  
  
    @ManyToOne  
	@JoinColumn(name = "category_id", referencedColumnName = "id")  
    private Category category;  
  
    @Override  
	public boolean equals(Object o) {  
        if (this == o) return true;  
        if (o == null || getClass() != o.getClass()) return false;  
        Product product = (Product) o;  
        return Objects.equals(id, product.id);  
    }  
  
    @Override  
	public int hashCode() {  
        return Objects.hash(id);  
    }  
}  
```  
#### 7.2 Interface ProductDTO

```java  
package br.edu.utfpr.pb.pw44s.server.dto;  
  
import jakarta.validation.constraints.NotNull;  
import lombok.*;  
  
import java.math.BigDecimal;  
  
@Getter @Setter  
@NoArgsConstructor  
@AllArgsConstructor  
@Builder  
public class ProductDTO {  
  
    private Long id;  
  
    @NotNull  
	private String name;  
  
    @NotNull  
	private String description;  
  
    @NotNull  
	private BigDecimal price;  
  
	private CategoryDTO category;  
}
```  

#### 7.3 Interface ProductMapper

```java
package br.edu.utfpr.pb.pw44s.server.mapper;

import br.edu.utfpr.pb.pw44s.server.dto.ProductDTO;
import br.edu.utfpr.pb.pw44s.server.model.Product;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING, uses = CategoryMapper.class)
public interface ProductMapper {

    ProductDTO toDto(Product entity);

    Product toEntity(ProductDTO dto);
}
```

#### 7.3 Interface ProductRepository
```java  
package br.edu.utfpr.pb.pw44s.server.repository;  
  
import br.edu.utfpr.pb.pw44s.server.model.Product;  
import org.springframework.data.jpa.repository.JpaRepository;  
  
public interface ProductRepository extends JpaRepository<Product, Long> {  
}
```  

#### 7.4 Interface IProductService
```java  
package br.edu.utfpr.pb.pw44s.server.service;  
  
import br.edu.utfpr.pb.pw44s.server.model.Product;  
import org.springframework.data.domain.Page;  
import org.springframework.data.domain.Pageable;  
  
import java.util.List;  
  
public interface IProductService {  
    List<Product> findAll();  
    Page<Product> findAll(Pageable pageable);  
    Product findById(Long id);  
    Product save(Product product);  
    void delete(Long id);  
    boolean exists(Long id);  
    long count();  
} 
```  
#### 7.5 Classe ProductServiceImpl
```java  
package br.edu.utfpr.pb.pw44s.server.service.impl;  
  
import br.edu.utfpr.pb.pw44s.server.model.Product;  
import br.edu.utfpr.pb.pw44s.server.repository.ProductRepository;  
import br.edu.utfpr.pb.pw44s.server.service.IProductService;  
import org.springframework.data.domain.Page;  
import org.springframework.data.domain.Pageable;  
import org.springframework.stereotype.Service;  
import org.springframework.transaction.annotation.Transactional;  
  
import java.util.List;  
  
@Service  
public class ProductServiceImpl implements IProductService {  
    private final ProductRepository productRepository;  
  
    public ProductServiceImpl(ProductRepository productRepository) {  
        this.productRepository = productRepository;  
    }  
  
    @Override  
	@Transactional(readOnly = true)  
    public List<Product> findAll() {  
        return this.productRepository.findAll();  
    }  
  
    @Override  
    @Transactional(readOnly = true)  
    public Page<Product> findAll(Pageable pageable) {  
        return this.productRepository.findAll(pageable);  
    }  
  
    @Override  
	@Transactional(readOnly = true)  
    public Product findById(Long id) {  
        return this.productRepository.findById(id).orElse(null);  
    }  
  
    @Override  
	public Product save(Product product) {  
        return this.productRepository.save(product);  
    }  
  
    @Override  
	public void delete(Long id) {  
        this.productRepository.deleteById(id);  
    }  
  
    @Override  
	public boolean exists(Long id) {  
        return this.productRepository.existsById(id);  
    }  
  
    @Override  
	public long count() {  
        return this.productRepository.count();  
    }  
}
```  
#### 7.6 Classe ProductController
```java  
package br.edu.utfpr.pb.pw44s.server.controller;

import br.edu.utfpr.pb.pw44s.server.dto.ProductDTO;
import br.edu.utfpr.pb.pw44s.server.mapper.CategoryMapper;
import br.edu.utfpr.pb.pw44s.server.mapper.ProductMapper;
import br.edu.utfpr.pb.pw44s.server.model.Product;
import br.edu.utfpr.pb.pw44s.server.service.IProductService;
import jakarta.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("products")
public class ProductControllerV1 {
    private final IProductService productService;
    private final ProductMapper productMapper;

    public ProductControllerV1(IProductService productService, ProductMapper  productMapper) {
        this.productService = productService;
        this.productMapper = productMapper;
    }

    @PostMapping
    public ResponseEntity<ProductDTO> save(@RequestBody @Valid ProductDTO product) {
        Product productSaved = productService.save(productMapper.toEntity(product));
        return ResponseEntity.status(HttpStatus.CREATED).body(productMapper.toDto(productSaved));
    }

    @PutMapping
    public ResponseEntity<ProductDTO> update(@RequestBody @Valid ProductDTO product) {
        Product productSaved = productService.save(productMapper.toEntity(product));
        return ResponseEntity.status(HttpStatus.OK).body(productMapper.toDto(productSaved));
    }

    @GetMapping
    public ResponseEntity<List<ProductDTO>> findAll() {
        return ResponseEntity.ok(
                productService.findAll()
                        .stream()
                        .map(productMapper::toDto)
                        .collect(Collectors.toList())
        );
    }

    // http://localhost:8080/products/1
    // http://localhost:8080/products?id=1  @GetMapping("{id}")
    public ResponseEntity<ProductDTO> findById(@PathVariable Long id) {
        Product product = productService.findById(id);
        if (product != null) {
            return ResponseEntity.status(HttpStatus.OK).body(productMapper.toDto(product));
        } else {
            return ResponseEntity.noContent().build();
        }
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) {
        productService.deleteById(id);
    }

    @GetMapping("count")
    public ResponseEntity<Long> count() {
        return ResponseEntity.status(HttpStatus.OK).body(productService.count());
    }

    @GetMapping("exists/{id}")
    public ResponseEntity<Boolean> exists(@PathVariable Long id) {
        return ResponseEntity.status(HttpStatus.OK).body(productService.exists(id));
    }

    //http://localhost:8080/products/page?page=1&size=5
    @GetMapping("page")
    public ResponseEntity<Page<ProductDTO>> findPage(@RequestParam int page,
                                                  @RequestParam int size,
                                                  @RequestParam(required = false) String order,
                                                  @RequestParam(required = false) Boolean asc) {
        PageRequest pageRequest = PageRequest.of(page, size);
        if (order != null && asc != null) {
            pageRequest = PageRequest.of(page, size,
                    asc ? Sort.Direction.ASC : Sort.Direction.DESC, order);
        }
        return ResponseEntity.status(HttpStatus.OK).body(
                productService.findAll(pageRequest).map(productMapper::toDto));
    }
}
```  

Finalizando o *controller* de produtos já é possível realizar requisições HTTP para adicionar, atualizar, buscar e remover categorias. Por exemplo, realizando um HTTP POST para URL [http://localhost:8080/products](http://localhost:8080/products), com um JSON no corpo da requisição com os dados dos atributos `name, description, price e category` um novo produto será armazenado no banco de dados. Lembrando que a categoria já deve estar cadastrada no banco de dados no momento da requisição para cadastro de um novo produto.

```json  
{
	"name": "Produto 1",
	"description":"Descrição do produto 1",
	"price":99.99,
	"category": {
		"id": 1
	}
}  
```  
E, ao realizar um HTTP GET para URL [http://localhost:8080/products](http://localhost:8080/products) uma lista de produtos no formato JSON será exibida como resultado, ex.:
```json
[
	{
		"name": "Produto 1",
		"description":"Descrição do produto 1",
		"price":99.99,
		"category": {
			"id": 1,
			"name": "Categoria 1"
		}
	}  
]
```

---
### 8. 👨‍👨‍👧‍👦 Utilizando o conceito de herança para implementar a camada de *Service* e *Controller* para os CRUDs do projeto.

No desenvolvimento dos CRUDs de Categoria e Produto é possível notar a semelhança e repetição de trechos de código. Uma das maneiras de evitar a repetição de código e melhorar a manutenibilidade do mesmo é por meio do conceito de herança, pois assim juntamos características semelhantes de atributos e métodos de diferentes classes em uma só classe que será herdada nas demais classes da aplicação. Para aplicar o conceito de herança no projeto serão implementadas interfaces e classes nas camadas **service** e  **controller** da aplicação. A estrutura criada será:

- `ICrudService`: interface a ser criada na camada service para servir de contrato com as classes criadas, irá conter a assinatura de todos os métodos necessários para realizar as operações de CRUD.
- `CrudServiceImpl`: classe abstrata com implementação da interface *ICrudService* implementando os métodos com as operações de CRUD.
- `CrudController`: classe abstrata contendo a implementação dos principais métodos HTTP utilizado para receber requisições dos clientes.

#### 8.1 A interface ICrudService e a classe CrudServiceImpl
Dentro do pacote `br.edu.utfpr.pb.pw44s.server.service` será criada a  interface `ICrudService`, a qual tem em sua assinatura a necessidade de duas classes, conforme: `<T, ID extends Serializable>`, em que `T` será o tipo da classe irá implementar a interface para realizar as operações de CRUD e `ID` o tipo de dados que representa a chave primária na classe. A interface conta com assinatura de métodos de busca de dados (`findAll(), findById()`), persistência de dados (`save()`) e remoção de dados (`delete()`).

```java  
package br.edu.utfpr.pb.pw44s.server.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import java.io.Serializable;
import java.util.List;

public interface ICrudService<T, ID extends Serializable> {

    List<T> findAll();

    List<T> findAll(Sort sort);

    Page<T> findAll(Pageable pageable);

    T save(T entity);

    T saveAndFlush(T entity);

    Iterable<T> save(Iterable<T> iterable);

    void flush();

    T findById(ID id);

    boolean exists(ID id);

    long count();

    void deleteById(ID id);

    void delete(Iterable<? extends T> iterable);

    void deleteAll();

}
```  
A classe `CrudServiceImpl` será criada no pacote `br.edu.utfpr.pb.pw44s.server.service.impl`. Essa classe é abstrata e irá implementar todos os métodos existentes na classe `ICrudService` e contém também a assinatura de um método abstrato o `getRepository()`, que irá retornar o repositório de dados que irá ser utilizado para realizar as operações de CRUD.

```java  
package br.edu.utfpr.pb.pw44s.server.service.impl;

import br.edu.utfpr.pb.pw44s.server.service.ICrudService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import java.io.Serializable;
import java.util.List;

public abstract class CrudServiceImpl<T, ID extends Serializable> implements ICrudService<T, ID> {

    protected abstract JpaRepository<T, ID> getRepository();

    @Override
    public List<T> findAll() {
        return getRepository().findAll();
    }

    @Override
    public List<T> findAll(Sort sort) {
        return getRepository().findAll(sort);
    }

    @Override
    public Page<T> findAll(Pageable pageable) {
        return getRepository().findAll(pageable);
    }

    @Override
    public T save(T entity) {
        return getRepository().save(entity);
    }

    @Override
    public T saveAndFlush(T entity) {
        return getRepository().saveAndFlush(entity);
    }

    @Override
    public Iterable<T> save(Iterable<T> iterable) {
        return getRepository().saveAll(iterable);
    }

    @Override
    public void flush() {
        getRepository().flush();
    }

    @Override
    public T findById(ID id) {
        return getRepository().findById(id).orElse(null);
    }

    @Override
    public boolean exists(ID id) {
        return getRepository().existsById(id);
    }

    @Override
    @Transactional(readOnly = true)
    public long count() {
        return getRepository().count();
    }

    @Override
    public void deleteById(ID id) {
        getRepository().deleteById(id);
    }

    @Override
    public void delete(Iterable<? extends T> iterable) {
        getRepository().deleteAll(iterable);
    }

    @Override
    public void deleteAll() {
        getRepository().deleteAll();
    }
}
```  
Após a criação da interface `ICrudService` e da classe abstrata `CrudServiceImpl` a camada de persistência de dados está finalizada. O próximo passo é desenvolver a classe abstrata da camada ***controller*** da aplicação.

#### 8.2 Criação da classe abstrata *CrudController*

A classe abstrata `CrudController` será criada no pacote `br.edu.utfpr.pb.pw44s.server.controller`, a assinatura irá contar com três classes como parâmetro `<T, D, ID extends Serializable>`, em que `T` o tipo da classe *model*, `D` o tipo da classe *DTO* e `ID` o tipo de dados da chave primária.

Os métodos com as anotações `@GetMapping` executam as requisições do tipo *GET*, ou seja, receberão as requisições para consulta de dados. Para retorno de todos os dados, com os dados paginados, retornando apenas um registro pelo código (ID).

Já o método `create(@RequestBody @Valid D entity)` será utilizado para criar um novo registro, irá receber como parâmetro um JSON no formato da classe DTO, será validado de acordo com as anotações no DTO e então persistido utilizando o *service*.


```java  
package br.edu.utfpr.pb.pw44s.server.controller;

import br.edu.utfpr.pb.pw44s.server.service.ICrudService;
import jakarta.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.Serializable;
import java.util.List;
import java.util.stream.Collectors;

// T = class type, D = dto type, ID = attribute related to primary key type
public abstract class CrudController<T, D, ID extends Serializable> {

    protected abstract ICrudService<T, ID> getService();

    protected abstract D toDto(T entity);

    protected abstract T toEntity(D dto);

    private D convertToDto(T entity) {
        return toDto(entity);
    }

    private T convertToEntity(D entityDto) {
        return toEntity(entityDto);
    }

    @GetMapping //http://ip-api:port/request-mapping
    public ResponseEntity<List<D>> findAll() {
        return ResponseEntity.ok(getService().findAll().stream().map(this::convertToDto).collect(Collectors.toList()));
    }

    @GetMapping("page")  //http://ip-api:port/request-mapping/page?page=1&size=5
    public ResponseEntity<Page<D>> findAll(@RequestParam int page,
                                           @RequestParam int size,
                                           @RequestParam(required = false) String order,
                                           @RequestParam(required = false) Boolean asc) {
        PageRequest pageRequest = PageRequest.of(page, size);
        if (order != null && asc != null) {
            pageRequest = PageRequest.of(page, size, asc ? Sort.Direction.ASC : Sort.Direction.DESC, order);
        }
        return ResponseEntity.ok(getService().findAll(pageRequest).map(this::convertToDto));
    }

    @GetMapping("{id}")
    public ResponseEntity<D> findOne(@PathVariable ID id) {
        T entity = getService().findById(id);
        if (entity != null) {
            return ResponseEntity.ok(convertToDto(entity));
        } else {
            return ResponseEntity.noContent().build();
        }
    }

    @PostMapping
    public ResponseEntity<D> create(@RequestBody @Valid D entity) {
        return ResponseEntity.status(HttpStatus.CREATED).body(convertToDto(getService().save(convertToEntity(entity))));

    }

    @PutMapping("{id}")
    public ResponseEntity<D> update(@PathVariable ID id, @RequestBody @Valid D entity) {
        return ResponseEntity.status(HttpStatus.OK).body(convertToDto(getService().save(convertToEntity(entity))));
    }

    @GetMapping("exists/{id}")
    public ResponseEntity<Boolean> exists(@PathVariable ID id) {
        return ResponseEntity.ok(getService().exists(id));
    }

    @GetMapping("count")
    public ResponseEntity<Long> count() {
        return ResponseEntity.ok(getService().count());
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Void> delete(@PathVariable ID id) {
        getService().deleteById(id);
        return ResponseEntity.noContent().build();
    }

}
```
---
###  9. 💵 Aplicando herança nos CRUDs de Categoria e Produto

#### 9.1 Categorias
Os ajustes serão realizados na interface `ICategoryService` e nas classes `CategoryServiceImpl` e  `CategoryController`.

##### 9.1.1 ICategoryService
```java
package br.edu.utfpr.pb.pw44s.server.service;

import br.edu.utfpr.pb.pw44s.server.model.Category;

public interface ICategoryService extends ICrudService<Category, Long> {
}
```
##### 9.1.2 CategoryServiceImpl
```java
package br.edu.utfpr.pb.pw44s.server.service.impl;

import br.edu.utfpr.pb.pw44s.server.model.Category;
import br.edu.utfpr.pb.pw44s.server.repository.CategoryRepository;
import br.edu.utfpr.pb.pw44s.server.service.ICategoryService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public class CategoryServiceImpl extends CrudServiceImpl<Category, Long>
        implements ICategoryService {

    private final CategoryRepository categoryRepository;

    public CategoryServiceImpl(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @Override
    protected JpaRepository<Category, Long> getRepository() {
        return categoryRepository;
    }
}
```
##### 9.1.3 CategoryController
```java
package br.edu.utfpr.pb.pw44s.server.controller;

import br.edu.utfpr.pb.pw44s.server.dto.CategoryDTO;
import br.edu.utfpr.pb.pw44s.server.mapper.CategoryMapper;
import br.edu.utfpr.pb.pw44s.server.model.Category;
import br.edu.utfpr.pb.pw44s.server.service.ICategoryService;
import br.edu.utfpr.pb.pw44s.server.service.ICrudService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("categories")
public class CategoryController extends CrudController<Category, CategoryDTO, Long> {

    private final CategoryMapper categoryMapper;

    public CategoryController(ICategoryService categoryService, CategoryMapper categoryMapper) {
        this.categoryMapper = categoryMapper;
        CategoryController.categoryService = categoryService;
    }

    private static ICategoryService categoryService;

    @Override
    protected ICrudService<Category, Long> getService() {
        return categoryService;
    }

    @Override
    protected CategoryDTO toDto(Category entity) {
        return categoryMapper.toDto(entity);
    }

    @Override
    protected Category toEntity(CategoryDTO dto) {
        return categoryMapper.toEntity(dto);
    }
}
```

#### 9.2 Produtos
Os ajustes serão realizados na interface `IProductService` e nas classes `ProductServiceImpl` e `ProductController`.

##### 9.2.1 IProductService
```java
package br.edu.utfpr.pb.pw44s.server.service;

import br.edu.utfpr.pb.pw44s.server.model.Product;

public interface IProductService extends ICrudService<Product, Long> {
}
```
##### 9.2.2 ProductServiceImpl
```java
package br.edu.utfpr.pb.pw44s.server.service.impl;

import br.edu.utfpr.pb.pw44s.server.model.Product;
import br.edu.utfpr.pb.pw44s.server.repository.ProductRepository;
import br.edu.utfpr.pb.pw44s.server.service.IProductService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public class ProductServiceImpl extends CrudServiceImpl<Product, Long>
        implements IProductService {

    private final ProductRepository productRepository;

    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    protected JpaRepository<Product, Long> getRepository() {
        return productRepository;
    }

}
```
##### 9.2.3 ProductController
```java
package br.edu.utfpr.pb.pw44s.server.controller;

import br.edu.utfpr.pb.pw44s.server.dto.ProductDTO;
import br.edu.utfpr.pb.pw44s.server.mapper.ProductMapper;
import br.edu.utfpr.pb.pw44s.server.model.Product;
import br.edu.utfpr.pb.pw44s.server.service.ICrudService;
import br.edu.utfpr.pb.pw44s.server.service.IProductService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("products")
public class ProductController extends CrudController<Product, ProductDTO, Long> {

    private final ProductMapper productMapper;

    public ProductController(IProductService productService, ProductMapper productMapper) {
        this.productMapper = productMapper;
        ProductController.productService = productService;
    }

    private static IProductService productService;

    @Override
    protected ICrudService<Product, Long> getService() {
        return productService;
    }

    @Override
    protected ProductDTO toDto(Product entity) {
        return productMapper.toDto(entity);
    }

    @Override
    protected Product toEntity(ProductDTO dto) {
        return productMapper.toEntity(dto);
    }
}
```
---
### 10. 🔬Carregando dados para teste
Para que seja mais fácil testar a API nesse momento, vamos adicionar um conjunto de dados padrão junto com a execução da aplicação. Assim, toda vez que a aplicação for iniciada os dados serão inseridos no banco de dados e estarão disponíveis para teste nos diferentes *endpoints* implementados. Para isso, criar um arquivo chamado `import.sql` dentro da pasta de `resources` da aplicação. A senha no exemplo abaixo já está criptografada e o valor é **123**.

```sql
-- Category  
insert into tb_category (name) values ('Informática');  
insert into tb_category (name) values ('UD');  
insert into tb_category (name) values ('Cozinha');  
insert into tb_category (name) values ('Móveis');  
insert into tb_category (name) values ('Eletrônico');  
-- Product  
insert into tb_product (name, description, price, category_id) values ('Refrigerador 429L','Refrigerador 429L Branco, duplex....',1990.0,2);  
insert into tb_product (name, description, price, category_id) values ('Notebook Arus 15.6','Notebook Arus 15.6 Core I7, 16Gb Ram...',2449.0,1);  
insert into tb_product (name, description, price, category_id) values ('Monitor 27pol','Monitor Gamer 27pol 144Hz, 1ms',1129.99,1);  
insert into tb_product (name, description, price, category_id) values ('Kit Teclado e Mouse','Kit com teclado ABNT e mouse com 5 botões',199.0,1);  
insert into tb_product (name, description, price, category_id) values ('Smartphone XYZ','Smatphone com tela de 9pol, 12GB....',9999.0,5);  
insert into tb_product (name, description, price, category_id) values ('TV LCD 75pol','TV LCD 75pol, 5 HDMI...',7555.0,5);  
insert into tb_product (name, description, price, category_id) values ('Fogão 6 Bocas','Fogão 6 Bocas em aço inox, ...', 799.99,3);  
insert into tb_product (name, description, price, category_id) values ('Roteador Wi-Fi 5.4GhZ','Roteador Wi-Fi 5.4GhZ, 6 antenas...',1299.0,1);  
-- User - password: 123  
INSERT INTO tb_user(display_name, username, password) VALUES ('Administrador', 'admin','$2a$10$.PVIfB07x.SfMYTcToxL0.yxcLWU0GbS2NUO1W1QAvqMm/TsFhVem');  
INSERT INTO tb_user(display_name, username, password) VALUES ('Teste', 'test','$2a$10$.PVIfB07x.SfMYTcToxL0.yxcLWU0GbS2NUO1W1QAvqMm/TsFhVem');
```
---
### 11. <img width="20" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/postgresql.png" alt="PostgreSQL" title="PostgreSQL"/> Adicionando conexão com o PostgresSQL

A mesma estrutura do banco de dados e arquivo de dados para teste podem ser utilizados em um banco de dados PostgresSQL, para isso será ajustado o arquivo `application.properties` adicionando os dados da nova conexão com o banco de dados. Criar um banco de dados no postgres chamado **pw44s**. Ajustar os dados de usuário e senha no arquivo de propriedades de acordo com os dados do SGBD utilizado. A conexão está configurada com `spring.jpa.hibernate.ddl-auto=create-drop` isso significa que toda vez que executarmos a aplicação a estrutura do banco de dados será removida e criada novamente. O valor pode ser ajustado de `create-drop` para `update`, por exemplo, assim o banco de dados será criado e atualizado novamente só quando existir mudança nas classes e atributos.

```properties
spring.application.name=server  
server.port=8080  
  
# Conexão com o H2 comentada:  
#spring.datasource.generate-unique-name=false  
#spring.datasource.url=jdbc:h2:mem:testdb  
#spring.h2.console.enabled=true  
#spring.h2.console.path=/h2-console  
  
# Conexão com o PostgresSQL adicionada:  
spring.jpa.database=postgresql  
spring.datasource.url=jdbc:postgresql://127.0.0.1:5432/pw44s  
spring.datasource.username=postgres  
spring.datasource.password=postgres  
spring.jpa.hibernate.ddl-auto=create-drop  
spring.jpa.show-sql=true
```
Além do ajuste no arquivo de propriedades devemos nos certificar que o *driver* do PosgresSQL está adicionado ao arquivo `pom.xml`.
```xml
	<!--... -->
	<dependency>  
		<groupId>org.postgresql</groupId>  
		<artifactId>postgresql</artifactId>  
		<scope>runtime</scope>  
	</dependency>
	<!--... -->	
```

### 12. 🔏 Recuperando os dados do usuário autenticado

Em alguns momentos será necessário recuperar os dados do usuário autenticado para alguma tarefa na API. Para exemplificar será criada a classe `AuthController` e dentro dela o método `getUserInfo()`. O `username` pode ser recuperado tanto por meio do objeto do tipo `Principal` no *controller* quanto utilizando o `SecurityContextHolder` por meio do código: `SecurityContextHolder.getContext().getAuthentication().getName();`. Com o `username` basta buscar o usuário no banco de dados. Lembrando que a URL ***/auth/user-info*** só poderá ser acessada por usuários autenticados.

```java
package br.edu.utfpr.pb.pw44s.server.controller;  
  
import br.edu.utfpr.pb.pw44s.server.dto.UserDTO;  
import br.edu.utfpr.pb.pw44s.server.service.AuthService;  
import org.modelmapper.ModelMapper;  
import org.springframework.web.bind.annotation.GetMapping;  
import org.springframework.web.bind.annotation.RequestMapping;  
import org.springframework.web.bind.annotation.RestController;  
  
import java.security.Principal;  
  
@RestController  
@RequestMapping("auth")  
public class AuthController {  
  
    private final AuthService authService;  
    private final ModelMapper modelMapper;  
  
    public AuthController(AuthService authService, ModelMapper modelMapper) {  
        this.authService = authService;  
        this.modelMapper = modelMapper;  
    }  
  
    @GetMapping("user-info")  
    public UserDTO getUserInfo(Principal principal) {  
        // String username = SecurityContextHolder.getContext().getAuthentication().getName();  
		// ou  String username = principal.getName();  
        return modelMapper.map(authService.loadUserByUsername(username), UserDTO.class);  
    }  
}
```


# 📚 Referências

[1] Spring Framework, https://spring.io/.

[2] JOHNSON, R. E.; FOOTE, B.. Designing reusable classes. Journal of Object-Oriented Programming, 1(2):22–35, 1988.

[3] Prasanna, D.R., Dependency Injection: Design Patterns Using Spring and Guice, isbn=9781933988559, Manning- Manning Pubs Co Series,  url: https://books.google.com.br/books?id=b6O6OgAACAAJ, 2009.

[4] Spring Data JPA - Disponível em: https://docs.spring.io/spring-data/jpa/docs/current/reference/html/#reference

[5] Fielding, Roy. Architectural Styles and the Design of Network-based Software Architectures  Disponível em: https://www.ics.uci.edu/~fielding/pubs/dissertation/fielding_dissertation.pdf   
[6] BCryptPasswordEncoder. Disponível em: https://docs.spring.io/spring-security/site/docs/current/api/org/springframework/security/crypto/bcrypt/BCryptPasswordEncoder.html

[7] Java Bean Validation. Disponível em:  https://beanvalidation.org/3.0/

[8] Spring Security [https://spring.io/projects/spring-security](https://spring.io/projects/spring-security)

[9] CSRF Attack [https://docs.spring.io/spring-security/reference/features/exploits/csrf.html#csrf-explained](https://docs.spring.io/spring-security/reference/features/exploits/csrf.html#csrf-explained)