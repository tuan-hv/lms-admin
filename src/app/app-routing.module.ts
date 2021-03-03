import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from 'src/app/services/guards/auth/auth.guard';
import { LoginGuard } from 'src/app/services/guards/login/login.guard';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/routing/home/home.module').then((m) => m.HomeModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/routing/login/login.module').then(m => m.LoginModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'loan-account',
    loadChildren: () =>
      import('./modules/routing/loan-account/loan-account.module').then(
        (m) => m.LoanAccountModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'replanning',
    loadChildren: () =>
      import('./modules/routing/replanning/replanning.module').then(
        (m) => m.ReplanningModule
      ),
    canActivate: [AuthGuard],
  },
  {

    path: 'template',
    loadChildren: () =>
      import('./modules/routing/template/template.module').then(
        (m) => m.TemplateModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: '404',
    loadChildren: () => import('./modules/routing/not-found/not-found.module').then(m => m.NotFoundModule),
  },
  { path: '**', redirectTo: '404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
