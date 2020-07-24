import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders}  from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  baseurl = environment.baseUrl;
  constructor(private http:HttpClient) { }
  getEmpDetails(page):Observable<any>{
    let url=`${this.baseurl}`
    return this.http.get(url)
  }
  addEmpDetails(name,job):Observable<any>{
    let url=`${this.baseurl}`
    let body={
      name:name,
      job:job
    }
    return this.http.post(url,body)
  }
    deleteEmpDetails(_id):Observable<any>{
    let url=`${this.baseurl}${_id}`
    return this.http.get(url)
  }
}