/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { User } from '../models/user';
@Injectable({
  providedIn: 'root',
})
class UsersService extends __BaseService {
  static readonly UsersGetUsersPath = '/api/Users';
  static readonly UsersPostUserPath = '/api/Users';
  static readonly UsersGetUserPath = '/api/Users/{id}';
  static readonly UsersPutUserPath = '/api/Users/{id}';
  static readonly UsersDeleteUserPath = '/api/Users/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }
  UsersGetUsersResponse(): __Observable<__StrictHttpResponse<Array<User>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Users`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<User>>;
      })
    );
  }  UsersGetUsers(): __Observable<Array<User>> {
    return this.UsersGetUsersResponse().pipe(
      __map(_r => _r.body as Array<User>)
    );
  }

  /**
   * @param user undefined
   */
  UsersPostUserResponse(user: User): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = user;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Users`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<User>;
      })
    );
  }
  /**
   * @param user undefined
   */
  UsersPostUser(user: User): __Observable<User> {
    return this.UsersPostUserResponse(user).pipe(
      __map(_r => _r.body as User)
    );
  }

  /**
   * @param id undefined
   */
  UsersGetUserResponse(id: string): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Users/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<User>;
      })
    );
  }
  /**
   * @param id undefined
   */
  UsersGetUser(id: string): __Observable<User> {
    return this.UsersGetUserResponse(id).pipe(
      __map(_r => _r.body as User)
    );
  }

  /**
   * @param params The `UsersService.UsersPutUserParams` containing the following parameters:
   *
   * - `user`:
   *
   * - `id`:
   */
  UsersPutUserResponse(params: UsersService.UsersPutUserParams): __Observable<__StrictHttpResponse<Blob>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.user;

    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/Users/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'blob'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Blob>;
      })
    );
  }
  /**
   * @param params The `UsersService.UsersPutUserParams` containing the following parameters:
   *
   * - `user`:
   *
   * - `id`:
   */
  UsersPutUser(params: UsersService.UsersPutUserParams): __Observable<Blob> {
    return this.UsersPutUserResponse(params).pipe(
      __map(_r => _r.body as Blob)
    );
  }

  /**
   * @param id undefined
   */
  UsersDeleteUserResponse(id: string): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/Users/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<User>;
      })
    );
  }
  /**
   * @param id undefined
   */
  UsersDeleteUser(id: string): __Observable<User> {
    return this.UsersDeleteUserResponse(id).pipe(
      __map(_r => _r.body as User)
    );
  }
}

module UsersService {

  /**
   * Parameters for UsersPutUser
   */
  export interface UsersPutUserParams {
    user: User;
    id: string;
  }
}

export { UsersService }
