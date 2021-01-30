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
  formGroup:FormGroup;

  modalRef:BsModalRef;
  constructor(private BmsModalService:BsModalService,
              private oidc:OidcSecurityService,
              private apiService:UserApiService) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      name : new FormControl(null,Validators.required),
      description:new FormControl(null,Validators.required)
    });
  }

  openModal(template:TemplateRef<any>){
    this.modalRef = this.BmsModalService.show(template,{class:'modal-lg'});
  }

  closeModal(){
    this.modalRef.hide();
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
