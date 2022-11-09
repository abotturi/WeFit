import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { IErroComponent } from "../../interfaces/IErroComponent";

const ErroComponent = ({textError, functionReload}: IErroComponent) => {
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 16, fontFamily: 'Inter', color: '#ccc', fontWeight: '500'}}>{textError}</Text>
            {
                textError === 'Erro ao conectar' && functionReload ?
                    <TouchableOpacity style={{padding: 10, borderWidth: 2, borderColor: 'black', borderRadius: 4, marginTop: 10}} onPress={functionReload}>
                        <Text style={{color: 'black', fontFamily: 'Roboto', fontWeight: '700'}}>TENTAR NOVAMENTE</Text>
                    </TouchableOpacity>
                    : null
            }
        </View>
    )
}

export default ErroComponent