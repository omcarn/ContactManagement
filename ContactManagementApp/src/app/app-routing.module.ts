import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { AddContactComponent } from './components/add-contact/add-contact.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';
import { ListContactComponent } from './components/list-contact/list-contact.component';

const routes: Routes = [

    {path:'addComponent' , component:AddContactComponent,},
    {path:'editComponent' , component:EditContactComponent,},
    {path:'listComponent' , component:ListContactComponent,},

]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }