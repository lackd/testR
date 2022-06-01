import React, { useEffect } from 'react'
import { getAll } from '../services/services'
import { API_KEY } from '../config/conection'
import Item from './item'
import './App.css';

const ItemList = ({ items, onTodoClick, setItemList }) => {

    useEffect(() => {
        if (items == undefined || items.length == 0) {
            getAll(`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
                .then(response => {
                    setItemList(response.data.results)
                }).catch(error => {
                    console.log(error)
                })
        }
    }, [])


    return (
        < div className='container-fluid'>
            <div className='row mx-3 my-3'>

                {
                    items && items.length > 0 ?
                        items.map(item =>
                            <Item
                                key={item.id}
                                item={item}
                                onClick={() => onTodoClick(item.id)}
                            />
                        )
                        : <span></span>
                }
            </div>
        </div >
    )

}

export default ItemList