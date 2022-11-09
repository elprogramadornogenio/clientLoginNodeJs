import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guard/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: ()=>import('./auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path: 'dashboard',
    loadChildren: ()=> import('./protected/protected.module').then(m=>m.ProtectedModule),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
