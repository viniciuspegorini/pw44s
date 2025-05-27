import { useEffect, useRef, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import type { ICategory } from "@/commons/types";
import CategoryService from "@/services/category-service";
import { useNavigate } from "react-router-dom";
import { Toast } from "primereact/toast";

export const CategoryListPage = () => {
  const [data, setData] = useState<ICategory[]>([]);
  const { findAll, remove } = CategoryService;
  const navigate = useNavigate();
  const toast = useRef<Toast>(null);

  // hook do react para executar ações ao carregar o componente
  // carrega a lista de categorias
  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // função para carregar a lista de categorias
  const loadData = async () => {
    const response = await findAll();

    if (response.status === 200) {
      setData(Array.isArray(response.data) ? response.data : []);
    } else {
      toast.current?.show({
        severity: "error",
        summary: "Erro",
        detail: "Não foi possível carregar a lista de categorias.",
        life: 3000,
      });
    }
  };

  const handleEdit = (category: ICategory) => {
    navigate(`/categories/${category.id}`);
  };

  const handleDelete = async (category: ICategory) => {
    if (confirm(`Tem certeza que deseja excluir "${category.name}"?`)) {
      if (category.id) {
        try {
          await remove(category.id);
          setData((prev) => prev.filter((c) => c.id !== category.id));
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

  const actionTemplate = (rowData: ICategory) => (
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

  return (
    <div className="card">
      <Toast ref={toast} />
      <h2 className="text-xl mb-3">Lista de Categorias</h2>
      <DataTable
        value={data}
        stripedRows
        emptyMessage="Nenhuma categoria encontrada."
      >
        <Column field="id" header="ID" style={{ width: "10%" }} />
        <Column field="name" header="Nome" />
        <Column body={actionTemplate} header="Ações" style={{ width: "20%" }} />
      </DataTable>
    </div>
  );
};
