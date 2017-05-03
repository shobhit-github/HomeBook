import {Component} from '@angular/core';
import {PaymentService} from './shared/services/payment.service';




@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  providers: [PaymentService]
})
export class AppComponent {

  patData:object;

  constructor(private payService: PaymentService){

  }

  setData(dataObject) {
    this.payService.setData(dataObject);
  }


}