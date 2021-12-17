import { Component, OnInit } from '@angular/core';
import { ManageContactService } from '../../services/manage-contact.service';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css']
})
export class ListContactComponent implements OnInit {

  private columns : any[];

  constructor(private manageContactService:ManageContactService) { }

  ngOnInit() {

    this.columns = [
      { field: 'firstName', header: 'First Name' },
      { field: 'lastName', header: 'Last Name' },
      { field: 'email', header: 'Email' },
      { field: 'phoneNumber', header: 'Phone Number' },
      { field: 'status', header: 'Status' },
      { field: 'edit', header: 'Edit' },
  ];

    this.manageContactService.listContacts().subscribe(response=>{
      console.log(response);
    },error=>{})
  }

}
