# meet
A serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. It uses the Google Calendar API to fetch upcoming events.

Key Features


Feature #2: It must be able to show/hide an event's details.
User Story - As a user, I should get the option to show/hide an event’s details, so that I can see more information about the event and hide them whenever I want.
1. Scenario: An event element is collapsed by default.
● Given: the user hasn’t clicked anything.
● When: events are displayed.
● Then: the event details will be collapsed.
2. Scenario: User can expand an event to see its details.
● Given: the user wants to see details about an event.
● When: the user clicks on the event.
● Then: the event details will expand.
3. Scenario: User can collapse an event to hide its details.
● Given: the event details are expanded.
● When: the user wants to hide them.
● Then: the user should click on the event to collapse the extra information on
the event card.
Feature #3: It must specify the number of events.
User Story - As a user, I should be able to see how many events are shown to me so that I can choose the amount of events that I want to see.
1. Scenario: When the user hasn’t specified a number, 32 is the default number.
● Given: the user has not chosen how many events to see per page.
● When: the user opens the page.
● Then: the user should see 32 events by default.
2. Scenario: Users can change the number of events they want to see.
● Given: the user wants to change the number of events they see per
page
● When: the user clicks a dropdown button labeled “Show:”
● Then: the user will be able to choose the number of events they can
see per page.
Feature #4: It must be available offline.
User Story - As a user, I should be able to use the app offline, so that I can get the app’s information without an internet connection.
1. Scenario: Show cached data when there’s no internet connection.
● Given: the user doesn’t have an internet connection.
● When: the user opens the app and has stored cached data.
● Then: the user should see all the previously stored data.
2. Scenario: Show error when user changes the settings (city, time range).
● Given: the user doesn’t have an internet connection.
● When: the user tries to change the settings previously stored.
● Then: the user should receive an error message telling them to
connect to the internet.
Feature #5: It must display a chart showing the number of upcoming events by city.
User Story - As a user, I should be able to see a chart showing the number of upcoming events by city, so that I can clearly see the number of events happening in that city in the future.
1. Scenario : Show a chart with the number of upcoming events in each city.
● Given: the user is on the “upcoming events” page.
● When: the user wants to see the number of upcoming events in each city.
● Then: the user should see a chart with the number of upcoming events in
each city.

Technical Details

A React application. Built using the TDD technique. Uses the Google Calendar API and OAuth2 authentication flow. Uses serverless functions (AWS lambda) for the authorization server instead of using a traditional server. Passes Lighthouse’s PWA checklist. Works offline or in slow network conditions with the help of a service worker. The API calls use React axios and async/await. Implements an alert system using an OOP approach to show information to the user. Makes use of data visualization (recharts preferred).
