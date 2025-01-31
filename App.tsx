/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {Text, useColorScheme, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NativeBaseProvider, theme} from 'native-base';
import {QueryClient, QueryClientProvider} from 'react-query';
import Room from './src/Room';
import Moment from './src/Moment';
import Chat from './src/Chat';
import Me from './src/Me';
import {BlogIcon, ChatIcon, EarthIcon, IcHomeIcon, PartyIcon, ProfileIcon} from './src/components/common/Icon/icons';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const queryClient = new QueryClient();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  // useEffect(()=>{
  //   console.log('===========',Config.SERVER_BASE_URL);
  // },[])

  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({route}) => ({
              tabBarStyle: {
                height: 80,
                paddingTop:10
              },
              headerShown: false,
              tabBarLabel: ({focused}) => {
                if (route.name === 'Sing') {
                  return null;
                }
                return (
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: '600',
                      color: focused ? '#ff429a' : '#d5d8df',
                    }}>
                    {route.name}
                  </Text>
                );
              },
              tabBarIcon: ({focused, color, size}) => {
                if (route.name === 'Sing') {
                  return (
                    <View
                      style={{
                        backgroundColor: '#ff429a',
                        width: 50,
                        height: 50,
                        marginTop: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 30,
                        elevation: 5,
                        shadowColor: '#000',
                        shadowOffset: {width: 0, height: 4},
                        shadowOpacity: 0.3,
                        shadowRadius: 6,
                      }}>
                      <IcHomeIcon size={24} color={'#FFF'} />
                    </View>
                  );
                } else if (route.name === 'Room') {
                  return (
                    <PartyIcon
                      size={40}
                      color={focused ? '#ff429a' : '#d5d8df'}
                    />
                  );
                } else if (route.name === 'Moment') {
                  return (
                    <EarthIcon
                      size={24}
                      color={focused ? '#ff429a' : '#d5d8df'}
                    />
                  );
                } else if (route.name === 'Chat') {
                  return (
                    <ChatIcon
                      size={24}
                      color={focused ? '#ff429a' : '#d5d8df'}
                    />
                  );
                } else if (route.name === 'Me') {
                  return (
                    <ProfileIcon
                      size={24}
                      color={focused ? '#ff429a' : '#d5d8df'}
                    />
                  );
                }
              },
            })}>
            <Tab.Screen name="Room" component={Room} />
            <Tab.Screen name="Moment" component={Moment} />
            <Tab.Screen name="Sing" component={Moment} />
            <Tab.Screen name="Chat" component={Chat} />
            <Tab.Screen name="Me" component={Me} />
          </Tab.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </QueryClientProvider>
  );
};

export default App;
