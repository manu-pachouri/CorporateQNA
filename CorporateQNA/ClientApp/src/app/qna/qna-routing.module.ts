import { QnaListComponent } from './qna-list/qna-list.component';
import { QnaCardComponent } from './qna-list/qna-card/qna-card.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path:'',
  component:QnaListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QnaRoutingModule { }
