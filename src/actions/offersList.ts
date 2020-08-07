import {
    OFFERS_LIST_GET_START,
    OFFERS_LIST_GET_FAILURE,
    OFFERS_LIST_GET_SUCCES,
    OffersListAction,
    OfferItem,
} from '../types';
import { Dispatch } from 'redux';
import axiosInstance from '../utils/axiosInstance';

const getOffersListStart = ():OffersListAction => ({
    type: OFFERS_LIST_GET_START,
});

const getOffersListFailure = (error: Error): OffersListAction => ({
    type: OFFERS_LIST_GET_FAILURE,
    payload: {
        error,
    },
});

const getOffersListSuccess = (data: OfferItem[]): OffersListAction => ({
    type: OFFERS_LIST_GET_SUCCES,
    payload: {
        data,
    },
});

export const getOffersList = (offset: Number, status = 'published') => (
    (dispatch: Dispatch) => {
        dispatch(getOffersListStart());
        axiosInstance.get(`${process.env.REACT_APP_OFFERS_ENDPOINT}`, {
            params: {
                offset,
                status
            },
        })
            .then(res => dispatch(getOffersListSuccess(res.data)))
            .catch(err => dispatch(getOffersListFailure(err)));
    }
);
