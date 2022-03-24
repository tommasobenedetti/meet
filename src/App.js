import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import WelcomeScreen from './WelcomeScreen';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import { OfflineAlert } from "./Alert";
import './nprogress.css';


class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    showWelcomeScreen: undefined,
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      console.log(events)
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
    // if (!navigator.onLine) {
    //   this.setState({
    //     OfflineText:
    //       “Sorry but you are offline, this list is not up to date!“,
    //   });
    // } else {
    //   this.setState({
    //     OfflineText: “”,
    //   });
    // }



    if (!navigator.onLine) {
      this.setState({
        OfflineText:
          "Sorry but you are offline, this list is not up to date!",
      });
    } else {
      this.setState({
        OfflineText: "",
      });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location, eventCount = this.state.numberOfEvents) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
      if (this.mounted) {
        this.setState({
          events: locationEvents.slice(0, eventCount),
          currentLocation: location,
        });
      }
    });
  };

  render() {

    return (
      <div className="App">

        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents />
        <EventList events={this.state.events} numberOfEvents={this.state.numberOfEvents} />
      </div>
    );
  }
}

export default App;
