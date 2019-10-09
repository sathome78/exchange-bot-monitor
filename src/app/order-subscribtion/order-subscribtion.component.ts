import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-order-subscribtion',
  templateUrl: './order-subscribtion.component.html',
  styleUrls: ['./order-subscribtion.component.scss']
})
export class OrderSubscribtionComponent implements OnInit {
  public config = {
    displayKey: 'name',
    search: true,
    height: '500px',
    placeholder: 'Select',
    noResultsFound: 'No results found!',
    searchPlaceholder: 'Search',
    searchOnKey: 'name',
  };
  public selectedPair = null;
  public currencyPairs = [];

  public errorBody = null;
  public successBody = null;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getCurrencyPairs()
      .subscribe((res) => {
        this.currencyPairs = res;
      });
  }

  select() {

  }

  connect() {
    this.successBody = null;
    this.errorBody = null;
    this.appService.getOrders(this.selectedPair.url_symbol)
      .subscribe((res) => {
        this.successBody = JSON.stringify(res);
      }, err => {
        this.errorBody = JSON.stringify(err);
      });
  }




}
