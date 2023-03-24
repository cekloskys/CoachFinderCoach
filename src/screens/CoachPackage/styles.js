import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    page: {
        padding: 10,
    },
    text: {
        fontSize: 25,
        color: 'red',
        padding: 3,
        marginBottom: 10,
        textAlign: 'center'
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
    button: {
        backgroundColor: 'lightgrey',
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
    },
    multilineinput: {
        height: 75,
        backgroundColor: 'white',
        padding: 5,
        marginVertical: 5,
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 5,
        fontSize: 16,
      },
    buttonText: {
        fontSize: 16,
        color: '#444',
    },
});

export default styles;