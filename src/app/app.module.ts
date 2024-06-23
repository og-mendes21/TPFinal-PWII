import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { StockService } from './stock.service';

const routes: Routes = [
  { path: 'stocks', component: StockListComponent },
  { path: '', redirectTo: '/stocks', pathMatch: 'full' },
  { path: '**', redirectTo: '/stocks' }
];

@NgModule({
  declarations: [
    AppComponent,
    StockListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }