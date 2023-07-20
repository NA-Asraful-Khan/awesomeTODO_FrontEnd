import {combineReducers, createStore, applyMiddleware} from 'redux'

import {composeWithDevTools} from 'redux-devtools-extension'

import thunk from 'redux-thunk'
import { todosReducers } from './reducers/todoReducer'
import { tabReducers } from './reducers/tabReducers'

const reducer = combineReducers({
    todos: todosReducers,
    currentTab:tabReducers
})
const middleware = [thunk]
const store= createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))

)

export default store;