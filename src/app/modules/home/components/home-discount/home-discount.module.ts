import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeDiscountComponent} from "./home-discount.component";
import {RouterLink} from "@angular/router";
import {ItemCardSmallModule} from "../../../../components/item-card-small/item-card-small.module";

@NgModule({
  imports: [CommonModule, RouterLink, ItemCardSmallModule],
  declarations: [HomeDiscountComponent],
  exports: [HomeDiscountComponent]
})
export class HomeDiscountModule {
}
