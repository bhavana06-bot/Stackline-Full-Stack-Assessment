
import {WeeklySales} from './types';


const formatMonth = (dateString: Date): string => {
  const date = new Date(dateString);
  const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  const month = monthNames[date.getMonth()];
 
  return `${month}`;
};


const aggregateSalesByMonth = (sales: WeeklySales[]): Record<string, WeeklySales> => {
  return sales.reduce((acc, sale) => {
      const date = new Date(sale.weekEnding);
      const monthKey = formatMonth(date);

      if (!acc[monthKey]) {
          acc[monthKey] = {
              weekEnding: monthKey,
              retailSales: 0,
              wholesaleSales: 0,
              unitsSold: 0,
              retailerMargin: 0
          };
      }

      acc[monthKey].retailSales += sale.retailSales;
      acc[monthKey].wholesaleSales += sale.wholesaleSales;
      acc[monthKey].unitsSold += sale.unitsSold;
      acc[monthKey].retailerMargin += sale.retailerMargin;

      return acc;
  }, {} as Record<string, WeeklySales>);
};
export {formatMonth,aggregateSalesByMonth};