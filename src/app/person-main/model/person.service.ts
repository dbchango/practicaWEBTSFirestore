import { Injectable } from '@angular/core';
import {Http, RequestOptions, RequestMethod} from '@angular/http';
import { Person } from '../model/person';
  
@Injectable({
  providedIn: 'root'
})
  export class PersonService {
    PersonActive : Person;
    PersonList : Person[];
    url : string = "https://nrc-7828-4ad7b.web.app/api/persons";

  constructor(private http : Http) { }
  CreatePerson(person : Person){
    var body = JSON.stringify(person);
    var headers = new Headers({'Content-Type' : 'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post});
    return this.http.post(this.url, body, requestOptions);
  }
}

