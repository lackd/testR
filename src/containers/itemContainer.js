import React from 'react'
import { connect } from 'react-redux'
import { goToItem } from '../actions'
import Detail from '../components/detail'


const mapStateToProps = (state) => {
    return {
        currentItem: state.currentItem,
        items: state.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onItemClick: (item) => { dispatch(goToItem(item)) }
    }
}

const ItemContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Detail)

export default ItemContainer