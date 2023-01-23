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
      borderColor: 'grey',
      backgroundColor: 'grey',
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
      color: '#000',
      textAlign: 'left',
    },
    button: {
      backgroundColor: 'black',
      margin: 2,
      height: 30,
      borderRadius: 0,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      zIndex: 100,
      width: Dimensions.get('screen').width / 4,
      marginHorizontal: 1,
    },
    buttonText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'white',
    },
    phonenumber: {
      fontsize: 16,
      marginBottom: 15,
      borderBottomWidth: 1.0,
      color: 'black',
      borderColor: 'black',
    },
    dob: {
      fontsize: 16,
      marginBottom: 15,
      borderBottomWidth: 1.0,
      color: 'black',
      borderColor: 'black',
    },
    gender: {
      fonstsize: 16,
      marginBottom: 15,
      borderBottomWidth: 1.0,
      color: 'black',
      borderColor: 'black',
    },
  });

  export default styles;