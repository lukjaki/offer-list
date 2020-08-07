import { OfferItem } from "./offerDetails";

export const OFFERS_LIST_GET_START = 'OFFERS_LIST_GET_START'; 
export const OFFERS_LIST_GET_FAILURE = 'OFFERS_LIST_GET_FAILURE'; 
export const OFFERS_LIST_GET_SUCCES = 'OFFERS_LIST_GET_SUCCES'; 

interface getOffersListStart {
    type: typeof OFFERS_LIST_GET_START,
}

interface getOffersListSuccess {
    type: typeof OFFERS_LIST_GET_SUCCES,
    payload: {
        data: OfferItem[]
    }
}

interface getOffersListFailure { 
    type: typeof OFFERS_LIST_GET_FAILURE,
    payload: {
        error: Error,
    }
}

export type OffersListAction = getOffersListStart
                                | getOffersListSuccess
                                | getOffersListFailure

export interface OffersListState {
    data: OfferItem[],
    status: 'idle' | 'fetching',
    error: any; 
}

