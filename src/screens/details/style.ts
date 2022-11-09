import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    containerOpenRepository : {
        width: '100%',
        height: 126,
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 0,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnOpenRepository: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 42,
        backgroundColor: '#FFD02C',
        borderRadius: 4,
        marginVertical: 5
    }
  });
  
export default styles;