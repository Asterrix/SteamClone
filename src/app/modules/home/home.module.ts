import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from "./home.component";
import {HomeCategoryItemListModule} from "./components/home-category-item-list/home-category-item-list.module";
import {HomeCategorySlideshowModule} from "./components/home-category-slideshow/home-category-slideshow.module";
import {HomeDiscountModule} from "./components/home-discount/home-discount.module";
import {HomeFeaturedCategoryModule} from "./components/home-featured-category/home-featured-category.module";
import {HomeFeaturedListModule} from "./components/home-featured-list/home-featured-list.module";
import {HomeHeaderModule} from "./components/home-header/home-header.module";
import {HomeMainSlideshowModule} from "./components/home-main-slideshow/home-main-slideshow.module";

@NgModule({
  imports: [
    CommonModule,
    HomeCategoryItemListModule,
    HomeCategorySlideshowModule,
    HomeDiscountModule,
    HomeFeaturedCategoryModule,
    HomeFeaturedListModule,
    HomeHeaderModule,
    HomeMainSlideshowModule],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule {}
