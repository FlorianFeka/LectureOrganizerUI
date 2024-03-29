/*
 * Copyright(c) 1995 - 2018 T-Systems Multimedia Solutions GmbH
 * Riesaer Str. 5, 01129 Dresden
 * All rights reserved.
 *
 * My Title
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the openapi-typescript-angular-generator.
 * https://github.com/T-Systems-MMS/openapi-typescript-angular-generator
 * Do not edit the class manually.
 */

/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { ValidatorFn, Validators } from '@angular/forms';

import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable, Subject, Subscription }                 from 'rxjs';
import { catchError, takeUntil, tap, share }                 from 'rxjs/operators';

import { Lecture } from '../model/lecture';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';

/**
 * Namespace for lecturesDeleteLecture.
 */
export namespace LecturesDeleteLecture {
    /**
     * Parameter map for lecturesDeleteLecture.
     */
    export interface PartialParamMap {
      id: string;
    }

    /**
     * Enumeration of all parameters for lecturesDeleteLecture.
     */
    export enum Parameters {
      id = 'id'
    }

    /**
     * A map of tuples with error name and `ValidatorFn` for each parameter of lecturesDeleteLecture
     * that does not have an own model.
     */
    export const ParamValidators: {[K in keyof LecturesDeleteLecture.PartialParamMap]?: [string, ValidatorFn][]} = {
      id: [
              ['required', Validators.required],
      ],
    };
}

/**
 * Namespace for lecturesGetLecture.
 */
export namespace LecturesGetLecture {
    /**
     * Parameter map for lecturesGetLecture.
     */
    export interface PartialParamMap {
      id: string;
    }

    /**
     * Enumeration of all parameters for lecturesGetLecture.
     */
    export enum Parameters {
      id = 'id'
    }

    /**
     * A map of tuples with error name and `ValidatorFn` for each parameter of lecturesGetLecture
     * that does not have an own model.
     */
    export const ParamValidators: {[K in keyof LecturesGetLecture.PartialParamMap]?: [string, ValidatorFn][]} = {
      id: [
              ['required', Validators.required],
      ],
    };
}

/**
 * Namespace for lecturesGetLectures.
 */
export namespace LecturesGetLectures {
    /**
     * Parameter map for lecturesGetLectures.
     */
    export interface PartialParamMap {
    }

    /**
     * Enumeration of all parameters for lecturesGetLectures.
     */
    export enum Parameters {
    }

    /**
     * A map of tuples with error name and `ValidatorFn` for each parameter of lecturesGetLectures
     * that does not have an own model.
     */
    export const ParamValidators: {[K in keyof LecturesGetLectures.PartialParamMap]?: [string, ValidatorFn][]} = {
    };
}

/**
 * Namespace for lecturesPostLecture.
 */
export namespace LecturesPostLecture {
    /**
     * Parameter map for lecturesPostLecture.
     */
    export interface PartialParamMap {
      Lecture: Lecture;
    }

    /**
     * Enumeration of all parameters for lecturesPostLecture.
     */
    export enum Parameters {
      Lecture = 'Lecture'
    }

    /**
     * A map of tuples with error name and `ValidatorFn` for each parameter of lecturesPostLecture
     * that does not have an own model.
     */
    export const ParamValidators: {[K in keyof LecturesPostLecture.PartialParamMap]?: [string, ValidatorFn][]} = {
    };
}

/**
 * Namespace for lecturesPutLecture.
 */
export namespace LecturesPutLecture {
    /**
     * Parameter map for lecturesPutLecture.
     */
    export interface PartialParamMap {
      id: string;
      Lecture: Lecture;
    }

    /**
     * Enumeration of all parameters for lecturesPutLecture.
     */
    export enum Parameters {
      id = 'id',
      Lecture = 'Lecture'
    }

    /**
     * A map of tuples with error name and `ValidatorFn` for each parameter of lecturesPutLecture
     * that does not have an own model.
     */
    export const ParamValidators: {[K in keyof LecturesPutLecture.PartialParamMap]?: [string, ValidatorFn][]} = {
      id: [
              ['required', Validators.required],
      ],
    };
}



@Injectable({
  providedIn: 'root'
})
export class LecturesService {

    protected basePath = 'http://localhost:5000';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    private cancelMap: {[key: string]: Subject<any>} = {};

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {

        if (configuration) {
            this.configuration = configuration;
            this.configuration.basePath = configuration.basePath || basePath || this.basePath;

        } else {
            this.configuration.basePath = basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }



  /**
   *  by map.
   * 
   * @param map parameters map to set partial amount of parameters easily
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   * @param cancelPreviousRequest set whether or not the previous request for the same operation should be cancelled if it is still running.
   */
  public lecturesDeleteLectureByMap(
    map: LecturesDeleteLecture.PartialParamMap,
    observe?: 'body',
    reportProgress?: boolean,
    cancelPreviousRequest?: boolean): Observable<Lecture>;
  public lecturesDeleteLectureByMap(
    map: LecturesDeleteLecture.PartialParamMap,
    observe?: 'response',
    reportProgress?: boolean,
    cancelPreviousRequest?: boolean): Observable<HttpResponse<Lecture>>;
  public lecturesDeleteLectureByMap(
    map: LecturesDeleteLecture.PartialParamMap,
    observe?: 'events',
    reportProgress?: boolean,
    cancelPreviousRequest?: boolean): Observable<HttpEvent<Lecture>>;
  public lecturesDeleteLectureByMap(
    map: LecturesDeleteLecture.PartialParamMap,
    observe: any = 'body',
    reportProgress: boolean = false,
    cancelPreviousRequest: boolean = true): Observable<any> {
    return this.lecturesDeleteLecture(
      map.id,
      observe,
      reportProgress,
      cancelPreviousRequest
    );
  }


    /**
     * 
     * 
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     * @param cancelPreviousRequest set whether or not the previous request for the same operation should be cancelled if it is still running.
     */
    public lecturesDeleteLecture(id: string, observe?: 'body', reportProgress?: boolean, cancelPreviousRequest?: boolean): Observable<Lecture>;
    public lecturesDeleteLecture(id: string, observe?: 'response', reportProgress?: boolean, cancelPreviousRequest?: boolean): Observable<HttpResponse<Lecture>>;
    public lecturesDeleteLecture(id: string, observe?: 'events', reportProgress?: boolean, cancelPreviousRequest?: boolean): Observable<HttpEvent<Lecture>>;
    public lecturesDeleteLecture(id: string, observe: any = 'body', reportProgress: boolean = false, cancelPreviousRequest: boolean = true): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling lecturesDeleteLecture.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        let handle = this.httpClient.delete<Lecture>(`${this.configuration.basePath}/api/Lectures/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );

        if (cancelPreviousRequest) {
            if (this.cancelMap['Lectures_DeleteLecture']) {
                this.cancelMap['Lectures_DeleteLecture'].next();
            }
            this.cancelMap['Lectures_DeleteLecture'] = 'delete'.toUpperCase() === 'GET' ? new Subject<any>() : null;
            if(this.cancelMap['Lectures_DeleteLecture']) {
                handle = handle.pipe(takeUntil(this.cancelMap['Lectures_DeleteLecture']));
            }
        }

        if (typeof this.configuration.beforeHandler === 'function') {
          this.configuration.beforeHandler('Lectures_DeleteLecture', 'delete'.toUpperCase());
        }
        let afterSubscription: Subscription;
        const afterHandler = (result: any = null) => {
          if (afterSubscription) {
            afterSubscription.unsubscribe();
          }
          // stop cancellation to prevent calling afterHandler on next service call
          if (cancelPreviousRequest && this.cancelMap['Lectures_DeleteLecture']) {
            this.cancelMap['Lectures_DeleteLecture'].complete();
            delete this.cancelMap['Lectures_DeleteLecture'];
          }
          if (typeof this.configuration.afterHandler === 'function') {
            this.configuration.afterHandler(
              'Lectures_DeleteLecture',
              'delete'.toUpperCase(),
              result ? result : new Error('CANCELLED')
            );
          }
        };
        handle = handle.pipe(share());
        afterSubscription = handle.subscribe(
          result => afterHandler(result),
          err => afterHandler(err),
          () => afterHandler()
        );

        if (typeof this.configuration.errorHandler === 'function') {
          return handle.pipe(catchError(err => this.configuration.errorHandler(err, 'Lectures_DeleteLecture')));
        }
        return handle;
    }


  /**
   *  by map.
   * 
   * @param map parameters map to set partial amount of parameters easily
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   * @param cancelPreviousRequest set whether or not the previous request for the same operation should be cancelled if it is still running.
   */
  public lecturesGetLectureByMap(
    map: LecturesGetLecture.PartialParamMap,
    observe?: 'body',
    reportProgress?: boolean,
    cancelPreviousRequest?: boolean): Observable<Lecture>;
  public lecturesGetLectureByMap(
    map: LecturesGetLecture.PartialParamMap,
    observe?: 'response',
    reportProgress?: boolean,
    cancelPreviousRequest?: boolean): Observable<HttpResponse<Lecture>>;
  public lecturesGetLectureByMap(
    map: LecturesGetLecture.PartialParamMap,
    observe?: 'events',
    reportProgress?: boolean,
    cancelPreviousRequest?: boolean): Observable<HttpEvent<Lecture>>;
  public lecturesGetLectureByMap(
    map: LecturesGetLecture.PartialParamMap,
    observe: any = 'body',
    reportProgress: boolean = false,
    cancelPreviousRequest: boolean = true): Observable<any> {
    return this.lecturesGetLecture(
      map.id,
      observe,
      reportProgress,
      cancelPreviousRequest
    );
  }


    /**
     * 
     * 
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     * @param cancelPreviousRequest set whether or not the previous request for the same operation should be cancelled if it is still running.
     */
    public lecturesGetLecture(id: string, observe?: 'body', reportProgress?: boolean, cancelPreviousRequest?: boolean): Observable<Lecture>;
    public lecturesGetLecture(id: string, observe?: 'response', reportProgress?: boolean, cancelPreviousRequest?: boolean): Observable<HttpResponse<Lecture>>;
    public lecturesGetLecture(id: string, observe?: 'events', reportProgress?: boolean, cancelPreviousRequest?: boolean): Observable<HttpEvent<Lecture>>;
    public lecturesGetLecture(id: string, observe: any = 'body', reportProgress: boolean = false, cancelPreviousRequest: boolean = true): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling lecturesGetLecture.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        let handle = this.httpClient.get<Lecture>(`${this.configuration.basePath}/api/Lectures/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );

        if (cancelPreviousRequest) {
            if (this.cancelMap['Lectures_GetLecture']) {
                this.cancelMap['Lectures_GetLecture'].next();
            }
            this.cancelMap['Lectures_GetLecture'] = 'get'.toUpperCase() === 'GET' ? new Subject<any>() : null;
            if(this.cancelMap['Lectures_GetLecture']) {
                handle = handle.pipe(takeUntil(this.cancelMap['Lectures_GetLecture']));
            }
        }

        if (typeof this.configuration.beforeHandler === 'function') {
          this.configuration.beforeHandler('Lectures_GetLecture', 'get'.toUpperCase());
        }
        let afterSubscription: Subscription;
        const afterHandler = (result: any = null) => {
          if (afterSubscription) {
            afterSubscription.unsubscribe();
          }
          // stop cancellation to prevent calling afterHandler on next service call
          if (cancelPreviousRequest && this.cancelMap['Lectures_GetLecture']) {
            this.cancelMap['Lectures_GetLecture'].complete();
            delete this.cancelMap['Lectures_GetLecture'];
          }
          if (typeof this.configuration.afterHandler === 'function') {
            this.configuration.afterHandler(
              'Lectures_GetLecture',
              'get'.toUpperCase(),
              result ? result : new Error('CANCELLED')
            );
          }
        };
        handle = handle.pipe(share());
        afterSubscription = handle.subscribe(
          result => afterHandler(result),
          err => afterHandler(err),
          () => afterHandler()
        );

        if (typeof this.configuration.errorHandler === 'function') {
          return handle.pipe(catchError(err => this.configuration.errorHandler(err, 'Lectures_GetLecture')));
        }
        return handle;
    }


  /**
   *  by map.
   * 
   * @param map parameters map to set partial amount of parameters easily
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   * @param cancelPreviousRequest set whether or not the previous request for the same operation should be cancelled if it is still running.
   */
  public lecturesGetLecturesByMap(
    map: LecturesGetLectures.PartialParamMap,
    observe?: 'body',
    reportProgress?: boolean,
    cancelPreviousRequest?: boolean): Observable<Array<Lecture>>;
  public lecturesGetLecturesByMap(
    map: LecturesGetLectures.PartialParamMap,
    observe?: 'response',
    reportProgress?: boolean,
    cancelPreviousRequest?: boolean): Observable<HttpResponse<Array<Lecture>>>;
  public lecturesGetLecturesByMap(
    map: LecturesGetLectures.PartialParamMap,
    observe?: 'events',
    reportProgress?: boolean,
    cancelPreviousRequest?: boolean): Observable<HttpEvent<Array<Lecture>>>;
  public lecturesGetLecturesByMap(
    map: LecturesGetLectures.PartialParamMap,
    observe: any = 'body',
    reportProgress: boolean = false,
    cancelPreviousRequest: boolean = true): Observable<any> {
    return this.lecturesGetLectures(
      observe,
      reportProgress,
      cancelPreviousRequest
    );
  }


    /**
     * 
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     * @param cancelPreviousRequest set whether or not the previous request for the same operation should be cancelled if it is still running.
     */
    public lecturesGetLectures(observe?: 'body', reportProgress?: boolean, cancelPreviousRequest?: boolean): Observable<Array<Lecture>>;
    public lecturesGetLectures(observe?: 'response', reportProgress?: boolean, cancelPreviousRequest?: boolean): Observable<HttpResponse<Array<Lecture>>>;
    public lecturesGetLectures(observe?: 'events', reportProgress?: boolean, cancelPreviousRequest?: boolean): Observable<HttpEvent<Array<Lecture>>>;
    public lecturesGetLectures(observe: any = 'body', reportProgress: boolean = false, cancelPreviousRequest: boolean = true): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        let handle = this.httpClient.get<Array<Lecture>>(`${this.configuration.basePath}/api/Lectures`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );

        if (cancelPreviousRequest) {
            if (this.cancelMap['Lectures_GetLectures']) {
                this.cancelMap['Lectures_GetLectures'].next();
            }
            this.cancelMap['Lectures_GetLectures'] = 'get'.toUpperCase() === 'GET' ? new Subject<any>() : null;
            if(this.cancelMap['Lectures_GetLectures']) {
                handle = handle.pipe(takeUntil(this.cancelMap['Lectures_GetLectures']));
            }
        }

        if (typeof this.configuration.beforeHandler === 'function') {
          this.configuration.beforeHandler('Lectures_GetLectures', 'get'.toUpperCase());
        }
        let afterSubscription: Subscription;
        const afterHandler = (result: any = null) => {
          if (afterSubscription) {
            afterSubscription.unsubscribe();
          }
          // stop cancellation to prevent calling afterHandler on next service call
          if (cancelPreviousRequest && this.cancelMap['Lectures_GetLectures']) {
            this.cancelMap['Lectures_GetLectures'].complete();
            delete this.cancelMap['Lectures_GetLectures'];
          }
          if (typeof this.configuration.afterHandler === 'function') {
            this.configuration.afterHandler(
              'Lectures_GetLectures',
              'get'.toUpperCase(),
              result ? result : new Error('CANCELLED')
            );
          }
        };
        handle = handle.pipe(share());
        afterSubscription = handle.subscribe(
          result => afterHandler(result),
          err => afterHandler(err),
          () => afterHandler()
        );

        if (typeof this.configuration.errorHandler === 'function') {
          return handle.pipe(catchError(err => this.configuration.errorHandler(err, 'Lectures_GetLectures')));
        }
        return handle;
    }


  /**
   *  by map.
   * 
   * @param map parameters map to set partial amount of parameters easily
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   * @param cancelPreviousRequest set whether or not the previous request for the same operation should be cancelled if it is still running.
   */
  public lecturesPostLectureByMap(
    map: LecturesPostLecture.PartialParamMap,
    observe?: 'body',
    reportProgress?: boolean,
    cancelPreviousRequest?: boolean): Observable<Lecture>;
  public lecturesPostLectureByMap(
    map: LecturesPostLecture.PartialParamMap,
    observe?: 'response',
    reportProgress?: boolean,
    cancelPreviousRequest?: boolean): Observable<HttpResponse<Lecture>>;
  public lecturesPostLectureByMap(
    map: LecturesPostLecture.PartialParamMap,
    observe?: 'events',
    reportProgress?: boolean,
    cancelPreviousRequest?: boolean): Observable<HttpEvent<Lecture>>;
  public lecturesPostLectureByMap(
    map: LecturesPostLecture.PartialParamMap,
    observe: any = 'body',
    reportProgress: boolean = false,
    cancelPreviousRequest: boolean = true): Observable<any> {
    return this.lecturesPostLecture(
      map.Lecture,
      observe,
      reportProgress,
      cancelPreviousRequest
    );
  }


    /**
     * 
     * 
     * @param Lecture 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     * @param cancelPreviousRequest set whether or not the previous request for the same operation should be cancelled if it is still running.
     */
    public lecturesPostLecture(Lecture: Lecture, observe?: 'body', reportProgress?: boolean, cancelPreviousRequest?: boolean): Observable<Lecture>;
    public lecturesPostLecture(Lecture: Lecture, observe?: 'response', reportProgress?: boolean, cancelPreviousRequest?: boolean): Observable<HttpResponse<Lecture>>;
    public lecturesPostLecture(Lecture: Lecture, observe?: 'events', reportProgress?: boolean, cancelPreviousRequest?: boolean): Observable<HttpEvent<Lecture>>;
    public lecturesPostLecture(Lecture: Lecture, observe: any = 'body', reportProgress: boolean = false, cancelPreviousRequest: boolean = true): Observable<any> {
        if (Lecture === null || Lecture === undefined) {
            throw new Error('Required parameter Lecture was null or undefined when calling lecturesPostLecture.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        let handle = this.httpClient.post<Lecture>(`${this.configuration.basePath}/api/Lectures`,
            Lecture,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );

        if (cancelPreviousRequest) {
            if (this.cancelMap['Lectures_PostLecture']) {
                this.cancelMap['Lectures_PostLecture'].next();
            }
            this.cancelMap['Lectures_PostLecture'] = 'post'.toUpperCase() === 'GET' ? new Subject<any>() : null;
            if(this.cancelMap['Lectures_PostLecture']) {
                handle = handle.pipe(takeUntil(this.cancelMap['Lectures_PostLecture']));
            }
        }

        if (typeof this.configuration.beforeHandler === 'function') {
          this.configuration.beforeHandler('Lectures_PostLecture', 'post'.toUpperCase());
        }
        let afterSubscription: Subscription;
        const afterHandler = (result: any = null) => {
          if (afterSubscription) {
            afterSubscription.unsubscribe();
          }
          // stop cancellation to prevent calling afterHandler on next service call
          if (cancelPreviousRequest && this.cancelMap['Lectures_PostLecture']) {
            this.cancelMap['Lectures_PostLecture'].complete();
            delete this.cancelMap['Lectures_PostLecture'];
          }
          if (typeof this.configuration.afterHandler === 'function') {
            this.configuration.afterHandler(
              'Lectures_PostLecture',
              'post'.toUpperCase(),
              result ? result : new Error('CANCELLED')
            );
          }
        };
        handle = handle.pipe(share());
        afterSubscription = handle.subscribe(
          result => afterHandler(result),
          err => afterHandler(err),
          () => afterHandler()
        );

        if (typeof this.configuration.errorHandler === 'function') {
          return handle.pipe(catchError(err => this.configuration.errorHandler(err, 'Lectures_PostLecture')));
        }
        return handle;
    }


  /**
   *  by map.
   * 
   * @param map parameters map to set partial amount of parameters easily
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   * @param cancelPreviousRequest set whether or not the previous request for the same operation should be cancelled if it is still running.
   */
  public lecturesPutLectureByMap(
    map: LecturesPutLecture.PartialParamMap,
    observe?: 'body',
    reportProgress?: boolean,
    cancelPreviousRequest?: boolean): Observable<number>;
  public lecturesPutLectureByMap(
    map: LecturesPutLecture.PartialParamMap,
    observe?: 'response',
    reportProgress?: boolean,
    cancelPreviousRequest?: boolean): Observable<HttpResponse<number>>;
  public lecturesPutLectureByMap(
    map: LecturesPutLecture.PartialParamMap,
    observe?: 'events',
    reportProgress?: boolean,
    cancelPreviousRequest?: boolean): Observable<HttpEvent<number>>;
  public lecturesPutLectureByMap(
    map: LecturesPutLecture.PartialParamMap,
    observe: any = 'body',
    reportProgress: boolean = false,
    cancelPreviousRequest: boolean = true): Observable<any> {
    return this.lecturesPutLecture(
      map.id,
      map.Lecture,
      observe,
      reportProgress,
      cancelPreviousRequest
    );
  }


    /**
     * 
     * 
     * @param id 
     * @param Lecture 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     * @param cancelPreviousRequest set whether or not the previous request for the same operation should be cancelled if it is still running.
     */
    public lecturesPutLecture(id: string, Lecture: Lecture, observe?: 'body', reportProgress?: boolean, cancelPreviousRequest?: boolean): Observable<number>;
    public lecturesPutLecture(id: string, Lecture: Lecture, observe?: 'response', reportProgress?: boolean, cancelPreviousRequest?: boolean): Observable<HttpResponse<number>>;
    public lecturesPutLecture(id: string, Lecture: Lecture, observe?: 'events', reportProgress?: boolean, cancelPreviousRequest?: boolean): Observable<HttpEvent<number>>;
    public lecturesPutLecture(id: string, Lecture: Lecture, observe: any = 'body', reportProgress: boolean = false, cancelPreviousRequest: boolean = true): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling lecturesPutLecture.');
        }
        if (Lecture === null || Lecture === undefined) {
            throw new Error('Required parameter Lecture was null or undefined when calling lecturesPutLecture.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        let handle = this.httpClient.put<number>(`${this.configuration.basePath}/api/Lectures/${encodeURIComponent(String(id))}`,
            Lecture,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );

        if (cancelPreviousRequest) {
            if (this.cancelMap['Lectures_PutLecture']) {
                this.cancelMap['Lectures_PutLecture'].next();
            }
            this.cancelMap['Lectures_PutLecture'] = 'put'.toUpperCase() === 'GET' ? new Subject<any>() : null;
            if(this.cancelMap['Lectures_PutLecture']) {
                handle = handle.pipe(takeUntil(this.cancelMap['Lectures_PutLecture']));
            }
        }

        if (typeof this.configuration.beforeHandler === 'function') {
          this.configuration.beforeHandler('Lectures_PutLecture', 'put'.toUpperCase());
        }
        let afterSubscription: Subscription;
        const afterHandler = (result: any = null) => {
          if (afterSubscription) {
            afterSubscription.unsubscribe();
          }
          // stop cancellation to prevent calling afterHandler on next service call
          if (cancelPreviousRequest && this.cancelMap['Lectures_PutLecture']) {
            this.cancelMap['Lectures_PutLecture'].complete();
            delete this.cancelMap['Lectures_PutLecture'];
          }
          if (typeof this.configuration.afterHandler === 'function') {
            this.configuration.afterHandler(
              'Lectures_PutLecture',
              'put'.toUpperCase(),
              result ? result : new Error('CANCELLED')
            );
          }
        };
        handle = handle.pipe(share());
        afterSubscription = handle.subscribe(
          result => afterHandler(result),
          err => afterHandler(err),
          () => afterHandler()
        );

        if (typeof this.configuration.errorHandler === 'function') {
          return handle.pipe(catchError(err => this.configuration.errorHandler(err, 'Lectures_PutLecture')));
        }
        return handle;
    }

}

export namespace LecturesService {
  export enum Operations {
    Lectures_DeleteLecture = 'Lectures_DeleteLecture',
    Lectures_GetLecture = 'Lectures_GetLecture',
    Lectures_GetLectures = 'Lectures_GetLectures',
    Lectures_PostLecture = 'Lectures_PostLecture',
    Lectures_PutLecture = 'Lectures_PutLecture'
  }
}
