import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import { connect } from "react-redux"; //redux??

import { setColor } from "../actions/Actions";
import { TouchableOpacity } from "react-native-gesture-handler";

class SettingsScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView
                style={[
                    styles.mainContainer,
                    {
                        backgroundColor: this.props.preferences.color
                            .backgroundColor
                    }
                ]}
            >
                <View style={styles.verticalGap} />
                <ColorLayout
                    text="Default Color (Blue): "
                    tintColor={Colors.defaultTint.tintColor}
                    setColor={this.props.setColor}
                    textColor={this.props.preferences.color.textColor}
                />
                <View style={styles.verticalSep} />
                <ColorLayout
                    text="Teal: "
                    tintColor={Colors["#60ffaf"].tintColor}
                    setColor={this.props.setColor}
                    textColor={this.props.preferences.color.textColor}
                />
                <View style={styles.verticalSep} />
                <ColorLayout
                    text="Green: "
                    tintColor={Colors["#60ff60"].tintColor}
                    setColor={this.props.setColor}
                    textColor={this.props.preferences.color.textColor}
                />
                <View style={styles.verticalSep} />
                <ColorLayout
                    text="Light Green: "
                    tintColor={Colors["#cfff60"].tintColor}
                    setColor={this.props.setColor}
                    textColor={this.props.preferences.color.textColor}
                />
                <View style={styles.verticalSep} />
                <ColorLayout
                    text="Orange: "
                    tintColor={Colors["#ffcf60"].tintColor}
                    setColor={this.props.setColor}
                    textColor={this.props.preferences.color.textColor}
                />
                <View style={styles.verticalSep} />
                <ColorLayout
                    text="Red: "
                    tintColor={Colors["#ff6060"].tintColor}
                    setColor={this.props.setColor}
                    textColor={this.props.preferences.color.textColor}
                />
                <View style={styles.verticalSep} />
                <ColorLayout
                    text="Gray: "
                    tintColor={Colors["#cccccc"].tintColor}
                    setColor={this.props.setColor}
                    textColor={this.props.preferences.color.textColor}
                />
                <View style={styles.verticalGap} />
            </ScrollView>
        );
    }
}

class ColorLayout extends React.Component {
    constructor(props) {
        super(props);
        this.handlePress = this.handlePress.bind(this);
    }

    handlePress() {
        this.props.setColor(this.props.tintColor);
    }

    render() {
        return (
            <View style={styles.horizontalContainer}>
                <View style={styles.horizontalGap} />
                <TouchableOpacity
                    style={[
                        styles.square,
                        { backgroundColor: this.props.tintColor }
                    ]}
                    onPress={this.handlePress}
                />
                <View style={styles.horizontalGap} />
                <Text
                    style={{
                        ...styles.label,
                        color: this.props.textColor
                    }}
                >
                    {this.props.text}
                    {this.props.tintColor}
                </Text>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    preferences: state.preferences
});

const mapDispatchToProps = dispatch => ({
    setColor: color => dispatch(setColor(color))
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: Colors.defaultTint.backgroundColor
    },
    horizontalContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        maxHeight: Layout.window.width * 0.15
    },
    horizontalGap: {
        width: Layout.window.width * 0.1
    },
    verticalGap: {
        height: Layout.window.width * 0.1
    },
    verticalSep: {
        height: Layout.window.width * 0.05,
        marginTop: Layout.window.width * 0.05,
        marginHorizontal: Layout.window.width * 0.075,
        borderTopWidth: 1,
        borderColor: "white"
    },
    label: {
        fontSize: 20,
        color: Colors.defaultTint.textColor,
        fontFamily: "Verdana"
    },
    square: {
        width: Layout.window.width * 0.15,
        height: Layout.window.width * 0.15,
        borderColor: "white",
        borderWidth: 1
    }
});
