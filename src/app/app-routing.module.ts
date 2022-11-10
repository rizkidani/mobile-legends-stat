import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('../app/module/home/home.module').then((x) => x.HomeModule)
  },
  {
    path: "login",
    loadChildren: () => import('../app/module/login/login.module').then((x) => x.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
