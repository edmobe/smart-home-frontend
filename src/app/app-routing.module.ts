import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { AuthGuard } from './helpers/auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', component: ControlPanelComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
