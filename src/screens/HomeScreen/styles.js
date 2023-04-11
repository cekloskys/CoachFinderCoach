import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  page: {
    padding: 10,
    backgroundColor: 'white',
  },
  dropdownBtnStyle: {
    width: '100%',
    height: 50,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#556a8a',
    backgroundColor: '#556a8a',
    marginVertical: 10,
    fontSize: 16,
  },
  dropdownBtnTxtStyle: { 
    color: 'white',
    textAlign: 'left',
    fontSize: 16,
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
    fontSize: 16,
  },
  button: {
    backgroundColor: '#556a8a',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  signOutButton: {
    backgroundColor: '#db4f40',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 25,
  },
  buttonText: {
    fontSize: 14,
    color: 'white',
  },
  input: {
    height: 50,
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#556a8a',
    borderRadius: 5,
    fontSize: 14,
  },
});

export default styles;