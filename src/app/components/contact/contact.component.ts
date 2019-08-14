import { Component, OnInit } from '@angular/core';

import { ContactService } from '../../services/contact.service';
import { NgForm } from '@angular/forms';
import { Contact } from '../../models/contact';

declare var M: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ ContactService ]
})
export class ContactComponent implements OnInit {

  constructor(private contactService: ContactService) { }

  
  ngOnInit() {
    this.getContacts();
  }

  addContact(form?: NgForm) {
    console.log(form.value);
    if(form.value._id) {
      this.contactService.putContact(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getContacts();
          M.toast({html: 'Updated Successfully'});
        });
    } else {
      this.contactService.postContact(form.value)
      .subscribe(res => {
        this.getContacts();
        this.resetForm(form);
        M.toast({html: 'Save successfully'});
      });
    }
    
  }

  getContacts() {
    this.contactService.getContacts()
      .subscribe(res => {
        this.contactService.contacts = res as Contact[];
      });
  }

  editContact(contact: Contact) {
    this.contactService.selectedContact = contact;
  }

  deleteContact(_id: string, form: NgForm) {
    if(confirm('Are you sure you want to delete it?')) {
      this.contactService.deleteContact(_id)
        .subscribe(res => {
          this.getContacts();
          this.resetForm(form);
          M.toast({html: 'Deleted Succesfully'});
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.contactService.selectedContact = new Contact();
    }
  }
}
