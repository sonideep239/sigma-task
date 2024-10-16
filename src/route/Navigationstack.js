import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Creator from '../screen/Creator';
import TabNavigation from './TabNavigation';
import Distance from '../screen/Distance';
import Recentpic from '../screen/Recentpic';

const Stack = createNativeStackNavigator();

export default function NavigationStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Creator'>
                <Stack.Screen
                    name="Creator"
                    component={Creator}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Recentpic"
                    component={Recentpic}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Distance"
                    component={Distance}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="TabNavigation"
                    component={TabNavigation}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
