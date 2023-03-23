import { View, FlatList, Pressable, Text, TextInput, ScrollView } from 'react-native';
import styles from './styles';
import { useState, useEffect } from 'react';
import NumericInput from 'react-native-numeric-input'
import { useNavigation } from '@react-navigation/native';

const CoachPackageScreen = () => {

    const navigation = useNavigation();

    const [packageName, setPackageName] = useState('');
    const [price, setPrice] = useState('');
    const [shortDesc, setShortDesc] = useState('');
    const [longDesc, setLongDesc] = useState('');
    const [length, setLength] = useState('');

    // name (text input)
    // price (number)
    // short description (text input)
    // long description (text input)
    // length (number)

    const onCreatePackage = () => {
        if (!packageName) {
            alert('Please enter a package name.')
            return;
        }
        if (!price) {
            alert('Please enter a package price.')
            return;
        }
        if (!shortDesc) {
            alert('Please enter a short description.')
            return;
        }
        if (!longDesc) {
            alert('Please enter a long description.')
            return;
        }
        if (!length) {
            alert('Please enter a session length')
            return;
        }

        navigation.navigate('Packages');
    }
    

    return (
        <ScrollView style={styles.page}>
            <TextInput
                style={styles.input}
                placeholder='Enter Package Name'
                value={packageName}
                onChangeText={(text) => {
                    setPackageName(text);
                }}
            />
            <TextInput
                style={styles.input}
                placeholder='Enter Package Price'
                value={price}
                keyboardType={'number-pad'}
                onChangeText={(text) => {
                    setPrice(text);
                }}
            />
            <TextInput
                style={styles.multilineinput}
                multiline={true}
                placeholder='Enter Short Description'
                value={shortDesc}
                onChangeText={(text) => {
                    setShortDesc(text);
                }}
                maxLength={50}
            />
            <View style={styles.row}>
                <Text style={{ textAlign: 'right', color: 'grey' }}>
                    {shortDesc.length} characters (maximum 50 characters)
                </Text>
            </View>
            <TextInput
                style={styles.multilineinput}
                multiline={true}
                placeholder='Enter Long Description'
                value={longDesc}
                onChangeText={(text) => {
                    setLongDesc(text);
                }}
                maxLength={100}
            />
            <View style={styles.row}>
                <Text style={{ textAlign: 'right', color: 'grey' }}>
                    {longDesc .length} characters (maximum 100 characters)
                </Text>
            </View>
            <TextInput
                style={styles.input}
                placeholder='Enter Session Length in Minutes'
                value={length}
                keyboardType={'number-pad'}
                onChangeText={(text) => {
                    setLength(text);
                }}
            />
            <View style={styles.bottom}>
                <Pressable style={styles.button} >
                    <Text style={styles.buttonText}>Create</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
}

export default CoachPackageScreen;