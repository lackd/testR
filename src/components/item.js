import React from 'react'
import { useNavigate } from "react-router-dom";
import './App.css';


const Item = ({ onClick, item, type }) => {
    const navigate = useNavigate()
    const navigateToDetail = (item) => {
        onClick(item)
        navigate('/detail', { state: { item: item } })
    }


    return (
        <div onClick={() => { navigateToDetail(item) }} className='item-container col-sm-6 col-md-4 col-lg-3'>
            <div className='overlay'>
                <p style={{ color: 'yellow', paddingInline: 10, fontSize: 15, fontWeight: 'bolder', textAlign: 'end' }}>
                    {item.vote_average}
                </p>
                <p style={{ color: 'white', paddingInline: 10, fontSize: 15, fontWeight: 'bold' }}>
                    {type === 'movie' ? item.title : item.name}
                </p>
            </div>
            <img className='img-container' src={'https://www.themoviedb.org/t/p/w220_and_h330_face/' + item.poster_path} />
        </div>
    )
}


export default Item