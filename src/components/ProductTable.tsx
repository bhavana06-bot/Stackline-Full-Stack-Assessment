import React, { useState } from "react";
import {ApplicationState,createProduct,Product,WeeklySales} from '../utills/types'
import DataTable from 'react-data-table-component';
interface ProductTableProps {
    sales: any;
  }
const ProductTable: React.FC<ProductTableProps> = ({sales}) => {
  

    
    
        const columns = [
            {
              name: 'Week Ending',
              selector: (row: WeeklySales) => new Date(row.weekEnding).toLocaleDateString(),
              sortable: true,
            },
            {
              name: 'Retail Sales',
              selector: (row: WeeklySales) => "$" + row.retailSales.toLocaleString(),
              sortable: true,
            },
            {
              name: 'Wholesale Sales',
              selector: (row: WeeklySales) => "$" + row.wholesaleSales.toLocaleString(),
              sortable: true,
            },
            {
              name: 'Units Sold',
              selector: (row: WeeklySales) => row.unitsSold.toLocaleString(),
              sortable: true,
            },
            {
              name: 'Retailer Margin',
              selector: (row: WeeklySales) => "$" + row.retailerMargin.toLocaleString(),
              sortable: true,
            },
          ];
        
          const noDataComponent = (
            <div>No data to display</div>
          );
        
          return (
            <div className="sales-column-table">
              <DataTable
              //className="sales-column-table"
                columns={columns}
                data={sales}
                defaultSortFieldId={1}
                noDataComponent={noDataComponent}
              />
            </div>
          );
        };
     
   

  export default ProductTable;