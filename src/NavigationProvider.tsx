import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import ScheduleScreen from './screens/schedule';
import SettingsScreen from './screens/Settings';
import { useBottomBarIcon } from './utils/useBottomBarIcon';
import { Image, StyleSheet } from 'react-native';

const BottonTabs = createBottomTabNavigator();

const Header = () => (
  <Image
    source={require('./assets/pngs/react_native_heroes.png')}
    style={styles.headerLogo}
    resizeMode="contain"
  />
);

const NavigationProvider = (): JSX.Element => {
  const bottomBarIcon = useBottomBarIcon();
  return (
    <NavigationContainer>
      <BottonTabs.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: '#9334FF',
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => bottomBarIcon(route.name, color),
          headerTitle: Header,
        })}
        initialRouteName="Feed">
        <BottonTabs.Screen
          name="Feed"
          component={ScheduleScreen}
          options={{}}
        />
        <BottonTabs.Screen name="Settings" component={SettingsScreen} />
      </BottonTabs.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  headerLogo: {
    width: 100,
  },
});

export default NavigationProvider;
