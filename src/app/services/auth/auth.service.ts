import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HTTP, IOptionsRequest } from "src/app/services/api/http";
import { IUser, IUserRefreshToken } from "src/app/store/auth/auth.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService extends HTTP {

  constructor(protected http: HttpClient) {
    super(http);
  }

  signUp(user: IUser, options?: IOptionsRequest) {
    const body = {
      username: user.username,
      password: user.password,
      user: 1
    };
    return this.post('authorize/register', body, options);
  }

  signIn(user: IUser, options?: IOptionsRequest) {
    const body = {
      username: user.username,
      password: user.password
    };
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
  }

  signOut() {
    return this.post('authorize/logout');
  }

  refreshToken(body: IUserRefreshToken, options?: IOptionsRequest): Observable<any> {
    return this.post('authorize/refreshToken', body, options);
  }

}
