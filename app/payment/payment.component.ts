import { Component} from '@angular/core';
import { PaymentService } from '../shared/services/payment.service';


@Component({
    selector: 'payment-data',
    templateUrl: './app/payment/payment.component.html',
    styleUrls: ['./app/payment/payment.component.css'],
    providers: [PaymentService]
})
export class PaymentComponent {

    pieData: any;
    pieOptions: any;
    barData: any;
    barOptions: any;

    constructor(private Payment: PaymentService) {

        this.pieData = {

            labels: ['Check', 'ACH', 'Wire', 'Card'],
            datasets: [
                {
                    data: [100, 100, 100,150],
                    backgroundColor: [
                        "#0393C7",
                        "#932763",
                        "#E36935",
                        "#007A45"
                    ]
                }
            ]
        };

        this.pieOptions = {
            title:{
                fullWidth: true
            },
            legend: {
                position: 'bottom',
                labels:{
                    boxWidth:20,
                    fontColor:"#000",
                    fontSize:20
                }
            }
        };


        this.barData = {
            labels: [''],
            datasets: [
                {
                    label: 'Checks',
                    backgroundColor: '#42A5F5',
                    data: [100]

                },
                {
                    label: 'ACH',
                    backgroundColor: '#932763',
                    data: [100]

                },
                {
                    label: 'Wire',
                    backgroundColor: '#E36935',
                    data: [100]

                },
                {
                    label: 'Card',
                    backgroundColor: '#007A45',
                    data: [150]
                }
            ]
        };

        this.barOptions = {
            scales: {
                xAxes:[{
                    stacked:true,
                    barPercentage:0.4
                }],
                yAxes:[{
                    stacked:true
                }]
            },
            legend:{
                position:"right",
                labels:{
                    boxWidth:20,
                    fontColor:"#000"
                }
            }
        };

    }




}