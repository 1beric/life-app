import React from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";

import TabBarIcon from "../components/TabBarIcon";
import SettingsScreen from "../screens/SettingsScreen";
import SetIOScreen from "../screens/SetIOScreen";
import QueryScreen from "../screens/QueryScreen";
import JournalScreen from "../screens/JournalScreen";
import SummaryScreen from "../screens/SummaryScreen";
import DynamicTabBar from "../components/DynamicTabBar";

import Colors from "../constants/Colors";
import { store } from "../store";


const config = Platform.select({
    web: { headerMode: "screen" },
    default: {}
});

const SummaryStack = createStackNavigator(
    {
        Summary: SummaryScreen
    },
    [
        config,
        {
            headerStyle: {
                backgroundColor: Colors.tabBar
            }
        }
    ]
);
SummaryStack.navigationOptions = {
    tabBarLabel: "Summary",
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === "ios" ? "ios-analytics" : "md-analytics"}
        />
    )
};
SummaryStack.path = "";

const SetIOStack = createStackNavigator(
    {
        SetIO: SetIOScreen
    },
    config
);
SetIOStack.navigationOptions = {
    tabBarLabel: "SetIO",
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === "ios" ? "ios-add-circle" : "md-add-circle"}
        />
    )
};
SetIOStack.path = "";

const QueryStack = createStackNavigator(
    {
        Query: QueryScreen
    },
    config
);
QueryStack.navigationOptions = {
    tabBarLabel: "Query",
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === "ios" ? "ios-search" : "md-search"}
        />
    )
};
QueryStack.path = "";

const JournalStack = createStackNavigator(
    {
        Journal: JournalScreen
    },
    config
);
JournalStack.navigationOptions = {
    tabBarLabel: "Journal",
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === "ios" ? "ios-add-circle" : "md-add-circle"}
        />
    )
};
JournalStack.path = "";

const SettingsStack = createStackNavigator(
    {
        Settings: SettingsScreen
    },
    config
);
SettingsStack.navigationOptions = {
    tabBarLabel: "Settings",
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === "ios" ? "ios-settings" : "md-settings"}
        />
    )
};
SettingsStack.path = "";

const tabNavigator = createBottomTabNavigator(
    {
        SummaryStack,
        JournalStack,
        QueryStack,
        SetIOStack,
        SettingsStack
    },
    {
        tabBarOptions: {
            labelStyle: {
                fontSize: 10,
                fontFamily: "Verdana",
                color: "white"
            },
            style: {
                borderTopWidth: 1,
                borderTopColor: "white",
            }
        },
        initialRouteName: "SummaryStack",
        tabBarComponent: DynamicTabBar
    }
);

tabNavigator.path = "";
export default tabNavigator;
