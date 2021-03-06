"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var sidebar_component_1 = require("./elements/sidebar.component");
var payment_component_1 = require("./payment/payment.component");
var result_component_1 = require("./result/result.component");
var not_found_component_1 = require("./elements/not-found.component");
var header_component_1 = require("./elements/header.component");
var primeng_1 = require("primeng/primeng");
var currency_pipes_1 = require("./shared/pipes/currency.pipes");
var symbol_pipes_1 = require("./shared/pipes/symbol.pipes");
var router_1 = require("@angular/router");
var app_routes_1 = require("./app.routes");
var payment_service_1 = require("./shared/services/payment.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            primeng_1.SliderModule,
            primeng_1.InputMaskModule,
            primeng_1.ChartModule,
            router_1.RouterModule.forRoot(app_routes_1.APP_ROUTER_PROVIDERS)
        ],
        declarations: [
            app_component_1.AppComponent,
            sidebar_component_1.SidebarComponent,
            not_found_component_1.PageNotFoundComponent,
            header_component_1.HeaderComponent,
            payment_component_1.PaymentComponent,
            result_component_1.ResultComponent,
            currency_pipes_1.CurrencyPipe,
            symbol_pipes_1.SymbolPipe
        ],
        providers: [payment_service_1.PaymentService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map