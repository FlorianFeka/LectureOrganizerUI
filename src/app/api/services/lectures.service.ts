/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Lecture } from '../models/lecture';
@Injectable({
  providedIn: 'root',
})
class LecturesService extends __BaseService {
  static readonly LecturesGetLecturesPath = '/api/Lectures';
  static readonly LecturesPostLecturePath = '/api/Lectures';
  static readonly LecturesGetLecturePath = '/api/Lectures/{id}';
  static readonly LecturesPutLecturePath = '/api/Lectures/{id}';
  static readonly LecturesDeleteLecturePath = '/api/Lectures/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }
  LecturesGetLecturesResponse(): __Observable<__StrictHttpResponse<Array<Lecture>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Lectures`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Lecture>>;
      })
    );
  }  LecturesGetLectures(): __Observable<Array<Lecture>> {
    return this.LecturesGetLecturesResponse().pipe(
      __map(_r => _r.body as Array<Lecture>)
    );
  }

  /**
   * @param lecture undefined
   */
  LecturesPostLectureResponse(lecture: Lecture): __Observable<__StrictHttpResponse<Lecture>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = lecture;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Lectures`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Lecture>;
      })
    );
  }
  /**
   * @param lecture undefined
   */
  LecturesPostLecture(lecture: Lecture): __Observable<Lecture> {
    return this.LecturesPostLectureResponse(lecture).pipe(
      __map(_r => _r.body as Lecture)
    );
  }

  /**
   * @param id undefined
   */
  LecturesGetLectureResponse(id: string): __Observable<__StrictHttpResponse<Lecture>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Lectures/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Lecture>;
      })
    );
  }
  /**
   * @param id undefined
   */
  LecturesGetLecture(id: string): __Observable<Lecture> {
    return this.LecturesGetLectureResponse(id).pipe(
      __map(_r => _r.body as Lecture)
    );
  }

  /**
   * @param params The `LecturesService.LecturesPutLectureParams` containing the following parameters:
   *
   * - `lecture`:
   *
   * - `id`:
   */
  LecturesPutLectureResponse(params: LecturesService.LecturesPutLectureParams): __Observable<__StrictHttpResponse<Blob>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.lecture;

    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/Lectures/${encodeURIComponent(params.id)}`,
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
   * @param params The `LecturesService.LecturesPutLectureParams` containing the following parameters:
   *
   * - `lecture`:
   *
   * - `id`:
   */
  LecturesPutLecture(params: LecturesService.LecturesPutLectureParams): __Observable<Blob> {
    return this.LecturesPutLectureResponse(params).pipe(
      __map(_r => _r.body as Blob)
    );
  }

  /**
   * @param id undefined
   */
  LecturesDeleteLectureResponse(id: string): __Observable<__StrictHttpResponse<Lecture>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/Lectures/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Lecture>;
      })
    );
  }
  /**
   * @param id undefined
   */
  LecturesDeleteLecture(id: string): __Observable<Lecture> {
    return this.LecturesDeleteLectureResponse(id).pipe(
      __map(_r => _r.body as Lecture)
    );
  }
}

module LecturesService {

  /**
   * Parameters for LecturesPutLecture
   */
  export interface LecturesPutLectureParams {
    lecture: Lecture;
    id: string;
  }
}

export { LecturesService }
