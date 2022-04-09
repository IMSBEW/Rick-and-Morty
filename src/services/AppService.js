import { useState } from "react"

import { useHttp } from "../hooks/http.hook"

const useAppService = () => {
    const { loading, request, error, clearError } = useHttp()

    const getAllCharacters = async (offset, amount, category) => {
        // console.log(offset)
        const response = await request(`https://rickandmortyapi.com/api/character/?page=${offset}`)
        // console.log(response)
        const charList = response.results.map(_transformCharacter)
        charList.map((item, index) => item.count = index + 1 + amount)
        return charList
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
        getAllCharacters,
    }
}

export default useAppService