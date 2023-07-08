import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {HomeCategorySlideshowComponent} from "./home-category-slideshow.component";

@NgModule({
  imports: [CommonModule, NgOptimizedImage],
  declarations: [HomeCategorySlideshowComponent],
  exports: [HomeCategorySlideshowComponent]
})
export class HomeCategorySlideshowModule {
}
