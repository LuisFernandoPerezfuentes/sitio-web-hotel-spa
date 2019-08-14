import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Timework } from '../models/timework';
import { Tipohabitacion } from '../models/tipohabitacion.model';

@Injectable({
  providedIn: 'root'
})
export class TimeworkService {
  selectedTimework: Timework;
  timeworks: Timework[];  
  readonly URL_API = 'http://localhost:8080/api/timework';
  constructor(private http: HttpClient) {
    this.selectedTimework = new Timework();
  }
  postTimework(timework: Timework) {
    return this.http.post(this.URL_API, timework);
  }
  getTimeworks() {
    return this.http.get(this.URL_API);
  }
  putTimework(timework: Timework) {
    return this.http.put(this.URL_API + `/${timework._id}`, timework);
  }
  deleteTimework(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
