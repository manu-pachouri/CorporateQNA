import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Icons } from 'src/app/shared/font-awesome-icons';

@Component({
  selector: 'app-category-navigation',
  templateUrl: './category-navigation.component.html',
  styles: [
  ]
})
export class CategoryNavigationComponent implements OnInit {
  Icons = new Icons();

  modalRef:BsModalRef;
  constructor(private BmsModalService:BsModalService) { }

  ngOnInit(): void {
  }

  openModal(template:TemplateRef<any>){
    this.modalRef = this.BmsModalService.show(template,{class:'modal-lg'});
  }

  closeModal(){
    this.modalRef.hide();
  }
}
