import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  page: {
    flex: 1,
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
    color: '#444',
    textAlign: 'left',
    fontSize: 16,
  },
});

export default styles;