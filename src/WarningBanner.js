import React from 'react';

class WarningBanner extends React.Component {

    render() {
        if (!this.props.warn) {
            return null;
        }

        return (
                <p>Warning!!!</p>
        )
    }

}

export default WarningBanner;