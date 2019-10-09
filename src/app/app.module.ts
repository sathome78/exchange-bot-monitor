import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { AppComponent } from './app.component';
import { OrderSubscribtionComponent } from './order-subscribtion/order-subscribtion.component';
import { AppService } from './app.service';
import * as SockJS from 'sockjs-client';
import { InjectableRxStompConfig, RxStompService, rxStompServiceFactory } from '@stomp/ng2-stompjs';
import { environment } from '../environments/environment';

export function socketProvider() {
  return new SockJS(environment.apiUrl + '/public_socket');
}
const stompConfig: InjectableRxStompConfig = {
  // Which server?
  // brokerURL: `${environment.apiUrlWS}/public_socket`,
  heartbeatIncoming: 0, // Typical value 0 - disabled
  heartbeatOutgoing: 20000, // Typical value 20000 - every 20 seconds
  reconnectDelay: 5000,
  webSocketFactory: socketProvider,
  // Will log diagnostics on console
  debug: msg => {
    // if (!environment.production) {
    // console.log(new Date().toLocaleString(), msg);
    // }
  },
};

@NgModule({
  declarations: [
    AppComponent,
    OrderSubscribtionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SelectDropDownModule,
  ],
  providers: [
    AppService,
    {
      provide: InjectableRxStompConfig,
      useValue: stompConfig,
    },
    {
      provide: RxStompService,
      useFactory: rxStompServiceFactory,
      deps: [InjectableRxStompConfig],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
