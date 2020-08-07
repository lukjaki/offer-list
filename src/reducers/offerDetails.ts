import {
    OFFER_DETAILS_GET_START,
    OFFER_DETAILS_GET_FAILURE,
    OFFER_DETAILS_GET_SUCCES,
    OfferDetailsAction,
    OfferDetailsState,
} from '../types';

const initialState: OfferDetailsState = {
    data: {},
    status: 'idle',
    error: null,
}

export default (state = initialState, action: OfferDetailsAction):OfferDetailsState => {
    switch(action.type) {
        case OFFER_DETAILS_GET_START: 
            return {
                ...state,
                status: 'fetching',
            }
        case OFFER_DETAILS_GET_SUCCES: 
            return {
                ...state,
                status: 'idle',
                data: {
                    ...state.data,
                    [action.payload.id]: action.payload.data
                }
            }
        case OFFER_DETAILS_GET_FAILURE: 
            return {
                ...state,
                status: 'idle',
                error: action.payload.error
            }
        default: 
            return state
    }
}