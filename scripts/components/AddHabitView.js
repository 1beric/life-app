import React from "react";
import { TouchableOpacity, TextInput } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import Layout from "../constants/Layout";
import Colors from "../constants/Colors";

export default class AddHabitView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameValue: "",
            colorValue: ""
        };
        this.handleCheckPress = this.handleCheckPress.bind(this);
        this.handleColorPick = this.handleColorPick.bind(this);
    }

    handleCheckPress() {
        if (this.state.nameValue == "" || this.state.colorValue == "") return;
        this.props.addHabit(this.state.nameValue, this.state.colorValue);
        this.setState({
            nameValue: "",
            colorValue: ""
        });
        this.props.addHabitFalse();
    }

    handleColorPick(color) {
        this.setState({ colorValue: color });
    }

    render() {
        return (
            <View style={{ alignItems: "center" }}>
                <Text style={styles.label}>NAME</Text>
                <TextInput
                    style={styles.inputBox}
                    value={this.state.nameValue}
                    onChangeText={text => this.setState({ nameValue: text })}
                />
                <Text style={styles.label}>COLOR</Text>
                <View style={styles.colorPickerView}>
                    <TouchableOpacity
                        style={{
                            ...styles.squarePicker,
                            backgroundColor: Colors.habitColors.red
                        }}
                        onPress={() =>
                            this.handleColorPick(Colors.habitColors.red)
                        }
                    />
                    <TouchableOpacity
                        style={{
                            ...styles.squarePicker,
                            backgroundColor: Colors.habitColors.pink
                        }}
                        onPress={() =>
                            this.handleColorPick(Colors.habitColors.pink)
                        }
                    />
                    <TouchableOpacity
                        style={{
                            ...styles.squarePicker,
                            backgroundColor: Colors.habitColors.purple
                        }}
                        onPress={() =>
                            this.handleColorPick(Colors.habitColors.purple)
                        }
                    />
                    <TouchableOpacity
                        style={{
                            ...styles.squarePicker,
                            backgroundColor: Colors.habitColors.blue
                        }}
                        onPress={() =>
                            this.handleColorPick(Colors.habitColors.blue)
                        }
                    />
                    <TouchableOpacity
                        style={{
                            ...styles.squarePicker,
                            backgroundColor: Colors.habitColors.lightBlue
                        }}
                        onPress={() =>
                            this.handleColorPick(Colors.habitColors.lightBlue)
                        }
                    />
                    <TouchableOpacity
                        style={{
                            ...styles.squarePicker,
                            backgroundColor: Colors.habitColors.green
                        }}
                        onPress={() =>
                            this.handleColorPick(Colors.habitColors.green)
                        }
                    />
                    <TouchableOpacity
                        style={{
                            ...styles.squarePicker,
                            backgroundColor: Colors.habitColors.yellow
                        }}
                        onPress={() =>
                            this.handleColorPick(Colors.habitColors.yellow)
                        }
                    />
                    <TouchableOpacity
                        style={{
                            ...styles.squarePicker,
                            backgroundColor: Colors.habitColors.orange
                        }}
                        onPress={() =>
                            this.handleColorPick(Colors.habitColors.orange)
                        }
                    />
                </View>
                <TouchableOpacity
                    style={styles.circleButton}
                    onPress={this.handleCheckPress}
                >
                    <Ionicons
                        name={"ios-checkmark-circle"}
                        size={88}
                        color="white"
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    label: {
        fontSize: 36,
        fontWeight: "200",
        color: "white",
        alignSelf: "center",
        marginVertical: 5
    },
    squarePicker: {
        width: Layout.width * 0.15,
        height: Layout.width * 0.15,
        borderColor: "white",
        borderWidth: 1
    },
    colorPickerView: {
        flex: 1,
        flexDirection: "row",
        width: Layout.width * 0.6,
        flexWrap: "wrap"
    },
    circleButton: {
        width: Layout.height * 0.1,
        height: Layout.height * 0.1,
        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: Layout.height * 0.05
    },
    inputBox: {
        borderColor: "white",
        borderWidth: 2,
        width: Layout.width * 0.6,
        paddingVertical: 3,
        paddingHorizontal: 5,
        marginBottom: 20,
        color: "white",
        textAlign: "center",
        fontSize: 24,
        fontWeight: "300"
    }
});
