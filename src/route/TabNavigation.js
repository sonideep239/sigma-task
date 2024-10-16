import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { Platform } from 'react-native';
import Home from '../screen/Home';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <Tab.Navigator
            initialRouteName='Profile'
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    switch (route.name) {
                        case 'Home':
                            iconName = 'fire';
                            break;
                        case 'Stars':
                            iconName = 'male';
                            break;
                        case 'Chat':
                            iconName = 'male';
                            break;
                        case 'Profile':
                            iconName = 'male';
                            break;
                        default:
                            iconName = 'fire';
                            break;
                    }
                    return <Fontisto name={iconName} size={size} color={color} />;
                },
                tabBarLabelStyle: {
                    fontSize: 14,
                    fontWeight: 'bold',
                },
                tabBarStyle: {
                    paddingTop: 5,
                    height: Platform.OS === 'ios' ? 70 : 70,
                    paddingBottom: Platform.OS === 'ios' ? 10 : 5,
                },
                tabBarActiveTintColor: '#EA4080',
                tabBarInactiveTintColor: '#000000',
                tabBarHideOnKeyboard: true,
            })}
        >
            <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Tab.Screen name="Stars" component={Home} options={{ headerShown: false }} />
            <Tab.Screen name="Chat" component={Home} options={{ headerShown: false }} />
            <Tab.Screen name="Profile" component={Home} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
}
