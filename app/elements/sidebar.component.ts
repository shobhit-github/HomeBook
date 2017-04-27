import { Component, EventEmitter } from '@angular/core';
import { PaymentService } from '../shared/services/payment.service';
import { PaymentModel } from '../shared/models/payment.model';


@Component({
    selector: 'sidebar',
    templateUrl: './app/elements/sidebar.component.html',
    styleUrls: ['./app/elements/sidebar.component.css'],
    providers: [PaymentService],
    outputs: ['financeData : paymentData'],
})
export class SidebarComponent {

    payment:object = new PaymentModel().payment;
    paymentData:object = new EventEmitter<object>();


    constructor(private Payment: PaymentService) {

    }

    getCalculation() {
        this.Payment.generateFinancialData(this.payment, function (response:object) {
            console.log(response);
         //    this.paymentData.emit( response );
        });
    }

    resetData() {

    }
}