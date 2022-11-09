import React, {useState, useEffect} from 'react'
import { useFavorite } from './useFavorite'
import { IRepositorie } from '../interfaces/IRepositorie'

export const useRepositorie = () => {
    const [allRepositories, setAllRepositories] = useState<IRepositorie[]>([])
    const {checkFavoritesId} = useFavorite()

    const setRepositories = (repositorie: IRepositorie[]) => {
        setAllRepositories(repositorie.filter(item => !checkFavoritesId(item.id)))
    }    

    return {allRepositories, setRepositories}
}