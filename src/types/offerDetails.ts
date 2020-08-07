export const OFFER_DETAILS_GET_START = 'OFFER_DETAILS_GET_START'; 
export const OFFER_DETAILS_GET_FAILURE = 'OFFER_DETAILS_GET_FAILURE'; 
export const OFFER_DETAILS_GET_SUCCES = 'OFFER_DETAILS_GET_SUCCES';

interface getOfferDetailsStart {
    type: typeof OFFER_DETAILS_GET_START,
}

interface getOfferDetailsSuccess {
    type: typeof OFFER_DETAILS_GET_SUCCES,
    payload: {
        data: OfferItem,
        id: string,
    }
}

interface getOfferDetailsFailure { 
    type: typeof OFFER_DETAILS_GET_FAILURE,
    payload: {
        error: any,
    }
}

export type OfferDetailsAction = getOfferDetailsStart
                                | getOfferDetailsSuccess
                                | getOfferDetailsFailure

export interface OfferItem {
    id: Number,
    title: string,
    description: string,
    img_url: string,
    price: number,
    status: 'waiting_for_approval' | 'published' | 'in_progress' | 'canceled',
    created_at: string,
    discount: number,
    rating: number
}

export interface OfferDetailsState {
    data: {
        [key: string]: OfferItem
    }
    status: 'idle' | 'fetching'
    error: any
}