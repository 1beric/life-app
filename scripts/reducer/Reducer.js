import * as Actions from "../actions/Actions";
import Colors from "../constants/Colors";

const defaultState = {
	budget: {
		balance: 0,
		profitRate: 0,
		expenseRate: 0,
		profits: [],
		expenses: []
	},
	events: [],
	todos: [],
	habits: [],
	journalEntries: [],
	preferences: {
		color: Colors.defaultTint.tintColor
	}
};

export default Reducer = (state = defaultState, action) => {
	switch (action.type) {
		case Actions.ADD_EVENT:
			return {
				...state,
				events: [
					...state.events,
					{
						name: action.name,
						date: action.date,
						allDay: action.allDay,
						time: {
							start: action.startTime,
							end: action.endTime
						}
					}
				]
			};
		case Actions.REMOVE_EVENT:
			return {
				...state,
				events: state.events.filter(event => {
					return !(
						event.name == action.name && event.date == action.date
					);
				})
			};
		case Actions.CHANGE_EVENT:
			return {
				...state,
				events: [
					...state.events.filter(event => {
						return !(
							event.name == action.name &&
							event.date == action.date
						);
					}),
					{
						name: action.name,
						date: action.date,
						allDay: action.allDay,
						time: {
							start: action.startTime,
							end: action.endTime
						}
					}
				]
			};

		case Actions.SET_COLOR:
			return {
				...state,
				preferences: {
					...state.preferences,
					color: Colors[action.color]
				}
			};
		case Actions.ADD_HABIT:
			return {
				...state,
				habits: [
					...state.habits,
					{
						name: action.name,
						color: action.color,
						daysCompleted: []
					}
				]
			};
		case Actions.REMOVE_HABIT:
			return {
				...state,
				habits: state.habits.filter(habit => {
					return !(habit.name == action.name);
				})
			};
		case Actions.MARK_HABIT:
			let newHabits = state.habits.map(habit => {
				if (habit.name == action.name) {
					if (habit.daysCompleted.includes(action.date)) {
						habit.daysCompleted.splice(
							habit.daysCompleted.indexOf(action.date),
							1
						);
					} else {
						habit.daysCompleted.push(action.date);
					}
				}
				return habit;
			});
			return {
				...state,
				habits: newHabits
			};
		case Actions.CLEAR_HABITS:
			return {
				...state,
				habits: []
			};
		case Actions.OVERRIDE:
			return action.newState;
		default:
			return state;
	}
};
