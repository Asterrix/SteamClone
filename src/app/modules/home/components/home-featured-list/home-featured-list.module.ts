import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeFeaturedListComponent} from "./home-featured-list.component";
import {ItemCardSmallModule} from "../../../../components/item-card-small/item-card-small.module";

@NgModule({
  imports: [CommonModule, ItemCardSmallModule],
  declarations: [HomeFeaturedListComponent],
  exports: [HomeFeaturedListComponent]
})
export class HomeFeaturedListModule {
}
