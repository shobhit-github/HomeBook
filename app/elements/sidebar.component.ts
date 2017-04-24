import {Component} from '@angular/core';
import { Payment } from '../shared/models/payment.model';


@Component({
    selector: 'sidebar',
    templateUrl: './app/elements/sidebar.component.html',
    styleUrls: ['./app/elements/sidebar.component.css']
})
export class SidebarComponent {

    payment: Payment = new Payment();

    constructor() {

    }


    public getCalculation() {

        console.log();
    }
}