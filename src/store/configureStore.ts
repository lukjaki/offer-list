import { createBrowserHistory } from 'history'
import { applyMiddleware, createStore, compose, StoreEnhancer } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router'
import rootReducer from '../reducers';

export const history = createBrowserHistory();

function configureStore(preloadedState = {}) {
  
    const middlewares = [thunkMiddleware, routerMiddleware(history)]; 
    const middlewareEnhancer = composeWithDevTools(
        applyMiddleware(...middlewares)
    );

    const enhancers = [middlewareEnhancer];
    const composedEnhancers: StoreEnhancer = compose(...enhancers);

    const store = createStore(rootReducer(history), preloadedState, composedEnhancers);

    return store;
}

const store = configureStore();

export default store;
