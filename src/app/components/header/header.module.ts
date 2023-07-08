import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {HeaderComponent} from "./header.component";
import {RouterLink} from "@angular/router";


@NgModule({
  imports: [CommonModule, NgOptimizedImage, RouterLink],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule {
}
