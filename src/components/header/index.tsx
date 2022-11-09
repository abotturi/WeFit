import React, { useEffect, useState } from 'react';
import { Platform, Text, KeyboardAvoidingView, View, TouchableOpacity, TextInput } from 'react-native';
import Modal from "react-native-modal";
import { FontAwesome } from '@expo/vector-icons';
import { useUserSearch } from '../../hooks/useUserSearch'
import styles from './style';

const Header = () => {
    const {userSearch, save} = useUserSearch()
    const [textUserSearch, setTextUserSearch] = useState<string>(userSearch)
    const [modalVisible, setModalVisible] = useState(false);

    const saveInContext = () => {
        if(textUserSearch.trim()){
            save(textUserSearch.trim())
        }

        setModalVisible(false)
    }

    useEffect(() => {
        setTextUserSearch(userSearch)
    }, [modalVisible])

    return(
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 15, height: 56}}>
            <Text style={{fontFamily: 'Roboto', fontSize: 20, color: 'rgba(0, 0, 0, 0.87)', fontWeight: '500'}}>WeFit</Text>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <FontAwesome name="gear" size={24} color="rgba(0, 0, 0, 0.87)" />
            </TouchableOpacity>
            <Modal
                isVisible={modalVisible}
                swipeDirection='down'
                propagateSwipe={true}
                onSwipeComplete={() => setModalVisible(false)} 
                style={{margin: 0}}
            >
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={{flex: 1, justifyContent: 'flex-end'}}
                >
                    <View style={styles.containerChangeUser}>
                        <View style={{height: 38, flexDirection: 'column', justifyContent: 'center', alignItems: "center"}}>
                            <View style={{width: 30, height: 6, backgroundColor: '#E0E0E0', borderRadius: 12}} />
                        </View>
                        <View style={{padding: 16, paddingTop: 0}}>
                            <Text style={{fontFamily: 'Roboto', fontSize: 16, fontWeight: '400', color: 'rgba(0, 0, 0, 0.87)'}}>Alterar usuário selecionado</Text>
                            <View style={styles.containerInput}>
                                <Text style={{fontFamily: 'Roboto', fontSize: 12, fontWeight: '400', color: 'rgba(0, 0, 0, 0.6)'}}>Nome do usuário</Text>
                                <TextInput style={styles.inputUser} value={textUserSearch} onChangeText={setTextUserSearch} />
                            </View>
                            <View style={styles.containerBtns}>
                                <TouchableOpacity style={styles.btnChangeUser} onPress={() => setModalVisible(false)}>
                                    <Text style={{fontFamily: 'Roboto', fontWeight: '500', fontSize: 15, color: '#1976D2'}}>CANCELAR</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.btnChangeUser, {backgroundColor: '#1976D2', elevation: 5}]} onPress={saveInContext}>
                                    <Text style={{fontFamily: 'Roboto', fontWeight: '500', fontSize: 15, color: '#FFFFFF'}}>SALVAR</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </Modal>
        </View>
    )
}

export default Header