import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    mainContainerCard: {
        paddingVertical: 12,
        paddingHorizontal: 16,
        backgroundColor: '#fff',
        borderRadius: 4,
        marginVertical: 8,
        marginHorizontal: 10,
        elevation: 6
    },
    divCard: {
        height: 0,
        borderWidth: 1,
        borderColor: '#DADADA',
        marginVertical: 12,
        opacity: 0.9
    },
    btnFavoriteCard: {
        width: 103,
        height: 36,
        backgroundColor: '#FAF3DC',
        borderRadius: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }
  });
  
export default styles;