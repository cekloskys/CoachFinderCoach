import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    page: {
      padding: 10,
    },
    input: {
      height: 50,
      backgroundColor: 'white',
      padding: 15,
      marginVertical: 5,
      borderWidth: 1,
      borderColor: 'lightgrey',
      borderRadius: 5,
      fontSize: 16,
    },
    button: {
      borderColor: 'black',
      marginTop: 5,
      padding: 15,
      backgroundColor: 'lightgrey',
      alignItems: 'center',
      borderRadius: 5,
    },
    buttonText: {
      color: 'black',
      fontSize: 16,
    },
    dropdownBtnStyle: {
      width: '100%',
      height: 50,
      borderRadius: 15,
      borderWidth: 1,
      borderColor: 'lightgrey',
      backgroundColor: 'lightgrey',
      marginVertical: 5,
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
  });

  export default styles;