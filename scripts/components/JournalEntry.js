import React from 'react';
import { View, StyleSheet } from 'react-native';
import Layout from "../constants/Layout";

export default class JournalEntry extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <View style={styles.mainContainer}></View>;
    }

}

const styles = StyleSheet.create({
    mainContainer: {
        width: Layout.width * .85
    }
})