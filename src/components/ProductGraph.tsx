

import React from "react";
import { LineChart, Line, XAxis } from "recharts";

interface ProductGraphProps{
    transformedSaleData: any
}

const ProductGraph: React.FC<ProductGraphProps>= ({transformedSaleData}) => {
  
    return (
    <div>
      <LineChart width={900} height={400} data={transformedSaleData}>
        <XAxis dataKey="weekEnding" />
     {/* Lines for retail sales and wholesale sales */}
        <Line  dataKey="retailSales" stroke="#40a8ef" />
        <Line type="monotone" dataKey="wholesaleSales" stroke="#3c4858" />
      </LineChart>
      </div>
    );
  };

  export default ProductGraph;