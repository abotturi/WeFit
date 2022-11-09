import React, { useState, useEffect } from 'react'
import { View, Text, StatusBar, TouchableOpacity } from 'react-native'
import styles from './style'
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import * as Linking from 'expo-linking';
import { useFavorite } from '../../hooks/useFavorite';

const Details = ({route}) => {
    const {repositorie} = route.params
    const {addRepository, removeRepository, checkFavoritesId} = useFavorite()
    const [favoriteRepository, setFavoriteRepository] = useState(checkFavoritesId(repositorie.id))

    const handleDisfavor = () => {
        removeRepository(repositorie.id)
        setFavoriteRepository(!favoriteRepository)
    }

    const handleFavorite = () => {
        addRepository(repositorie)
        setFavoriteRepository(!favoriteRepository)
    }

    return(
        <View style={{flex: 1}}>
            <View style={{padding: 16, backgroundColor: '#fff' }}>
                <StatusBar translucent backgroundColor='#000' barStyle='light-content' />
                <Text style={{fontSize: 20, fontWeight: '400', color: '#070707', fontFamily: 'Inter'}}>
                    {repositorie.full_name.split('/')[0]}
                    /
                    <Text style={{fontWeight: '700'}}>
                        {repositorie.full_name.split('/')[1]}
                    </Text>
                </Text>
                {
                    repositorie.description ?
                        <Text style={{fontSize: 16, fontWeight: '400', color: '#9A9A9A', marginVertical: 10}}>{repositorie.description}</Text>
                        : null
                }
                <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: 15}}>
                    <View style={{width: 12, height: 12, borderRadius: 50, backgroundColor: '#F22828', marginRight: 6}} />
                    <Text style={{fontSize: 14, fontWeight: '400', color: '#9A9A9A'}}>{repositorie.language}</Text>
                </View>
            </View>
            <View style={styles.containerOpenRepository}>
                <TouchableOpacity style={[styles.btnOpenRepository, {backgroundColor: 'rgba(0,0,0,0.0)'}]} onPress={() => Linking.openURL(repositorie.html_url)}>
                    <Text style={{color: '#1976D2', fontFamily: 'Roboto', fontWeight: '500', fontSize: 15}}>VER REPOSITÓRIO</Text>
                    <Ionicons name="link" size={24} color="#1976D2" style={{marginLeft: 10}} />
                </TouchableOpacity>
                {
                    favoriteRepository ?
                        <TouchableOpacity style={[styles.btnOpenRepository, {backgroundColor: '#fff', borderWidth: 1, borderColor: '#000'}]} onPress={handleDisfavor}>
                            <Text style={{color: '#000', fontFamily: 'Roboto', fontWeight: '500', fontSize: 15}}>DESFAVORITAR</Text>
                            <Entypo name="star-outlined" size={24} color="black" style={{marginLeft: 10}} />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={styles.btnOpenRepository} onPress={handleFavorite}>
                            <Text style={{color: '#000', fontFamily: 'Roboto', fontWeight: '500', fontSize: 15}}>FAVORITAR</Text>
                            <Entypo name="star" size={24} color="black" style={{marginLeft: 10}} />
                        </TouchableOpacity>
                }
            </View>
        </View>
    )
}

export default Details