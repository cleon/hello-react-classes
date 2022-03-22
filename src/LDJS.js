import React from 'react';
import * as LDClient from 'launchdarkly-js-client-sdk';

class LDJS extends React.Component {

    constructor(props) {
        super(props);
        this.state = { FF: null };
        if (!this.state.FF) {
            const user = { key: 'abc@def.org' };
            const client = LDClient.initialize(process.env.REACT_APP_LD_CLIENT_SIDE_ID, user);
            this.state.FF = client;
        }
    }

    checkFlag = () => {
        this.state.FF
            .waitForInitialization()
            .then(() => {
                const flagKey = 'demoTheme';
                const flag = this.state.FF.variation(flagKey);
                alert(`LDJS.js: ${flagKey} is ${flag}`);
            })
            .catch((e) => console.error('error:', e));
    }

    render() {
        return (
            <section>
                <h1>LDJS.js<br/>Uses the LaunchDarkly Javascript SDK</h1>
                <button onClick={this.checkFlag}>Check Flag</button>
            </section>
        );
    }
}

export default LDJS;