export type FundListTabItemType = string;

export interface FundListItemType {
  type: string;
  title: string;
  tags: string[];
  nab: string;
  rp: string;
  risk: number;
  dailyPerformance: DailyPerformance;
  yearlyPerformance: YearlyPerformance;
}

export interface DailyPerformance {
  number: number;
  threshold: 'high' | 'mid' | 'low';
}

export interface YearlyPerformance {
  ongoing: FifthYear;
  firstYear: FifthYear;
  thirdYear: FifthYear;
  fifthYear: FifthYear;
}

export interface FifthYear {
  number: number;
  sign: 'high' | 'mid' | 'low';
}
