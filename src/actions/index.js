export const setItemList = (list) => {
    return {
        type: 'SET_ITEM_LIST',
        list
    }
}

export const setVisibilityFilter = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}

export const goToItem = (item) => {
    return {
        type: 'GET_ITEM',
        item
    }
}