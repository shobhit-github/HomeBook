import { Component } from '@angular/core';
import { PaymentService } from '../shared/services/payment.service';


@Component({
    selector: 'sidebar',
    templateUrl: './app/elements/sidebar.component.html',
    styleUrls: ['./app/elements/sidebar.component.css'],
    providers: [PaymentService]
})
export class SidebarComponent {

    payment:object = {};

    constructor(private Payment: PaymentService) {

    }


    getCalculation() {

        this.Payment.generateFinancialData(this.payment, function (response) {
            console.log(response);
        });
    }
}