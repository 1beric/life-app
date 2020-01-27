import React from 'react'
import { 
    StyleSheet, 
    View 
} from 'react-native'
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';

class QueryScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{...styles.mainContainer,backgroundColor: this.props.color.backgroundColor}}>
                <ScrollView style={styles.scrollView}>





                </ScrollView>
                <View style={styles.verticalGap} />
                <View style={styles.circle} />
                <View style={styles.verticalGap} />

            </View>
        );
    }

}

const mapStateToProps = state => ({
    color: state.preferences.color
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(QueryScreen);


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: Colors.defaultTint.backgroundColor,
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
        borderWidth: 2,
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