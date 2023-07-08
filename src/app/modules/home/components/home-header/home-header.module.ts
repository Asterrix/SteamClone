import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {HomeHeaderComponent} from "./home-header.component";
import {RouterLink} from "@angular/router";


@NgModule({
  imports: [CommonModule, RouterLink, NgOptimizedImage],
  declarations: [HomeHeaderComponent],
  exports: [HomeHeaderComponent]
})
export class HomeHeaderModule {
}
