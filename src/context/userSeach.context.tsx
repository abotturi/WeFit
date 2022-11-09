import React, { createContext, useState } from 'react'
import { IContextUserSearch } from '../interfaces/IContextUserSearch'

export const UserSearch = createContext<IContextUserSearch | null>(null)

const UserSearchProvider = ({children}) => {
    const [userSearch, setUserSearch] = useState<string>('appswefit')

    const save = (nameUser: string) => {
        setUserSearch(nameUser)
    }

    return(
        <UserSearch.Provider value={{userSearch, save}}>
            {children}
        </UserSearch.Provider>
    )
}

export default UserSearchProvider