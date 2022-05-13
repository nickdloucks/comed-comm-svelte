import { iit_mfrs, sat_mfrs } from "../../stores/manufacturers-store";

enum Territories {
  '1002' = 2, 
  '1003' = 3, 
  '1004' = 4, 
  '1005' = 5, 
  '1007' = 7, 
  '1008' = 8, 
  '1009' = 9, 
  '1010' = 10, 
  '1012' = 12, 
  '1013' = 13, 
  '1014' = 14, 
  '1015' = 15, 
  '1021' = 21
}

// declare interface MFR_pct { // maps a manufacturer abbreviation (aka product group id) to a percentage
//   // mfr_id: string;
//   // pct: number;
//   [key: string]: number;
// }


declare class SAT_pcts{
  [key: string]: number;
  constructor(sat_mfrs: string[]){
    for (let i = 0; i < sat_mfrs.length; i++){ // For each manufacturer in the list:
      this[sat_mfrs[i]]; // initialize a key with the name as the string abbreviation and the value as a default of 20%
    }
  }
}

declare class IIT_pcts{
  [key: string]: number;
  constructor(iit_mfrs: string[]){
    for (let i = 0; i < iit_mfrs.length; i++){ // For each manufacturer in the list:
      this[iit_mfrs[i]]; // initialize a key with the name as the string abbreviation and the value as a default of 20%
    }
  }
}

declare class All_pcts{
  [key: string]: number;
  constructor([...iit_mfrs, ...sat_mfrs]: string[]){ // Combine both lists of MFRs into one array
    for (let i = 0; i < arguments[0].length; i++){ // For each manufacturer in the list:
      this[arguments[0][i]]; // initialize a key with the name as the string abbreviation and the value as a default of 20%
    }
  }
}

declare interface variableOTD { // sales reps can have varrying commission percentages for "out-the-door" sales
  "30% +": number,
  "25-29.99%": number,
  "20-24.99%": number,
  "< 20%": number
}

declare interface SalesRep { // configurable properties of a CoMedical Sales Representative
  rep_name: string;
  territories: Array<Territories>;
  sales_team: string[];
  otd_pct: variableOTD | number;
  dir_pcts: SAT_pcts | IIT_pcts | All_pcts;
  base_salary: number;
  monthly_draw: number;
};

declare enum TRACINGS_TYPE{
  OTD = 'Out-the-Door',
  DIR = 'Direct'
}

enum Sale_period {
  'January' = 1,
  'February' = 2,
  'March' = 3,
  'April' = 4,
  'May' = 5,
  'June' = 6,
  'July' = 7,
  'August' = 8,
  'September' = 9, 
  'October' = 10,
  'November' = 11,
  'December' = 12
}; // a sale period refers to a month of the year so the number much be from 1-12

declare interface Sales_tracing{
  end_user: string; // name of customer
  zip_code: number | string; // used to determine which sales territory owns the sale
  gross_profit: number; // reps get a certain percent of this dollar value as commission
  gp_pct: number; // Gross Profit as a percentage of the Price
  product_group_id: string; // abbreviation for the manufacturer that produces the product for a given instance of a sale sale
  sales_rep: string;
  item_id: string;
  month_of_sale: Sale_period;
  year_of_sale: number;
  qty_shipped: number;
}

declare interface DIR_tracing extends Sales_tracing{

}

declare interface OTD_tracing extends Sales_tracing{
  sales_rep_id: number | string; // used to compare agains the rep's list of territiries. Could theoretically help catch errors in asssignment of sales to reps
  commission_cost: number;
  ext_com_cost: number; // cost to bring the product into CoMedical's warehouse: used to calc Gross Profit
  ext_price: number; // Price paid by customer: used to cal GP $
  ship_to_id: number | string; // unique identifier in P21 used to index customer locations
}
