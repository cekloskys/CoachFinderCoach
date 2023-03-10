import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation';
import { Amplify } from 'aws-amplify';
import awsconfig from './src/aws-exports';
import CoachContextProvider from './src/context/CoachContext';

Amplify.configure({ ...awsconfig, Analytics: { disabled: true } });

export default function App() {
  return (
    <NavigationContainer>
      <CoachContextProvider>
        <RootNavigator />
        <StatusBar style="auto" />
      </CoachContextProvider>
    </NavigationContainer>
  );
}