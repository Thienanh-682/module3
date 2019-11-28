import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IStudent} from '../IStudent';
import {HttpResult} from '../core/http-result';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  Url = 'http://localhost:8000/api/student';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<HttpResult> {
    return this.http.get<HttpResult>(this.Url);
  }

  add(student: IStudent): Observable<HttpResult> {
    return this.http.post<HttpResult>(this.Url + '/create', student);
  }

  findById(id: number): Observable<IStudent> {
    return this.http.get<IStudent>(this.Url + '/' + id);
  }

  edit(student: IStudent, id: number): Observable<HttpResult> {
    return this.http.put<HttpResult>(this.Url + '/' + id + '/edit', student);
  }

  delete(id: number): Observable<HttpResult> {
    return  this.http.get<HttpResult>(this.Url + '/' + id + '/delete');
  }
}
