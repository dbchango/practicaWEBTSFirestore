import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PersonMainComponent } from './person-main/person-main.component';
import { PersonFormComponent } from './person-main/person-form/person-form.component';
import { PersonListComponent } from './person-main/person-list/person-list.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonMainComponent,
    PersonFormComponent,
    PersonListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
