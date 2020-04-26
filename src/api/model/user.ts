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

import { ValidatorFn, Validators } from '@angular/forms';
import { BaseFormControlFactory } from 'openapi-typescript-angular-generator';

import { LectureComment } from './lectureComment';


export interface User { 
    userId: number;
    username: string;
    email: string;
    password: string;
    lectureComments?: Array<LectureComment>;
}

/**
 * Namespace for property- and property-value-enumerations of User.
 */
export namespace User {
    /**
     * All properties of User.
     */
    export enum Properties {
        userId = 'userId',
        username = 'username',
        email = 'email',
        password = 'password',
        lectureComments = 'lectureComments'
    }

    /**
    * A map of tuples with error name and `ValidatorFn` for each property of User.
    */
    export const ModelValidators: {[K in keyof User]: [string, ValidatorFn][]} = {
        userId: [
                ['required', Validators.required],
        ],
        username: [
                ['required', Validators.required],
                ['minlength', Validators.minLength(1)],
        ],
        email: [
                ['required', Validators.required],
                ['minlength', Validators.minLength(1)],
        ],
        password: [
                ['required', Validators.required],
                ['minlength', Validators.minLength(8)],
        ],
        lectureComments: [
        ],
    };

    /**
    * The FormControlFactory for User.
    */
    export class FormControlFactory extends BaseFormControlFactory<User> {

        /**
         * Constructor.
         *
         * @param model An existing model for User.
         *              If given, all form-controls of the factory automatically have the value of this model. If this
         *              model is not given, all values are `null`.
         */
        constructor(
          model: User = {
            userId: null,
            username: null,
            email: null,
            password: null,
            lectureComments: null,
          }
        ) {
            super(model, User.ModelValidators);
        }
    }

}


