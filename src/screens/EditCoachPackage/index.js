import { View, Pressable, Text, TextInput, ScrollView } from 'react-native';
import styles from './styles';
import { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { DataStore } from 'aws-amplify';
import { Package } from '../../models';

const EditCoachPackageScreen = () => {

    const navigation = useNavigation();

    const route = useRoute();

    const pack = route.params?.pack;

    const [packageName, setPackageName] = useState(pack.name);
    const [price, setPrice] = useState(pack.price.toFixed(2).toString());
    const [shortDesc, setShortDesc] = useState(pack.shortDesc);
    const [longDesc, setLongDesc] = useState(pack.longDesc);
    const [length, setLength] = useState(pack.length.toString());

    const onCreatePackage = async () => {
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

        const p = await DataStore.save(
            Package.copyOf(pack, (updated) => {
              updated.name = packageName;
              updated.price = parseFloat(price);
              updated.shortDesc = shortDesc;
              updated.longDesc = longDesc;
              updated.length = parseInt(length);
            })
          );
          setPackageName(p.name);
          setPrice(p.price.toFixed(2).toString());
          setShortDesc(p.shortDesc);
          setLongDesc(p.longDesc);
          setLength(p.length.toString());

        alert('Package Edited.');
        navigation.navigate('Your Packages');
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
                <Text style={{ textAlign: 'right', color: 'black' }}>
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
                <Text style={{ textAlign: 'right', color: 'black' }}>
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
                <Pressable style={styles.button} onPress={onCreatePackage}>
                    <Text style={styles.buttonText}>EDIT</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
}

export default EditCoachPackageScreen;