import {Component} from '@angular/core';


@Component({
    selector: 'payment-data',
    templateUrl: './app/payment/payment.component.html',
    styleUrls: ['./app/payment/payment.component.css']
})
export class PaymentComponent {

    data: any;
    pieOptions: any;
    barOptions: any;

    constructor() {
        this.data = {
            labels: ['Check', 'ACH', 'Wire', 'Card'],
            datasets: [
                {
                    data: [300, 50, 100,100],
                    backgroundColor: [
                        "#0393C7",
                        "#932763",
                        "#E36935",
                        "#007A45"
                    ]
                }]
        };

        this.pieOptions = {
            title:{
                fullWidth:false
            },
            legend: {
                position: 'bottom',
                labels:{
                    boxWidth:20,
                    fontColor:"#000"
                }
            }
        };

        this.barOptions = {
            scales:{
                xAxes :[{
                    stacked:true
                }]
            }
        };

    }
}