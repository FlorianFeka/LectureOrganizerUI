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


export interface Lecture { 
    lectureId: number;
    name: string;
    subject?: string;
    study?: string;
    professor?: string;
    date: Date;
    lectureComments?: Array<LectureComment>;
}

/**
 * Namespace for property- and property-value-enumerations of Lecture.
 */
export namespace Lecture {
    /**
     * All properties of Lecture.
     */
    export enum Properties {
        lectureId = 'lectureId',
        name = 'name',
        subject = 'subject',
        study = 'study',
        professor = 'professor',
        date = 'date',
        lectureComments = 'lectureComments'
    }

    /**
    * A map of tuples with error name and `ValidatorFn` for each property of Lecture.
    */
    export const ModelValidators: {[K in keyof Lecture]: [string, ValidatorFn][]} = {
        lectureId: [
                ['required', Validators.required],
        ],
        name: [
                ['required', Validators.required],
                ['minlength', Validators.minLength(1)],
        ],
        subject: [
        ],
        study: [
        ],
        professor: [
        ],
        date: [
                ['required', Validators.required],
        ],
        lectureComments: [
        ],
    };

    /**
    * The FormControlFactory for Lecture.
    */
    export class FormControlFactory extends BaseFormControlFactory<Lecture> {

        /**
         * Constructor.
         *
         * @param model An existing model for Lecture.
         *              If given, all form-controls of the factory automatically have the value of this model. If this
         *              model is not given, all values are `null`.
         */
        constructor(
          model: Lecture = {
            lectureId: null,
            name: null,
            subject: null,
            study: null,
            professor: null,
            date: null,
            lectureComments: null,
          }
        ) {
            super(model, Lecture.ModelValidators);
        }
    }

}

