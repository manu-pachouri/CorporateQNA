import { debounceTime } from 'rxjs/operators';
import { UserPageService } from 'src/app/Services/user-page.service';
import { UserApiService } from './../../Services/user-api-service.service';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { CategoryAddViewModel } from './../../Models/CategoryAddViewModel';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Icons } from 'src/app/shared/font-awesome-icons';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-category-navigation',
  templateUrl: './category-navigation.component.html',
  styles: [
  ]
})
export class CategoryNavigationComponent implements OnInit {
  Icons = new Icons();
  searchFormGroup:FormGroup;

  formGroup:FormGroup;

  modalRef:BsModalRef;
  constructor(private BmsModalService:BsModalService,
              private oidc:OidcSecurityService,
              private apiService:UserApiService,
              private catService:UserPageService) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      name : new FormControl(null,Validators.required),
      description:new FormControl(null,Validators.required)
    });

    this.searchFormGroup = new FormGroup({
      search:new FormControl(null),
      show:new FormControl(0)
    });

    this.searchFormGroup.valueChanges
    .pipe(debounceTime(1000))
    .subscribe(
      value=>{
        this.catService.event.emit(value['search']);
      })
  }

  openModal(template:TemplateRef<any>){
    this.modalRef = this.BmsModalService.show(template,{class:'modal-lg'});
  }

  closeModal(){
    this.modalRef.hide();
  }

  reset(){
    this.searchFormGroup.reset();
    this.searchFormGroup.get('show').setValue(0);
  }

  onSubmit(){
    if(this.formGroup.valid && sessionStorage.getItem('userId')){
      let category = new CategoryAddViewModel();
      category.title = this.formGroup.get('name').value;
      category.description = this.formGroup.get('description').value;
      category.addedBy = sessionStorage['userId'];
      category.addedOn = new Date();

      this.apiService.addCategory(category).subscribe(
        response=>{},
        (err:HttpErrorResponse)=>{console.log(err);},
        ()=>{this.formGroup.reset();this.closeModal();window.alert('posted');}
      );
    }
  }
}
