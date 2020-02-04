import React from "react";
import { TouchableOpacity, TextInput } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import Layout from "../constants/Layout";
import Colors from "../constants/Colors";

export default class AddJournalView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dateValue: formatDate(
				new Date().getDate(),
				new Date().getMonth() + 1,
				new Date().getFullYear()
			),
			entryValue: ""
		};
		this.handleCheckPress = this.handleCheckPress.bind(this);
	}

	handleCheckPress() {
		if (this.state.dateValue == "" || this.state.entryValue == "") return;
		this.props.addJournal(this.state.dateValue, this.state.entryValue);
		this.setState({
			dateValue: "",
			entryValue: ""
		});
		this.props.addJournalFalse();
	}

	render() {
		return (
			<View style={{ alignItems: "center" }}>
				<Text style={styles.label}>DATE</Text>
				<TextInput
					style={styles.dateBox}
					value={this.state.dateValue}
					onChangeText={text => this.setState({ dateValue: text })}
					keyboardAppearance="dark"
				/>
				<Text style={styles.label}>ENTRY</Text>
				<TextInput
					style={styles.entryBox}
					value={this.state.entryValue}
					onChangeText={text => this.setState({ entryValue: text })}
					keyboardAppearance="dark"
					multiline={true}
				/>
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

const formatDate = (day, month, year) =>
	twoDigits(day) + "-" + twoDigits(month) + "-" + year;

const twoDigits = number => {
	let strNum = number + "";
	if (strNum.length == 1) strNum = "0" + strNum;
	return strNum;
};

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
	dateBox: {
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
	},
	entryBox: {
		borderColor: "white",
		borderWidth: 2,
		width: Layout.width * 0.85,
		height: Layout.height * 0.2,
		paddingVertical: 3,
		paddingHorizontal: 5,
		marginBottom: 20,
		color: "white",
		textAlign: "center",
		fontSize: 24,
		fontWeight: "300",
		textAlign: "left"
	}
});
