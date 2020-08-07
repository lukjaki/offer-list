import {
    OFFER_DETAILS_GET_START,
    OFFER_DETAILS_GET_FAILURE,
    OFFER_DETAILS_GET_SUCCES,
    OfferDetailsAction,
    OfferItem,
} from '../types';
import { Dispatch } from 'redux';
import axiosInstance from '../utils/axiosInstance';

const getOfferDetailsStart = ():OfferDetailsAction => ({
    type: OFFER_DETAILS_GET_START,
});

const getOfferDetailsFailure = (error: any): OfferDetailsAction => ({
    type: OFFER_DETAILS_GET_FAILURE,
    payload: {
        error,
    },
});

const getOfferDetailsSuccess = (data: OfferItem, id: string): OfferDetailsAction => ({
    type: OFFER_DETAILS_GET_SUCCES,
    payload: {
        data,
        id
    },
});

export const getOfferDetails = (id: string) => (
    (dispatch: Dispatch) => {
        dispatch(getOfferDetailsStart());
        axiosInstance.get(`${process.env.REACT_APP_OFFERS_ENDPOINT}/${id}`)
            .then(res => dispatch(getOfferDetailsSuccess(res.data, id)))
            .catch(err => dispatch(getOfferDetailsFailure(err)));
    }
);
