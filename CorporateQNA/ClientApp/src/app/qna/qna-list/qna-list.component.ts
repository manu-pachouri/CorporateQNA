import { Component, DoCheck, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Editor, Toolbar } from 'ngx-editor';
import { Icons } from 'src/app/shared/font-awesome-icons';

@Component({
  selector: 'app-qna-list',
  templateUrl: './qna-list.component.html',
  styles: [
  ]
})
export class QnaListComponent implements OnInit,OnDestroy,DoCheck {
  questions = [1,2,3,4,5];
  answers = [1,2];
  showFilters:boolean = true;
  formGroup:FormGroup;
  
  //ngx editor 
  editor:Editor = new Editor({
    content:`Enter your Answer here..`,
    enabled:true,
    history:true,
    keyboardShortcuts:true
  });;
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color']
  ];
  html='';
  //icons

  Icons = new Icons();
  //form

  //modal
  modalRef:BsModalRef;
  config={
    backdrop:false,
    keybodard:true,
    animated:true,
    class:'modal-lg'
  };

  constructor(private modalService:BsModalService,
              private router:Router) { 
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      editorContent: new FormControl(null,Validators.required)
    });
  }

  ngDoCheck(){
    this.showFilters = this.router.url.indexOf('user') == -1;
  }

  ngOnDestroy(){
    this.editor.destroy();
  }

  onSubmit()
  {
    console.log(this.formGroup.value['editorContent']['content'][0]['content'][0]['text']);
  }

  openModal(template:TemplateRef<any>){

    this.modalRef = this.modalService.show(template,this.config);
  }

  closeModal(){
    this.modalRef.hide();
  }
  
}

// function getDescendantPropValue(obj, modelName) {
//   console.log("modelName " + modelName);
//   var arr = modelName.split(".");
//   var val = obj;
//   for (var i = 0; i < arr.length; i++) {
//       val = val[arr[i]];
//   }
//   console.log("Val values final  : " + JSON.stringify(val));
//   return val;
// }
