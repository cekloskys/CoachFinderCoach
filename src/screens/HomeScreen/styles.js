import { StyleSheet, Dimensions } from 'react-native';

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
  phonenumber: {
    fontsize: 16,
    marginVertical: 15,
    borderWidth: 1.0,
    borderColor: 'lightgrey',
    padding: 10,
    borderRadius: 10,
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
    borderRadius: 10,
    fontSize: 18,
  },
});

export default styles;