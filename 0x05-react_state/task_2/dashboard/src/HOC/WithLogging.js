import React from "react";

const WithLogging = (WrappedComponent) => {
    class HOC extends React.Component {
        constructor(props) {
        super(props);
        this.displayName = `WithLogging(${WrappedComponent.name})`;
        }
    
        componentDidMount() {
        console.log(`Component ${WrappedComponent.name} is mounted`);
        }
    
        componentWillUnmount() {
        console.log(`Component ${WrappedComponent.name} is going to unmount`);
        }
    
        render() {
        return <WrappedComponent {...this.props} />;
        }
    }
    
    return HOC;
    };

export default WithLogging;