import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

import useAppService from '../../../services/AppService'

import Spinner from './../../spinner/Spinner'
import ErrorMessage from './../../errorMessage/ErrorMessage'

import arrow from './../../../assets/img/arrow-back.svg'
import arrowMore from './../../../assets/img/arrow-more.svg'

import './charPage.scss'


function CharPage() {
    const { charId } = useParams()
    const [char, setChar] = useState(null)
    const [countEpisode, setCountEpisode] = useState([])
    const [episode, setEpisode] = useState([])

    const { loading, error, getChar, getEpisodesId, clearError } = useAppService()

    useEffect(() => {
        updateComic()
    }, [charId])

    useEffect(() => {
        updateEpisode()
    }, [countEpisode])

    const updateComic = () => {
        clearError()
        getChar(charId)
            .then(onCharLoaded)
    }

    const updateEpisode = () => {
        clearError()
        getEpisodesId(countEpisode)
            .then(onEpisodeLoaded)
    }

    const onCharLoaded = (char) => {
        const idEpisode = char.episode.map(id => +id.slice(40))
        setCountEpisode(idEpisode)
        setChar(char)
    }

    const onEpisodeLoaded = (episode) => {
        setEpisode(episode)
    }
    const errorMessage = error ? <ErrorMessage /> : null
    const spinner = loading ? <Spinner /> : null
    const content = !(loading || error || !char) ? <View char={char} episode={episode} /> : null

    return (
        <>
            {errorMessage}
            {spinner}
            {content}
        </>
    )


}

const View = ({ char, episode }) => {
    const { name, thumbnail, location } = char
    const category = ['status', 'species', 'gender', 'origin']
    const filterObjChar = Object.fromEntries(category.map(key => [key, char[key]]))
    return (
        <div className="char-page">
            <div className="button" style={{ position: 'absolute' }}>
                <img src={arrow} alt="arrow" />
                <Link to='/'><button className="button-back">GO BACK</button></Link>
            </div>
            <div className='char-page__header'>
                <img className='char-page__image' src={thumbnail} alt="thumbnail" />
                <div className="char-page__title">{name}</div>
            </div>
            <div className="char-page__description">
                <div className="char-page__column">
                    <p className="char-page__column-title">Informations</p>
                    {Object.entries(filterObjChar).map((item, i) =>
                        <div key={i} className="char-page__category">
                            <div className='char-page__category-wrapper'>
                                <div className='char-page__category-info'>
                                    <div className="char-page__category-title">{item[0] = item[0][0].toUpperCase() + item[0].substring(1)}</div>
                                    <div className="char-page__category-subtitle">{item[1]}</div>
                                </div>
                            </div>
                            <hr />
                        </div>
                    )}
                    <div className="char-page__category">
                        <div className='char-page__category-wrapper'>
                            <div className='char-page__category-info'>
                                <div className="char-page__category-title">Location</div>
                                <div className="char-page__category-subtitle">{location}</div>

                            </div>
                            <img src={arrowMore} alt="arrow-more" />
                        </div>
                        <hr />
                    </div>
                </div>
                <div className="char-page__column">
                    <p className="char-page__column-title">Episodes</p>
                    <div className='char-page__category-column'>
                        {episode.length === 0 ? <div>This character has no episodes:(</div> :
                            episode.map((item, i) =>
                                <div key={i} className="char-page__category">
                                    <div className='char-page__category-wrapper'>
                                        <div className='char-page__category-info'>
                                            <div className="char-page__category-title">{item.episode}</div>
                                            <div className="char-page__category-subtitle">{item.name}</div>
                                            <div className="char-page__category-date">{item.date}</div>
                                        </div>
                                        <img src={arrowMore} alt="arrow-more" />
                                    </div>
                                    <hr />
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="char-page__column"></div>
            </div>
        </div>
    )
}


export default CharPage