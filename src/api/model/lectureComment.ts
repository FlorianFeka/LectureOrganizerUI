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

import { Lecture } from './lecture';
import { User } from './user';


export interface LectureComment { 
    lectureCommentId: number;
    text: string;
    lectureId: number;
    userId: number;
    lecture?: Lecture;
    user?: User;
}

/**
 * Namespace for property- and property-value-enumerations of LectureComment.
 */
export namespace LectureComment {
    /**
     * All properties of LectureComment.
     */
    export enum Properties {
        lectureCommentId = 'lectureCommentId',
        text = 'text',
        lectureId = 'lectureId',
        userId = 'userId',
        lecture = 'lecture',
        user = 'user'
    }

    /**
    * A map of tuples with error name and `ValidatorFn` for each property of LectureComment.
    */
    export const ModelValidators: {[K in keyof LectureComment]: [string, ValidatorFn][]} = {
        lectureCommentId: [
                ['required', Validators.required],
        ],
        text: [
                ['required', Validators.required],
                ['minlength', Validators.minLength(1)],
        ],
        lectureId: [
                ['required', Validators.required],
        ],
        userId: [
                ['required', Validators.required],
        ],
        lecture: [
        ],
        user: [
        ],
    };

    /**
    * The FormControlFactory for LectureComment.
    */
    export class FormControlFactory extends BaseFormControlFactory<LectureComment> {

        /**
         * Constructor.
         *
         * @param model An existing model for LectureComment.
         *              If given, all form-controls of the factory automatically have the value of this model. If this
         *              model is not given, all values are `null`.
         */
        constructor(
          model: LectureComment = {
            lectureCommentId: null,
            text: null,
            lectureId: null,
            userId: null,
            lecture: null,
            user: null,
          }
        ) {
            super(model, LectureComment.ModelValidators);
        }
    }

}

