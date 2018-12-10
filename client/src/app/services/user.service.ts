import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private httpClient: HttpClient) { }

    public get() {
        return this.httpClient.get<any>(environment.URL_USER)
            .pipe(map(data => {
                return data;
            }));
    }

    public getFromId(id) {
        return this.httpClient.get(environment.URL_USER.concat(`/${id}`))
            .pipe(map(data => {
                return data;
            }));
    }

    public delete(id) {
        return this.httpClient.delete(environment.URL_USER.concat(`/${id}`))
            .pipe(map(data => {
                return data;
            }));
    }

    public patch(id, user) {
        return this.httpClient.patch(environment.URL_USER.concat(`/${id}`), user)
            .pipe(map(data => {
                return data;
            }));
    }

    public post(user) {
        return this.httpClient.post(environment.URL_USER, user)
            .pipe(map(data => {
                return data;
            }));
    }
}
