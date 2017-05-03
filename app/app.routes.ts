import {PaymentComponent} from './payment/payment.component';
import {ResultComponent} from './result/result.component';
import {PageNotFoundComponent} from './elements/not-found.component';
import {Routes} from '@angular/router';


export const APP_ROUTER_PROVIDERS: Routes = [

    {
        path: 'result',
        component: ResultComponent
    },
    {
        path: 'payment',
        component: PaymentComponent
    },
    {
        path: '',
        redirectTo: '/payment',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }

];


