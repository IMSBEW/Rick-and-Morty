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

    const _transformCharacter = (char) => {
        return {
            count: char.count,
            id: char.id,
            name: char.name,
            status: char.status,
            species: char.species,
            type: char.type,
            gender: char.gender,
            location: char.location.name,
            thumbnail: char.image
        }
    }

    return {
        loading,
        error,
        clearError,
        getAllFilterChars,
        getAllChars
    }
}

export default useAppService