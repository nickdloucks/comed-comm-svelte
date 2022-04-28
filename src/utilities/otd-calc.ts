/**
 * A calculator to determine how much money in commissions should be paid to a given sales rep 
 * based on a given list of sales, specifically sales that were shipped out CoMedical's warehouse to the customer.
 * @param profits : Array<number>; Dolar amounts representing CoMedical's gross profit made on each sale.
 * @param profit_pcts : Array<number>; Percentage amounts representing CoMedical's gross profit on each sale.
 * @param prod_group_ids : Array<string>; String abbreviations representing the manufactuere of a given product for a sale.
 * @returns : number; Total commissions $ to be paid to the rep for the given list of "out-the-door" sales tracings.
 */



// let current_OTD: Array<OTD_tracing> = [
//     {end_user:'', zip_code:'', gross_profit:0, product_group_id:'', sales_rep:'', item_id:'', month_of_sale:1}
// ];

export const OTD_CALC = function(selected_rep: SalesRep, otd_sales_list: Array<OTD_tracing>): number{
    let tot_OTD_com: number = 0; // total commissions on "OTDect" sales
    let salesList = otd_sales_list;
    
    // MAIN ALGORITHM:
    salesList.forEach((sale: OTD_tracing): void => {
        sale.ext_com_cost = sale.commission_cost * sale.qty_shipped; // Extended Commission Cost = Commission Cost x Quantity Shipped
        sale.gross_profit = sale.ext_price - sale.ext_com_cost; // Gross Profit (in dollar$) = Extended Price - Extended Commission Cost
        sale.gp_pct = sale.ext_com_cost / sale.ext_price; // GP % = Extended Commission Cost / Extended Price


    });

    return tot_OTD_com;
}