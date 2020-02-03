import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Colors from "../constants/Colors";
import { connect } from "react-redux";
import { addJournal, changeJournal, removeJournal } from "../actions/Actions";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Layout from "../constants/Layout";
import JournalEntry from "../components/JournalEntry";
import { Ionicons } from "@expo/vector-icons";

class JournalScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			addJournal: false,
			update: false
		};
		this.handleAddCancelPress = this.handleAddCancelPress.bind(this);
	}

	handleAddCancelPress() {
		if (this.state.addJournal) {
			this.setState({
				addJournal: false
			});
			this.setState({ update: true });
		} else {
			this.setState({ addJournal: true });
		}
	}

	render() {
		let centerView = this.state.addJournal ? (
			<View style={styles.scrollView} />
		) : (
			<ScrollView style={styles.scrollView}>
				<JournalEntry
					entry="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					date="01-01-2020"
					tintColor={this.props.color.tintColor}
				/>
				<JournalEntry
					entry="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					date="01-01-2020"
					tintColor={this.props.color.tintColor}
				/>
				<JournalEntry
					entry="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					date="01-01-2020"
					tintColor={this.props.color.tintColor}
				/>
				<JournalEntry
					entry="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					date="01-01-2020"
					tintColor={this.props.color.tintColor}
				/>
			</ScrollView>
		);

		return (
			<View
				style={{
					...styles.mainContainer,
					backgroundColor: this.props.color.backgroundColor
				}}
			>
				<Text style={styles.mainLabel}>JOURNAL</Text>
				{centerView}
				<TouchableOpacity
					style={styles.circleButton}
					onPress={this.handleAddCancelPress}
				>
					<Ionicons
						name={
							this.state.addJournal
								? "ios-close-circle"
								: "ios-add-circle"
						}
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
	journalEntries: state.journalEntries
});

const mapDispatchToProps = dispatch => ({
	addJournal: (date, entry) => dispatch(addJournal(name, date, entry)),
	changeJournal: (date, entry) => dispatch(changeJournal(name, date, entry)),
	removeJournal: date => dispatch(removeJournal(name, date))
});

export default connect(mapStateToProps, mapDispatchToProps)(JournalScreen);

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		flexDirection: "column",
		alignItems: "center",
		backgroundColor: Colors.defaultTint.backgroundColor
	},
	scrollView: {
		flex: 1,
		height: Layout.height * 0.7
	},
	circleButton: {
		width: Layout.height * 0.1,
		height: Layout.height * 0.1,
		backgroundColor: "transparent",
		alignItems: "center",
		justifyContent: "center",
		marginVertical: Layout.height * 0.05
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
	}
});
