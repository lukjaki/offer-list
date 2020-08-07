import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import offersDetails from './offerDetails';
import offersList from './offerList';

const rootReducer = (history: History) => combineReducers({
    router: connectRouter(history),
    offers: combineReducers({
        list: offersList,
        details: offersDetails,
    })
});

export type RootState = ReturnType<ReturnType<typeof rootReducer>>

export default rootReducer;

