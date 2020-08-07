import React from 'react';
import './App.css';
import { Provider as StoreProvider, } from 'react-redux';
import { ThemeProvider, } from '@material-ui/styles';
import { renderRoutes, } from 'react-router-config';
import { ConnectedRouter, } from 'connected-react-router';
import store from './store';
import { history, } from './store/configureStore';
import routes from './routes';
import { ErrorBoundary } from './components';
import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({})

const App = () => (
    <StoreProvider store={ store }>
        <ThemeProvider theme={ theme }>
                <ConnectedRouter history={ history } >
                    <ErrorBoundary>
                        {renderRoutes(routes, false)}
                    </ErrorBoundary>
                </ConnectedRouter>
        </ThemeProvider>
    </StoreProvider>
);

export default App;

