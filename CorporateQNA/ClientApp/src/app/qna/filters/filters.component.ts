import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Editor, Toolbar } from 'ngx-editor';
import { Icons } from '../../shared/font-awesome-icons';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styles: [
  ]
})
export class FiltersComponent implements OnInit {
  Icons = new Icons();
  modalRef:BsModalRef;
  //ngxeditor
  editor:Editor;
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color']
  ];
  html='';
  ////
  constructor(private modalService:BsModalService) { }

  ngOnInit(): void {
    this.editor = new Editor({
      content:`Enter your text here..`,
      enabled:true,
      history:true,
      keyboardShortcuts:true
    });
  }

  openModal(template:TemplateRef<any>){
    this.modalRef = this.modalService.show(template,{class:'modal-lg'});
  }

  closeModal(){
    this.modalRef.hide();
  }

}
