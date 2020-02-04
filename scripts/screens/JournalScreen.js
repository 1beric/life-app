import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Colors from "../constants/Colors";
import { connect } from "react-redux";
import { addJournal, changeJournal, removeJournal } from "../actions/Actions";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Layout from "../constants/Layout";
import JournalEntry from "../components/JournalEntry";
import { Ionicons } from "@expo/vector-icons";
import AddJournalView from "../components/AddJournalView";

class JournalScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			addJournal: false
		};
		this.handleAddCancelPress = this.handleAddCancelPress.bind(this);
		this.createEntries = this.createEntries.bind(this);
		this.addJournal = this.addJournal.bind(this);
	}

	handleAddCancelPress() {
		if (this.state.addJournal) {
			this.setState({
				addJournal: false
			});
		} else {
			this.setState({ addJournal: true });
		}
	}

	createEntries() {
		const entries = this.props.entries;
		let renderedEntries = [];
		entries.forEach((element, index) => {
			renderedEntries.push(
				<JournalEntry
					entry={element.entry}
					date={element.date}
					tintColor={this.props.color.tintColor}
					key={index}
				/>
			);
		});
	}

	addJournal(date, entry) {
		this.props.addJournal(date, entry);
		this.setState({
			addJournal: false
		});
	}

	render() {
		let centerView = this.state.addJournal ? (
			<View style={styles.scrollView}>
				<AddJournalView
					addJournalFalse={() => this.setState({ addJournal: false })}
					addJournal={this.addJournal}
				/>
			</View>
		) : (
			<ScrollView style={styles.scrollView}>
				{this.createEntries()}
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
	entries: state.journalEntries
});

const mapDispatchToProps = dispatch => ({
	addJournal: (date, entry) => dispatch(addJournal(date, entry)),
	changeJournal: (date, entry) => dispatch(changeJournal(date, entry)),
	removeJournal: date => dispatch(removeJournal(date))
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
