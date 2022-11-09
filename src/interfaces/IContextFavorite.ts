import { IRepositorie } from "./IRepositorie";

export interface IContextFavorite {
    loaderFavorites: boolean,
    allFavorites: IRepositorie[],
    addRepository: (repository: IRepositorie) => void,
    removeRepository: (id: number) => void
}