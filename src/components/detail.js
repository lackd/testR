import React from 'react'
import moment from 'moment';
import Item from './item'
import './App.css';

const getRelatedContent = (list, genreList) => {
    let filteredList = []

    genreList.map((c) => {
        list.map(item => {
            var foundItem = item.genre_ids.findIndex(idx => idx == c)
            if (foundItem > -1) {
                filteredList.push(item)
            }
        })
    })
    console.log(filteredList)
    var cosa = [...new Set(filteredList)]
    console.log(cosa)
    return []
}

const Detail = ({ currentItem, items, onItemClick }) => (
    <div className="App-body">
        <header>
            <div className='detail-overlay'>
                <p style={{ color: 'white', paddingInline: 10, fontSize: 40, fontWeight: 'bold' }}>
                    {currentItem.title}
                </p>
                <p style={{ color: 'yellow', paddingInline: 10, fontSize: 20, fontWeight: 'bolder' }}>
                    {currentItem.vote_average}
                </p>
            </div>
            <img src={'https://www.themoviedb.org/t/p/w780/' + currentItem.backdrop_path} />
        </header>
        <div className='separator'></div>
        <div className='detail-container'>
            <p>
                {currentItem.overview}
            </p>
            <p>
                <p className='label'>Release date:</p> {moment(currentItem.release_date).format('MMMM Do YYYY')}
            </p>
        </div>
        < div className='main-container container-fluid'>
            <div className='row mx-1 my-3'>

                {
                    items && items.length > 0 ?
                        getRelatedContent(items, currentItem.genre_ids).map(item =>
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

export default Detail