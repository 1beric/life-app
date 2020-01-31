export const SET_COLOR = "set_color";

export const ADD_EVENT = "add_event";
export const REMOVE_EVENT = "remove_event";
export const CHANGE_EVENT = "change_event";

export const ADD_TODO = "add_todo";
export const REMOVE_TODO = "remove_todo";
export const END_TODO = "end_todo";
export const CHANGE_TODO = "change_todo";
export const ADD_TODO_TIMES = "add_todo_times";
export const REMOVE_TODO_TIMES = "remove_todo_times";
export const CHANGE_TODO_TIMES = "change_todo_times";

export const SET_PROFIT_RATE = "set_profit_rate";
export const SET_EXPENSE_RATE = "set_expense_rate";

export const ADD_PROFIT = "add_profit";
export const REMOVE_PROFIT = "remove_profit";
export const CHANGE_PROFIT = "change_profit";

export const ADD_EXPENSE = "add_expense";
export const REMOVE_EXPENSE = "remove_expense";
export const CHANGE_EXPENSE = "change_expense";

export const ADD_JOURNAL = "add_journal";
export const CHANGE_JOURNAL = "change_journal";
export const REMOVE_JOURNAL = "remove_journal";

export const ADD_HABIT = "add_habit";
export const REMOVE_HABIT = "remove_habit";
export const CHANGE_HABIT = "change_habit";
export const MARK_HABIT = "mark_habit";
export const CLEAR_HABITS = "clear_habits";

export const OVERRIDE = "override";

export const setColor = color => ({
	type: SET_COLOR,
	color
});

export const addEvent = (name, date, allDay, startTime, endTime) => ({
	type: ADD_EVENT,
	name,
	date,
	allDay,
	startTime,
	endTime
});

export const removeEvent = (name, date) => ({
	type: REMOVE_EVENT,
	name,
	date
});

export const changeEvent = (name, date, allDay, startTime, endTime) => ({
	type: CHANGE_EVENT,
	name,
	date,
	allDay,
	startTime,
	endTime
});

export const addTodo = (name, dueDate, dueTime, progress) => ({
	type: ADD_TODO,
	name,
	dueDate,
	dueTime,
	progress,
	times: []
});

export const removeTodo = (name, dueDate) => ({
	type: REMOVE_TODO,
	name,
	dueDate
});

export const endTodo = (name, dueDate) => ({
	type: END_TODO,
	name,
	dueDate
});

export const changeTodo = (name, dueDate, dueTime, progress) => ({
	type: CHANGE_TODO,
	name,
	dueDate,
	dueTime,
	progress
});

export const addTodoTimes = (name, dueDate, date, startTime, endTime) => ({
	type: ADD_TODO_TIMES,
	name,
	dueDate,
	date,
	startTime,
	endTime
});

export const removeTodoTimes = (name, dueDate, date, startTime) => ({
	type: REMOVE_TODO_TIMES,
	name,
	dueDate,
	date,
	startTime
});

export const changeTodoTimes = (name, dueDate, date, startTime, endTime) => ({
	type: CHANGE_TODO_TIMES,
	name,
	dueDate,
	date,
	startTime,
	endTime
});

export const addProfit = (name, date, amount) => ({
	type: ADD_PROFIT,
	name,
	date,
	amount
});

export const removeProfit = (name, date) => ({
	type: REMOVE_PROFIT,
	name,
	date
});

export const changeProfit = (name, date, amount) => ({
	type: CHANGE_PROFIT,
	name,
	date,
	amount
});

export const addExpense = (name, date, amount) => ({
	type: ADD_EXPENSE,
	name,
	date,
	amount
});

export const removeExpense = (name, date) => ({
	type: REMOVE_EXPENSE,
	name,
	date
});

export const changeExpense = (name, date, amount) => ({
	type: CHANGE_EXPENSE,
	name,
	date,
	amount
});

export const addJournal = (date, entry) => ({
	type: ADD_JOURNAL,
	date,
	entry
});

export const changeJournal = (date, entry) => ({
	type: CHANGE_JOURNAL,
	date,
	entry
});

export const removeJournal = (date) => ({
	type: REMOVE_JOURNAL,
	date
});

export const addHabit = (name, color) => ({
	type: ADD_HABIT,
	name,
	color
});

export const removeHabit = name => ({
	type: REMOVE_HABIT,
	name
});

export const changeHabit = (name, color) => ({
	type: CHANGE_HABIT,
	name,
	color
});

export const markHabit = (name, date) => ({
	type: MARK_HABIT,
	name,
	date
});

export const overrideState = newState => ({
	type: OVERRIDE,
	newState
});
