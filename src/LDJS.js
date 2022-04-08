import React from 'react';
import * as LDClient from 'launchdarkly-js-client-sdk';

class LDJS extends React.Component {

    constructor(props) {
        super(props);
        this.state = { FF: null };
        if (!this.state.FF) {
            const user = { key: 'anon' };
            const client = LDClient.initialize(process.env.REACT_APP_LD_CLIENT_SIDE_ID, user);
            client
                .waitForInitialization()
                .then(this.state.FF = client);
        }
    }

    track1Click = () => { this.getCityFlagForTrack('track1'); }
    track2Click = () => { this.getCityFlagForTrack('track2'); }

    getCityFlagForTrack = async (track) => {
        try {
            const LD = this.state.FF;
            const user = {
                key: 'anon',
                custom: {
                    requestKey: Math.floor(Math.random() * Date.now()),
                    trackName: track
                }
            }

            await LD.identify(user);

            const flagKey = 'cities-flag';
            const cities = LD.variation(flagKey).cities;
            alert(`${user.custom.trackName}: ${cities}`);

            //randomly select a city from returned array:
            const city = cities[Math.floor(Math.random() * cities.length)];
            alert(`Selection: ${city}`);

            const metric = 'citySelection';
            LD.track(metric, { city: city });
            LD.flush();
        } catch (e) {
            console.error('Error:', e);
        }
    }

    render() {
        return (
            <section>
                <h1>LDJS.js<br />Uses the LaunchDarkly Javascript SDK</h1>
                <button onClick={this.track1Click}>Get JSON flag (track1)</button>
                <br />
                <button onClick={this.track2Click}>Get JSON Flag (track2)</button>
            </section>
        );
    }
}

export default LDJS;