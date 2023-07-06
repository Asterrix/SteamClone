import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {NgOptimizedImage} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HomeModuleComponent} from './modules/home-module/home-module.component';
import {
  HomeMainSlideshowComponent
} from "./modules/home-module/components/home-main-slideshow/home-main-slideshow.component";
import {
  HomeFeaturedListComponent
} from './modules/home-module/components/home-featured-list/home-featured-list.component';
import {
  HomeCategorySlideshowComponent
} from "./modules/home-module/components/home-category-slideshow/home-category-slideshow.component";
import { HomeDiscountComponent } from './modules/home-module/components/home-discount/home-discount.component';
import { HomeFeaturedCategoryComponent } from './modules/home-module/components/home-featured-category/home-featured-category.component';
import { ItemCardSmallComponent } from './components/item-card-small/item-card-small.component';
import { HomeCategoryItemListComponent } from './modules/home-module/components/home-category-item-list/home-category-item-list.component';
import { FooterComponent } from './components/footer/footer.component';
import {FormsModule} from "@angular/forms";
import { HomeHeaderComponent } from './modules/home-module/components/home-header/home-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeModuleComponent,
    HomeMainSlideshowComponent,
    HomeFeaturedListComponent,
    HomeCategorySlideshowComponent,
    HomeDiscountComponent,
    HomeFeaturedCategoryComponent,
    ItemCardSmallComponent,
    HomeCategoryItemListComponent,
    FooterComponent,
    HomeHeaderComponent,
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        NgOptimizedImage,
        FormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
