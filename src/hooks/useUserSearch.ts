import {useContext} from "react";
import { UserSearch } from '../context/userSeach.context'

export const useUserSearch = () => {
    const {userSearch, save} = useContext(UserSearch)
    
    return {userSearch, save}
}