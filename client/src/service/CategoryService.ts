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
