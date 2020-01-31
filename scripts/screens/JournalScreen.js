import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Colors from "../constants/Colors";
import { connect } from "react-redux";
import { addJournal, changeJournal, removeJournal } from "../actions/Actions";

class JournalScreen extends React.Component {
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

const mapDispatchToProps = dispatch => ({
    addJournal: (date, entry) => dispatch(addJournal(name,date,entry)),
    changeJournal: (date, entry) => dispatch(changeJournal(name,date,entry)),
    removeJournal: (date) => dispatch(removeJournal(name,date))
})

export default connect(mapStateToProps,mapDispatchToProps)(JournalScreen);

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: Colors.defaultTint.backgroundColor
    }
});
