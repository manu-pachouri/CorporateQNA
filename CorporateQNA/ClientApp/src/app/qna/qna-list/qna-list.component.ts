import { Component, OnInit } from '@angular/core';
import { Icons } from 'src/app/shared/font-awesome-icons';

@Component({
  selector: 'app-qna-list',
  templateUrl: './qna-list.component.html',
  styles: [
  ]
})
export class QnaListComponent implements OnInit {
  questions = [1,2,3,4,5];
  answers = [1,2];
  Icons = new Icons();

  constructor() { }

  ngOnInit(): void {
  }

}
