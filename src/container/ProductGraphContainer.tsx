

import React, { useState } from "react";
import {createProduct} from '../utills/types'
import {formatMonth,aggregateSalesByMonth} from '../utills/graph'
import ProductGraph from '../components/ProductGraph'
interface ProductGraphContainer {
    data: any[]; 
  }

  
const ProductGraphContainer: React.FC<ProductGraphContainer>= ({data}) => {
  
    const product = createProduct(data[0]);
    const sales = product.sales || [];
    const aggregatedSales = aggregateSalesByMonth(sales);
    const transformedSaleData = Object.values(aggregatedSales);
  return (
    <div className="product-graph-container">
      <ProductGraph transformedSaleData={transformedSaleData}/>
    </div>
  );
};

  export default ProductGraphContainer;