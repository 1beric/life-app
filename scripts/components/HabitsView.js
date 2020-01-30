import React from "react";
import { Text, View, StyleSheet } from "react-native";
import {
	ScrollView,
	RectButton,
	TouchableOpacity
} from "react-native-gesture-handler";
import Layout from "../constants/Layout";
import { intMonths, monthDays } from "../constants/Months";

export default class HabitsView extends React.Component {
	constructor(props) {
		super(props);
		this.getViews = this.getViews.bind(this);
	}

	getViews() {
		let views = [];
		for (
			let day = 1;
			day <= monthDays(intMonths(this.props.currentMonth));
			day++
		) {
			let habits = [];
			for (let habit = 0; habit < this.props.habitList.length; habit++) {
				habits.push(
					<TouchableOpacity
						style={{
							...styles.habitSquare,
							backgroundColor: this.props.monthsHabits[
								day
							].includes(this.props.habitList[habit])
								? "white"
								: "transparent"
						}}
					/>
				);
			}

			views.push(
				<View key={day} style={styles.verticalView}>
					<Text style={styles.numberLabel}>{day}</Text>
					{habits}
				</View>
			);
		}
		return views;
	}

	/*
        add habits with a gap, then loop through days, adding each as a vertical section
    */
	render() {
		return (
			<View style={styles.mainContainer}>
				<View
					style={{
						...styles.verticalView,
						width: Layout.width * 0.2,
						marginTop: Layout.width * 0.1
					}}
				>
					{this.props.habitList.map((habit, index) => (
						<Text style={styles.habitLabel} key={index}>
							{habit}
						</Text>
					))}
				</View>
				<ScrollView style={styles.habitScrollView} horizontal={true}>
					{this.getViews()}
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	mainContainer: {
		flexDirection: "row"
	},
	verticalView: {
		width: Layout.width * 0.1,
		flexDirection: "column"
	},
	habitScrollView: {
		width: Layout.width * 0.7
	},
	habitLabel: {
		fontSize: 24,
		fontWeight: "300",
		color: "white",
		alignSelf: "flex-start",
		width: Layout.width * 0.2,
		height: Layout.width * 0.1
	},
	numberLabel: {
		fontSize: 24,
		fontWeight: "300",
		color: "white",
		alignSelf: "flex-start",
		width: Layout.width * 0.1,
		height: Layout.width * 0.1
	},
	habitSquare: {
		width: Layout.width * 0.1,
		height: Layout.width * 0.1,
		borderColor: "white",
		borderWidth: 1
	}
});
