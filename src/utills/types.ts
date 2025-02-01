// Define the structure of a Product object
export interface Product {
  title: string;         
  image: string;        
  subtitle: string;      
  tags: string[];        
  sales: WeeklySales[];  
}

// Define the structure for weekly sales data
export interface WeeklySales {
  weekEnding: string;      
  retailSales: number;     
  wholesaleSales: number;  
  unitsSold: number;      
  retailerMargin: number;  
}

// Define the structure for application state
export interface ApplicationState {
  data: any[];             // Array to store fetched data
  error: string | undefined; // Error message (if any)
}

// Function to create a Product object from raw data
export function createProduct(productData: any): Product {
  return {
    title: productData["title"],      
    image: productData["image"],      
    subtitle: productData["subtitle"],
    tags: productData["tags"],        
    sales: productData["sales"],     
  };
}

// Function to create a WeeklySales object
export function createSaleData(
  weekEnding: string,
  retailSales: number,
  wholesaleSales: number,
  unitsSold: number,
  retailerMargin: number
): WeeklySales {
  return {
    weekEnding,
    retailSales,
    wholesaleSales,
    unitsSold,
    retailerMargin,
  };
}

// Define action types for Redux state management 
export type ActionTypes =
  | { type: "FETCH_DATA_SUCCESS"; payload: any }      
  | { type: "FETCH_DATA_FAILURE"; payload: string }; 
