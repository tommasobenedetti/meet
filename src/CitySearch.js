import React, { Component } from 'react';
import { InfoAlert } from './Alert';

class CitySearch extends Component {
    state = {
        query: '',
        suggestions: [],
        showSuggestions: undefined,
        infoText: "",
    }

    handleInputChanged = (event) => {
        const value = event.target.value;
        this.setState({ showSuggestions: true });
        const suggestions = this.props.locations.filter((location) => {
            return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
        });
        if (suggestions.length === 0) {
            this.setState({
                query: value,
                infoText: 'We can not find the city you are looking for. Please try another city',
            });
        } else {
            return this.setState({
                query: value,
                suggestions,
                infoText: '',
                showSuggestions: true
            });
        }
    };

    handleItemClicked = (suggestion) => {
        this.setState({
            query: suggestion,
            showSuggestions: false,
            infoText: "",
        });

        this.props.updateEvents(suggestion);
    }

    componentDidUpdate(prevProps) {
        if (this.props.locations !== prevProps.locations) {
            this.setState({ suggestions: this.props.locations });
        }
    }

    render() {
        return (
            <div className="CitySearch">
                <label className="citysearch-label">choose a city:</label>
                <div className="infoAlert">
                    <InfoAlert text={this.state.infoText} />
                    <input
                        type="text"
                        className="city"
                        value={this.state.query}
                        onChange={this.handleInputChanged}
                        onFocus={() => { this.setState({ showSuggestions: true }) }}
                    />
                    <ul className="suggestions" style={this.state.showSuggestions ? {} : { display: 'none' }}>
                        {this.state.suggestions.map((suggestion) => (
                            <li
                                key={suggestion}
                                onClick={() => this.handleItemClicked(suggestion)}
                            >{suggestion}</li>
                        ))}
                        <li onClick={() => this.handleItemClicked("all")}><b className="see-suggestions-input">See all cities</b></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default CitySearch;