import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';
import { ListContactComponent } from './components/list-contact/list-contact.component';
import { AppRoutingModule } from './app-routing.module';
import { DeleteContactComponent } from './components/delete-contact/delete-contact.component';
import { ManageContactService } from './services/manage-contact.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AddContactComponent,
    EditContactComponent,
    ListContactComponent,
    DeleteContactComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    // CoreModule.forRoot({theme: 'default'})
  ],
  providers: [ManageContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
