import React from 'react'

import './App.css'

const Link = ({ active, children, onClick }) => {
    if (active) {
        return <div className='filter-button-active'>{children}</div>
    }

    return (
        <div className='filter-button'
            onClick={e => {
                e.preventDefault()
                onClick()
            }}
        >
            {children}
        </div>
    )
}

export default Link