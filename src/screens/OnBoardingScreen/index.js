import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Dimensions,
    FlatList,
    View,
    Text,
    TouchableOpacity, Image
} from "react-native";
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get("window");

const COLORS = { primary: '#4287f5', white: '#fff' };

const slides = [
    {
        id: '1',
        image: require('../../../assets/logo.png'),
        title: 'Welcome to Coach Finder.',
        subtitle: 'Would you like to find a coach or apply to coach?' 
    },
];

const Slide = ({ item }) => {
    return (
        <View style={{ alignItems: 'center', flex: 1 }}>
            <Image source={item.image} style={{ height: '60%', width }} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
        </View>
    );
};

const OnBoardingScreen = () => {

    const navigation = useNavigation();

    const ref = React.useRef(null);
    const Footer = () => {
        return (
            <View style={{ height: height * 0.25, }}>
                <TouchableOpacity style={[styles.btn]} onPress={() => navigation.navigate('CoachHomeTabs', { screen: 'Profile' })} >
                    <Text style={{ fontWeight: '500', fontSize: 18, }}>
                        Apply To Coach
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn]} onPress={() => navigation.navigate('HomeTabs', { screen: 'Search' })} >
                    <Text style={{ fontWeight: '500', fontSize: 18, }}>
                        Find A Coach
                    </Text>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
            <FlatList
                ref={ref}
                pagingEnabled
                data={slides}
                contentContainerStyle={{ height: height * 0.75 }}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <Slide item={item} />}
            />
            <Footer />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    title: {
        color: COLORS.white,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
    },
    subtitle: {
        color: COLORS.white,
        fontSize: 20,
        maxWidth: '80%',
        marginVertical: 10,
        textAlign: 'center',
        width: 350,
    },
    btn: {
        margin: 5,
        height: 50,
        borderRadius: 5,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default OnBoardingScreen;