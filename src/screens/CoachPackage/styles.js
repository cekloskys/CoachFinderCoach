import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    page: {
        padding: 10,
        backgroundColor: 'white',
        flex: 1,
    },
    input: {
        height: 50,
        backgroundColor: '#dfe3eb',
        padding: 5,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#dfe3eb',
        borderRadius: 5,
        fontSize: 14,
        padding: 10,
    },
    button: {
        backgroundColor: '#556a8a', 
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 50,
    },
    multilineinput: {
        height: 75,
        backgroundColor: '#dfe3eb',
        padding: 5,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#dfe3eb',
        borderRadius: 5,
        fontSize: 14,
        padding: 10,
    },
    buttonText: {
        fontSize: 14,
        color: 'white',
    },
});

export default styles;