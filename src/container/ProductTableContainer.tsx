import React from "react";
import {createProduct} from '../utills/types'
import ProductTable from '../components/ProductTable';

interface ProductTableContainer {
  data: any[]; 
}
const ProductTableContainer: React.FC<ProductTableContainer> = ({data}) => {
  const product = createProduct(data[0]);
  const sales = product.sales || [];


    return (
    
      <div className="product-table-container" >
        <ProductTable sales={sales}/>
        </div>
     
    );
  };


  
  
  
  export default ProductTableContainer;
  
  