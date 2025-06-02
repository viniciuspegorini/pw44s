import { useEffect, useRef, useState } from "react";
import type { IProduct } from "@/commons/types";
import ProductService from "@/services/product-service";
import { Toast } from "primereact/toast";
import { ProductCard } from "@/components/product-card";

export const ProductShow = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const { findAll } = ProductService;
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
      setProducts(Array.isArray(response.data) ? response.data : []);
    } else {
      toast.current?.show({
        severity: "error",
        summary: "Erro",
        detail: "Não foi possível carregar a lista de produtos.",
        life: 3000,
      });
    }
  };

  return (
    <div className="p-grid p-justify-start p-align-start">
      {/* <DataView value={products} listTemplate={listTemplate} /> */}
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
