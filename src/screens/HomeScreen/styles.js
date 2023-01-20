import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    page: {
      padding: 10,
    },
    dropdownBtnStyle: {
      width: '100%',
      height: 50,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: 'lightgrey',
    },
    dropdownBtnTxtStyle: {
      color: '#444',
      textAlign: 'left',
    },
    dropdownDropdownStyle: {
      backgroundColor: '#EFEFEF',
    },
    dropdownRowStyle: {
      backgroundColor: '#EFEFEF',
      orderBottomColor: '#C5C5C5',
    },
    dropdownRowTxtStyle: {
      color: '#444',
      textAlign: 'left',
    },
    button: {
      backgroundColor: 'black',
      margin: 2,
      height: 50,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      zIndex: 100,
      width: Dimensions.get('screen').width - 20,
      marginHorizontal: 10,
    },
    buttonText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'white',
    },
  });

  export default styles;