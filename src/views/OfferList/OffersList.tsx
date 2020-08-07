import React, { useEffect, useState, useRef, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOffersList } from '../../actions';
import { RootState } from '../../reducers';
import { Grid } from '@material-ui/core';
import { Offer } from './components';
import useScrollRestoration from '../../utils/useScrollRestoration';

const OffersList = () => {

    const dispatch = useDispatch();
    const [offset, setOffSet] = useState(0);
    const observerRef = useRef<HTMLDivElement>(null)
    const data = useSelector((state: RootState) => state.offers.list.data);
    const status = useSelector((state: RootState) => state.offers.list.status);
    const { restoreScroll, setScrollPosition } = useScrollRestoration();

    useEffect(() => {
        (!data.length || status === 'idle') && dispatch(getOffersList(offset));
    }, [dispatch, offset]);

    useEffect(() => {
        const observer = new IntersectionObserver(observerHandler, {
            rootMargin: '0px',
        });
        observerRef.current && observer.observe(observerRef.current);
        return () => {
            observer.disconnect()
        }
    }, []);

    useEffect(() => {
        restoreScroll();
    }, [])

    const observerHandler = useCallback((entries: IntersectionObserverEntry[]) => {
            setOffSet(state => state += 20);
    }, []);

    const mappedData = useMemo(() => 
        data
        .filter(el => el.status === 'published')
        .map((el, i) => 
        (<Grid item md={12} xs={12} key={ i }>
            <Offer data={ el }  onMouseDown={ setScrollPosition }/>
        </Grid>))
    , [data]);

    return (
        <Grid 
            container
            spacing={4}
        >
            {mappedData}
            <Grid item xs={12}>
                <div ref={ observerRef }></div>
            </Grid>
        </Grid>
    )
}

export default OffersList
