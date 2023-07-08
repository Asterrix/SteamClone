import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ItemCardSmallComponent} from "./item-card-small.component";
import {RouterLink} from "@angular/router";


@NgModule({
  imports: [CommonModule, RouterLink],
  declarations: [ItemCardSmallComponent],
  exports: [ItemCardSmallComponent]
})
export class ItemCardSmallModule {
}
