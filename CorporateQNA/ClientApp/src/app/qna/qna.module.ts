import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QnaRoutingModule } from './qna-routing.module';
import { QnaListComponent } from './qna-list/qna-list.component';
import { QnaCardComponent } from './qna-list/qna-card/qna-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { QnaAnswersComponent } from './qna-list/qna-answers/qna-answers.component';
import { NgxEditorModule } from 'ngx-editor';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal'


@NgModule({
  declarations: [QnaListComponent, QnaCardComponent, QnaAnswersComponent],
  imports: [
    CommonModule,
    QnaRoutingModule,
    FontAwesomeModule,
    NgxEditorModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ]
})
export class QnaModule { }
