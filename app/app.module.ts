import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {SidebarComponent} from './elements/sidebar.component';
import {PaymentComponent} from './payment/payment.component';
import {ResultComponent} from './result/result.component';
import {PageNotFoundComponent} from './not-found.component';
import {HeaderComponent} from './elements/header.component';
import {SliderModule, InputMaskModule, ChartModule} from 'primeng/primeng';
import {CurrencyPipe} from './shared/pipes/currency.pipes';
import {SymbolPipe} from './shared/pipes/symbol.pipes';
import {RouterModule, Routes} from '@angular/router';


const appRoutes: Routes = [
    {path: 'result', component: ResultComponent},
    {path: 'payment', component: PaymentComponent},
    {path: '', redirectTo: '/payment', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        SliderModule,
        InputMaskModule,
        ChartModule,
        RouterModule.forRoot(appRoutes)
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
    bootstrap: [AppComponent]
})
export class AppModule {
}