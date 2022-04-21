import { useHttp } from "../hooks/http.hook"

const useAppService = () => {
    const { loading, request, error, clearError } = useHttp()

    const getAllFilterChars = async (category, filter, searchRequest) => {
        const response = await request(`https://rickandmortyapi.com/api/character/?name=${searchRequest}&${filter}=${category}`)
        const charList = response.results.map(_transformCharacter)
        charList.map((item, index) => item.count = index + 1)
        return [response.info.next, charList]
    }

    const getAllChars = async (req, offset, amount) => {
        const response = await request(`${req.replace(/page=2/gi, `page=${offset}`)}`)
        const charList = response.results.map(_transformCharacter)
        charList.map((item, index) => item.count = index + 1 + amount)
        return [charList, response.info.pages, response.info.count]
    }

    const getChar = async (id) => {

        const response = await request(`https://rickandmortyapi.com/api/character/${id}`)

        return _transformCharacter(response)
    }

    const getEpisodesId = async (id) => {
        const response = await request(`https://rickandmortyapi.com/api/episode/${id}`)
        console.log(response)
        return response.map(_transformEpisode)
    }

    const _transformCharacter = (char) => {
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
            episode: char.episode
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
        getEpisodesId
    }
}

export default useAppService