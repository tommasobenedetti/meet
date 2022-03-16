import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount } from "enzyme";
import App from "../App";

const feature = loadFeature("./src/features/SpecifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
    let AppWrapper;

    test("When user hasn’t specified a number, 32 is the default number.", ({
        given,
        when,
        then,
    }) => {
        given("the user is on the main page of the app", async () => {
            AppWrapper = await mount(<App />);
        });

        when("the user hasn’t specified a number of events", () => {
            AppWrapper.update();
        });

        then("the max number of displayed events will be 32", () => {
            expect(AppWrapper.find(".event")).toHaveLength(5);
        });
    });

    test("User can change the number of events they want to see.", ({
        given,
        when,
        then,
    }) => {
        given("the user is on the main page", async () => {
            AppWrapper = await mount(<App />);
        });

        when(
            "the user set a number of events he or she wants to see in the “Number of events” box",
            () => {
                AppWrapper.update();
                const eventNumber = { target: { value: 1 } };
                AppWrapper.find(".NumberOfEvents").simulate("change", eventNumber);
            }
        );

        then("this number of events will be displayed", () => { });
    });
});