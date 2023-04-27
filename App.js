import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation';
import { Amplify } from 'aws-amplify';
import awsconfig from './src/aws-exports';
import CoachContextProvider from './src/context/CoachContext';
import PackageContextProvider from './src/context/PackageContext';
import { withAuthenticator, AmplifyTheme } from 'aws-amplify-react-native';
import AuthContextProvider from './src/context/AuthContext';
import SportContextProvider from './src/context/SportContext';
import { DefaultTheme, Provider } from 'react-native-paper';
import { StripeProvider } from '@stripe/stripe-react-native';
import { LogBox } from 'react-native';

Amplify.configure({
  ...awsconfig,
  Analytics: { disabled: true }
});

const STRIPE_KEY =
  'pk_test_51MJf9jGbbj7dyMidAOniPN162ZuAduGXghFRgViAVWrMUR2i9tbqd9lM7PjlG32MnkZwWMZamhn1qQTrVVzIT2eT00aEnHZkCY'

function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <AuthContextProvider>
          <SportContextProvider>
            <CoachContextProvider>
              <PackageContextProvider>
                <StripeProvider publishableKey={STRIPE_KEY}>
                  <RootNavigator />
                </StripeProvider>
                <StatusBar style="auto" />
              </PackageContextProvider>
            </CoachContextProvider>
          </SportContextProvider>
        </AuthContextProvider>
      </NavigationContainer>
    </Provider>
  );
}

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    secondaryContainer: 'transparent', // Use transparent to disable the little highlighting oval
  },
};

const signUpConfig = {
  header: "Sign up for Coach Finder",
  hideAllDefaults: true,
  signUpFields: [
    {
      label: "Username",
      key: "preferred_username",
      required: true,
      displayOrder: 1,
      type: "string",
      placeholder: "Enter username (must be a valid email)",
    },
    {
      label: "Password",
      key: "password",
      required: true,
      displayOrder: 2,
      type: "password",
      placeholder: "Enter password",
    },
  ],
};

const customTheme = {
  ...AmplifyTheme,
  button: {
    ...AmplifyTheme.button,
    backgroundColor: '#556a8a',
    borderRadius: 5,
  },
  buttonDisabled: {
    ...AmplifyTheme.buttonDisabled,
    backgroundColor: '#556a8a',
    borderRadius: 5,
  },
  sectionFooterLink: {
    ...AmplifyTheme.sectionFooterLink,
    color: '#db4f40',
  },
  sectionFooterLinkDisabled: {
    ...AmplifyTheme.sectionFooterLinkDisabled,
    color: '#db4f40',
  },
  input: {
    ...AmplifyTheme.input,
    borderRadius: 5,
    borderColor: '#556a8a',
  },
  section: {
    ...AmplifyTheme.section,
    paddingHorizontal: 10,
  },
  sectionScroll: {
    ...AmplifyTheme.sectionScroll,
    paddingHorizontal: 10,
  },
  buttonText: {
    ...AmplifyTheme.buttonText,
    color: 'white',
    fontWeight: '400',
  },
}

LogBox.ignoreLogs(['new NativeEventEmitter']);

export default withAuthenticator(App, { signUpConfig, theme: customTheme });