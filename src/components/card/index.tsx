import React, {useState, useEffect} from "react";
import { FlatList, ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./style";
import axios from '../../axios/axios'
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import { useFavorite } from "../../hooks/useFavorite";

const Card = ({repositorie, showBtnFavorite = true}) => {
    const { addRepository } = useFavorite()
    const navigation = useNavigation();

    return(
        <TouchableOpacity style={styles.mainContainerCard} onPress={() => navigation.navigate('details' as never, {repositorie} as never)}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={{fontWeight: '400', fontSize: 12, fontFamily: 'Inter'}}>
                    {repositorie.full_name.split('/')[0]}
                    /
                    <Text style={{fontWeight: '700'}}>
                        {repositorie.full_name.split('/')[1]}
                    </Text>
                </Text>
                <Image source={{uri: repositorie.owner.avatar_url}} style={{width: 29, height: 29, borderRadius: 50}} />
            </View>
            <View style={styles.divCard} />
            {
                repositorie.description ? 
                    <View style={{maxHeight: 30, marginBottom: 15}}>
                        <Text style={{fontSize: 12, fontWeight: '400', color: '#9a9a9a'}}>{repositorie.description}</Text>
                    </View>
                    : null
            }
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                {
                    showBtnFavorite ? 
                        <TouchableOpacity style={styles.btnFavoriteCard} onPress={() => addRepository(repositorie)}>
                            <Entypo name="star" size={20} color="#FFD02C" />
                            <Text style={{fontSize: 12, color: '#FFD02C', fontWeight: '700'}}>Favoritar</Text>
                        </TouchableOpacity>
                        : null
                }
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Entypo name="star" size={20} color="#FFD02C" />
                    <Text style={{fontSize: 12, fontWeight: '400', color: '#9a9a9a', marginLeft: 5}}>{repositorie.stargazers_count}</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: 74}}>
                    <View style={{width: 8, height: 8, backgroundColor: '#F22828', borderRadius: 10, marginRight: 6}} />
                    <Text style={{fontSize: 12, fontWeight: '400', color: '#9a9a9a'}}>{repositorie.language}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Card