import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Colors from "../constants/Colors";
import { connect } from "react-redux";

class BudgetScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View
                style={{
                    ...styles.mainContainer,
                    backgroundColor: this.props.color.backgroundColor
                }}
            ></View>
        );
    }
}

const mapStateToProps = state => ({
    color: state.preferences.color
});

export default connect(mapStateToProps)(BudgetScreen);

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: Colors.defaultTint.backgroundColor
    }
});
