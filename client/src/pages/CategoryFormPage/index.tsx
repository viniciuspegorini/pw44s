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
