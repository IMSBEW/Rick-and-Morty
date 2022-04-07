import { useState } from "react"

import { useHttp } from "../hooks/http.hook"

const useAppService = () => {
    const { loading, request, error, clearError } = useHttp()

    const [nameCategory, setNameCategory] = useState('')

    const createRequest = (category) => {
        setNameCategory(category)
    }

    const getAllCharacters = async () => {
        console.log(nameCategory)
        const res = await request(`https://rickandmortyapi.com/api/character`)
        return res.results.map(_transformCharacter)
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
        createRequest
    }
}

export default useAppService