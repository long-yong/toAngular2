import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { GammaComponent } from './gamma/gamma.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: 'index',component:IndexComponent },  
  { path: 'gamma/:id',component:GammaComponent }, 
  { path: '', pathMatch: 'full', redirectTo: '/index' },
  { path: '**', component:PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

