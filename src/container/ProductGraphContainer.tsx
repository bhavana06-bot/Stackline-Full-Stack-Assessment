

import React from "react";
import { createProduct } from '../utills/types'
import { aggregateSalesByMonth } from '../utills/graph'
import ProductGraph from '../components/ProductGraph'

interface ProductGraphContainerProps {
  data: any[];
}

const ProductGraphContainer: React.FC<ProductGraphContainerProps> = ({ data }) => {

  const product = createProduct(data[0]);
  const sales = product.sales || [];
  //Aggregate sales by month using the `aggregateSalesByMonth` function
  const aggregatedSales = aggregateSalesByMonth(sales);
  //Convert aggregated sales data to an array (assuming the function returns an object)
  const transformedSaleData = Object.values(aggregatedSales);
  return (
    <div className="product-graph-container">
      <ProductGraph transformedSaleData={transformedSaleData} />
    </div>
  );
};

export default ProductGraphContainer;