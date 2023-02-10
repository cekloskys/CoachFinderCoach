import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    page: {
      padding: 10,
    },
    dropdownBtnStyle: {
      width: '100%',
      height: 50,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: 'lightgrey',
      backgroundColor: 'lightgrey',
      marginVertical: 15,
    },
    dropdownBtnTxtStyle: {
      color: '#444',
      textAlign: 'left',
    },
    dropdownDropdownStyle: {
      borderRadius: 10,
    },
    dropdownRowStyle: {
      backgroundColor: '#EFEFEF',
    },
    dropdownRowTxtStyle: {
      color: '#000',
      textAlign: 'left',
    },
    button: {
      backgroundColor: 'lightgrey',
      height: 50,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 15,
    },
    buttonText: {
      fontSize: 16,
      color: '#444',
    },
  });

  export default styles;