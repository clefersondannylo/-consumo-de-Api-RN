import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack' 

import { Home } from '../pages/Home'
import { Detail } from '../pages/Detail'


export  default function Routes(){
const Stack = createStackNavigator();
  return(
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Detail" component={Detail}/>
        </Stack.Navigator>
    </NavigationContainer>


  )





}