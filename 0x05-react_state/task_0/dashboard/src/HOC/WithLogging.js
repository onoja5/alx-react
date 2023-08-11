import React, { Component } from 'react';

const WithLogging = (WrappedComponent) => {
    const name  = WrappedComponent.displayName || WrappedComponent.name || 'Component';

    class LoggingComponent extends Component {
        componentDidMount() {
            console.log(`Component ${name} is mounted`);
        }

        componentWillUnmount() {
            console.log(`Component ${name} is going to unmount`);
        }

        render() {
            return <WrappedComponent {...this.props}/>;
        }
        };
        LoggingComponent.displayName = `WithLogging(${name}/>)`;
        return LoggingComponent;

    };
    
export default WithLogging;