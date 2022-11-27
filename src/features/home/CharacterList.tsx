import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PRIVATE_KEY, PUBLIC_KEY } from '../../config/Config';
import { getAll } from '../../services/services';
import Paginator from 'react-paginate';
import styles from './Home.module.css';
import md5 from 'md5';

export function CharacterList() {
    const navigate = useNavigate()
    const timeStamp: Date = new Date();
    const hash = md5(timeStamp + PRIVATE_KEY + PUBLIC_KEY)
    const [characters, setCharacters] = useState([]);
    const [pageCount, setPageCount] = useState(0);

    useEffect(() => {
        getCharacterList()
    }, [])

    const getCharacterList = (pageSize: Number = 12, pageIndex: Number = 0) => {
        getAll(`/characters?ts=${timeStamp}&apikey=${PUBLIC_KEY}&hash=${hash}&limit=${pageSize}&offset=${pageIndex}`)
            .then(response => {
                setCharacters(response.data.data.results);
                setPageCount(response.data.data.total)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handlePageClick = (e: any) => {
        var newOffset = (e.selected * 12) % pageCount;
        getCharacterList(12, newOffset);
    }

    return (
        <div className='main-container container-fluid'>
            <div>
                <p className={styles.bigTitle}>All Marvel's Comics Characters</p>
            </div>
            <div className='row mx-1 my-3'>
                {characters.map((item: any) => {
                    return (
                        <div key={item.id} onClick={() => {
                            navigate('/character', { state: { item: item } })
                        }} className='col-md-4 col-sm-6 col-lg-2 my-2'>
                            <div className={styles.overlay}>
                                <p style={{ color: 'white', paddingInline: 10, fontSize: 15, fontWeight: 'bold' }}>
                                    {item.name}
                                </p>
                            </div>
                            <img className={styles.imgContainer} src={item.thumbnail.path + '.' + item.thumbnail.extension} />
                        </div>
                    )
                })}
            </div>
            <Paginator
                className={styles.paginatorContainer}
                activeClassName={styles.selected}
                nextClassName={styles.actionButton}
                previousClassName={styles.actionButton}
                breakLabel="..."
                nextLabel="next"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="previous"
                renderOnZeroPageCount={undefined}
            />
        </div>
    )
}