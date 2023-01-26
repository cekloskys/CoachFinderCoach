import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from '../screens/HomeScreen';
import AddressScreen from '../screens/AddressScreen';
import AvailabilityScreen from '../screens/AvailabilityScreen';
import BiographyScreen from '../screens/BiographyScreen';
import BookingDetailScreen from '../screens/BookingDetailScreen';
import BookingsScreen from '../screens/BookingsScreen';
import CredentialsScreen from '../screens/CredentialsScreen';
import ProfileScreen from "../screens/ProfileScreen";
import { Foundation, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();

const RootNavigator = () => {

    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="HomeTabs" component={HomeTabs}/>        
        </Stack.Navigator>
    );
};

const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {

    return (
        <Tab.Navigator barStyle={{backgroundColor: 'white'}}>
            <Tab.Screen 
                name="Home" 
                component={HomeStackNavigator} 
                options={{
                    tabBarIcon: ({color}) => <Foundation name="home" size={24} color={color} />,
                }}
            />
            <Tab.Screen 
                name="Your Bookings" 
                component={OrdersStackNavigator} 
                options={{
                    tabBarIcon: ({color}) => <MaterialIcons name="list-alt" size={24} color={color} />,
                }}
            />
            <Tab.Screen 
                name="Profile" 
                component={ProfileScreen} 
                options={{
                    tabBarIcon: ({color}) => <FontAwesome5 name="user-alt" size={24} color={color} />,
                }}
            />
        </Tab.Navigator>
    );
};

const HomeStack = createStackNavigator();

const HomeStackNavigator = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Basic Information" component={HomeScreen} />
            <HomeStack.Screen name="Address" component={AddressScreen} />
            <HomeStack.Screen name="Credentials" component={CredentialsScreen} />
            <HomeStack.Screen name="Biography" component={BiographyScreen} />
            <HomeStack.Screen name="Availability" component={AvailabilityScreen} />
        </HomeStack.Navigator>   
    ); 
};

const OrdersStack = createStackNavigator();

const OrdersStackNavigator = () => {
    return (
        <OrdersStack.Navigator>
            <OrdersStack.Screen name="Bookings" component={BookingsScreen} />
            <OrdersStack.Screen name="Booking" component={BookingDetailScreen} />
        </OrdersStack.Navigator>   
    );
};

export default RootNavigator;