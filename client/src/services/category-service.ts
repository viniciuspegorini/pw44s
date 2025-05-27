import type { ICategory, IResponse } from "@/commons/types";
import { api } from "@/lib/axios";

// URL base para as requisições de categoria
const categoryURL = "/categories";

/**
 * Função para salvar uma categoria
 * @param category - Dados da categoria que será salva
 * @returns - Retorna uma Promise com a resposta da API
 **/
const save = async (category: ICategory): Promise<IResponse> => {
  let response = {} as IResponse;
  try {
    const data = await api.post(categoryURL, category);
    response = {
      status: 200,
      success: true,
      message: "Categoria salva com sucesso!",
      data: data.data,
    };
  } catch (err: any) {
    response = {
      status: err.response.status,
      success: false,
      message: "Falha ao salvar categoria",
      data: err.response.data,
    };
  }
  return response;
};

/**
 * Função para buscar todas as categorias
 * @returns - Retorna uma Promise com a resposta da API
 * com a lista de categorias
 **/
const findAll = async (): Promise<IResponse> => {
  let response = {} as IResponse;
  try {
    const data = await api.get(categoryURL);
    response = {
      status: 200,
      success: true,
      message: "Lista de categorias carregada com sucesso!",
      data: data.data,
    };
  } catch (err: any) {
    response = {
      status: err.response.status,
      success: false,
      message: "Falha ao carregar a lista de categorias",
      data: err.response.data,
    };
  }
  return response;
};

/**
 * Função para remover uma categoria
 * @param id - Recebe o id da categoria que será removida
 * @returns - Retorna uma Promise com a resposta da API
 */
const remove = async (id: number): Promise<IResponse> => {
  let response = {} as IResponse;
  try {
    const data = await api.delete(`${categoryURL}/${id}`);
    response = {
      status: 200,
      success: true,
      message: "Categoria removida com sucesso!",
      data: data.data,
    };
  } catch (err: any) {
    response = {
      status: err.response.status,
      success: false,
      message: "Falha ao remover categoria",
      data: err.response.data,
    };
  }
  return response;
};

/**
 * Função para buscar uma categoria pelo id
 * @param id - Recebe o id da categoria que será buscada
 * @returns - Retorna uma Promise com a resposta da API
 */
const findById = async (id: number): Promise<IResponse> => {
  let response = {} as IResponse;
  try {
    const data = await api.get(`${categoryURL}/${id}`);
    response = {
      status: 200,
      success: true,
      message: "Categoria carregada com sucesso!",
      data: data.data,
    };
  } catch (err: any) {
    response = {
      status: err.response.status,
      success: false,
      message: "Falha ao carregar categoria",
      data: err.response.data,
    };
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
