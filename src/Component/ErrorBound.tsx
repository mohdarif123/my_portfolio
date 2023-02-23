import React, { } from "react";

class ErrorBound extends React.Component<any, { hasError: boolean }> {
    constructor(props: any) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError() {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }
    componentDidCatch(error: any, errorInfo: any) {
        // You can also log the error to an error reporting service
        logErrorToMyService(error, errorInfo);
    }
    render() {
        return (
            <div>
                {
                    this.state.hasError ? <h1>custom error</h1> : this.props.children
                }

            </div>
        );
    }
}
export default ErrorBound;


function logErrorToMyService(error: any, errorInfo: any) {
    throw new Error("Function not implemented.");
}

