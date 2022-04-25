import { useHttp } from "../hooks/http.hook"

const useAppService = () => {
    const { loading, request, error, clearError } = useHttp()

    const getAllFilterChars = async (category, filter, searchRequest, section) => {
        if (section.length === 1) {
            section = '/character'
        } else {
            section = section.slice(0, -1)
        }
        const response = await request(`https://rickandmortyapi.com/api${section}/?name=${searchRequest}&${filter}=${category}`)
        const charList = response.results.map(_transformCharacter)
        charList.map((item, index) => item.count = index + 1)
        return [response.info.next, charList]
    }

    const getAllChars = async (req, offset, amount) => {
        console.log(amount)
        const response = await request(`${req.replace(/page=2/gi, `page=${offset}`)}`)
        const charList = response.results.map(_transformCharacter)
        console.log(response)
        charList.map((item, index) => item.count = index + 1 + amount)
        console.log(charList)
        return [charList, response.info.pages, response.info.count]
    }

    const getChar = async (id) => {
        const response = await request(`https://rickandmortyapi.com/api/character/${id}`)
        return _transformCharacter(response)
    }

    const getEpisodesId = async (id) => {
        const response = await request(`https://rickandmortyapi.com/api/episode/${id}`)
        if (id.length > 1) return response.map(_transformEpisode)
        const arrResponse = []
        arrResponse.push(response)
        return arrResponse.map(_transformEpisode)
    }

    const _transformCharacter = (char) => {
        if (char.status) {
            return {
                count: char.count,
                id: char.id,
                name: char.name,
                status: char.status,
                species: char.species,
                gender: char.gender,
                origin: char.origin.name,
                location: char.location.name,
                thumbnail: char.image,
                episode: char.episode,
            }
        } else if (char.dimension) {
            return {
                count: char.count,
                id: char.id,
                name: char.name,
                type: char.type,
                dimension: char.dimension
            }
        } else if (char.air_date) {
            return {
                count: char.count,
                id: char.id,
                name: char.name,
                air_date: char.air_date,
                episode: char.episode,
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
        getAllFilterChars,
        getAllChars,
        getChar,
        getEpisodesId,
    }
}

export default useAppService