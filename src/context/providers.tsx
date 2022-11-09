import FavoriteContextProvider from './favorite.context';
import UserSearchProvider from './userSeach.context';

const ContextProviders = ({children}) => {
    return(
        <UserSearchProvider>
            <FavoriteContextProvider>
                {children}
            </FavoriteContextProvider>
        </UserSearchProvider>
    )
}

export default ContextProviders