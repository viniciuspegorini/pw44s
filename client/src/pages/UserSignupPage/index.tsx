/* 
	O ChangeEvent será utilizado para tipar o parâmetro do método onChange, que será utilizado para recuperar os valores digitados nos campos de texto ao cadastrar um novo usuário.
	O hook[4] useState será utilizado para manter os valores informados pelo usuário nos campos de texto no estado (state[3]) da aplicação.	
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

    /* Em caso de sucesso navega para a raiz do projeto */
    if (response.status === 200 || response.status === 201) {
      navigate("/");
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
