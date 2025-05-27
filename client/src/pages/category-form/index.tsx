import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Toast } from "primereact/toast";
import type { ICategory, IResponse } from "@/commons/types";
import CategoryService from "@/services/category-service";
import { Controller, useForm } from "react-hook-form";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

export const CategoryFormPage = () => {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState<ICategory | undefined>(undefined);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ICategory>({
    defaultValues: { name: "" },
  });
  const toast = useRef<Toast>(null);
  const navigate = useNavigate();
  const { findById, save } = CategoryService;

  const isEdit = !!id;

  useEffect(() => {
    loadCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const loadCategory = async () => {
    if (isEdit) {
      setLoading(true);
      const response = (await findById(parseInt(id!))) as IResponse;
      try {
        if (response.status === 200) {
          setCategory(response.data as ICategory);
          reset(response.data as ICategory);
        } else {
          toast.current?.show({
            severity: "error",
            summary: "Erro",
            detail: "Falha ao carregar o registro.",
            life: 3000,
          });
        }
      } catch {
        setCategory(undefined);
      } finally {
        setLoading(false);
      }
    }
  };

  const onSubmit = async (data: ICategory) => {
    setLoading(true);
    try {
      const response = await save(data);
      if (
        (response.status === 201 || response.status === 200) &&
        response.data
      ) {
        toast.current?.show({
          severity: "success",
          summary: "Sucesso",
          detail: "Categoria salva com sucesso.",
          life: 3000,
        });
        setTimeout(() => {
          navigate("/categories");
        }, 1000);
      } else {
        toast.current?.show({
          severity: "error",
          summary: "Erro",
          detail: "Não foi possível salvar o registro.",
          life: 3000,
        });
      }
    } catch {
      toast.current?.show({
        severity: "error",
        summary: "Erro",
        detail: "Não foi possível salvar o registro.",
        life: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 pt-24 max-w-xl">
      <Toast ref={toast} />

      <h2 className="text-2xl mb-4">
        {isEdit ? "Editar Categoria" : "Nova Categoria"}
      </h2>

      {!isEdit || category ? (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-fluid">
          <div>
            <label htmlFor="name" className="block mb-2">
              Nome da Categoria
            </label>
            <Controller
              name="name"
              control={control}
              rules={{ required: "O nome é obrigatório" }}
              render={({ field }) => (
                <InputText
                  id="name"
                  {...field}
                  placeholder="Digite o nome da categoria"
                />
              )}
            />
            {errors.name && (
              <small className="p-error">{errors.name.message}</small>
            )}
          </div>

          <div className="flex justify-end gap-2 mt-4">
            <Button
              type="button"
              label="Cancelar"
              className="p-button-secondary"
              onClick={() => navigate("/categories")}
              loading={loading || isSubmitting}
              disabled={loading || isSubmitting}
            />
            <Button
              type="submit"
              label={isEdit ? "Atualizar" : "Salvar"}
              loading={loading || isSubmitting}
              disabled={loading || isSubmitting}
            />
          </div>
        </form>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};
