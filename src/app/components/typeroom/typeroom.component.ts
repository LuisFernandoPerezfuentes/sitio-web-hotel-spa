import { Component, OnInit } from '@angular/core';

import { TyperoomService } from '../../services/typeroom.service';
import { NgForm } from '@angular/forms';
import { Typeroom } from '../../models/typeroom';

declare var M: any;

@Component({
  selector: 'app-typeroom',
  templateUrl: './typeroom.component.html',
  styleUrls: ['./typeroom.component.css']
})
export class TyperoomComponent implements OnInit {

  constructor(private typeroomService: TyperoomService) { }

  ngOnInit() {
    this.getTyperooms();
  }

  addTyperoom(form?: NgForm) {
    console.log(form.value);
    if(form.value._id) {
      this.typeroomService.putTyperoom(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getTyperooms();
          M.toast({html: 'Updated Successfully'});
        });
    } else {
      this.typeroomService.postTyperoom(form.value)
      .subscribe(res => {
        this.getTyperooms();
        this.resetForm(form);
        M.toast({html: 'Save successfully'});
      });
    }
    
  }

  getTyperooms() {
    this.typeroomService.getTyperooms()
      .subscribe(res => {
        this.typeroomService.typeroom = res as Typeroom[];
      });
  }

  editTyperoom(typeroom: Typeroom) {
    this.typeroomService.selectedTyperoom = typeroom;
  }

  deleteTyperoom(_id: string, form: NgForm) {
    if(confirm('Are you sure you want to delete it?')) {
      this.typeroomService.deleteTyperoom(_id)
        .subscribe(res => {
          this.getTyperooms();
          this.resetForm(form);
          M.toast({html: 'Deleted Succesfully'});
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.typeroomService.selectedTyperoom = new Typeroom();
    }
  }
}
