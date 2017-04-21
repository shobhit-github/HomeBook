import { Component } from '@angular/core';



@Component({
  selector: 'payment-data',
  templateUrl: './app/payment/payment.component.html',
  styleUrls: ['./app/payment/payment.component.css']
})
export class PaymentComponent {
	
	data: any;

    constructor() {
        this.data = {
            labels: ['A','B','C'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }]    
            };
    }
}