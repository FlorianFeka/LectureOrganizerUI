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

import { LectureComment } from '../model/lectureComment';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';

/**
 * Namespace for lectureCommentDeleteLectureComment.
 */
export namespace LectureCommentDeleteLectureComment {
    /**
     * Parameter map for lectureCommentDeleteLectureComment.
     */
    export interface PartialParamMap {
      id: string;
    }

    /**
     * Enumeration of all parameters for lectureCommentDeleteLectureComment.
     */
    export enum Parameters {
      id = 'id'
    }

    /**
     * A map of tuples with error name and `ValidatorFn` for each parameter of lectureCommentDeleteLectureComment
     * that does not have an own model.
     */
    export const ParamValidators: {[K in keyof LectureCommentDeleteLectureComment.PartialParamMap]?: [string, ValidatorFn][]} = {
      id: [
              ['required', Validators.required],
      ],
    };
}

/**
 * Namespace for lectureCommentGetLectureComment.
 */
export namespace LectureCommentGetLectureComment {
    /**
     * Parameter map for lectureCommentGetLectureComment.
     */
    export interface PartialParamMap {
      id: string;
    }

    /**
     * Enumeration of all parameters for lectureCommentGetLectureComment.
     */
    export enum Parameters {
      id = 'id'
    }

    /**
     * A map of tuples with error name and `ValidatorFn` for each parameter of lectureCommentGetLectureComment
     * that does not have an own model.
     */
    export const ParamValidators: {[K in keyof LectureCommentGetLectureComment.PartialParamMap]?: [string, ValidatorFn][]} = {
      id: [
              ['required', Validators.required],
      ],
    };
}

/**
 * Namespace for lectureCommentGetLectureCommentAll.
 */
export namespace LectureCommentGetLectureCommentAll {
    /**
     * Parameter map for lectureCommentGetLectureCommentAll.
     */
    export interface PartialParamMap {
    }

    /**
     * Enumeration of all parameters for lectureCommentGetLectureCommentAll.
     */
    export enum Parameters {
    }

    /**
     * A map of tuples with error name and `ValidatorFn` for each parameter of lectureCommentGetLectureCommentAll
     * that does not have an own model.
     */
    export const ParamValidators: {[K in keyof LectureCommentGetLectureCommentAll.PartialParamMap]?: [string, ValidatorFn][]} = {
    };
}

/**
 * Namespace for lectureCommentPostLectureComment.
 */
export namespace LectureCommentPostLectureComment {
    /**
     * Parameter map for lectureCommentPostLectureComment.
     */
    export interface PartialParamMap {
      LectureComment: LectureComment;
    }

    /**
     * Enumeration of all parameters for lectureCommentPostLectureComment.
     */
    export enum Parameters {
      LectureComment = 'LectureComment'
    }

    /**
     * A map of tuples with error name and `ValidatorFn` for each parameter of lectureCommentPostLectureComment
     * that does not have an own model.
     */
    export const ParamValidators: {[K in keyof LectureCommentPostLectureComment.PartialParamMap]?: [string, ValidatorFn][]} = {
    };
}

/**
 * Namespace for lectureCommentPutLectureComment.
 */
export namespace LectureCommentPutLectureComment {
    /**
     * Parameter map for lectureCommentPutLectureComment.
     */
    export interface PartialParamMap {
      id: string;
      LectureComment: LectureComment;
    }

    /**
     * Enumeration of all parameters for lectureCommentPutLectureComment.
     */
    export enum Parameters {
      id = 'id',
      LectureComment = 'LectureComment'
    }

    /**
     * A map of tuples with error name and `ValidatorFn` for each parameter of lectureCommentPutLectureComment
     * that does not have an own model.
     */
    export const ParamValidators: {[K in keyof LectureCommentPutLectureComment.PartialParamMap]?: [string, ValidatorFn][]} = {
      id: [
              ['required', Validators.required],
      ],
    };
}



@Injectable({
  providedIn: 'root'
})
export class LectureCommentService {

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
  public lectureCommentDeleteLectureCommentByMap(
    map: LectureCommentDeleteLectureComment.PartialParamMap,
    observe?: 'body',
    reportProgress?: boolean,
    cancelPreviousRequest?: boolean): Observable<LectureComment>;
  public lectureCommentDeleteLectureCommentByMap(
    map: LectureCommentDeleteLectureComment.PartialParamMap,
    observe?: 'response',
    reportProgress?: boolean,
    cancelPreviousRequest?: boolean): Observable<HttpResponse<LectureComment>>;
  public lectureCommentDeleteLectureCommentByMap(
    map: LectureCommentDeleteLectureComment.PartialParamMap,
    observe?: 'events',
    reportProgress?: boolean,
    cancelPreviousRequest?: boolean): Observable<HttpEvent<LectureComment>>;
  public lectureCommentDeleteLectureCommentByMap(
    map: LectureCommentDeleteLectureComment.PartialParamMap,
    observe: any = 'body',
    reportProgress: boolean = false,
    cancelPreviousRequest: boolean = true): Observable<any> {
    return this.lectureCommentDeleteLectureComment(
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
    public lectureCommentDeleteLectureComment(id: string, observe?: 'body', reportProgress?: boolean, cancelPreviousRequest?: boolean): Observable<LectureComment>;
    public lectureCommentDeleteLectureComment(id: string, observe?: 'response', reportProgress?: boolean, cancelPreviousRequest?: boolean): Observable<HttpResponse<LectureComment>>;
    public lectureCommentDeleteLectureComment(id: string, observe?: 'events', reportProgress?: boolean, cancelPreviousRequest?: boolean): Observable<HttpEvent<LectureComment>>;
    public lectureCommentDeleteLectureComment(id: string, observe: any = 'body', reportProgress: boolean = false, cancelPreviousRequest: boolean = true): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling lectureCommentDeleteLectureComment.');
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

        let handle = this.httpClient.delete<LectureComment>(`${this.configuration.basePath}/api/LectureComment/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );

        if (cancelPreviousRequest) {
            if (this.cancelMap['LectureComment_DeleteLectureComment']) {
                this.cancelMap['LectureComment_DeleteLectureComment'].next();
            }
            this.cancelMap['LectureComment_DeleteLectureComment'] = 'delete'.toUpperCase() === 'GET' ? new Subject<any>() : null;
            if(this.cancelMap['LectureComment_DeleteLectureComment']) {
                handle = handle.pipe(takeUntil(this.cancelMap['LectureComment_DeleteLectureComment']));
            }
        }

        if (typeof this.configuration.beforeHandler === 'function') {
          this.configuration.beforeHandler('LectureComment_DeleteLectureComment', 'delete'.toUpperCase());
        }
        let afterSubscription: Subscription;
        const afterHandler = (result: any = null) => {
          if (afterSubscription) {
            afterSubscription.unsubscribe();
          }
          // stop cancellation to prevent calling afterHandler on next service call
          if (cancelPreviousRequest && this.cancelMap['LectureComment_DeleteLectureComment']) {
            this.cancelMap['LectureComment_DeleteLectureComment'].complete();
            delete this.cancelMap['LectureComment_DeleteLectureComment'];
          }
          if (typeof this.configuration.afterHandler === 'function') {
            this.configuration.afterHandler(
              'LectureComment_DeleteLectureComment',
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
          return handle.pipe(catchError(err => this.configuration.errorHandler(err, 'LectureComment_DeleteLectureComment')));
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
  public lectureCommentGetLectureCommentByMap(
    map: LectureCommentGetLectureComment.PartialParamMap,
    observe?: 'body',
    reportProgress?: boolean,
    cancelPreviousRequest?: boolean): Observable<LectureComment>;
  public lectureCommentGetLectureCommentByMap(
    map: LectureCommentGetLectureComment.PartialParamMap,
    observe?: 'response',
    reportProgress?: boolean,
    cancelPreviousRequest?: boolean): Observable<HttpResponse<LectureComment>>;
  public lectureCommentGetLectureCommentByMap(
    map: LectureCommentGetLectureComment.PartialParamMap,
    observe?: 'events',
    reportProgress?: boolean,
    cancelPreviousRequest?: boolean): Observable<HttpEvent<LectureComment>>;
  public lectureCommentGetLectureCommentByMap(
    map: LectureCommentGetLectureComment.PartialParamMap,
    observe: any = 'body',
    reportProgress: boolean = false,
    cancelPreviousRequest: boolean = true): Observable<any> {
    return this.lectureCommentGetLectureComment(
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
    public lectureCommentGetLectureComment(id: string, observe?: 'body', reportProgress?: boolean, cancelPreviousRequest?: boolean): Observable<LectureComment>;
    public lectureCommentGetLectureComment(id: string, observe?: 'response', reportProgress?: boolean, cancelPreviousRequest?: boolean): Observable<HttpResponse<LectureComment>>;
    public lectureCommentGetLectureComment(id: string, observe?: 'events', reportProgress?: boolean, cancelPreviousRequest?: boolean): Observable<HttpEvent<LectureComment>>;
    public lectureCommentGetLectureComment(id: string, observe: any = 'body', reportProgress: boolean = false, cancelPreviousRequest: boolean = true): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling lectureCommentGetLectureComment.');
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

        let handle = this.httpClient.get<LectureComment>(`${this.configuration.basePath}/api/LectureComment/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );

        if (cancelPreviousRequest) {
            if (this.cancelMap['LectureComment_GetLectureComment']) {
                this.cancelMap['LectureComment_GetLectureComment'].next();
            }
            this.cancelMap['LectureComment_GetLectureComment'] = 'get'.toUpperCase() === 'GET' ? new Subject<any>() : null;
            if(this.cancelMap['LectureComment_GetLectureComment']) {
                handle = handle.pipe(takeUntil(this.cancelMap['LectureComment_GetLectureComment']));
            }
        }

        if (typeof this.configuration.beforeHandler === 'function') {
          this.configuration.beforeHandler('LectureComment_GetLectureComment', 'get'.toUpperCase());
        }
        let afterSubscription: Subscription;
        const afterHandler = (result: any = null) => {
          if (afterSubscription) {
            afterSubscription.unsubscribe();
          }
          // stop cancellation to prevent calling afterHandler on next service call
          if (cancelPreviousRequest && this.cancelMap['LectureComment_GetLectureComment']) {
            this.cancelMap['LectureComment_GetLectureComment'].complete();
            delete this.cancelMap['LectureComment_GetLectureComment'];
          }
          if (typeof this.configuration.afterHandler === 'function') {
            this.configuration.afterHandler(
              'LectureComment_GetLectureComment',
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
          return handle.pipe(catchError(err => this.configuration.errorHandler(err, 'LectureComment_GetLectureComment')));
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
  public lectureCommentGetLectureCommentAllByMap(
    map: LectureCommentGetLectureCommentAll.PartialParamMap,
    observe?: 'body',
    reportProgress?: boolean,
    cancelPreviousRequest?: boolean): Observable<Array<LectureComment>>;
  public lectureCommentGetLectureCommentAllByMap(
    map: LectureCommentGetLectureCommentAll.PartialParamMap,
    observe?: 'response',
    reportProgress?: boolean,
    cancelPreviousRequest?: boolean): Observable<HttpResponse<Array<LectureComment>>>;
  public lectureCommentGetLectureCommentAllByMap(
    map: LectureCommentGetLectureCommentAll.PartialParamMap,
    observe?: 'events',
    reportProgress?: boolean,
    cancelPreviousRequest?: boolean): Observable<HttpEvent<Array<LectureComment>>>;
  public lectureCommentGetLectureCommentAllByMap(
    map: LectureCommentGetLectureCommentAll.PartialParamMap,
    observe: any = 'body',
    reportProgress: boolean = false,
    cancelPreviousRequest: boolean = true): Observable<any> {
    return this.lectureCommentGetLectureCommentAll(
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
    public lectureCommentGetLectureCommentAll(observe?: 'body', reportProgress?: boolean, cancelPreviousRequest?: boolean): Observable<Array<LectureComment>>;
    public lectureCommentGetLectureCommentAll(observe?: 'response', reportProgress?: boolean, cancelPreviousRequest?: boolean): Observable<HttpResponse<Array<LectureComment>>>;
    public lectureCommentGetLectureCommentAll(observe?: 'events', reportProgress?: boolean, cancelPreviousRequest?: boolean): Observable<HttpEvent<Array<LectureComment>>>;
    public lectureCommentGetLectureCommentAll(observe: any = 'body', reportProgress: boolean = false, cancelPreviousRequest: boolean = true): Observable<any> {

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

        let handle = this.httpClient.get<Array<LectureComment>>(`${this.configuration.basePath}/api/LectureComment`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );

        if (cancelPreviousRequest) {
            if (this.cancelMap['LectureComment_GetLectureCommentAll']) {
                this.cancelMap['LectureComment_GetLectureCommentAll'].next();
            }
            this.cancelMap['LectureComment_GetLectureCommentAll'] = 'get'.toUpperCase() === 'GET' ? new Subject<any>() : null;
            if(this.cancelMap['LectureComment_GetLectureCommentAll']) {
                handle = handle.pipe(takeUntil(this.cancelMap['LectureComment_GetLectureCommentAll']));
            }
        }

        if (typeof this.configuration.beforeHandler === 'function') {
          this.configuration.beforeHandler('LectureComment_GetLectureCommentAll', 'get'.toUpperCase());
        }
        let afterSubscription: Subscription;
        const afterHandler = (result: any = null) => {
          if (afterSubscription) {
            afterSubscription.unsubscribe();
          }
          // stop cancellation to prevent calling afterHandler on next service call
          if (cancelPreviousRequest && this.cancelMap['LectureComment_GetLectureCommentAll']) {
            this.cancelMap['LectureComment_GetLectureCommentAll'].complete();
            delete this.cancelMap['LectureComment_GetLectureCommentAll'];
          }
          if (typeof this.configuration.afterHandler === 'function') {
            this.configuration.afterHandler(
              'LectureComment_GetLectureCommentAll',
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
          return handle.pipe(catchError(err => this.configuration.errorHandler(err, 'LectureComment_GetLectureCommentAll')));
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
  public lectureCommentPostLectureCommentByMap(
    map: LectureCommentPostLectureComment.PartialParamMap,
    observe?: 'body',
    reportProgress?: boolean,
    cancelPreviousRequest?: boolean): Observable<LectureComment>;
  public lectureCommentPostLectureCommentByMap(
    map: LectureCommentPostLectureComment.PartialParamMap,
    observe?: 'response',
    reportProgress?: boolean,
    cancelPreviousRequest?: boolean): Observable<HttpResponse<LectureComment>>;
  public lectureCommentPostLectureCommentByMap(
    map: LectureCommentPostLectureComment.PartialParamMap,
    observe?: 'events',
    reportProgress?: boolean,
    cancelPreviousRequest?: boolean): Observable<HttpEvent<LectureComment>>;
  public lectureCommentPostLectureCommentByMap(
    map: LectureCommentPostLectureComment.PartialParamMap,
    observe: any = 'body',
    reportProgress: boolean = false,
    cancelPreviousRequest: boolean = true): Observable<any> {
    return this.lectureCommentPostLectureComment(
      map.LectureComment,
      observe,
      reportProgress,
      cancelPreviousRequest
    );
  }


    /**
     * 
     * 
     * @param LectureComment 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     * @param cancelPreviousRequest set whether or not the previous request for the same operation should be cancelled if it is still running.
     */
    public lectureCommentPostLectureComment(LectureComment: LectureComment, observe?: 'body', reportProgress?: boolean, cancelPreviousRequest?: boolean): Observable<LectureComment>;
    public lectureCommentPostLectureComment(LectureComment: LectureComment, observe?: 'response', reportProgress?: boolean, cancelPreviousRequest?: boolean): Observable<HttpResponse<LectureComment>>;
    public lectureCommentPostLectureComment(LectureComment: LectureComment, observe?: 'events', reportProgress?: boolean, cancelPreviousRequest?: boolean): Observable<HttpEvent<LectureComment>>;
    public lectureCommentPostLectureComment(LectureComment: LectureComment, observe: any = 'body', reportProgress: boolean = false, cancelPreviousRequest: boolean = true): Observable<any> {
        if (LectureComment === null || LectureComment === undefined) {
            throw new Error('Required parameter LectureComment was null or undefined when calling lectureCommentPostLectureComment.');
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

        let handle = this.httpClient.post<LectureComment>(`${this.configuration.basePath}/api/LectureComment`,
            LectureComment,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );

        if (cancelPreviousRequest) {
            if (this.cancelMap['LectureComment_PostLectureComment']) {
                this.cancelMap['LectureComment_PostLectureComment'].next();
            }
            this.cancelMap['LectureComment_PostLectureComment'] = 'post'.toUpperCase() === 'GET' ? new Subject<any>() : null;
            if(this.cancelMap['LectureComment_PostLectureComment']) {
                handle = handle.pipe(takeUntil(this.cancelMap['LectureComment_PostLectureComment']));
            }
        }

        if (typeof this.configuration.beforeHandler === 'function') {
          this.configuration.beforeHandler('LectureComment_PostLectureComment', 'post'.toUpperCase());
        }
        let afterSubscription: Subscription;
        const afterHandler = (result: any = null) => {
          if (afterSubscription) {
            afterSubscription.unsubscribe();
          }
          // stop cancellation to prevent calling afterHandler on next service call
          if (cancelPreviousRequest && this.cancelMap['LectureComment_PostLectureComment']) {
            this.cancelMap['LectureComment_PostLectureComment'].complete();
            delete this.cancelMap['LectureComment_PostLectureComment'];
          }
          if (typeof this.configuration.afterHandler === 'function') {
            this.configuration.afterHandler(
              'LectureComment_PostLectureComment',
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
          return handle.pipe(catchError(err => this.configuration.errorHandler(err, 'LectureComment_PostLectureComment')));
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
  public lectureCommentPutLectureCommentByMap(
    map: LectureCommentPutLectureComment.PartialParamMap,
    observe?: 'body',
    reportProgress?: boolean,
    cancelPreviousRequest?: boolean): Observable<Blob>;
  public lectureCommentPutLectureCommentByMap(
    map: LectureCommentPutLectureComment.PartialParamMap,
    observe?: 'response',
    reportProgress?: boolean,
    cancelPreviousRequest?: boolean): Observable<HttpResponse<Blob>>;
  public lectureCommentPutLectureCommentByMap(
    map: LectureCommentPutLectureComment.PartialParamMap,
    observe?: 'events',
    reportProgress?: boolean,
    cancelPreviousRequest?: boolean): Observable<HttpEvent<Blob>>;
  public lectureCommentPutLectureCommentByMap(
    map: LectureCommentPutLectureComment.PartialParamMap,
    observe: any = 'body',
    reportProgress: boolean = false,
    cancelPreviousRequest: boolean = true): Observable<any> {
    return this.lectureCommentPutLectureComment(
      map.id,
      map.LectureComment,
      observe,
      reportProgress,
      cancelPreviousRequest
    );
  }


    /**
     * 
     * 
     * @param id 
     * @param LectureComment 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     * @param cancelPreviousRequest set whether or not the previous request for the same operation should be cancelled if it is still running.
     */
    public lectureCommentPutLectureComment(id: string, LectureComment: LectureComment, observe?: 'body', reportProgress?: boolean, cancelPreviousRequest?: boolean): Observable<Blob>;
    public lectureCommentPutLectureComment(id: string, LectureComment: LectureComment, observe?: 'response', reportProgress?: boolean, cancelPreviousRequest?: boolean): Observable<HttpResponse<Blob>>;
    public lectureCommentPutLectureComment(id: string, LectureComment: LectureComment, observe?: 'events', reportProgress?: boolean, cancelPreviousRequest?: boolean): Observable<HttpEvent<Blob>>;
    public lectureCommentPutLectureComment(id: string, LectureComment: LectureComment, observe: any = 'body', reportProgress: boolean = false, cancelPreviousRequest: boolean = true): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling lectureCommentPutLectureComment.');
        }
        if (LectureComment === null || LectureComment === undefined) {
            throw new Error('Required parameter LectureComment was null or undefined when calling lectureCommentPutLectureComment.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
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

        let handle = this.httpClient.put(`${this.configuration.basePath}/api/LectureComment/${encodeURIComponent(String(id))}`,
            LectureComment,
            {
                responseType: "blob",
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );

        if (cancelPreviousRequest) {
            if (this.cancelMap['LectureComment_PutLectureComment']) {
                this.cancelMap['LectureComment_PutLectureComment'].next();
            }
            this.cancelMap['LectureComment_PutLectureComment'] = 'put'.toUpperCase() === 'GET' ? new Subject<any>() : null;
            if(this.cancelMap['LectureComment_PutLectureComment']) {
                handle = handle.pipe(takeUntil(this.cancelMap['LectureComment_PutLectureComment']));
            }
        }

        if (typeof this.configuration.beforeHandler === 'function') {
          this.configuration.beforeHandler('LectureComment_PutLectureComment', 'put'.toUpperCase());
        }
        let afterSubscription: Subscription;
        const afterHandler = (result: any = null) => {
          if (afterSubscription) {
            afterSubscription.unsubscribe();
          }
          // stop cancellation to prevent calling afterHandler on next service call
          if (cancelPreviousRequest && this.cancelMap['LectureComment_PutLectureComment']) {
            this.cancelMap['LectureComment_PutLectureComment'].complete();
            delete this.cancelMap['LectureComment_PutLectureComment'];
          }
          if (typeof this.configuration.afterHandler === 'function') {
            this.configuration.afterHandler(
              'LectureComment_PutLectureComment',
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
          return handle.pipe(catchError(err => this.configuration.errorHandler(err, 'LectureComment_PutLectureComment')));
        }
        return handle;
    }

}

export namespace LectureCommentService {
  export enum Operations {
    LectureComment_DeleteLectureComment = 'LectureComment_DeleteLectureComment',
    LectureComment_GetLectureComment = 'LectureComment_GetLectureComment',
    LectureComment_GetLectureCommentAll = 'LectureComment_GetLectureCommentAll',
    LectureComment_PostLectureComment = 'LectureComment_PostLectureComment',
    LectureComment_PutLectureComment = 'LectureComment_PutLectureComment'
  }
}
