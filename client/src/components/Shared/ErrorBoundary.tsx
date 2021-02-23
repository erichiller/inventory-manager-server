import Alert from 'antd/lib/alert';
import React from 'react';

interface ErrorBoundaryProps extends React.PropsWithChildren<{}> { }

// see https://reactjs.org/docs/error-boundaries.html
export const ErrorBoundary = class extends React.Component<ErrorBoundaryProps> {

    state: {
        hasError: boolean;
        error?: Error;
        errorInfo?: object;
    };

    constructor( props: ErrorBoundaryProps ) {
        super( props );
        this.state = { hasError: false };
    }

    static getDerivedStateFromError( error: Error ) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch( error: Error, errorInfo: object ) {
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, errorInfo);
        this.setState( {
            error: error,
            errorInfo: errorInfo
        });
        console.error( error, errorInfo );
    }

    render() {
        if ( this.state.hasError ) {
            // You can render any custom fallback UI
            return <Alert
                        message="Error"
                        description={this.state.error?.message ?? "An Error has occurred." }
                        type="error"
                        showIcon
                        />;
        }

        return this.props.children; 
    }

};

export default ErrorBoundary;