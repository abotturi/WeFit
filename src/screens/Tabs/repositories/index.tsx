import React, {useState, useEffect} from "react";
import { FlatList, ScrollView, View, Text, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import axios from '../../../axios/axios'
import { IRepositorie } from "../../../interfaces/IRepositorie";
import { Entypo } from '@expo/vector-icons';
import Card from "../../../components/card";
import { useUserSearch } from "../../../hooks/useUserSearch";
import ErroComponent from "../../../components/erro";
import { useRepositorie } from "../../../hooks/useRepositorie";
import { useFavorite } from "../../../hooks/useFavorite";

const Repositories = () => {
    const {loaderFavorites, allFavorites} = useFavorite()
    const {userSearch} = useUserSearch()
    const [loader, setLoader] = useState<boolean>(true)
    const [erroMsg, setErrorMsg] = useState<string>('')
    const {allRepositories, setRepositories} = useRepositorie()

    const loaderAllRepositories = async () => {
        setErrorMsg('')

        await axios.get(`users/${userSearch}/repos`).then(r => {
            setRepositories(r.data)
        })
        .catch(err => {
            if(err.message == 'Network Error'){
                setErrorMsg('Erro ao conectar')
                return
            }
            
            if(err.response.status == 404){
                setErrorMsg('Usuario não econtrado')
                return
            }
        })
        
        setLoader(false)
    }

    useEffect(() => {
        if(!loaderFavorites){
            loaderAllRepositories()
        }
    }, [userSearch, allFavorites, loaderFavorites])

    useEffect(() => {
        setLoader(true)
    }, [userSearch])

    return(
        loader || loaderFavorites ?
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size="large" color='#ccc' />
            </View>
            :
            !erroMsg ?
                <FlatList
                    data={allRepositories}
                    renderItem={({item}) => <Card repositorie={item} />}
                    keyExtractor={(item, idx) => idx.toString()}
                    style={{paddingBottom: 5}}
                />
                :
                <ErroComponent textError={erroMsg} functionReload={loaderAllRepositories} />
    )
}

export default Repositories