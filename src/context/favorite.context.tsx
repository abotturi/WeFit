import React, { useState, useEffect, createContext } from "react";
import { IContextFavorite } from "../interfaces/IContextFavorite";
import { IRepositorie } from "../interfaces/IRepositorie";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FavoriteContext = createContext<IContextFavorite | null>(null)

const FavoriteContextProvider = ({children}) => {
    const [allFavorites, setAllFavorites] = useState<IRepositorie[]>([])
    const [loaderFavorites, setLoaderFavorites] = useState(true)

    const addRepository = async (repository: IRepositorie) => {
        await AsyncStorage.setItem('repositories', JSON.stringify([repository, ...allFavorites]))
        
        setAllFavorites(current => [repository, ...current])
    }

    const removeRepository = async (id: number) => {
        await AsyncStorage.setItem('repositories', JSON.stringify(allFavorites.filter(repository => repository.id !== id)))

        setAllFavorites(current => current.filter(repository => repository.id !== id))
    }

    const getData = async () => {
        const value = await AsyncStorage.getItem('repositories')
        
        if(value){
            setAllFavorites(JSON.parse(value))
        }

        setLoaderFavorites(false)
    }

    useEffect(() => {
        getData()
    }, [])

    return(
        <FavoriteContext.Provider value={{loaderFavorites, allFavorites, addRepository, removeRepository}}>
            {children}
        </FavoriteContext.Provider>
    )
}

export default FavoriteContextProvider