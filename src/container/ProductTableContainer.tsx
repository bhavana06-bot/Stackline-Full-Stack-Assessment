import React from "react";
import { createProduct } from "../utills/types"; 
import ProductTable from "../components/ProductTable"; 

interface ProductTableContainerProps {
  data: any[];
}

const ProductTableContainer: React.FC<ProductTableContainerProps> = ({ data }) => {
  // Extract the first product and get its sales data
  const product = createProduct(data[0]);
  const sales = product.sales || []; // Default to an empty array if sales is undefined

  return (
    <div className="product-table-container">
      <ProductTable sales={sales} />
    </div>
  );
};

export default ProductTableContainer;
