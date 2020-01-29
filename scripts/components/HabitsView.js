import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { thisTypeAnnotation } from "@babel/types";

export default class HabitsView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentHabit: "",
            habitList: [],
            currentMonth: new Date().getMonth() + 1,
            currentYear: new Date().getFullYear(),
            monthsHabits: {}
        };
    }

    setDateNow() {
        this.setState({
            currentMonth: new Date().getMonth() + 1,
            currentYear: new Date().getFullYear()
        });
    }

    incrementMonth() {
        this.setState(
            this.state.currentMonth == 12
                ? {
                      currentMonth: 1,
                      currentYear: this.state.currentYear + 1
                  }
                : {
                      currentMonth: this.state.currentMonth + 1
                  }
        );
    }

    decrementMonth() {
        this.setState(
            this.state.currentMonth == 1
                ? {
                      currentMonth: 12,
                      currentYear: this.state.currentYear - 1
                  }
                : {
                      currentMonth: this.state.currentMonth - 1
                  }
        );
    }

    loadHabits() {
        const { habits } = this.props.habits;
        this.setState({
            habitList: habits.map(element => element.name)
        });
        this.setState({});
    }

    render() {
        return (
            <ScrollView
                style={styles.habitScrollView}
                horizontal={true}
            ></ScrollView>
        );
    }
}

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
