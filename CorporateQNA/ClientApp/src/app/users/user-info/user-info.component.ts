import { UserApiService } from './../../Services/user-api-service.service';
import { UsersDataViewModel } from './../../Models/UsersDataViewModel';
import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Icons } from 'src/app/shared/font-awesome-icons';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
})
export class UserInfoComponent implements OnInit {
  @ViewChild('Questions',{static:true,read:ViewContainerRef}) public questionsPlaceholder:ViewContainerRef;
  
  @Input() user:UsersDataViewModel = new UsersDataViewModel();
  active:string;


  Icons = new Icons();
  constructor(private router:Router,
              private route:ActivatedRoute,
              private resolver:ComponentFactoryResolver,
              private userApiService:UserApiService) { }

  ngOnInit(): void {
    this.active = 'allquestions';

    this.route.paramMap.subscribe(
      params=>{
        let param = params.get('id');
        let userId = param.substring(0,param.lastIndexOf('+'));
        this.userApiService.getUser(userId)
        .subscribe(
          user=>{
            this.user = user
            if(param.indexOf('+allquestions')>-1)
              this.showAllQuestionsComponent();
          });
      }
    );

  }

  goBack(){
    this.router.navigate(['users']);
  }

  showAllQuestionsComponent(){
    this.router.navigate(['users','user',this.user.id+'+allquestions']);
    this.active='allquestions';
    this.questionsPlaceholder.clear();
    import('./../../qna/qna.module').then(module=>{
      let questionsComponent = module.QnaModule.GetQnaListComp();
      let factory = this.resolver.resolveComponentFactory(questionsComponent);
      let ref = this.questionsPlaceholder.createComponent(factory);
    });
  }

  showAnswered(){
    this.router.navigate(['users','user',this.user.id+'+answered']);
    this.active='answered';
    this.questionsPlaceholder.clear();
    import('./../../qna/qna.module').then(module=>{
      let questionsComponent = module.QnaModule.GetQnaListComp();
      let factory = this.resolver.resolveComponentFactory(questionsComponent);
      let ref = this.questionsPlaceholder.createComponent(factory);
    });
  }
}
