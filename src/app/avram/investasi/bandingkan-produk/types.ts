import { FundListItemType } from '@/components/molecules/specifics/avram/MutualFundList/types';

export interface ProductData {
  name: string;
  chartData: ChartData;
  fundData: FundListItemType;
}

export interface ChartData {}

export interface FundData {
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
  threshold: string;
}

export interface YearlyPerformance {
  ongoing: FifthYear;
  firstYear: FifthYear;
  thirdYear: FifthYear;
  fifthYear: FifthYear;
}

export interface FifthYear {
  number: number;
  sign: string;
}
