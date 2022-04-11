import { useState } from "react"

import { useHttp } from "../hooks/http.hook"

const useAppService = () => {
    const { loading, request, error, clearError } = useHttp()

    const getAllFilterChars = async (category) => {
        const str = `https://rickandmortyapi.com/api/character/?gender=${category}`
        const response = await request(`${str}`)
        const charList = response.results.map(_transformCharacter)
        charList.map((item, index) => item.count = index + 1)
        return [response.info.next, charList, str]
    }

    const getAllChars = async (req, offset, amount) => {
        // if (req === null) return
        const re = /page=2/gi
        const newFilterStr = req.replace(re, `page=${offset}`)
        const response = await request(`${newFilterStr}`)
        console.log(response)
        // if (response.info.next === null) return

        const charList = response.results.map(_transformCharacter)
        charList.map((item, index) => item.count = index + 1 + amount)
        return [charList, response.info.pages]
    }

    // const getAllCharacters = async (offset, amount, category) => {
    //     // console.log(category)
    //     const response = await request(`https://rickandmortyapi.com/api/character/?page=${offset}&gender=${'female'}`)
    //     console.log(response)
    //     const charList = response.results.map(_transformCharacter)
    //     charList.map((item, index) => item.count = index + 1 + amount)
    //     return charList
    // }


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