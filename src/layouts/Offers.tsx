import React, { Suspense } from 'react';
import { renderRoutes } from 'react-router-config';
import { makeStyles } from '@material-ui/styles';
import { LinearProgress, Theme } from '@material-ui/core';
import { Page } from '../components';

const useStyles = makeStyles((theme: Theme) => ({
    content: {
        height: '100%',
        paddingTop: 56,
        [theme.breakpoints.up('sm')]: {
            paddingTop: 64
        }
    }
}));

const Offers = (props: any) => {
    const { route } = props;

    const classes = useStyles();

    return (
        <Page title="Offers">
            <main className={classes.content}>
                <Suspense fallback={<LinearProgress />}>
                    {renderRoutes(route.routes)}
                </Suspense>
            </main>
        </Page>
    );
};


export default Offers;
