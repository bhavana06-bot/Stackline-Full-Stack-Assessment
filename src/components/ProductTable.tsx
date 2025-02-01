import React from "react";
import { WeeklySales } from '../utills/types';
import DataTable from 'react-data-table-component';

interface ProductTableProps {
  sales: WeeklySales[]; 
}

const ProductTable: React.FC<ProductTableProps> = ({ sales }) => {
  // Define the columns for the DataTable
  const columns = [
    {
      name: 'Week Ending',    
      selector: (row: WeeklySales) => new Date(row.weekEnding).toLocaleDateString(),
      sortable: true, // Allow sorting
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

  // Define a custom message for when there is no data
  const noDataComponent = <div>No data to display</div>;

  return (
    <div className="sales-column-table">
      {/* Render DataTable with the columns and sales data */}
      <DataTable
        columns={columns}
        data={sales}
        defaultSortFieldId={1} // Default column to sort by 
        noDataComponent={noDataComponent} 
      />
    </div>
  );
};

export default ProductTable;
