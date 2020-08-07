import React from 'react';
import { OfferItem } from '../../../../types';
import { Card, CardHeader, CardActions, Button, Divider, CardContent } from '@material-ui/core';
import { Link } from 'react-router-dom';

interface OfferProps {
    data: OfferItem,
    onMouseDown?: Function
}

const Offer: React.FC<OfferProps> = ({ data, onMouseDown = () => null }) => (
    <Card >
        <CardHeader title={data.title} />
        <Divider />
        <CardContent>
            status: {data.status}
        </CardContent>
        <CardActions>
            <Button
                component={ Link }
                to={ `/offers/${data.id}`}
                fullWidth
                onMouseDown={ () => onMouseDown((window.scrollY)) }
            >
                See more
            </Button>
        </CardActions>
    </Card>
)

export default Offer
