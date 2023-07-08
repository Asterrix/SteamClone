import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeFeaturedCategoryComponent} from "./home-featured-category.component";
import {RouterLink} from "@angular/router";
import {ItemCardSmallModule} from "../../../../components/item-card-small/item-card-small.module";


@NgModule({
  imports: [CommonModule, RouterLink, ItemCardSmallModule],
  declarations: [HomeFeaturedCategoryComponent],
  exports: [HomeFeaturedCategoryComponent]
})
export class HomeFeaturedCategoryModule {
}
