import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Layout from "../constants/Layout";

export default class JournalEntry extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.mainContainer}>
				<Text style={styles.label}>{this.props.date}</Text>
				<Text style={styles.textBox}>{this.props.entry}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	mainContainer: {
		width: Layout.width * 0.85
	},
	label: {
		fontSize: 36,
		fontWeight: "200",
		color: "white",
		alignSelf: "baseline",
		marginVertical: 5
	},
	textBox: {
		fontSize: 20,
		fontWeight: "300",
		borderColor: "white",
		borderWidth: 1,
		color: "white",
		paddingVertical: 2,
		paddingHorizontal: 5
	}
});
