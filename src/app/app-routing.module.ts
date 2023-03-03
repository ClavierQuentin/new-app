import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { ConversionComponent } from './conversion/conversion.component';
import { LoginComponent } from './login/login.component';
import { CreateMatchComponent } from './matchs/create-match/create-match.component';
import { MatchsComponent } from './matchs/matchs.component';
import { PlayersComponent } from './players/players.component';
import { StudentComponent } from './student/student.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path: "basic", component: BasicComponent},
  {path: "welcome", component: WelcomeComponent},
  {path: "login", component: LoginComponent},
  {path: "conversion", component: ConversionComponent},
  {path:"student", component:StudentComponent},
  {path:"joueurs", component:PlayersComponent},
  {path:"matchs-create", component:CreateMatchComponent},
  {path:"matchs", component:MatchsComponent, children:[
    {path:"create", component:CreateMatchComponent}
  ]},
  {path: "", redirectTo:"/welcome", pathMatch:"full"},
  {path: "**", redirectTo:"/welcome", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
