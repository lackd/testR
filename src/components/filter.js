import React from 'react'
import FilterLink from '../containers/filterLink'

const Filter = () => (
    <div className='filter-container w-100 my-3 py-3'>
        <div>
            <FilterLink filter="movie">
                Movies
            </FilterLink>
        </div>

        <div>
            <FilterLink filter="tv">
                Tv shows
            </FilterLink>
        </div>
    </div>
)

export default Filter