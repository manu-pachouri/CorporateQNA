import { Component, OnInit } from '@angular/core';
import { Icons } from 'src/app/shared/font-awesome-icons';

@Component({
  selector: 'app-qna-answers',
  templateUrl: './qna-answers.component.html',
  styles: [
  ]
})
export class QnaAnswersComponent implements OnInit {
  Icons = new Icons();
  constructor() { }

  ngOnInit(): void {
  }

}
