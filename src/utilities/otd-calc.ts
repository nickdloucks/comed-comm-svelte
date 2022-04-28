/**
 * A calculator to determine how much money in commissions should be paid to a given sales rep 
 * based on a given list of sales, specifically sales that were shipped out CoMedical's warehouse to the customer.
 * @param profits : Array<number>; Dolar amounts representing CoMedical's gross profit made on each sale.
 * @param profit_pcts : Array<number>; Percentage amounts representing CoMedical's gross profit on each sale.
 * @param prod_group_ids : Array<string>; String abbreviations representing the manufactuere of a given product for a sale.
 * @returns : number; Total commissions $ to be paid to the rep for the given list of "out-the-door" sales tracings.
 */

export const OTD_CALC = function(profits: Array<number>, profit_pcts: Array<number>, prod_group_ids: Array<string>): number{
    let tot_OTD_com = 0; // total commissions on "OTDect" sales
    return tot_OTD_com;
}