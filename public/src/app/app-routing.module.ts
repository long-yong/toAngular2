
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { WelcomeComponent } from './index/welcome/welcome.component';
import { ParametersComponent } from './index/parameters/parameters.component';
import { PagenotfoundComponent } from './index/pagenotfound/pagenotfound.component';

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
import { EditpetComponent } from './pet/editpet/editpet.component';
import { DetailComponent } from './pet/detail/detail.component';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: '/pet' },

  { path: 'index',component:IndexComponent },
  { path: 'index/home', pathMatch: 'full', redirectTo: '/index' },
  { path: 'index/welcome',component:WelcomeComponent }, 
  { path: 'index/parameters/:id',component:ParametersComponent }, 

  { path: 'product',component:ProductComponent },
  { path: 'product/all',component:ProductallComponent },
  { path: 'product/new',component: ProductnewComponent},
  { path: 'product/edit/:id',component: ProducteditComponent},

  { path: 'author',component:AuthorComponent },
  { path: 'author/newauthor',component: NewauthorComponent },
  { path: 'author/editauthor/:id',component: EditauthorComponent },
  { path: 'author/quotes/:id',component:QuotesComponent },
  { path: 'author/newquote/:id',component: NewquoteComponent},

  { path: 'pet',component:PetComponent },
  { path: 'pet/newpet',component: NewpetComponent },
  { path: 'pet/editpet/:id',component: EditpetComponent },
  { path: 'pet/detail/:id',component: DetailComponent },


  // add route here
  { path: '**', component:PagenotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

