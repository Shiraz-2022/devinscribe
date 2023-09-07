import { SELECT_ELEMENT } from '../actions/mainActionTypes';

const initialState = {
    selectedElement: 'aboutus',
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_ELEMENT:
            return { ...state, selectedElement: action.payload };

        default:
            return state;
    }
};


export default mainReducer;