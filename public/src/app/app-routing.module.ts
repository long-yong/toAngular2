import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { WelcomeComponent } from './index/welcome/welcome.component';
import { ParametersComponent } from './index/parameters/parameters.component';
import { PagenotfoundComponent } from './index/pagenotfound/pagenotfound.component';


const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: '/index' },
  { path: 'index',component:IndexComponent },
  { path: 'index/home', pathMatch: 'full', redirectTo: '/index' },
  { path: 'index/welcome',component:WelcomeComponent }, 
  { path: 'index/parameters/:id',component:ParametersComponent }, 

  
  // add route here
  { path: '**', component:PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

