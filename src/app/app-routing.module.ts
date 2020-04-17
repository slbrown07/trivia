import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SetupComponent } from './setup/setup.component';
import { LoginComponent } from './login/login.component';
import { GameInterfaceComponent } from './game-interface/game-interface.component'
import { Resolver } from './setup/resolver'

import { redirectUnauthorizedTo, canActivate } from '@angular/fire/auth-guard';
import { UserStatsComponent } from './user-stats/user-stats.component';
import { from } from 'rxjs';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['log-in']);

const routes: Routes = [
  {
    path: 'set-up',
    component: SetupComponent,
    resolve: {categories: Resolver},
    ...canActivate(redirectUnauthorizedToLogin)
  },
  { path: 'log-in', component: LoginComponent },
  {
    path: 'game',
    component: GameInterfaceComponent,
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'userStats',
    component: UserStatsComponent,
    ...canActivate(redirectUnauthorizedToLogin)
  },
  { path: '**', redirectTo: 'log-in' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
