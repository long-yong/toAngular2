
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HttpService } from './http.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IndexComponent } from './index/index.component';
import { PagenotfoundComponent } from './index/pagenotfound/pagenotfound.component';
import { ParametersComponent } from './index/parameters/parameters.component';
import { WelcomeComponent } from './index/welcome/welcome.component';

import { ProductComponent } from './product/product.component';
import { ProductallComponent } from './product/productall/productall.component';
import { ProductnewComponent } from './product/productnew/productnew.component';
import { ProducteditComponent } from './product/productedit/productedit.component';


@NgModule({
  declarations: [

    AppComponent,

    IndexComponent,
    ParametersComponent,
    PagenotfoundComponent,
    WelcomeComponent,

    ProductComponent,
    ProductallComponent,
    ProductnewComponent,
    ProducteditComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
