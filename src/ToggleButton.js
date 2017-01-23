import React from 'react';
import {Button} from 'react-bootstrap';
import WarningBanner from './WarningBanner';

class ToggleButton extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isToggleOn: true
        }

        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {

        this.setState(prevState => ({isToggleOn: !prevState.isToggleOn}))
    }

    render() {
        return (
            <div>
                <Button onClick={this.handleToggleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </Button>
                <WarningBanner warn={this.state.isToggleOn} />

            </div>
        )
    }

}

export default ToggleButton;
