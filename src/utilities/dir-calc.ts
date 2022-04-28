/**
 * A calculator to determine how much money in commissions should be paid to a given sales rep 
 * based on a given list of sales, specifically sales that were shipped directly from the maunfacturer to the customer.
 * @param profits : Array<number>; Represents CoMedical's gross profit made on each sale.
 * @param prod_group_ids : Array<string>; String abbreviations representing the manufactuere of a given product for a sale.
 * @returns : number; Total commissions $ to be paid to the rep for the given list of "direct" sales tracings.
 */

export const DIR_CALC = function(profits: Array<number>, prod_group_ids: Array<string>): number{
    let tot_DIR_com = 0; // total commissions on "Direct" sales
    return tot_DIR_com;
}