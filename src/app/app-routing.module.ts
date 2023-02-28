import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path: "basic", component: BasicComponent},
  {path: "welcome", component: WelcomeComponent},
  {path: "login", component: LoginComponent},
  {path: "", redirectTo:"/welcome", pathMatch:"full"},
  {path: "**", redirectTo:"/welcome", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
