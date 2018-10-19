
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
import { AuthorComponent } from './author/author.component';
import { NewauthorComponent } from './author/newauthor/newauthor.component';
import { QuotesComponent } from './author/quotes/quotes.component';
import { NewquoteComponent } from './author/newquote/newquote.component';
import { EditauthorComponent } from './author/editauthor/editauthor.component';
import { PetComponent } from './pet/pet.component';
import { NewpetComponent } from './pet/newpet/newpet.component';
import { DetailComponent } from './pet/detail/detail.component';
import { EditpetComponent } from './pet/editpet/editpet.component';



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
    AuthorComponent,
    NewauthorComponent,
    QuotesComponent,
    NewquoteComponent,
    EditauthorComponent,
    PetComponent,
    NewpetComponent,
    DetailComponent,
    EditpetComponent,
    
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
