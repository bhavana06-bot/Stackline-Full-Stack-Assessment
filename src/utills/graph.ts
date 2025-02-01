import { WeeklySales } from './types';

/**
 * Formats a given date into a three-letter month abbreviation (e.g., "JAN", "FEB").
 * @param {Date} dateString - The date to format.
 * @returns {string} - The formatted month abbreviation.
 */
const formatMonth = (dateString: Date): string => {
  const date = new Date(dateString);
  const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  const month = monthNames[date.getMonth()];

  return `${month}`;
};

/**
 * Aggregates sales data by month, summing up values for retail sales, wholesale sales, 
 * units sold, and retailer margin.
 * @param {WeeklySales[]} sales - Array of weekly sales data.
 * @returns {Record<string, WeeklySales>} - A record where the keys are month abbreviations 
 * and values are the aggregated sales data for that month.
 */
const aggregateSalesByMonth = (sales: WeeklySales[]): Record<string, WeeklySales> => {
  return sales.reduce((acc, sale) => {
    const date = new Date(sale.weekEnding);
    const monthKey = formatMonth(date); // Get month abbreviation

    // Initialize the month's sales data if not already present
    if (!acc[monthKey]) {
      acc[monthKey] = {
        weekEnding: monthKey,   // Use the month abbreviation as the key
        retailSales: 0,
        wholesaleSales: 0,
        unitsSold: 0,
        retailerMargin: 0
      };
    }

    // Aggregate sales data for the month
    acc[monthKey].retailSales += sale.retailSales;
    acc[monthKey].wholesaleSales += sale.wholesaleSales;
    acc[monthKey].unitsSold += sale.unitsSold;
    acc[monthKey].retailerMargin += sale.retailerMargin;

    return acc;
  }, {} as Record<string, WeeklySales>);
};

// Exporting utility functions
export { formatMonth, aggregateSalesByMonth };
