import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LogoComponent } from './components/logo/logo/logo.component';
import { HomeContentComponent } from './components/home-content/home-content/home-content.component';
import { OfferContentComponent } from './components/offer-content/offer-content.component';
import { MenuItemComponent } from './components/menu-items/menu-item/menu-item.component';
import { OfferItemComponent } from './components/offer-item/offer-item.component';
import { HttpClientModule } from '@angular/common/http';
import { SubcategoryDetailsComponent } from './components/subcategory-details/subcategory-details.component';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { OfferItemFooterComponent } from './components/offer-item-footer/offer-item-footer.component';
import { SubmitService } from './services/submit.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LogoComponent,
    HomeContentComponent,
    OfferContentComponent,
    MenuItemComponent,
    OfferItemComponent,
    SubcategoryDetailsComponent,
    CategoryDetailsComponent,
    CourseDetailsComponent,
    OfferItemFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    SubmitService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
