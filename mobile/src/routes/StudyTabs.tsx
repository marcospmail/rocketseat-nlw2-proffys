import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import TeacherList from '../pages/TeacherList'
import Favorites from '../pages/Favorites'

const { Navigator, Screen } = createBottomTabNavigator()

function StudyTabs() {

  return (
    <Navigator
      backBehavior="none"
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64
        },
        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20
        },
        labelStyle: {
          fontFamily: 'Archivo_700Bold',
          fontSize: 13,
          marginLeft: 16
        },
        activeBackgroundColor: '#ebebf5',
        activeTintColor: '#32264d',
        inactiveBackgroundColor: '#fafafc',
        inactiveTintColor: '#c1bccc'
      }}>
      <Screen name="TeacherList" component={TeacherList} options={{
        tabBarLabel: 'Proffys',
        tabBarIcon: ({ size, color, focused }) => (
          <Ionicons name="ios-easel" size={size} color={focused ? '#8257e5' : color} />
        )
      }} />
      <Screen name="Favorites" component={Favorites} options={{
        tabBarLabel: 'Favorites',
        tabBarIcon: ({ size, color, focused }) => (
          <Ionicons name="ios-heart" size={size} color={focused ? '#8257e5' : color} />
        )
      }} />
    </Navigator>
  )
}

export default StudyTabs