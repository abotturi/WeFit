import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    containerChangeUser : {
        height: 200,
        backgroundColor: '#fff',
        width: '100%',
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
    },
    containerInput: {
      marginTop: 10,
      paddingTop: 9,
      paddingHorizontal: 12,
      paddingBottom: 8,
      height: 56,
      backgroundColor: 'rgba(0, 0, 0, 0.06)',
      borderTopRightRadius: 4,
      borderTopLeftRadius: 4,
      borderBottomWidth: 1,
      borderColor: 'rgba(0, 0, 0, 0.42)',
    },
    inputUser: {
      fontSize: 16,
      height: 24,
      color: 'rgba(0, 0, 0, 0.87)',
      fontWeight: '400',
      fontFamily: 'Roboto'
    },
    containerBtns: {
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      flexDirection: 'row'
    },
    btnChangeUser: {
      marginTop: 10,
      padding: 0,
      height: 42,
      width: 174,
      borderRadius: 4,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
  });
  
export default styles;