import React from "react";
import { Text, View, StyleSheet } from "react-native";
import {
    ScrollView,
    RectButton,
    TouchableOpacity
} from "react-native-gesture-handler";
import Layout from "../constants/Layout";
import { intMonths, monthDays } from "../constants/Months";
import { Ionicons } from "@expo/vector-icons";

export default class HabitsView extends React.Component {
    constructor(props) {
        super(props);
        this.getViews = this.getViews.bind(this);
    }

    getViews() {
        let views = [];
        for (
            let day = 1;
            day <= monthDays(intMonths(this.props.currentMonth));
            day++
        ) {
            let habits = [];
            for (let habit = 0; habit < this.props.habitList.length; habit++) {
                habits.push(
                    <TouchableOpacity
                        key={habit}
                        style={{
                            ...styles.habitSquare,
                            backgroundColor: this.props.monthsHabits[
                                day
                            ].includes(this.props.habitList[habit])
                                ? this.props.colorList[habit]
                                : "transparent"
                        }}
                        onPress={() =>
                            this.props.markHabit(
                                this.props.habitList[habit],
                                day
                            )
                        }
                    />
                );
            }

            views.push(
                <View
                    key={day}
                    style={{
                        ...styles.verticalView,
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <Text style={styles.numberLabel}>{day}</Text>
                    {habits}
                </View>
            );
        }
        return views;
    }

    render() {
        return (
            <View>
                <View
                    style={{ ...styles.horizontalView, alignItems: "center" }}
                >
                    <Text style={styles.label}>
                        {intMonths(this.props.currentMonth) +
                            ", " +
                            this.props.currentYear}
                    </Text>
                    <TouchableOpacity
                        onPress={this.props.decrementMonth}
                        style={{ marginLeft: 30, marginRight: 10 }}
                    >
                        <Ionicons
                            name="ios-arrow-dropleft-circle"
                            size={36}
                            color="white"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.props.incrementMonth}>
                        <Ionicons
                            name="ios-arrow-dropright-circle"
                            size={36}
                            color="white"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.habitPress("")}
                        style={{ marginLeft: 30 }}
                    >
                        <Ionicons
                            name="ios-close-circle"
                            size={36}
                            color="white"
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.horizontalView}>
                    <View
                        style={{
                            ...styles.verticalView,
                            width: Layout.width * 0.2,
                            marginTop: Layout.width * 0.1
                        }}
                    >
                        {this.props.habitList.map((habit, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={() =>
                                    this.props.currentHabit != habit
                                        ? this.props.habitPress(habit)
                                        : this.props.removeHabit(habit)
                                }
                            >
                                <Text style={styles.habitLabel}>
                                    {this.props.currentHabit != habit
                                        ? habit
                                        : "Delete?"}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <ScrollView
                        style={styles.habitScrollView}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        {this.getViews()}
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    horizontalView: {
        flexDirection: "row"
    },
    verticalView: {
        width: Layout.width * 0.1,
        flexDirection: "column"
    },
    habitScrollView: {
        width: Layout.width * 0.7
    },
    habitLabel: {
        fontSize: 24,
        fontWeight: "300",
        color: "white",
        alignSelf: "flex-start",
        width: Layout.width * 0.2,
        height: Layout.width * 0.1
    },
    numberLabel: {
        fontSize: 24,
        fontWeight: "300",
        color: "white",
        alignSelf: "center",
        textAlign: "center",
        paddingTop: 10,
        width: Layout.width * 0.1,
        height: Layout.width * 0.1
    },
    habitSquare: {
        width: Layout.width * 0.1,
        height: Layout.width * 0.1,
        borderColor: "white",
        borderWidth: 1
    },
    label: {
        fontSize: 36,
        fontWeight: "200",
        color: "white",
        alignSelf: "center",
        marginVertical: 5
    }
});
