import React from 'react';
import { render } from '@testing-library/react';
import Offer from './Offer';
import { OfferItem } from '../../../../types';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history'

test('renders offer component', () => {
    const history = createBrowserHistory();
    const mockData: OfferItem = {
        id: 1,
        title: "Test",
        description: "Test",
        img_url: "Test",
        price: 12,
        status: "published",
        created_at: "Test",
        discount: 12,
        rating: 3
    }
    const { getByText } = render(<Router history={ history }><Offer data={ mockData } /></Router>);
    const offerElement = getByText(/published/i);
    expect(offerElement).toBeInTheDocument();
});
