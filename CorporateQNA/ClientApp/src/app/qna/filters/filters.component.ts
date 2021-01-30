import { HomeService } from './../../Services/home-service.service';
import { QuestionAddViewModel } from './../../Models/QuestionAddViewModel';
import { UserApiService } from './../../Services/user-api-service.service';
import { CategoryViewModel } from './../../Models/CategoryViewModel';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Editor, Toolbar } from 'ngx-editor';
import { Icons } from '../../shared/font-awesome-icons';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styles: [
  ]
})
export class FiltersComponent implements OnInit {
  Icons = new Icons();
  modalRef:BsModalRef;
  categories:CategoryViewModel[] = [];

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
  questionFormGroup:FormGroup;

  constructor(private modalService:BsModalService,
    private apiService:UserApiService,
    private homeService:HomeService) { }

  ngOnInit(): void {
    this.questionFormGroup = new FormGroup({
      question:new FormControl(null,Validators.required),
      editorContent:new FormControl(null,Validators.required),
      category:new FormControl(null,Validators.required)
    });

    this.apiService.getCategories().subscribe(
      response=>this.categories = response
    )
  }

  openModal(template:TemplateRef<any>){
    this.editor = new Editor({
      content:`Enter your text here..`,
      enabled:true,
      history:true,
      keyboardShortcuts:true
    });
    
    this.modalRef = this.modalService.show(template,{class:'modal-lg'});
  }

  closeModal(){
    this.modalRef.hide();
  }

  onSubmit(){
    if(this.questionFormGroup.valid && sessionStorage.getItem('userId')){
      console.log(this.questionFormGroup.value);
      let question = new QuestionAddViewModel();
      question.askedBy = sessionStorage.getItem('userId');
      question.description = this.questionFormGroup.value['editorContent']['content'][0]['content'][0]['text'];
      question.title = this.questionFormGroup.get('question').value;
      question.Category = this.questionFormGroup.get('category').value;
      question.askedOn = new Date();
      this.apiService.addQuestion(question).subscribe(
        response=>{},
        (err:HttpErrorResponse)=>window.alert(err),
        ()=>{
          this.questionFormGroup.reset();
          this.homeService.RefreshList.emit(true);
          this.closeModal();
          window.alert('posted');
        }

      )
      
    }else window.alert('please login...');
  }

}
