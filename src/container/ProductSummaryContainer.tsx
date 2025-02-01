import React from "react";
import { createProduct } from "../utills/types"; 
import ProductSummary from "../components/ProductSummary"; 

interface ProductSummaryContainerProps {
  data: any[]; 
}

const ProductSummaryContainer: React.FC<ProductSummaryContainerProps> = ({ data }) => {
  // Extract the first product from data and transform it using createProduct
  const product = createProduct(data[0]);

  return (
    <div className="product-summary-container">
      {/* Passing the processed product data to ProductSummary */}
      <ProductSummary productdata={product} />
    </div>
  );
};

export default ProductSummaryContainer;
