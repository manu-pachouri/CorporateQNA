import { Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Editor, Toolbar } from 'ngx-editor';
import { Icons } from 'src/app/shared/font-awesome-icons';

@Component({
  selector: 'app-qna-list',
  templateUrl: './qna-list.component.html',
  styles: [
  ]
})
export class QnaListComponent implements OnInit,OnDestroy {
  questions = [1,2,3,4,5];
  answers = [1,2];

  //ngx editor 
  editor: Editor;
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
  formGroup:FormGroup;

  //modal
  modalRef:BsModalRef;
  config={
    backdrop:false,
    keybodard:true,
    animated:true
  };

  constructor(private modalService:BsModalService) { 
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      editorContent: new FormControl(null,Validators.required)
    });

    this.editor = new Editor({
      content:`Enter your Answer here..`,
      enabled:true,
      history:true,
      keyboardShortcuts:true
    });
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

  closeModal(template:TemplateRef<any>){
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
