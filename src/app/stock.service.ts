import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Stock } from './models/stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private apiKey: string = 'A45OQXI3017WEMEG';
  private baseUrl: string = 'https://www.alphavantage.co/query';

  constructor(private http: HttpClient) { }

  getStockPrice(symbol: string): Observable<number> {
    const url = `${this.baseUrl}?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${this.apiKey}`;
    return this.http.get<any>(url).pipe(
      map(data => {
        const timeSeries = data['Time Series (5min)'];
        if (!timeSeries) {
          throw new Error('Unexpected response format');
        }
        const latestTime = Object.keys(timeSeries)[0];
        const latestData = timeSeries[latestTime];
        return parseFloat(latestData['1. open']);
      })
    );
  }
}