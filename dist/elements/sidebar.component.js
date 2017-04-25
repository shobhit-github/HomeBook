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
var SidebarComponent = (function () {
    function SidebarComponent(Payment) {
        this.Payment = Payment;
        this.payment = {};
    }
    SidebarComponent.prototype.getCalculation = function () {
        this.Payment.generateFinancialData(this.payment, function (response) {
            console.log(response);
        });
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    core_1.Component({
        selector: 'sidebar',
        templateUrl: './app/elements/sidebar.component.html',
        styleUrls: ['./app/elements/sidebar.component.css'],
        providers: [payment_service_1.PaymentService]
    }),
    __metadata("design:paramtypes", [payment_service_1.PaymentService])
], SidebarComponent);
exports.SidebarComponent = SidebarComponent;
//# sourceMappingURL=sidebar.component.js.map