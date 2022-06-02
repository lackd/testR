

const items = (state = [], action) => {
    switch (action.type) {
        case 'SET_ITEM_LIST':
            return [...action.list]
        default:
            return state
    }
}

export default items