import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeCategoryItemListComponent} from "./home-category-item-list.component";
import {RouterLink} from "@angular/router";
import {ItemCardSmallModule} from "../../../../components/item-card-small/item-card-small.module";

@NgModule({
  imports: [CommonModule, RouterLink, ItemCardSmallModule],
  declarations: [HomeCategoryItemListComponent],
  exports: [HomeCategoryItemListComponent],
})
export class HomeCategoryItemListModule {
}
