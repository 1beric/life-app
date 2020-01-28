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
import { TouchableOpacity, TextInput, ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";


class HabitScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            addHabit: false, 
            nameValue: "", 
            colorValue: "",
            selectedHabit: "" 
        };
        this.handleAddCancelPress = this.handleAddCancelPress.bind(this);
        this.handleColorPick = this.handleColorPick.bind(this);
        this.handleCheckPress = this.handleCheckPress.bind(this);
        this.handleHabitPress = this.handleHabitPress.bind(this);
    }

    handleAddCancelPress() {
        if (this.state.addHabit) {
            this.setState({ 
                addHabit: false, 
                nameValue: "", 
                colorValue: ""
            });
        } else {
            this.setState({ addHabit: true });
        }
    }

    handleCheckPress() {
        if (this.state.nameValue == "" || this.state.colorValue == "") return;
        this.props.addHabit(this.state.nameValue, this.state.colorValue);
        this.setState({ 
            addHabit: false, 
            nameValue: "", 
            colorValue: ""
        });
    }

    handleColorPick(color) {
        this.setState({ colorValue: color });
    }

    handleHabitPress(name) {
        this.setState({ selectedHabit: name });
    }

    render() {
        let centerView = <View></View>;
        if (this.state.addHabit) {
            centerView = (
                <View style={{alignItems: "center"}}>
                    <Text style={styles.label}>NAME</Text>
                    <TextInput
                        style={styles.inputBox}
                        value={this.state.nameValue}
                        onChangeText={(text)=>this.setState({nameValue: text})}
                    />
                    <Text style={styles.label}>COLOR</Text>
                    <View style={styles.colorPickerView}>
                        <TouchableOpacity 
                            style={{ 
                                ...styles.squarePicker,
                                backgroundColor: Colors.habitColors.red
                            }}
                            onPress={()=>this.handleColorPick(Colors.habitColors.red)}
                        />
                        <TouchableOpacity 
                            style={{ 
                                ...styles.squarePicker,
                                backgroundColor: Colors.habitColors.pink
                            }}
                            onPress={()=>this.handleColorPick(Colors.habitColors.pink)}
                        />
                        <TouchableOpacity 
                            style={{ 
                                ...styles.squarePicker,
                                backgroundColor: Colors.habitColors.purple
                            }}
                            onPress={()=>this.handleColorPick(Colors.habitColors.purple)}
                        />
                        <TouchableOpacity 
                            style={{ 
                                ...styles.squarePicker,
                                backgroundColor: Colors.habitColors.blue
                            }}
                            onPress={()=>this.handleColorPick(Colors.habitColors.blue)}
                        />
                        <TouchableOpacity 
                            style={{ 
                                ...styles.squarePicker,
                                backgroundColor: Colors.habitColors.lightBlue
                            }}
                            onPress={()=>this.handleColorPick(Colors.habitColors.lightBlue)}
                        />
                        <TouchableOpacity 
                            style={{ 
                                ...styles.squarePicker,
                                backgroundColor: Colors.habitColors.green
                            }}
                            onPress={()=>this.handleColorPick(Colors.habitColors.green)}
                        />
                        <TouchableOpacity 
                            style={{ 
                                ...styles.squarePicker,
                                backgroundColor: Colors.habitColors.yellow
                            }}
                            onPress={()=>this.handleColorPick(Colors.habitColors.yellow)}
                        />
                        <TouchableOpacity 
                            style={{ 
                                ...styles.squarePicker,
                                backgroundColor: Colors.habitColors.orange
                            }}
                            onPress={()=>this.handleColorPick(Colors.habitColors.orange)}
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
        } else {
            centerView = (
                <ScrollView style={styles.habitScrollView}>
                    {this.props.habits.map(
                        (item,index)=> {
                            return <ScrollView style={styles.habitRowView} horizontal={true}>
                                <TouchableOpacity onPress={()=>this.handleHabitPress(item.name)}>
                                    <Text 
                                        style={styles.habitLabel}
                                        key={index}
                                    >
                                        {item.name}
                                    </Text>
                                </TouchableOpacity>
                                <View style={{ alignItems: "center", flexDirection: "row", flexWrap: "wrap" }}>
                                    {item.days.map(
                                        (day,dayIndex)=> {
                                            return <View key={dayIndex}>
                                                <Text style={styles.habitLabel}>{day.date}</Text>
                                                <View style={{ ...styles.habitSquare, backgroundColor: day.completed ? item.color : "transparent" }} />
                                            </View>
                                        }
                                    )}
                                </View>
                                
                            </ScrollView>
                        }
                    )}
                </ScrollView>
            );
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
                        name={this.state.addHabit ? "ios-close-circle" : "ios-add-circle"}
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
        height: Layout.window.height * 0.7,
    },
    circleButton: {
        width: Layout.window.height * 0.1,
        height: Layout.window.height * 0.1,
        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: Layout.window.height * 0.05
    },
    inputBox: {
        borderColor: "white",
        borderWidth: 2,
        width: Layout.window.width * 0.6,
        paddingVertical: 3,
        paddingHorizontal: 5,
        marginBottom: 20,
        color: "white",
        textAlign: "center",
        fontSize: 24,
        fontWeight: "300"
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
    squarePicker: {
        width: Layout.window.width * 0.15,
        height: Layout.window.width * 0.15,
        borderColor: "white",
        borderWidth: 1
    },
    colorPickerView: {
        flex: 1,
        flexDirection: "row",
        width: Layout.window.width * 0.6,
        flexWrap: "wrap"
    },
    habitScrollView: {
        width: Layout.window.width * 0.9,
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
        width: Layout.window.width * 0.20,
    },
    habitSquare: {
        width: Layout.window.width * 0.1,
        height: Layout.window.width * 0.1,
        borderColor: "white",
        borderWidth: 1
    }




});
