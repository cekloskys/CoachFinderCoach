import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
  button: {
    borderColor: 'black',
    marginTop: 'auto',
    padding: 15,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
    fontWeight: '600',
    fontSize: 18,
  },
  dropdownBtnStyle: {
    width: '100%',
    height: 50,
    borderRadius: 5,
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
    borderRadius: 5,
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