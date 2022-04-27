declare interface MFR_pct { // maps a manufacturer abbreviation (aka product group id) to a percentage
    mfr_id: string;
    pct: number;
}

declare interface variableOTD { // sales reps can have varrying commission percentages for "out-the-door" sales
  "30% +": number,
  "25-29.99%": number,
  "20-24.99%": number,
  "< 20%": number
}

declare interface SalesRep { // configurable properties of a CoMedical Sales Representative
  rep_name: string;
  territories: string[];
  sales_team: string[];
  otd_pct: variableOTD | number;
  dir_pcts: Array<MFR_pct>;
  base_salary: number;
  monthly_draw: number;
};