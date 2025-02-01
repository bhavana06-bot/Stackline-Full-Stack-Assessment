import React from "react";
import { Product } from '../utills/types';
import Tags from './Tags';

interface ProductSummaryProps {
  productdata: Product; 
}

const ProductSummary: React.FC<ProductSummaryProps> = ({ productdata }) => {
  return (
    <div >
      {/* Product Image and Title Section */}
      <div className="product">
        <img
          src={productdata.image} 
          className="product-image"
          alt={productdata.subtitle} 
        />
        <div className="title-text">
          <p>{productdata.title}</p> 
          <p>{productdata.subtitle}</p>
        </div>
      </div>

      {/* Product Tags Section */}
      <div className="product-tags">
        <Tags tagData={productdata.tags} /> 
      </div>
    </div>
  );
};

export default ProductSummary;
