import React, { Component } from 'react';
export class Event extends Component {
    state = {
        collapsed: true
    };
    handleClick = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };

    render() {
        const { event } = this.props;
        const { collapsed } = this.state;


        return (<div className='event'>

            <h1 className='summary'>{event.summary}</h1>
            <p className='dateTime'>{event.dateTime}</p>
            <p className='timeZone'>{event.timeZone}</p>
            <p className='location'>@{event.summary} | {event.location}</p>

            {!collapsed && (
                <div className="details-view">
                    <h2 className="details-header">About event:</h2>
                    <a href={event.htmlLink} className='htmlLink' rel="noreferrer" target='_blank'>See details on Google Calendar</a>
                    <p className='description'>{event.description}</p>
                </div>
            )}
            <div className='btn'>
                <button className={`${collapsed ? "show" : "hide"}-details`} onClick={this.handleClick}>
                    {collapsed ? "Show Details" : "Hide Details"}
                </button>
            </div>
        </div>
        )
    }


}

export default Event;