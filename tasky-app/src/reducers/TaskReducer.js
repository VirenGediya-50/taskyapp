import { DELETE_TASK, UPDATE_TASK, SEARCH_TEXT_SET, PRIORITY_FILTER_SET, CREATE_TASK } from '../actions'
import _ from 'lodash'

const INITIAL_STATE = {
    task: [{
        title: 'title',
        content: 'description',
        categories: 'High',
        id: '3678'
    }],
    searchText: '',
    priorityFilter: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CREATE_TASK: {
            console.log("--------------------------------1", state)

            return {
                ...state,
                task: _.concat(...state.task, action.payload)
            }
        }
        case UPDATE_TASK: {
            console.log("--------------------------------2", state)

            return {
                ...state,
                task: state.task.map(item => {
                    if (item.id === action.payload.id) {
                        return action.payload
                    } else {
                        return item
                    }
                })
            }
        }
        case DELETE_TASK: {
            console.log("--------------------------------3")

            // console.log(item.id)

            return {
                ...state,
                task: state.task.filter(item => (console.log(action.payLoad), action.payLoad !== item.id))
            }
        }
        case PRIORITY_FILTER_SET: {
            console.log("--------------------------------4", state)
            return {
                ...state,
                priorityFilter: action.payload
            }
        }
        case SEARCH_TEXT_SET: {
            console.log("--------------------------------5", state)
            return {
                ...state,
                searchText: action.payload
            }
        }
        default:
            console.log("--------------------------------6", state)
            return state

    }
}