import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import { connect } from "react-redux";
import {
	addHabit,
	removeHabit,
	changeHabit,
	markHabit
} from "../actions/Actions";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import AddHabitView from "../components/AddHabitView";
import HabitsView from "../components/HabitsView";
import { intMonths, monthDays } from "../constants/Months";

class HabitScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			addHabit: false,
			habitList: [],
			currentMonth: new Date().getMonth() + 1,
			currentYear: new Date().getFullYear(),
			monthsHabits: {},
			currentHabit: "",
			update: false
		};
		this.handleAddCancelPress = this.handleAddCancelPress.bind(this);
		this.addHabitFalse = this.addHabitFalse.bind(this);
		this.handleHabitPress = this.handleHabitPress.bind(this);
		this.setDateNow = this.setDateNow.bind(this);
		this.incrementMonth = this.incrementMonth.bind(this);
		this.decrementMonth = this.decrementMonth.bind(this);
		this.loadHabits = this.loadHabits.bind(this);
		this.markHabit = this.markHabit.bind(this);
		this.removeHabit = this.removeHabit.bind(this);
	}

	setDateNow() {
		this.setState({
			currentMonth: new Date().getMonth() + 1,
			currentYear: new Date().getFullYear()
		});
	}

	incrementMonth() {
		this.setState(
			this.state.currentMonth == 12
				? {
						currentMonth: 1,
						currentYear: this.state.currentYear + 1
				  }
				: {
						currentMonth: this.state.currentMonth + 1
				  }
		);
		this.setState({ update: true });
	}

	decrementMonth() {
		this.setState(
			this.state.currentMonth == 1
				? {
						currentMonth: 12,
						currentYear: this.state.currentYear - 1
				  }
				: {
						currentMonth: this.state.currentMonth - 1
				  }
		);
		this.setState({ update: true });
	}

	loadHabits() {
		const habits = this.props.habits;
		const month = this.state.currentMonth;
		const year = this.state.currentYear;
		let currentMonthsHabits = {};
		for (
			let day = 1;
			day <= monthDays(intMonths(this.state.currentMonth));
			day++
		) {
			currentMonthsHabits[day] = [];
			habits.forEach(element => {
				if (
					element.daysCompleted.includes(formatDate(day, month, year))
				) {
					currentMonthsHabits[day].push(element.name);
				}
			});
		}
		this.setState({
			habitList: habits.map(element => element.name),
			colorList: habits.map(element => element.color),
			monthsHabits: currentMonthsHabits
		});
	}

	markHabit(habit, day) {
		this.props.markHabit(
			habit,
			formatDate(day, this.state.currentMonth, this.state.currentYear)
		);
		this.setState({ update: true });
	}

	removeHabit(name) {
		this.props.removeHabit(name);
		this.setState({ update: true, currentHabit: "" });
	}

	handleAddCancelPress() {
		if (this.state.addHabit) {
			this.setState({
				addHabit: false
			});
			this.setState({ update: true });
		} else {
			this.setState({ addHabit: true });
		}
	}

	addHabitFalse() {
		this.setState({ addHabit: false });
		this.setState({ update: true });
	}

	handleHabitPress(name) {
		this.setState({ currentHabit: name });
	}

	componentDidMount() {
		this.loadHabits();
	}

	componentDidUpdate() {
		if (this.state.update) {
			this.loadHabits();
			this.setState({ update: false });
		}
	}

	render() {
		if (this.state.update) {
			return <View />;
		}
		let centerView = this.state.addHabit ? (
			<AddHabitView
				addHabitFalse={this.addHabitFalse}
				addHabit={this.props.addHabit}
			/>
		) : (
			<HabitsView
				habitList={this.state.habitList}
				monthsHabits={this.state.monthsHabits}
				currentMonth={this.state.currentMonth}
				currentYear={this.state.currentYear}
				markHabit={this.markHabit}
				colorList={this.state.colorList}
				habitPress={this.handleHabitPress}
				removeHabit={this.removeHabit}
				currentHabit={this.state.currentHabit}
				incrementMonth={this.incrementMonth}
				decrementMonth={this.decrementMonth}
			/>
		);
		return (
			<View
				style={{
					...styles.mainContainer,
					backgroundColor: this.props.color.backgroundColor
				}}
			>
				<Text style={styles.mainLabel}>HABITS</Text>
				<View style={styles.centerView}>{centerView}</View>
				<TouchableOpacity
					style={styles.circleButton}
					onPress={this.handleAddCancelPress}
				>
					<Ionicons
						name={
							this.state.addHabit
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

const formatDate = (day, month, year) =>
	twoDigits(day) + "-" + twoDigits(month) + "-" + year;

const twoDigits = number => {
	let strNum = number + "";
	if (strNum.length == 1) strNum = "0" + strNum;
	return strNum;
};

const mapStateToProps = state => ({
	color: state.preferences.color,
	habits: state.habits
});

const mapDispatchToProps = dispatch => ({
	addHabit: (name, color) => dispatch(addHabit(name, color)),
	removeHabit: name => dispatch(removeHabit(name)),
	changeHabit: (name, color) => dispatch(changeHabit(name, color)),
	markHabit: (name, date) => dispatch(markHabit(name, date)),
	clearHabits: () => dispatch({ type: "clear_habits" }) // probably wont use
});

export default connect(mapStateToProps, mapDispatchToProps)(HabitScreen);

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		flexDirection: "column",
		alignItems: "center",
		backgroundColor: Colors.defaultTint.backgroundColor
	},
	centerView: {
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
