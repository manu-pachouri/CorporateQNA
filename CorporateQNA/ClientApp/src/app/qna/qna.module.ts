import { NgModule, Component, ComponentRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QnaRoutingModule } from './qna-routing.module';
import { QnaListComponent } from './qna-list/qna-list.component';
import { QnaCardComponent } from './qna-list/qna-card/qna-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { QnaAnswersComponent } from './qna-list/qna-answers/qna-answers.component';
import { NgxEditorModule } from 'ngx-editor';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal'
import { FiltersComponent } from './filters/filters.component';


@NgModule({
  declarations: [QnaListComponent, QnaCardComponent, QnaAnswersComponent,FiltersComponent],
  imports: [
    CommonModule,
    QnaRoutingModule,
    FontAwesomeModule,
    NgxEditorModule.forRoot({
      
    }),
    ReactiveFormsModule,
    ModalModule.forRoot()
  ]
})
export class QnaModule { 
  constructor(){}

  public static GetQnaListComp(){
    return QnaListComponent;
  }
}
