import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import { connect } from "react-redux";
import {
    addHabit,
    removeHabit,
    changeHabit,
    markHabit
} from "../actions/Actions";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import AddHabitView from "../components/AddHabitView";

class HabitScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addHabit: false,
            selectedHabit: ""
        };
        this.handleAddCancelPress = this.handleAddCancelPress.bind(this);
        this.addHabitFalse = this.addHabitFalse.bind(this);
        this.handleHabitPress = this.handleHabitPress.bind(this);
    }

    handleAddCancelPress() {
        if (this.state.addHabit) {
            this.setState({
                addHabit: false
            });
        } else {
            this.setState({ addHabit: true });
        }
    }

    addHabitFalse() {
        this.setState({ addHabit: false });
    }

    handleHabitPress(name) {
        this.setState({ selectedHabit: name });
    }

    render() {
        let centerView = <View></View>;
        if (this.state.addHabit) {
            centerView = (
                <AddHabitView
                    addHabitFalse={this.addHabitFalse}
                    addHabit={this.props.addHabit}
                />
            );
        } else {
            centerView = <View />;
        }

        return (
            <View
                style={{
                    ...styles.mainContainer,
                    backgroundColor: this.props.color.backgroundColor
                }}
            >
                <Text style={styles.mainLabel}>HABITS</Text>
                <View style={styles.centerView}>{centerView}</View>
                <TouchableOpacity
                    style={styles.circleButton}
                    onPress={this.handleAddCancelPress}
                >
                    <Ionicons
                        name={
                            this.state.addHabit
                                ? "ios-close-circle"
                                : "ios-add-circle"
                        }
                        size={88}
                        color="white"
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    color: state.preferences.color,
    habits: state.habits
});

const mapDispatchToProps = dispatch => ({
    addHabit: (name, color) => dispatch(addHabit(name, color)),
    removeHabit: name => dispatch(removeHabit(name)),
    changeHabit: (name, color) => dispatch(changeHabit(name, color)),
    markHabit: (name, date, completed) =>
        dispatch(markHabit(name, date, completed))
});

export default connect(mapStateToProps, mapDispatchToProps)(HabitScreen);

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: Colors.defaultTint.backgroundColor
    },
    centerView: {
        flex: 1,
        height: Layout.window.height * 0.7
    },
    circleButton: {
        width: Layout.window.height * 0.1,
        height: Layout.window.height * 0.1,
        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: Layout.window.height * 0.05
    },
    mainLabel: {
        fontSize: 48,
        fontWeight: "200",
        color: "white",
        alignSelf: "center",
        marginVertical: 10
    },
    label: {
        fontSize: 36,
        fontWeight: "200",
        color: "white",
        alignSelf: "center",
        marginVertical: 5
    },
    habitScrollView: {
        width: Layout.window.width * 0.9
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
        width: Layout.window.width * 0.2
    },
    habitSquare: {
        width: Layout.window.width * 0.1,
        height: Layout.window.width * 0.1,
        borderColor: "white",
        borderWidth: 1
    }
});
