import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Repositories from './repositories'
import Favorites from './favorites';


const Tab = createBottomTabNavigator();

const TabMenu = () => {

    const TabCustom = ({focused, icon, text}) => {
        return(
            <View style={{justifyContent: 'center', alignItems: 'center'}}> 
                {icon}
                {
                    text ?
                        <Text style={{fontSize: 12, color: focused ? '#1976d2' : 'rgba(0, 0, 0, 0.6)'}}>{text}</Text>
                        : null
                }
            </View>
        )
    }

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 55,
                    backgroundColor: "#fff"
                }
            }}
          >
            <Tab.Screen
                name="repositories"
                component={Repositories}
                options={{
                    headerShown: false,
                    tabBarIcon: ({focused}) => {
                        return (
                            <TabCustom
                                focused={focused}
                                icon={<AntDesign name="github" size={20} color={focused ? '#1976d2' : 'rgba(0, 0, 0, 0.6)'} />}
                                text='Repositórios'
                            />
                        )
                    }
                }}
            />
            <Tab.Screen
                name="favorites"
                component={Favorites}
                options={{
                    headerShown: false,
                    tabBarIcon: ({focused}) => {
                        return (
                            <TabCustom
                                focused={focused}
                                icon={<Entypo name="star" size={20} color={focused ? '#1976d2' : 'rgba(0, 0, 0, 0.6)'} />}
                                text='Favoritos'
                            />
                        )
                    }
                }}
            />
        </Tab.Navigator>
    );
}

export default TabMenu