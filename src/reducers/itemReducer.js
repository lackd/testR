

const currentItem = (state = [], action) => {
    switch (action.type) {
        case 'GET_ITEM':
            return { ...action.item }
        default:
            return state
    }
}

export default currentItem