import React, { Component } from 'react';
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
    state = {
        numberOfEvents: '32',
        infoText: ""
    }

    handleInputChange = (event) => {
        const value = event.target.value;
        if (value < 1 || value > 32) {
            this.setState({
                numberOfEvents: "",
                infoText: "Please enter a number between 1 and 32",
            });
        } else {
            this.setState({
                numberOfEvents: value,
                infoText: ""
            });
            this.props.updateNumberOfEvents(event.target.value);
        }


    };

    render() {
        return (
            <div className="NumberOfEvents">
                <br></br>
                <p>Number of Events:</p>
                <input
                    type="number"
                    className="numberOfEvents"
                    value={this.state.numberOfEvents}
                    onChange={this.handleInputChange}
                />

                <ErrorAlert text={this.state.infoText} />
            </div>
        );
    }
}
export default NumberOfEvents;