import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { PagenotfoundComponent } from './index/pagenotfound/pagenotfound.component';
import { ParametersComponent } from './index/parameters/parameters.component';
import { WelcomeComponent } from './index/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ParametersComponent,
    PagenotfoundComponent,
    WelcomeComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
