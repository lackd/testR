import React, { useEffect } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import moment from 'moment';
import Item from './itemRelated'

import './App.css';



const getRelatedContent = (list, genreList, currentId) => {
    let intersected = function (genre) {
        return genreList.includes(genre)
    };
    let filtered = list.filter(obj => obj["genre_ids"].some(intersected));

    return filtered.filter(c => c.id != currentId)
}

const Detail = ({ currentItem, items, onItemClick }) => {
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [currentItem])

    const GoHome = () => {
        navigate("/")
    }

    var isEmpty = currentItem && Object.keys(currentItem).length === 0 && Object.getPrototypeOf(currentItem) === Object.prototype;
    if (isEmpty) {
        currentItem = location.state.item
    }

    return (
        <div className="App-body">
            <header>
                <div className='detail-overlay'>
                    <p style={{ color: 'white', paddingInline: 10, fontSize: 40, fontWeight: 'bold' }}>
                        {currentItem.title ?? currentItem.name}
                    </p>
                    <p style={{ color: 'yellow', paddingInline: 10, fontSize: 20, fontWeight: 'bolder' }}>
                        {currentItem.vote_average}
                    </p>
                </div>
                <div className='backdrop-container'>
                    <img src={'https://www.themoviedb.org/t/p/w780/' + currentItem.backdrop_path} />
                </div>
            </header>
            <div className='separator'></div>
            <div className='detail-container'>
                <div className='back-button' onClick={() => { GoHome() }}>Home</div>
                <p>
                    {currentItem.overview}
                </p>
                <p>
                    <p className='label'>Release date:</p> {moment(currentItem.release_date).format('MMMM Do YYYY')}
                </p>
                <p style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>
                    Related
                </p>
            </div>
            < div className='related-container container-fluid'>
                <div className='row mx-1 my-3'>

                    {
                        items && items.length > 0 ?
                            getRelatedContent(items, currentItem.genre_ids, currentItem.id).map(item =>
                                <Item
                                    key={item.id}
                                    item={item}
                                    onClick={() => onItemClick(item)}
                                />
                            )
                            : <span></span>
                    }
                </div>
            </div >
        </div>
    )
}


export default Detail