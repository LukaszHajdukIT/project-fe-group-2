import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LogoComponent } from './components/logo/logo/logo.component';
import { HomeContentComponent } from './components/home-content/home-content/home-content.component';
import { OfferContentComponent } from './components/offer-content/offer-content.component';
import { MenuItemComponent } from './components/menu-items/menu-item/menu-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LogoComponent,
    HomeContentComponent,
    OfferContentComponent,
    MenuItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
