import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable, of } from 'rxjs';
import { Message } from '@stomp/stompjs';
import { RxStompService } from '@stomp/ng2-stompjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class AppService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private stompService: RxStompService) {}

  public getCurrencyPairs(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/openapi/v1/public/currency_pairs`)
      .pipe(map(res => res.data));
    // return of(data);
  }

  public getOrders(pair): any {
    return this.stompService.watch(`/app/orders/sfwfrf442fewdf/detailed/${pair}`)
      .pipe(map((message: Message) => JSON.parse(message.body)));
  }

}

const data = [
  {
    name: 'ABBC/BTC',
    url_symbol: 'abbc_btc'
  },
]
