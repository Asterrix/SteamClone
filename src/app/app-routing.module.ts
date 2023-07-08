import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./modules/home/home.component";
import {AuthenticationComponent} from "./modules/authentication/authentication.component";

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "authentication", component: AuthenticationComponent},
  {path: "**", redirectTo: "", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
