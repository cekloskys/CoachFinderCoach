import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    page: {
      padding: 10,
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
    address: {
      fontsize: 16,
      marginBottom: 15,
      borderBottomWidth: 1.0,
      color: 'black',
      borderColor: 'black',
    },
  });

  export default styles;