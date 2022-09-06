/*
Copyright 2021-present The maxGraph project Contributors
Copyright (c) 2006-2015, JGraph Ltd
Copyright (c) 2006-2015, Gaudenz Alder

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import { getFunctionName } from './StringUtils';
const FIELD_NAME = 'mxObjectId';
/**
 * @class
 *
 * Identity for JavaScript objects and functions. This is implemented using
 * a simple incrementing counter which is stored in each object under
 * {@link FIELD_NAME}.
 *
 * The identity for an object does not change during its lifecycle.
 */
class ObjectIdentity {
    /**
     * Returns the ID for the given object or function.
     */
    static get(obj) {
        if (obj) {
            if (obj[FIELD_NAME] === null || obj[FIELD_NAME] === undefined) {
                if (typeof obj === 'object') {
                    const ctor = getFunctionName(obj.constructor);
                    obj[FIELD_NAME] = `${ctor}#${ObjectIdentity.counter++}`;
                }
                else if (typeof obj === 'function') {
                    obj[FIELD_NAME] = `Function#${ObjectIdentity.counter++}`;
                }
            }
            return obj[FIELD_NAME];
        }
        return null;
    }
    /**
     * Deletes the ID from the given object or function.
     */
    static clear(obj) {
        delete obj[FIELD_NAME];
    }
}
/**
 * Name of the field to be used to store the object ID. Default is
 * <code>mxObjectId</code>.
 */
ObjectIdentity.FIELD_NAME = FIELD_NAME;
/**
 * Current counter.
 */
ObjectIdentity.counter = 0;
export default ObjectIdentity;