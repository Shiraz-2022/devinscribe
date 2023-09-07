
import { SELECT_ELEMENT } from './mainActionTypes';

export const selectElement = (element) => ({
    type: SELECT_ELEMENT,
    payload: element,
});
