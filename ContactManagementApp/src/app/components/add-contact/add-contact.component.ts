import { Component, OnInit } from '@angular/core';
import { ManageContactService } from '../../services/manage-contact.service';
import { FormGroup , FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  private addContactForm : FormGroup;

  constructor(private manageContactService : ManageContactService) { }

  ngOnInit() {

    this.addContactForm = new FormGroup({
      firstName: new FormControl('',Validators.required),
      lastName: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.email,Validators.required]),
      phoneNumber: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
      status: new FormControl('Active'),
    });
    
  }

  private addContact(data:any){
    this.manageContactService.addContact(data.value).subscribe(response=>{
      console.log(response);
    }
      ,error=>{});
  }

}
