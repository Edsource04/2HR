import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from './../../models/user';
import { Profile } from './../models/profile';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class UserService{
    baseUrl = 'http://localhost:3000/api/';

    constructor(private http: Http){}
    getActualUser(): User{
        var actualUser = JSON.parse(localStorage.getItem('actualUser'));
        return actualUser.user as User;
    }
    getProfile(_id: String): Observable<Profile>{
        var headers = new Headers();
        var actualUser = JSON.parse(localStorage.getItem('actualUser'));
        headers.append('Authorization', 'Bearer ' + actualUser.token);
        headers.append('content-type', 'application/json');
        return this.http.get(this.baseUrl + '/user/profile/' + _id, {headers: headers})
                   .map(profile => profile.json() as Profile)
                   .catch(this.errorHandle);
    }
    loadPicture(formdata: any){
        var headers = new Headers();
        var actualUser = JSON.parse(localStorage.getItem('actualUser'));
        headers.append('Authorization', 'Bearer ' + actualUser.token);
        return this.http.post(this.baseUrl+'loadPicture', formdata, {headers: headers})
                   .map(data => data.json())
                   .catch(this.errorHandle);
    }

    private errorHandle(error: Response){
        console.error('Un Error Ocurrio' + error);
        return Observable.throw(error || 'Algun Error ocurrio en el servidor. verifica el servidor');
    }
}