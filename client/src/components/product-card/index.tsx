import { IProduct } from "@/commons/types";
import { Button } from "primereact/button";
import { Card } from "primereact/card";

interface ProductCardProps {
  product: IProduct;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div key={product.id} className="p-col-12 p-sm-6 p-md-4 p-lg-3 mb-4">
      <Card
        title={product.name}
        subTitle={`R$ ${product.price.toFixed(2)}`}
        header={
          <img
            alt={product.name}
            src="https://primefaces.org/cdn/primereact/images/product/blue-band.jpg"
            style={{ width: "100%", height: "200px", objectFit: "cover" }}
          />
        }
        footer={
          <div>
            <Button
              label="Comprar"
              icon="pi pi-shopping-cart"
              className="p-button-sm p-mr-2"
            />
            <Button
              label="Detalhes"
              icon="pi pi-info-circle"
              className="p-button-secondary p-button-sm"
            />
          </div>
        }
      >
        <p>{product.description}</p>
      </Card>
    </div>
  );
};
