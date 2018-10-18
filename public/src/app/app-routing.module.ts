
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

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: '/product' },

  { path: 'index',component:IndexComponent },
  { path: 'index/home', pathMatch: 'full', redirectTo: '/index' },
  { path: 'index/welcome',component:WelcomeComponent }, 
  { path: 'index/parameters/:id',component:ParametersComponent }, 

  { path: 'product',component:ProductComponent },
  { path: 'product/all',component:ProductallComponent },
  { path: 'product/new',component: ProductnewComponent},
  { path: 'product/edit/:id',component: ProducteditComponent},

  // add route here
  { path: '**', component:PagenotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

