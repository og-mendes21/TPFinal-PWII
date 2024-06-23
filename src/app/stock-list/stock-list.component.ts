import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';
import { Stock } from '../models/stock';

@Component({
  selector: 'pm-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  stocks: Stock[] = [
    { ticker: 'AAPL', company: 'Apple', quantity: 20, purchasePrice: 320.00 },
    { ticker: 'AMZN', company: 'Amazon', quantity: 50, purchasePrice: 220.00 }
  ];

  displayedColumns: string[] = ['ticker', 'company', 'quantity', 'purchasePrice', 'currentPrice', 'currentValue', 'variation'];

  constructor(private stockService: StockService) { }

  ngOnInit(): void {
    this.stocks.forEach(stock => {
      this.stockService.getStockPrice(stock.ticker).subscribe(
        price => {
          stock.currentPrice = price;
          stock.currentValue = price * stock.quantity;
          stock.variation = ((price - stock.purchasePrice) / stock.purchasePrice) * 100;
        },
        error => {
          console.error('Erro ao obter o preço da ação', error);
        }
      );
    });
  }
}