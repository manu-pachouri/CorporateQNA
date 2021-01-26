import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
  path:"home",
  loadChildren:()=>import('./qna/qna.module').then(m=>m.QnaModule)
  },
  {
    path:"categories",
    loadChildren:()=>import('./categories/categories.module').then(m=>m.CategoriesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
