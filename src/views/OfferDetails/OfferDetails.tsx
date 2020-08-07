import React, { useEffect } from 'react';
import { Card, CardHeader, Divider, CardContent, Typography, Button, CircularProgress } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../reducers';
import { getOfferDetails } from '../../actions';
import { useParams } from 'react-router';
import { push } from 'connected-react-router';

const OfferDetails: React.FC<{}> = () => {

    const { id } = useParams<{id: string}>();
    const data = useSelector((state: RootState) => state.offers.details.data[id]);
    const status = useSelector((state: RootState) => state.offers.details.status);
    const dispatch = useDispatch();

    useEffect(() => {
        !data && dispatch(getOfferDetails(id))
    }, [data, dispatch, id])

    if(status === 'fetching') {
        return <CircularProgress />
    }

    return (
        <>
            <Button
                component="button"
                onClick={ () => dispatch(push('/offers'))}
            >
                Go back
            </Button>
            {(!data) 
                ? 'No data found'
                : (<Card>
                    <CardHeader title={data.title} />
                    <Divider />
                    <CardContent>
                    {Object.entries(data).map(([key, val]) => <Typography>{key.toUpperCase()}:{val}</Typography>)}
                    </CardContent>
                </Card>)
            }
        </>
    )

}

export default OfferDetails
