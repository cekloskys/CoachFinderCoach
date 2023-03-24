import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation';
import { Amplify } from 'aws-amplify';
import awsconfig from './src/aws-exports';
import CoachContextProvider from './src/context/CoachContext';
import { withAuthenticator } from 'aws-amplify-react-native';
import AuthContextProvider from './src/context/AuthContext';
Amplify.configure({ ...awsconfig, Analytics: { disabled: true } });

function App() {
  return (
    <NavigationContainer>
      <AuthContextProvider>
      <CoachContextProvider>
        <RootNavigator />
        <StatusBar style="auto" />
      </CoachContextProvider>
      </AuthContextProvider>
    </NavigationContainer>
  );
}
export default withAuthenticator(App);