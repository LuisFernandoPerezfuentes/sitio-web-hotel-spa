import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Typeroom } from '../models/typeroom';

@Injectable({
  providedIn: 'root'
})
export class TyperoomService {
  selectedTyperoom: Typeroom;
  typeroom: Typeroom[];  
  readonly URL_API = 'http://localhost:8080/api/typeroom';
  constructor(private http: HttpClient) {
    this.selectedTyperoom = new Typeroom();
  }
  postTyperoom(typeroom: Typeroom) {
    return this.http.post(this.URL_API, typeroom);
  }
  getTyperooms() {
    return this.http.get(this.URL_API);
  }
  putTyperoom(typeroom: Typeroom) {
    return this.http.put(this.URL_API + `/${typeroom._id}`, typeroom);
  }
  deleteTyperoom(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
