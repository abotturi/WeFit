import React, {useState, useEffect} from "react";
import { FlatList, ScrollView, View, Text, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import axios from '../../../axios/axios'
import { IRepositorie } from "../../../interfaces/IRepositorie";
import { Entypo } from '@expo/vector-icons';
import Card from "../../../components/card";
import ErroComponent from "../../../components/erro";
import { useFavorite } from "../../../hooks/useFavorite";

const Favorites = () => {
    const { loaderFavorites, allFavorites } = useFavorite()

    return(
        loaderFavorites ?        
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size="large" color='#ccc' />
            </View>
            :
            allFavorites.length > 0 ?
                <FlatList
                    data={allFavorites}
                    renderItem={({item}) => <Card showBtnFavorite={false} repositorie={item} />}
                    keyExtractor={(item, idx) => idx.toString()}
                    style={{paddingBottom: 5}}
                />
                :
                <ErroComponent textError='Ainda não tem nenhum repositório adicionado aos favoritos' />
    )
}

export default Favorites