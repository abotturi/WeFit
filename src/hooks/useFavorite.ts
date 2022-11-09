import {useContext} from "react";
import { FavoriteContext } from '../context/favorite.context'

export const useFavorite = () => {
    const {loaderFavorites, allFavorites, addRepository, removeRepository} = useContext(FavoriteContext)

    const checkFavoritesId = (id: number) => {
        let check = allFavorites.findIndex(repositorie => repositorie.id === id)
        return check > -1
    }

    return {loaderFavorites, allFavorites, addRepository, removeRepository, checkFavoritesId}
}