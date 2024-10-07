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
    api.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${response.data.token}`;
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
