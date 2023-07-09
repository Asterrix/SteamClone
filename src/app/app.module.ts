import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {HomeModule} from "./modules/home/home.module";
import {HeaderModule} from "./components/header/header.module";
import {AuthenticationModule} from "./modules/authentication/authentication.module";
import { NoticeComponent } from './modules/notice/notice.component';
import {NgOptimizedImage} from "@angular/common";

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,

        HeaderModule,
        HomeModule,
        AuthenticationModule,
        NgOptimizedImage,
    ],
  declarations: [AppComponent, NoticeComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
