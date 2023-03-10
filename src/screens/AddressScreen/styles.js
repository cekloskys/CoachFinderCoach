import { StyleSheet } from 'react-native';

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
  address: {
    fontsize: 16,
    marginBottom: 15,
    borderBottomWidth: 1.0,
    color: 'black',
    borderColor: 'black',
  },
  row: {
    marginVertical: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
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