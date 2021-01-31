import { NgModule } from '@angular/core';
import { HomeContentComponent } from './components/home-content/home-content/home-content.component'
import { OfferContentComponent } from './components/offer-content/offer-content.component';
import { Routes, RouterModule } from '@angular/router';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';
import { OfferSummaryComponent } from './components/offer-summary/offer-summary.component';

const routes: Routes = [
  {path:'home', component: HomeContentComponent},
  {path:'offer', component: OfferContentComponent},
  {path: 'category-details', component: CategoryDetailsComponent},
  {path: 'summary', component: OfferSummaryComponent},
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path:'**', redirectTo: '/home',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
