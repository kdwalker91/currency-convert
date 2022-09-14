import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-peso-dollar',
  templateUrl: './peso-dollar.component.html',
  styleUrls: ['./peso-dollar.component.css']
})
export class PesoDollarComponent implements OnInit, OnChanges {


  @Input() usd: number = 0;
  @Input() usdPaid: string = "";

  peso: string = "";
  pesoExchangeRate: number = 20.08;
  tax: number = .10;
  total: number = 0;
  dislayUSD: string = "";
  displayChangePesos: string = "";
  beforeTax: string = "";

  isPeso: boolean = false;

  constructor() { 
  }

  ngOnInit(): void {
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.usd) {
     this.calculate();
    }
  }
  
  calculate() {
    if(this.usd != 0 || this.usd > 0) {
      let dollar = parseInt(this.peso) * this.usd;
      let tax = this.usd * this.tax;
      let total = dollar + tax;
      // alert(dollar);
      console.log(`USD Total: ${dollar} | Tax: ${tax} | Total: ${total}`);
      this.total = total;
    }
    else  {
      alert("Plese enter a number greate than 0");
    }
  }

  calculateUSD(peso: any) {
    if(peso != 0 && peso > 0) {
      this.isPeso = true;
      let usdTotal = peso / this.pesoExchangeRate;
      let usdString;
      let beforeTax;

      let tax = usdTotal * this.tax;
      let total = usdTotal + tax;
      this.usd = tax + total;

      usdString = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', currencyDisplay: 'narrowSymbol'}).format(this.usd);
      this.dislayUSD = usdString;

      beforeTax = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', currencyDisplay: 'narrowSymbol'}).format(usdTotal);
      this.beforeTax = beforeTax;
    }
    else  {
      this.isPeso = false;
    }
  }

  calculateUSDChangeBack(usdPaid: any) {
    if(usdPaid != 0 && usdPaid > 0) {
      let usdChange = usdPaid - this.usd;
      let pesoTotal = usdChange * this.pesoExchangeRate;
      this.displayChangePesos =  new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', currencyDisplay: 'narrowSymbol'}).format(pesoTotal);;
      console.log(pesoTotal);
    }
  }
}
