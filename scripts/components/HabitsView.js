import React from "react";
import { Text, View, StyleSheet } from "react-native";
import {
    ScrollView,
    RectButton,
    TouchableOpacity
} from "react-native-gesture-handler";
import Layout from "../constants/Layout";

export default class HabitsView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentHabit: ""
        };
    }

    render() {
        return (
            <ScrollView style={styles.habitScrollView} horizontal={true}>
                {/*
                    add habits with a gap, then loop through days, adding each as a vertical section
                    */}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    habitScrollView: {
        width: Layout.width * 0.9
    },
    habitRowView: {
        flexDirection: "row",
        marginVertical: 5
    },
    habitLabel: {
        fontSize: 24,
        fontWeight: "300",
        color: "white",
        alignSelf: "flex-start",
        width: Layout.width * 0.2
    },
    habitSquare: {
        width: Layout.width * 0.1,
        height: Layout.width * 0.1,
        borderColor: "white",
        borderWidth: 1
    }
});

/*
<ScrollView style={styles.habitScrollView}>
    {this.props.habits.map((item, index) => {
        return (
            <ScrollView
                style={styles.habitRowView}
                horizontal={true}
            >
                <TouchableOpacity
                    onPress={() =>
                        this.handleHabitPress(item.name)
                    }
                >
                    <Text style={styles.habitLabel} key={index}>
                        {item.name}
                    </Text>
                </TouchableOpacity>
                <View
                    style={{
                        alignItems: "center",
                        flexDirection: "row",
                        flexWrap: "wrap"
                    }}
                >
                    {item.days.map((day, dayIndex) => {
                        return (
                            <View key={dayIndex}>
                                <Text style={styles.habitLabel}>
                                    {day.date}
                                </Text>
                                <View
                                    style={{
                                        ...styles.habitSquare,
                                        backgroundColor: day.completed
                                            ? item.color
                                            : "transparent"
                                    }}
                                />
                            </View>
                        );
                    })}
                </View>
            </ScrollView>
        );
    })}
</ScrollView>
*/
