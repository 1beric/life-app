import React from 'react'
import { 
    StyleSheet, 
    View 
} from 'react-native'
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import { ScrollView } from 'react-native-gesture-handler';

export default class QueryScreen extends React.Component {

    render() {
        return (
            <View style={styles.mainContainer}>
                <ScrollView style={styles.scrollView}>





                </ScrollView>
                <View style={styles.verticalGap} />
                <View style={styles.circle}>

                </View>
                
                <View style={styles.verticalGap} />

            </View>
        );
    }

}


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: Colors.backgroundColor,
    },
    scrollView:{
        flex: 1,
        height: Layout.window.height * .7
    },
    circle: {
        width: Layout.window.height * .1,
        height: Layout.window.height * .1,
        borderRadius: Layout.window.height * .1,
        borderColor: "white",
        borderWidth: 1,
        backgroundColor: Colors.tintColor
    },
    verticalGap: {
        height: Layout.window.height * .05,
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