import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { get, getDetail } from '../../services/services';
import styles from './Character.module.css';
import { CharacterModel } from '../../models/CharacterModel';

export function CharacterDetail() {
    const navigate = useNavigate();
    const location = useLocation();
    const [characterInfo, setCharacterInfo] = useState(CharacterModel);
    const [comics, setComics] = useState([]);

    useEffect(() => {
        getCharacterDetail(location.state.item.id)
    }, [location.state.item])

    const getCharacterDetail = (characterId: number) => {
        get('/characters', characterId)
            .then(response => {
                getDetailList(characterId);
                setCharacterInfo(response.data.data.results[0])
            })
            .catch(error => {
                console.log(error)
            })
    }

    const getDetailList = (charId: number) => {
        getDetail('/characters', 'comics', charId)
            .then(response => {
                setComics(response.data.data.results)
            })
            .catch((error: any) => {
                console.log(error);
            })
    }

    return (
        <div className='main-container container-fluid'>
            <p className={styles.titleDivision}>{characterInfo.name}</p>
            <div className={styles.rowItem}>
                <img className={styles.imgContainer} src={characterInfo.thumbnail.path + '.' + characterInfo.thumbnail.extension} />
                <p className={styles.description}>{characterInfo.description}</p>
            </div>
            <p className={styles.titleDivision}>Comics appearances</p>
            <div className='row mx-1 my-3'>
                {comics.map((item: any) => {
                    return (
                        <div className='col-md-4 col-sm-6 col-lg-2 my-2'>
                            <img className={styles.imgComicContainer} src={item.thumbnail.path + '.' + item.thumbnail.extension} />
                        </div>
                    )
                })
                }
            </div>
            <footer><p onClick={() => navigate(-1)} className={styles.footerDetail}>Home</p></footer>
        </div>
    )
}