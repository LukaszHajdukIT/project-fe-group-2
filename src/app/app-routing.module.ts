import { NgModule } from '@angular/core';
import { HomeContentComponent } from './components/home-content/home-content/home-content.component'
import { OfferContentComponent } from './components/offer-content/offer-content.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [ 
  {path:'home', component: HomeContentComponent},
  {path:'offer', component: OfferContentComponent},
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path:'**', redirectTo: '/home',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
