import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ManageContactService {

private contactLists =  [
    { 
    "firstName": "John",
    "lastName": "Mayors",
    "email": "John@gmail.com",
    "phoneNumber": "1234567890",
    "status": "Active"
    },
    { 
      "firstName": "Frank",
      "lastName": "Sinatra",
      "email": "frank@gmail.com",
      "phoneNumber": "2345678910",
      "status": "Inactive"
    },
    { 
        "firstName": "Bon",
        "lastName": "Jovi",
        "email": "bon@gmail.com",
        "phoneNumber": "3456789012",
        "status": "Active"
        },
];

  constructor(private http:HttpClient) { }

  public addContact(newContact:any):Observable<any>{

    return new Observable<any>(observer => {
      this.contactLists.push(newContact);
      if(this.contactLists.includes(newContact))
      observer.next("Contact Added Successfully");
      else{
        observer.next("Error occurred while adding contact. Please try again");
      }
    });

    //return this.http.post('www.github.com',newContact);
    
  }

  public listContacts():Observable<any>{
   // this.http.get('www.github.com');
    return new Observable<any>(observer => {
      observer.next(this.contactLists);
    });
  }

  public editContact(contact:any):Observable<any>{
    return this.http.post('www.github.com',contact);
  }

  public toggleContactStatus(contact:any):Observable<any>{
    //return this.http.post('www.github.com',contact);

    return new Observable<any>(observer => {
    
      if(this.contactLists.find(contact)){
      observer.next("Contact Added Successfully");
      }
      else{
        observer.next("Error occurred while adding contact. Please try again");
      }
    });
  }

}
