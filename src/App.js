import React, { Component } from 'react';
import './App.css';
import { Welcome } from './Welcome';
import MyClock from './MyClock';
import ToggleButton from './ToggleButton';

class App extends Component {

    formatName(user) {
        return user.firstName + ' ' + user.lastName;
    }

    user = {
        firstName: 'Test',
        lastName: 'User'
    };

    render() {
        return (
          <div className="App">
            <div className="App-header">
              <Welcome name="Test User" />
              <MyClock />
            </div>
            <div className="App-intro">
                <ToggleButton />
            </div>
          </div>
        );
    }
}

export default App;
