import React from 'react'

class ErrorBoundary extends React.Component<{}, {hasError: Boolean}> {
    constructor(props: any) {
        super(props);
        this.state = { hasError: false, };
    }
  
    static getDerivedStateFromError(error: any) {
        return { hasError: true, };
    }
  
    componentDidCatch(error: any) {  
        // tutaj uzylbym jakiegos mechanizmu do logowania bledow (New Relic lub chocby poczciwy Slack)
        console.log(error.message, error.stack)
    }
  
    render() {
        if (this.state.hasError) {
            // tutaj jakas stronka z błędem np. 500 
            return <h1>Something went wrong</h1>
        }
        return this.props.children; 
    }
}

export default ErrorBoundary