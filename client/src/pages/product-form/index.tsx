import { useForm, Controller } from "react-hook-form";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import type { ICategory, IProduct, IResponse } from "@/commons/types";
import { Toast } from "primereact/toast";
import CategoryService from "@/services/category-service";
import ProductService from "@/services/product-service";

export const ProductFormPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const toast = useRef<Toast>(null);
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState<IProduct | undefined>(undefined);

  const [categories, setCategories] = useState<ICategory[]>([]);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<IProduct>({
    defaultValues: { name: "", description: "", price: 0, category: undefined },
  });
  const { findAll } = CategoryService;
  const { findById, save } = ProductService;

  const isEdit = !!id;

  // Simula carregamento de categorias e, se for edição, do produto
  useEffect(() => {
    // Simula fetch categorias
    const loadCategories = async () => {
      const response = await findAll();
      if (response.data && Array.isArray(response.data)) {
        setCategories(response.data as ICategory[]);
      } else {
        setCategories([]);
      }
    };
    loadCategories();

    loadProduct();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]); // Adiciona id como dependência para recarregar o produto se o id mudar

  const loadProduct = async () => {
    if (isEdit) {
      setLoading(true);
      const response = (await findById(parseInt(id!))) as IResponse;
      try {
        if (response.status === 200) {
          setProduct(response.data as IProduct);
          reset(response.data as IProduct);
        } else {
          toast.current?.show({
            severity: "error",
            summary: "Erro",
            detail: "Falha ao carregar o registro.",
            life: 3000,
          });
        }
      } catch {
        setProduct(undefined);
      } finally {
        setLoading(false);
      }
    }
  };

  const onSubmit = async (data: IProduct) => {
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
          detail: "Registro salvo com sucesso.",
          life: 3000,
        });
        setTimeout(() => {
          navigate("/products");
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
    <div className="container mx-auto px-4 pt-24 max-w-2xl">
      <Toast ref={toast} />

      <h2 className="text-2xl font-bold mb-4">
        {isEdit ? "Editar Produto" : "Cadastrar Produto"}
      </h2>
      {!isEdit || product ? (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block mb-1">Nome</label>
            <Controller
              name="name"
              control={control}
              rules={{ required: "Nome é obrigatório" }}
              render={({ field }) => (
                <InputText {...field} className="w-full" />
              )}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block mb-1">Descrição</label>
            <Controller
              name="description"
              control={control}
              rules={{ required: "Descrição é obrigatória" }}
              render={({ field }) => (
                <InputText {...field} className="w-full" />
              )}
            />
            {errors.description && (
              <p className="text-red-500 text-sm">
                {errors.description.message}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-1">Preço</label>
            <Controller
              name="price"
              control={control}
              rules={{ required: "Preço é obrigatório" }}
              render={({ field }) => (
                <InputNumber
                  value={field.value}
                  onValueChange={(e) => field.onChange(e.value)}
                  className="w-full"
                  mode="currency"
                  currency="BRL"
                  locale="pt-BR"
                />
              )}
            />
            {errors.price && (
              <p className="text-red-500 text-sm">{errors.price.message}</p>
            )}
          </div>

          <div>
            <label className="block mb-1">Categoria</label>
            <Controller
              name="category"
              control={control}
              rules={{ required: "Categoria é obrigatória" }}
              render={({ field }) => (
                <Dropdown
                  {...field}
                  options={categories}
                  optionLabel="name"
                  placeholder="Selecione uma categoria"
                  className="w-full"
                />
              )}
            />
            {errors.category && (
              <p className="text-red-500 text-sm">{errors.category.message}</p>
            )}
          </div>

          <div className="flex justify-end gap-2 mt-4">
            <Button
              type="button"
              label="Cancelar"
              className="p-button-secondary"
              onClick={() => navigate("/products")}
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
