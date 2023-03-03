import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../data/tennis-tournament/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private _baseUrl = "/api/Students";

  public getAllStudents$():Observable<Student[]>{
    return this._http.get<Student[]>(this._baseUrl);
  }

  public getDetails$(student:Student):Observable<Student>{
    let url = this._baseUrl + `/${student.id}`;
    return this._http.get<Student>(url);
  }

  public updateStudent$(student:Student):Observable<any>{
    let url = this._baseUrl + `/${student.id}`;
    return this._http.put<any>(url, student);
  }

  public addStudent$(student:Student):Observable<Student>{
    return this._http.post<Student>(this._baseUrl, student);
  }

  public deleteStudent$(student:Student):Observable<any>{
    let url = this._baseUrl + `/${student.id}`;
    return this._http.delete<any>(url);
  }

  constructor(private _http:HttpClient) { }
}
