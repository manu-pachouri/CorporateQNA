import { Component, OnInit } from '@angular/core';
import { Icons } from 'src/app/shared/font-awesome-icons';

@Component({
  selector: 'app-qna-card',
  templateUrl: './qna-card.component.html',
  styles: [
  ]
})
export class QnaCardComponent implements OnInit {
  Icons = new Icons();
  constructor() { }

  ngOnInit(): void {
  }

}
