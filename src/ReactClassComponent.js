import React from 'react';
import { withLDConsumer } from 'launchdarkly-react-client-sdk';

class ReactClassComponent extends React.Component {

    checkFlag = () => {
        const flagKey = 'demoTheme';
        const flag = this.props.ldClient.variation(flagKey);
        alert(`LDReact.js: ${flagKey} is ${flag}`);
    }

    render() {
        return (
            <section>
                <h1>LDReact.js<br/>Uses the LaunchDarkly React SDK</h1>
                <button onClick={this.checkFlag}>Check Flag</button>
            </section>
        );
    }
}

// this is not a hook
export default withLDConsumer()(ReactClassComponent);