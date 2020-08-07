import {
    OFFERS_LIST_GET_START,
    OFFERS_LIST_GET_FAILURE,
    OFFERS_LIST_GET_SUCCES,
    OffersListAction,
    OffersListState
} from '../types';

const initialState: OffersListState = {
    data: [],
    status: 'idle',
    error: null,
}


export default (state = initialState, action: OffersListAction):OffersListState => {
    switch(action.type) {
        case OFFERS_LIST_GET_START: 
            return {
                ...state,
                status: 'fetching',
            }
        case OFFERS_LIST_GET_SUCCES: 
            return {
                ...state,
                status: 'idle',
                data: [ ...state.data, ...action.payload.data]
            }
        case OFFERS_LIST_GET_FAILURE: 
            return {
                ...state,
                status: 'idle',
                error: action.payload.error
            }
        default: 
            return state
    }
}