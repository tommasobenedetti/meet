import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import WelcomeScreen from './WelcomeScreen';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import { OfflineAlert } from "./Alert";
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import EventGenre from "./EventGenre";
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
        this.setState({
          events: events.slice(0, this.state.numberOfEvents),
          locations: extractLocations(events),
        });
      }
    });
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

  updateNumberOfEvents = (numberOfEvents) => {
    this.setState(
      {
        numberOfEvents,
      },
      this.updateEvents(this.state.location, numberOfEvents)
    );
  };

  updateEvents = (location, eventCount = this.state.numberOfEvents) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
      if (this.mounted) {
        this.setState({
          events: locationEvents.slice(0, this.state.numberOfEvents),
          location: location,
          currentLocation: location,
        });
      }
    });
  };

  //get data for scatterplot graph:

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return { city, number };
    })
    return data;
  };

  render() {
    const { events, locations, numberOfEvents, OfflineText } = this.state;
    return (
      <div className="App">
        <OfflineAlert text={OfflineText} />
        <CitySearch locations={locations} numberOfEvents={numberOfEvents} updateEvents={this.updateEvents} />
        <NumberOfEvents updateNumberOfEvents={(number) => { this.updateNumberOfEvents(number); }} />
        <h4>Events in each city</h4>
        <div className="data-vis-wrapper">
          <EventGenre events={this.state.events} />
          <ResponsiveContainer height={400} >
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid />
              <XAxis type="category" dataKey="city" name="city" />
              <YAxis allowDecimals={false} type="number" dataKey="number" name="number of events" />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter data={this.getData()} fill="#8884d8" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
        <EventList events={events} numberOfEvents={numberOfEvents} />
      </div>
    );
  }
}

export default App;
