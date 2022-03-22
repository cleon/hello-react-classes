import React from 'react';
import { LDProvider } from 'launchdarkly-react-client-sdk';
import ReactClassComponent from './ReactClassComponent.js';

class LDReact extends React.Component {

    render() {
        const clientSideID = process.env.REACT_APP_LD_CLIENT_SIDE_ID;
        const user = { key: 'abc@def.org' };
        return (
            <LDProvider clientSideID={clientSideID} user={user}>
                <ReactClassComponent />
            </LDProvider>
        );
    }
}
export default LDReact;