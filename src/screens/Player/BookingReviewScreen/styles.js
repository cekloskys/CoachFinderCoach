import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 10,
  },
  button: {
    borderColor: 'black',
    padding: 15,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 5,
  },
  bookbutton: {
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
});

export default styles;