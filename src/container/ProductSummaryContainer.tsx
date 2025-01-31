import React, { useState } from "react";
import {  useSelector } from "react-redux";
import {ApplicationState,createProduct,Product} from '../utills/types'
import ProductSummary from '../components/ProductSummary'

interface ProductSummaryContainer {
    data: any[]; // Replace `any` with the appropriate type if you have it
  }
const ProductSummaryContainer: React.FC<ProductSummaryContainer> = ({data}) => {
    const product = createProduct(data[0]);
    return (
        <div className="product-summary-container">
       
          <ProductSummary productdata={product} />
        
      </div>
     
    );
  };

  export default ProductSummaryContainer;