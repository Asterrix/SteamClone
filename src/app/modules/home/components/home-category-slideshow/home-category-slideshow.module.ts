import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {HomeCategorySlideshowComponent} from "./home-category-slideshow.component";
import {RouterLink} from "@angular/router";

@NgModule({
    imports: [CommonModule, NgOptimizedImage, RouterLink],
  declarations: [HomeCategorySlideshowComponent],
  exports: [HomeCategorySlideshowComponent]
})
export class HomeCategorySlideshowModule {
}
