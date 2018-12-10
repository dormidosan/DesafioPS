import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public post(user) {
    return this.http.post<any>(environment.URL_LOGIN, user)
    .pipe(map(data => {
      sessionStorage.setItem('user',JSON.stringify(data));
      return data;
    }));
  }
}