import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from '../screens/HomeScreen';
import AddressScreen from '../screens/AddressScreen';
import AvailabilityScreen from '../screens/AvailabilityScreen';
import BiographyScreen from '../screens/BiographyScreen';
import BookingDetailScreen from '../screens/BookingDetailScreen';
import BookingsScreen from '../screens/BookingsScreen';
import CredentialsScreen from '../screens/CredentialsScreen';
import PackagesScreen from "../screens/PackagesScreen";
import OnBoardingScreen from "../screens/OnBoardingScreen";
import PlayerHomeScreen from "../screens/Player/HomeScreen"
import PlayerProfileScreen from "../screens/Player/ProfileScreen"
import PlayerBookingDetailScreen from "../screens/Player/BookingDetailScreen"
import PlayerBookingsScreen from "../screens/Player/BookingsScreen"
import PlayerBookPackageScreen from "../screens/Player/BookPackageScreen"
import PlayerCoachProfileScreen from "../screens/Player/CoachProfileScreen"
import PlayerPackagesScreen from "../screens/Player/PackagesScreen"
import PlayerAvailabilityScreen from "../screens/Player/AvailabilityScreen";
import { Foundation, FontAwesome5, MaterialIcons, AntDesign } from '@expo/vector-icons';
import CoachPackageScreen from "../screens/CoachPackage";
import BookingReviewScreen from "../screens/Player/BookingReviewScreen";
import EditCoachPackageScreen from "../screens/EditCoachPackage";

const Stack = createStackNavigator();

const RootNavigator = () => {

    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            {true &&
                (<Stack.Screen options={{ headerShown: false }} name={'OnBoardingScreen'} component={OnBoardingScreen} />)}
            <Stack.Screen name="CoachHomeTabs" component={CoachHomeTabs} />
            <Stack.Screen name="HomeTabs" component={HomeTabs} />
        </Stack.Navigator>
    );
};

const Tab = createMaterialBottomTabNavigator();

const CoachHomeTabs = () => {

    return (
        <Tab.Navigator
            barStyle={{
                backgroundColor: '#f5ece4',
            }}>
            <Tab.Screen
                name="Coach Home"
                component={OnBoardingScreen}
                options={{
                    tabBarIcon: ({ color }) => <Foundation name="home" size={24} color={color} />,
                }}
            />
            <Tab.Screen
                name="Profile"
                component={CoachHomeStackNavigator}
                options={{
                    tabBarIcon: ({ color }) => <FontAwesome5 name="user-alt" size={24} color={color} />,
                }}
            />
            <Tab.Screen
                name="Packages"
                component={CoachPackagesStackNavigator}
                options={{
                    tabBarIcon: ({ color }) => <AntDesign name="dropbox" size={24} color={color} />,
                }}
            />
            <Tab.Screen
                name="Bookings"
                component={CoachOrdersStackNavigator}
                options={{
                    tabBarIcon: ({ color }) => <MaterialIcons name="list-alt" size={24} color={color} />,
                }}
            />
        </Tab.Navigator>
    );
};

const CoachHomeStack = createStackNavigator();

const CoachHomeStackNavigator = () => {
    return (
        <CoachHomeStack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#ebd4be' } }}>
            <CoachHomeStack.Screen name="Basic Information" component={HomeScreen} />
            <CoachHomeStack.Screen name="Address" component={AddressScreen} />
            <CoachHomeStack.Screen name="Credentials" component={CredentialsScreen} />
            <CoachHomeStack.Screen name="Biography" component={BiographyScreen} />
            <CoachHomeStack.Screen name="Availability" component={AvailabilityScreen} />
        </CoachHomeStack.Navigator>
    );
};

const CoachPackagesStack = createStackNavigator();

const CoachPackagesStackNavigator = () => {
    return (
        <CoachPackagesStack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#ebd4be' } }}>
            <CoachPackagesStack.Screen name="Your Packages" component={PackagesScreen} />
            <CoachPackagesStack.Screen name="Create Package" component={CoachPackageScreen} />
            <CoachPackagesStack.Screen name="Edit Package" component={EditCoachPackageScreen} />
        </CoachPackagesStack.Navigator>
    );
};

const CoachOrdersStack = createStackNavigator();

const CoachOrdersStackNavigator = () => {
    return (
        <CoachOrdersStack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#ebd4be' } }}>
            <CoachOrdersStack.Screen name="Your Bookings" component={BookingsScreen} />
            <CoachOrdersStack.Screen name="Booking Details" component={BookingDetailScreen} />
        </CoachOrdersStack.Navigator>
    );
};

const HomeTabs = () => {

    return (
        <Tab.Navigator barStyle={{ backgroundColor: '#f5ece4' }}>
            <Tab.Screen
                name="Player Home"
                component={OnBoardingScreen}
                options={{
                    tabBarIcon: ({ color }) => <Foundation name="home" size={24} color={color} />,
                }}
            />
            <Tab.Screen
                name="Search"
                component={HomeStackNavigator}
                options={{
                    tabBarIcon: ({ color }) => <FontAwesome5 name="search" size={24} color={color} />,
                }}
            />
            <Tab.Screen
                name="Bookings"
                component={OrdersStackNavigator}
                options={{
                    tabBarIcon: ({ color }) => <MaterialIcons name="list-alt" size={24} color={color} />,
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileStackNavigator}
                options={{
                    tabBarIcon: ({ color }) => <FontAwesome5 name="user-alt" size={24} color={color} />,
                }}
            />
        </Tab.Navigator>
    );
};

const HomeStack = createStackNavigator();

const HomeStackNavigator = () => {
    return (
        <HomeStack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#ebd4be' } }}>
            <HomeStack.Screen name="Search Coaches" component={PlayerHomeScreen} />
            <HomeStack.Screen name="Availability" component={PlayerAvailabilityScreen} options={{ headerShown: false }} />
            <HomeStack.Screen name={'Coach Profile'} component={PlayerCoachProfileScreen} options={{ headerShown: false }} />
            <HomeStack.Screen name="Packages" component={PlayerPackagesScreen} />
            <HomeStack.Screen name="Book Package" component={PlayerBookPackageScreen} />
        </HomeStack.Navigator>
    );
};

const OrdersStack = createStackNavigator();

const OrdersStackNavigator = () => {
    return (
        <OrdersStack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#ebd4be' } }}>
            <OrdersStack.Screen name="Your Bookings" component={PlayerBookingsScreen} />
            <OrdersStack.Screen name={'Booking'} component={PlayerBookingDetailScreen} options={{ headerShown: false }} />
            <OrdersStack.Screen name="Review Booking" component={BookingReviewScreen} />
        </OrdersStack.Navigator>
    );
};
const ProfileStack = createStackNavigator();

const ProfileStackNavigator = () => {
    return (
        <ProfileStack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#ebd4be' } }}>
            <ProfileStack.Screen name="Your Profile" component={PlayerProfileScreen} />
        </ProfileStack.Navigator>
    );
};

export default RootNavigator;