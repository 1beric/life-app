import React from 'react'
import { 
    View,
    ScrollView,
    Text,
    StyleSheet,
} from 'react-native'
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";

export default class SettingsScreen extends React.Component {

    render() {
        return (
            <ScrollView style={styles.mainContainer}>
                <View style={styles.verticalGap} />
                <ColorLayout text="Main color: " tintColor={Colors.tintColor} />
                <View style={styles.verticalSep} />
                <ColorLayout text="Background color: " tintColor={Colors.backgroundColor} />
                <View style={styles.verticalSep} />
                <ColorLayout text="Tab Bar color: " tintColor={Colors.tabBar} />
                <View style={styles.verticalSep} />
                <ColorLayout text="_____ color: " tintColor={"white"} />
                <View style={styles.verticalGap} />
            </ScrollView>
        );
    }
}


class ColorLayout extends React.Component {

    render() {
        return (
            <View style={styles.horizontalContainer}>
                <View style={styles.horizontalGap} />
                <View style={[styles.square, { backgroundColor: this.props.tintColor }]} />
                <View style={styles.horizontalGap} />
                <Text style={styles.label}>{this.props.text}{this.props.tintColor}</Text>
            </View>
        );
    }


}



const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: Colors.backgroundColor,
    },
    horizontalContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        maxHeight: Layout.window.width * .15,
    },
    horizontalGap: {
        width: Layout.window.width * .1,
    },
    verticalGap: {
        height: Layout.window.width * .1,
    }, 
    verticalSep: {
        height: Layout.window.width * .05,
        marginTop: Layout.window.width * .05,
        marginHorizontal: Layout.window.width * .075,
        borderTopWidth: 1,
        borderColor: "white"
    }, 
    label: {
        fontSize: 20,
        color: Colors.textColor,
        fontFamily: "Verdana",
    },
    square: {
        width: Layout.window.width * .15,
        height: Layout.window.width * .15,
        borderColor: "white",
        borderWidth: 1
    }
});
