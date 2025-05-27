import { useEffect, useRef, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import type { IProduct } from "@/commons/types";
import ProductService from "@/services/product-service";
import { useNavigate } from "react-router-dom";
import { Toast } from "primereact/toast";

export const ProductListPage = () => {
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
          setData((prev) => prev.filter((c) => c.id !== product.id));
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

  const actionTemplate = (rowData: IProduct) => (
    <div className="flex gap-2">
      <Button
        icon="pi pi-pencil"
        className="p-button-sm p-button-text"
        onClick={() => handleEdit(rowData)}
        tooltip="Editar"
      />
      <Button
        icon="pi pi-trash"
        className="p-button-sm p-button-text p-button-danger"
        onClick={() => handleDelete(rowData)}
        tooltip="Excluir"
      />
    </div>
  );

  const priceTemplate = (rowData: IProduct) => {
    return rowData.price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <div className="container mx-auto px-4 pt-24">
      <Toast ref={toast} />
      <h2 className="text-2xl mb-4">Lista de Produtos</h2>
      <DataTable value={data} stripedRows>
        <Column field="id" header="ID" style={{ width: "5%" }} />
        <Column field="name" header="Nome" />
        <Column field="description" header="Descrição" />
        <Column header="Preço" body={priceTemplate} style={{ width: "15%" }} />
        <Column field="category.name" header="Categoria" />
        <Column body={actionTemplate} header="Ações" style={{ width: "15%" }} />
      </DataTable>
    </div>
  );
};
