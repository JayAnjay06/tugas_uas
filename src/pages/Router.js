import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';




import HomePage from './HomePage/HomePage'
import DetailPage from './DetailPage/DetailPage'
import ProfilPage from './ProfilPage/ProfilPage'
import WelcomePage from './WelcomePage/WelcomePage'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainTab = () => {
    return (
        <Tab.Navigator
        activeColor="#e91e63"
        labelStyle={{ fontSize: 12 }}
        style={{ backgroundColor: 'tomato' }}
        screenOptions={{headerShown:false}}
      >
        <Tab.Screen
          name="HomePage"
          component={HomePage}
          options={{
            tabBarLabel: 'HomePage',
            tabBarIcon: ({ color }) => (
              <Ionicons name="home-outline"color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="ProfilPage"
          component={ProfilPage}
          options={{
            tabBarLabel: 'ProfilPage',
            tabBarIcon: ({ color }) => (
              <Ionicons name="person-outline" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    );
}

function Router() {
    return (
        <Stack.Navigator
            initialRouteName='WelcomePage'
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="WelcomePage" component={WelcomePage} />
            <Stack.Screen name="MainTab" component={MainTab} />
        </Stack.Navigator>
    );
}

export default Router;


