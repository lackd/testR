import React, { useEffect } from 'react'
import { getAll } from '../services/services'
import { API_KEY } from '../config/conection'
import Item from './item'
import './App.css';

const ItemList = ({ items, onItemClick, setItemList, filter }) => {

    useEffect(() => {
        getAll(`/${filter}/popular?api_key=${API_KEY}&language=en-US&page=1`)
            .then(response => {
                setItemList(response.data.results)
            }).catch(error => {
                console.log(error)
            })
    }, [filter])


    return (
        < div className='main-container container-fluid'>
            <div className='row mx-1 my-3'>

                {
                    items && items.length > 0 ?
                        items.map(item =>
                            <Item
                                key={item.id}
                                type={filter}
                                item={item}
                                onClick={() => onItemClick(item)}
                            />
                        )
                        : <span></span>
                }
            </div>
        </div >
    )

}

export default ItemList