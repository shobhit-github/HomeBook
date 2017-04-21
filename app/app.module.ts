import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SidebarComponent } from './elements/sidebar.component';
import { PaymentComponent } from './payment/payment.component';
import { ResultComponent } from './result/result.component';
import { HeaderComponent } from './elements/header.component';
import { SliderModule, InputMaskModule, ChartModule } from 'primeng/primeng';


@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    SliderModule,
    InputMaskModule,
    ChartModule
  ],
  declarations: [ 
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    PaymentComponent,
    ResultComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}