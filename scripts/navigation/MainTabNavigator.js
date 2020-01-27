import React from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";

import TabBarIcon from "../components/TabBarIcon";
import SettingsScreen from "../screens/SettingsScreen";
import BudgetScreen from "../screens/BudgetScreen";
import HabitScreen from "../screens/HabitScreen";
import JournalScreen from "../screens/JournalScreen";
import CalendarScreen from "../screens/CalendarScreen";
import DynamicTabBar from "../components/DynamicTabBar";

import Colors from "../constants/Colors";

const config = Platform.select({
    web: { headerMode: "screen" },
    default: {}
});

const CalendarStack = createStackNavigator(
    {
        Calendar: CalendarScreen
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
CalendarStack.navigationOptions = {
    tabBarLabel: "Calendar",
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === "ios" ? "ios-calendar" : "md-calendar"}
        />
    )
};
CalendarStack.path = "";

const BudgetStack = createStackNavigator(
    {
        Budget: BudgetScreen
    },
    config
);
BudgetStack.navigationOptions = {
    tabBarLabel: "Budget",
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === "ios" ? "ios-wallet" : "md-wallet"}
        />
    )
};
BudgetStack.path = "";

const HabitStack = createStackNavigator(
    {
        Habit: HabitScreen
    },
    config
);
HabitStack.navigationOptions = {
    tabBarLabel: "Habit",
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === "ios"
                    ? "ios-checkmark-circle"
                    : "md-checkmark-circle"
            }
        />
    )
};
HabitStack.path = "";

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
            name={Platform.OS === "ios" ? "ios-journal" : "md-journa;"}
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
            name={Platform.OS === "ios" ? "ios-cog" : "md-cog"}
        />
    )
};
SettingsStack.path = "";

const tabNavigator = createBottomTabNavigator(
    {
        CalendarStack,
        JournalStack,
        HabitStack,
        BudgetStack,
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
                borderTopColor: "white"
            }
        },
        initialRouteName: "CalendarStack",
        tabBarComponent: DynamicTabBar
    }
);

tabNavigator.path = "";
export default tabNavigator;
