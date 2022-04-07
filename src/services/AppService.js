import { useHttp } from "../hooks/http.hook"

const useAppService = () => {
    const { loading, request, error, clearError } = useHttp()


    const getAllCharacters = async () => {
        const res = await request(`https://rickandmortyapi.com/api/character`)
        console.log(res)
        return res.map(_transformCharacter)
    }



    const _transformCharacter = (char) => {
        return {
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
        getAllCharacters,
    }
}

export default useAppService