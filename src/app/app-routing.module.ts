import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./modules/home/home.component";
import {AuthenticationComponent} from "./modules/authentication/authentication.component";
import {AuthenticationLoginComponent} from "./modules/authentication/components/authentication-login/authentication-login.component";
import {AuthenticationRegisterComponent} from "./modules/authentication/components/authentication-register/authentication-register.component";
import {NoticeComponent} from "./modules/notice/notice.component";

const routes: Routes = [
  {path: "", component: HomeComponent},
  {
    path: "authentication", component: AuthenticationComponent, children: [
      {path: "login", component: AuthenticationLoginComponent},
      {path: "register", component: AuthenticationRegisterComponent},
    ]
  },
  {path: "about", component: NoticeComponent},
  {path: "**", redirectTo: "", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
