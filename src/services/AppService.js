import { useHttp } from "../hooks/http.hook"

const useAppService = () => {
    const { loading, request, error, clearError } = useHttp()

    const getAllFilterCards = async (category, filter, searchRequest, valueInput, section) => {
        if (!valueInput) {
            valueInput = ''
        }
        if (section.length === 1) {
            section = '/character'
        } else {
            section = section.slice(0, -1)
        }

        const response = await request(`https://rickandmortyapi.com/api${section}/?name=${searchRequest}&${filter}=${category}&type=${valueInput}`)
        const cardList = response.results.map(_transformCard)
        cardList.map((item, index) => item.count = index + 1)
        return [response.info.next, cardList]
    }

    const getAllCards = async (req, offset, amount) => {
        const response = await request(`${req.replace(/page=2/gi, `page=${offset}`)}`)
        const cardList = response.results.map(_transformCard)
        cardList.map((item, index) => item.count = index + 1 + amount)
        return [cardList, response.info.pages, response.info.count]
    }

    const getChar = async (id) => {
        const response = await request(`https://rickandmortyapi.com/api/character/${id}`)
        return _transformCard(response)
    }

    const getEpisodesId = async (id) => {
        const response = await request(`https://rickandmortyapi.com/api/episode/${id}`)
        if (id.length > 1) return response.map(_transformEpisode)
        const arrResponse = []
        arrResponse.push(response)
        return arrResponse.map(_transformEpisode)
    }

    const _transformCard = (card) => {
        if (card.status) {
            return {
                count: card.count,
                id: card.id,
                name: card.name,
                status: card.status,
                species: card.species,
                gender: card.gender,
                origin: card.origin.name,
                location: card.location.name,
                thumbnail: card.image,
                episode: card.episode,
            }
        } else if (card.residents) {
            return {
                count: card.count,
                id: card.id,
                name: card.name,
                type: card.type,
                dimension: card.dimension
            }
        } else if (card.air_date) {
            return {
                count: card.count,
                id: card.id,
                name: card.name,
                air_date: card.air_date,
                episode: card.episode,
            }
        }
    }



    const _transformEpisode = (episode) => {
        return {
            episode: episode.episode,
            date: episode.air_date,
            name: episode.name
        }
    }

    return {
        loading,
        error,
        clearError,
        getAllFilterCards,
        getAllCards,
        getChar,
        getEpisodesId,
    }
}

export default useAppService