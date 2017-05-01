import { Component, EventEmitter, Output } from '@angular/core';
import { PaymentService } from '../shared/services/payment.service';
import { PaymentModel } from '../shared/models/payment.model';


@Component({
    selector: 'sidebar',
    templateUrl: './app/elements/sidebar.component.html',
    styleUrls: ['./app/elements/sidebar.component.css'],
    providers: [ PaymentService ]
})
export class SidebarComponent {

    payment:object = new PaymentModel().payment;
    @Output() displayData: EventEmitter<object> = new EventEmitter<object>();


    constructor(public Payment: PaymentService) {

    }

    getCalculation() {
        this.Payment.generateFinancialData(this.payment, (response:object) => {
            this.displayData.emit ( response );
        });
    }


    resetData() {

    }
}