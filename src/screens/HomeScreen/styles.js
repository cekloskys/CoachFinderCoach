import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
  dropdownBtnStyle: {
    width: '100%',
    height: 50,
    borderRadius: 5,
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
    borderRadius: 5,
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
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  buttonText: {
    fontSize: 16,
    color: '#444',
  },
  phonenumber: {
    fontsize: 16,
    marginVertical: 5,
    borderWidth: 1.0,
    borderColor: 'lightgrey',
    padding: 10,
    borderRadius: 5,
  },
  MainContainer: {
    flex: 1,
    padding: 6,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  text: {
    fontSize: 25,
    color: 'red',
    padding: 3,
    marginBottom: 10,
    textAlign: 'center'
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
  input: {
    height: 50,
    backgroundColor: 'white',
    padding: 5,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 5,
    fontSize: 16,
  },
});

export default styles;