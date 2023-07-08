import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {HomeMainSlideshowComponent} from "./home-main-slideshow.component";
import {RouterLink} from "@angular/router";


@NgModule({
  imports: [CommonModule, RouterLink, NgOptimizedImage],
  declarations: [HomeMainSlideshowComponent],
  exports: [HomeMainSlideshowComponent]
})
export class HomeMainSlideshowModule {
}
