import * as Actions from '../actions/Actions';
import Colors from '../constants/Colors';

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
    journalEntries: [],
    preferences: {
        tintColor: Colors.defaultTint
    }
}

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
                events: state.events.filter((event) => {
                    return !(event.name == action.name && event.date == action.date);
                })
            };
        case Actions.CHANGE_EVENT:
            return {
                ...state,
                events: [
                    ...state.events.filter((event) => {
                        return !(event.name == action.name && event.date == action.date);
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
            }
        case Actions.ADD_TODO:
            // TODO
        
        default:
            return state;
    }
}