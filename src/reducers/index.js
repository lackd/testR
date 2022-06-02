import { combineReducers } from 'redux'
import itemsReducer from './itemsReducer'
import itemReducer from './itemReducer'
import filterReducer from './filterReducer'

const itemApp = combineReducers({
    currentItem: itemReducer,
    items: itemsReducer,
    visibilityFilter: filterReducer
})

export default itemApp