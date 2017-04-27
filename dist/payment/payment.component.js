"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var payment_service_1 = require("../shared/services/payment.service");
var PaymentComponent = (function () {
    //@Input('financeData') data: object;
    function PaymentComponent(Payment) {
        this.Payment = Payment;
        this.pieData = {
            labels: ['Check', 'ACH', 'Wire', 'Card'],
            datasets: [
                {
                    data: [100, 100, 100, 150],
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
            title: {
                fullWidth: true
            },
            legend: {
                position: 'bottom',
                labels: {
                    boxWidth: 20,
                    fontColor: "#000",
                    fontSize: 20
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
                xAxes: [{
                        stacked: true,
                        barPercentage: 0.4
                    }],
                yAxes: [{
                        stacked: true
                    }]
            },
            legend: {
                position: "right",
                labels: {
                    boxWidth: 20,
                    fontColor: "#000"
                }
            }
        };
    }
    return PaymentComponent;
}());
PaymentComponent = __decorate([
    core_1.Component({
        selector: 'payment-data',
        templateUrl: './app/payment/payment.component.html',
        styleUrls: ['./app/payment/payment.component.css'],
        providers: [payment_service_1.PaymentService]
    }),
    __metadata("design:paramtypes", [payment_service_1.PaymentService])
], PaymentComponent);
exports.PaymentComponent = PaymentComponent;
//# sourceMappingURL=payment.component.js.map