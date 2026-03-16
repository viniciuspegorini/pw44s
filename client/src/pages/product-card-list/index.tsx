import { useEffect, useRef, useState } from "react";
import { Button } from "primereact/button";
import type { IProduct } from "@/commons/types";
import ProductService from "@/services/product-service";
import { useNavigate } from "react-router-dom";
import { Toast } from "primereact/toast";

export const ProductCardListPage = () => {
  const [data, setData] = useState<IProduct[]>([]);
  const { findAll, remove } = ProductService;
  const navigate = useNavigate();
  const toast = useRef<Toast>(null);

  // hook do react para executar ações ao carregar o componente
  // carrega a lista de produtos
  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // função para carregar a lista de produtos
  const loadData = async () => {
    const response = await findAll();

    if (response.status === 200) {
      setData(Array.isArray(response.data) ? response.data : []);
    } else {
      toast.current?.show({
        severity: "error",
        summary: "Erro",
        detail: "Não foi possível carregar a lista de produtos.",
        life: 3000,
      });
    }
  };

  const handleEdit = (product: IProduct) => {
    navigate(`/products/${product.id}`);
  };

  const handleDelete = async (product: IProduct) => {
    if (confirm(`Tem certeza que deseja excluir "${product.name}"?`)) {
      if (product.id) {
        try {
          await remove(product.id);
          setData((prev) => prev.filter((p) => p.id !== product.id));
          toast.current?.show({
            severity: "success",
            summary: "Sucesso",
            detail: "Registro removido com sucesso",
            life: 3000,
          });
        } catch {
          toast.current?.show({
            severity: "error",
            summary: "Erro",
            detail: "Não foi possível remover o registro.",
            life: 3000,
          });
        }
      }
    }
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <div className="card">
      <Toast ref={toast} />
      <h2 className="text-xl mb-3">Lista de Produtos</h2>
      
      {data.length === 0 ? (
        <p className="text-gray-500">Nenhum produto encontrado.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {data.map((product) => (
            <div
              key={product.id}
              className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-3">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                  {product.description}
                </p>
              </div>

              <div className="mb-3">
                <span className="text-xs text-gray-500 uppercase">
                  Categoria
                </span>
                <p className="text-sm font-medium text-gray-700">
                  {product.category?.name || "Sem categoria"}
                </p>
              </div>

              <div className="mb-4">
                <span className="text-xs text-gray-500 uppercase">Preço</span>
                <p className="text-xl font-bold text-primary">
                  {formatPrice(product.price)}
                </p>
              </div>

              <div className="flex gap-2 pt-3 border-t border-gray-200">
                <Button
                  icon="pi pi-pencil"
                  className="p-button-sm p-button-text flex-1"
                  onClick={() => handleEdit(product)}
                  tooltip="Editar"
                  tooltipOptions={{ position: "top" }}
                />
                <Button
                  icon="pi pi-trash"
                  className="p-button-sm p-button-text p-button-danger flex-1"
                  onClick={() => handleDelete(product)}
                  tooltip="Excluir"
                  tooltipOptions={{ position: "top" }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

