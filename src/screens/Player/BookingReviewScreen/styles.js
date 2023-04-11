import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
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
    borderColor: '#556a8a',
    marginTop: 5,
    padding: 15,
    backgroundColor: '#556a8a',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
  },
  input: {
    backgroundColor: 'white',
    padding: 5,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#556a8a',
    borderRadius: 5,
    fontSize: 14,
    padding: 10,
    height: 100,
  },
  rating: {
    backgroundColor: 'white',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#556a8a',
    borderRadius: 5,
    fontSize: 14,
  },
});

export default styles;