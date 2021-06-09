import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseServiceService<E> {

  constructor(private http: HttpClient) { }

//cabeceras: HttpHeaders =  new HttpHeaders({'Content-Type': 'application/json'})

  protected baseUrl : string | undefined

  getAll(page: number, size: number): Observable<E[]> {
    return this.http.get<E[]>(this.baseUrl+`?page=${page}&size=${size}`);
  }

  getOne(id: string): Observable<E> {
    return this.http.get<E>(this.baseUrl + '/' + id);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + '/' + id);
  }

  post(entity: E): Observable<E> {
    return this.http.post<E>(this.baseUrl+'/', entity);

    // return this.http.post<E>(this.baseUrl+'/', entity, {headers:this.cabeceras});
  }

  put(id: string, entity: E) {
    return this.http.put<E>(this.baseUrl + '/' + id, entity);
  }
}