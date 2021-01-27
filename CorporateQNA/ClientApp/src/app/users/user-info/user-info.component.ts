import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { Router } from '@angular/router';
import { Icons } from 'src/app/shared/font-awesome-icons';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
})
export class UserInfoComponent implements OnInit {
  @ViewChild('Questions',{static:true,read:ViewContainerRef}) public questionsPlaceholder:ViewContainerRef;


  Icons = new Icons();
  constructor(private router:Router,
              private resolver:ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.showAllQuestionsComponent();
  }

  goBack(){
    this.router.navigate(['users']);
  }

  showAllQuestionsComponent(){
    import('./../../qna/qna.module').then(module=>{
      let questionsComponent = module.QnaModule.GetQnaListComp();
      let factory = this.resolver.resolveComponentFactory(questionsComponent);
      let ref = this.questionsPlaceholder.createComponent(factory);
    });
  }
}
