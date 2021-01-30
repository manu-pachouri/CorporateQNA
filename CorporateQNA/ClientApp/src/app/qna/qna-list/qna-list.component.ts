import { AnswerViewModel } from './../../Models/AnswerModel';
import { AnswerAddViewModel } from '../../Models/AnswerModel';
import { DateTimeService } from './../../Services/date-time.service';
import { QuestionViewModel } from './../../Models/QuestionViewModel';
import { UserApiService } from './../../Services/user-api-service.service';
import { HomeService } from './../../Services/home-service.service';
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
  questions:QuestionViewModel[] = [];
  answers:AnswerViewModel[]=[];
  showFilters:boolean = true;
  formGroup:FormGroup;
  activeQuestion:QuestionViewModel;
  
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
              private router:Router,
              private dateTimeService:DateTimeService,
              private homeService:HomeService,
              private apiService:UserApiService) { 
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      editorContent: new FormControl(null,Validators.required)
    });
    this.homeService.RefreshList.subscribe(
      response=>{
        if(response){
          console.log(response);
        }
      }
    );

    this.getQuestions();
    this.homeService.RefreshList.subscribe(
      ()=>{this.getQuestions();}
    )

    this.homeService.QuestionClick
    .subscribe(
      response=>{
        console.log(response);
        this.activeQuestion = response;
        this.apiService.getAnswers(this.activeQuestion.id).subscribe(
          response=>{
            console.log(response);
            for(let key in response){
              response[key].answeredOn = this.dateTimeService.dateDiff(new Date(response[key].answeredOn),new Date());
            }
            this.answers = response;
          })
      }
    )
  }

  ngDoCheck(){
    this.showFilters = this.router.url.indexOf('user') == -1;
  }

  ngOnDestroy(){
    this.editor.destroy();
  }

  onSubmit()
  {
    if(this.formGroup.valid && sessionStorage.getItem('userId')){
      let answer = new AnswerAddViewModel();
      answer.answerOf = this.activeQuestion.id;
      answer.answeredBy = sessionStorage.getItem('userId');
      answer.answeredOn = new Date();
      answer.description = this.formGroup.value['editorContent']['content'][0]['content'][0]['text'];

      this.apiService.postAnswer(answer).subscribe(
        ()=>{
          this.formGroup.reset();
          this.editor.setContent('Enter your text here...');
          window.alert('answer posted');
        }
      )
    }else window.alert("Please Login..");
  }

  openModal(template:TemplateRef<any>){

    this.modalRef = this.modalService.show(template,this.config);
  }

  closeModal(){
    this.modalRef.hide();
  }

  getQuestions(){
    this.apiService.getQuestions()
    .subscribe(
      response=>{
        for(let key in response){
          response[key].askedOn = this.dateTimeService.dateDiff(new Date(response[key].askedOn),new Date());
        }
        this.questions = response;
    }
    );
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
