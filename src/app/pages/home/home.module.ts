import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TopBannerComponent } from './top-banner/top-banner.component';
import { OffersComponent } from './offers/offers.component';
import { Banner2Component } from './banner2/banner2.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import { CopyrightComponent } from './copyright/copyright.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    TopBannerComponent,
    OffersComponent,
    Banner2Component,
    ProductsComponent,
    FooterComponent,
    CopyrightComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
