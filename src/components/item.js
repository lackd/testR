import React from 'react'
import './App.css';

const Item = ({ onClick, completed, item }) => (
    <div className='item-container col-md-3'>
        <div className='overlay'>

            <p style={{ color: 'yellow', paddingInline: 10, fontSize: 15, fontWeight: 'bolder', textAlign: 'end' }}>
                {item.vote_average}
            </p>
            <p style={{ color: 'white', paddingInline: 10, fontSize: 15, fontWeight: 'bold' }}>
                {item.title}
            </p>
        </div>
        <img style={{ borderRadius: 7 }} src={'https://www.themoviedb.org/t/p/w220_and_h330_face/' + item.poster_path} />
    </div>
)

export default Item