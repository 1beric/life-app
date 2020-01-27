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
import { TouchableOpacity, TextInput } from "react-native-gesture-handler";

class HabitScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { addHabit: false };
        this.handleAddPress = this.handleAddPress.bind(this);
    }

    handleAddPress() {
        if (this.state.addHabit) {
            this.setState({ addHabit: false });
        } else {
            this.setState({ addHabit: true });
        }
    }

    render() {
        let centerView = <View></View>;

        if (this.state.addHabit) {
            centerView = (
                <View>
                    <Text style={styles.label}>NAME</Text>
                    <TextInput
                        style={styles.inputBox}
                        defaultValue="Enter the habit name."
                        clearTextOnFocus={true}
                    ></TextInput>
                </View>
            );
        } else {
            centerView = <Text>HABITS</Text>;
        }

        return (
            <View
                style={{
                    ...styles.mainContainer,
                    backgroundColor: this.props.color.backgroundColor
                }}
            >
                <View style={styles.centerView}>{centerView}</View>
                <TouchableOpacity
                    style={styles.circle}
                    onPress={this.handleAddPress}
                >
                    <Text style={styles.plus}>+</Text>
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
        height: Layout.window.height * 0.7,
        paddingTop: Layout.window.height * 0.02
    },
    circle: {
        width: Layout.window.height * 0.1,
        height: Layout.window.height * 0.1,
        borderRadius: Layout.window.height * 0.1,
        borderColor: "white",
        borderWidth: 2,
        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: Layout.window.height * 0.05
    },
    plus: {
        fontSize: 96,
        color: "white",
        fontWeight: "100",
        transform: [{ translateY: -8 }]
    },
    inputBox: {
        borderColor: "white",
        borderWidth: 2,
        width: Layout.window.width * 0.4,
        paddingVertical: 3,
        paddingHorizontal: 5,
        color: "white",
        textAlign: "center"
    },
    label: {
        fontSize: 24,
        fontWeight: "100",
        color: "white",
        fontFamily: "Verdana",
        alignSelf: "center",
        marginBottom: 10
    },
    square: {
        width: Layout.window.width * 0.15,
        height: Layout.window.width * 0.15,
        borderColor: "white",
        borderWidth: 1
    }
});
