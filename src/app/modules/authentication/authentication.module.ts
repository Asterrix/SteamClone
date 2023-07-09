import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthenticationLoginComponent} from './components/authentication-login/authentication-login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterLink, RouterOutlet} from "@angular/router";
import {AuthenticationRegisterComponent} from './components/authentication-register/authentication-register.component';
import {AuthenticationComponent} from "./authentication.component";

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink, RouterOutlet],
  declarations: [AuthenticationComponent, AuthenticationLoginComponent, AuthenticationRegisterComponent],
  exports: [AuthenticationComponent, AuthenticationLoginComponent, AuthenticationRegisterComponent]
})
export class AuthenticationModule {
}
