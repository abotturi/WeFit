import * as React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabMenu from './screens/Tabs/Tabs';
import Details from './screens/details'
import ContextProviders from './context/providers'
import Header from './components/header';

const Stack = createNativeStackNavigator();

function StackApp() {
  return (
    <NavigationContainer>
      <ContextProviders>        
        <StatusBar backgroundColor="#fff" barStyle='dark-content' />
        <Stack.Navigator>
          <Stack.Screen name="tabs" component={TabMenu} options={{header: () => <Header />}}  />
          <Stack.Screen
            name="details"
            component={Details}
            options={{
              title: 'Detalhes',
              headerStyle: {
                backgroundColor: '#000',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                color: '#fff',
              },
            }}
          />
        </Stack.Navigator>
      </ContextProviders>
    </NavigationContainer>
  );
}

export default StackApp