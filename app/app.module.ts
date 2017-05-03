import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {SidebarComponent} from './elements/sidebar.component';
import {PaymentComponent} from './payment/payment.component';
import {ResultComponent} from './result/result.component';
import {PageNotFoundComponent} from './elements/not-found.component';
import {HeaderComponent} from './elements/header.component';
import {SliderModule, InputMaskModule, ChartModule} from 'primeng/primeng';
import {CurrencyPipe} from './shared/pipes/currency.pipes';
import {SymbolPipe} from './shared/pipes/symbol.pipes';
import {RouterModule} from '@angular/router';
import {APP_ROUTER_PROVIDERS} from "./app.routes";
import {PaymentService} from "./shared/services/payment.service";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        SliderModule,
        InputMaskModule,
        ChartModule,
        RouterModule.forRoot(APP_ROUTER_PROVIDERS)
    ],
    declarations: [
        AppComponent,
        SidebarComponent,
        PageNotFoundComponent,
        HeaderComponent,
        PaymentComponent,
        ResultComponent,
        CurrencyPipe,
        SymbolPipe
    ],
    providers: [PaymentService],
    bootstrap: [AppComponent]
})
export class AppModule {
}