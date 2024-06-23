export interface Stock {
    ticker: string;
    company: string;
    quantity: number;
    purchasePrice: number;
    currentPrice?: number;
    currentValue?: number;
    variation?: number;
  }