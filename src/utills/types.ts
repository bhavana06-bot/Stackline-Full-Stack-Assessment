



/**
 * State types
 */export interface Product {
  title: string;
  image: string;
  subtitle: string;
  tags: string[];
  sales: WeeklySales[];
}
export interface WeeklySales {
  weekEnding: string;
  retailSales: number;
  wholesaleSales: number;
  unitsSold: number;
  retailerMargin: number;
}


export interface ApplicationState {
  data: any[];
  error: string | undefined;
   }

  
  export function createProduct(productData: any): Product {
    return {
      title: productData["title"],
      image: productData["image"],
      subtitle: productData["subtitle"],
      tags: productData["tags"],
      sales: productData["sales"],
    };
  }

  export  function createSaleData(
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
 

 export  type ActionTypes =
| { type: "FETCH",data: any }
| { type: "SORT",key:string }
|{type:"FETCH_DATA_REQUEST"}
|{type:"FETCH_DATA_SUCCESS",payload: any}
|{type:"FETCH_DATA_FAILURE",payload:string}

;