import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ICategory } from "@/commons/interfaces";
import CategoryService from "@/service/CategoryService";

export function CategoryListPage() {
  // variável de estado para armazenar a lista de categorias
  const [data, setData] = useState<ICategory[]>([]);
  // variável de estado para armazenar a mensagem de erro da API
  const [apiError, setApiError] = useState<String>("");
  // funções do serviço de categoria
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
