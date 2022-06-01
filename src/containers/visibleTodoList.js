import { connect } from 'react-redux'
import { toggleTodo, setItemList } from '../actions'
import ItemList from '../components/itemList'

const getVisibleItems = (items, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return items
        case 'SHOW_COMPLETED':
            return items.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return items.filter(t => !t.completed)
    }
}

const mapStateToProps = (state) => {
    return {
        items: getVisibleItems(state.items, state.visibilityFilter)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        },
        setItemList: (list) => { dispatch(setItemList(list)) }
    }
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemList)

export default VisibleTodoList