import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { pathToFileURL } from 'url';
import { Login, resLogin, User } from '../interfaces/intern';

@Injectable({
  providedIn: 'root'
})
export class HttpServerService {

  baseUrl = "http://localhost:8080/";
  token: string = null
  constructor(private http: HttpClient) {
    this.token = localStorage.getItem("token")
  }

  chackIsUse(userName: string): Observable<any> {
    return this.http.post(`${this.baseUrl}auth/chacking`, { userName: userName });
  }

  createIntern(intern: any): Observable<resLogin> {
    console.log(intern);
    return this.http.post<any>(`${this.baseUrl}auth/register`,intern)
    .pipe(tap( res => this.saveToken(res)));
  }

  login(login: Login): Observable<resLogin> {
    return this.http.post<resLogin> (`${this.baseUrl}auth/login`, login)
    .pipe(tap( res => this.saveToken(res))
    );
  }

  saveToken(res:any):void{
    localStorage.setItem("token", res.token)
  }

  postWithToken<T>(path:string,body:any,headers?:{}):Observable<T>{
    return this.http.post<T>(`${this.baseUrl}api/${path}`,body,this.addHeaders(headers))
  }

  getWithToken<T>(path: string, headers? ):Observable<T>{
    return this.http.get<T>(`${this.baseUrl}api/${path}`, this.addHeaders(headers))
  }

  addHeaders(headers:{}):object{
    headers =headers?headers:{};
    headers['x-access-token'] = this.token||"jk";
    headers['content-type'] = "application/json";  
    return{
      headers: new HttpHeaders(headers)
      };
  }


}
