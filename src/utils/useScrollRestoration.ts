import React, { useState, useEffect, useCallback } from 'react'

export default () => {

    const [scrollPosition, setScrollPosition] = useState(sessionStorage.getItem('scroll-position') || 0);

    useEffect(() => {
        sessionStorage.setItem('scroll-position', scrollPosition.toString());
    }, [scrollPosition]);
    
    const restoreScroll = useCallback(() => window.scroll(0, Number(scrollPosition)), [scrollPosition])

    return { restoreScroll, setScrollPosition }
}