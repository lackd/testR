import { connect } from 'react-redux'
import { setItemList, goToItem } from '../actions'
import ItemList from '../components/itemList'

const getVisibleItems = (items, filter) => {
    switch (filter) {
        case 'movie':
            return items
        case 'tv':
            return items
    }
}

const mapStateToProps = (state) => {
    return {
        items: getVisibleItems(state.items, state.visibilityFilter),
        filter: state.visibilityFilter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onItemClick: (item) => { dispatch(goToItem(item)) },
        setItemList: (list) => { dispatch(setItemList(list)) }
    }
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemList)

export default VisibleTodoList