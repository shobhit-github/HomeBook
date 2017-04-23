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
var PaymentComponent = (function () {
    function PaymentComponent() {
        this.data = {
            labels: ['Check', 'ACH', 'Wire', 'Card'],
            datasets: [
                {
                    data: [300, 50, 100, 100],
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
                fullWidth: false
            },
            legend: {
                position: 'bottom',
                labels: {
                    boxWidth: 20,
                    fontColor: "#000"
                }
            }
        };
        this.barOptions = {
            scales: {
                xAxes: [{
                        stacked: true
                    }]
            }
        };
    }
    return PaymentComponent;
}());
PaymentComponent = __decorate([
    core_1.Component({
        selector: 'payment-data',
        templateUrl: './app/payment/payment.component.html',
        styleUrls: ['./app/payment/payment.component.css']
    }),
    __metadata("design:paramtypes", [])
], PaymentComponent);
exports.PaymentComponent = PaymentComponent;
//# sourceMappingURL=payment.component.js.map