import React from 'react';

import Register from './src/views/Register';

import { NavigationContainer } from '@react-navigation/native';;
import { createStackNavigator } from '@react-navigation/stack';
import { useColorScheme } from 'react-native';
import { View } from './package.json'
import style from './style/Style'
import styleDark from './style/StyleDark'

var styleSelected = colorScheme == 'light' ? style : styleDark

const Stack = createStackNavigator();
Appearance.getColorScheme()
    Appearance.addChangeListener(({ colorScheme }) => {
        console.log('COLOR THEME WAS ALTER')
        console.log(colorScheme)
        if (Platform.OS === 'android')
            NavigationBar.setBackgroundColorAsync(colorScheme === 'light' ? colors.Base_Slot_1 : colors.Base_Slot_1)
    })
    
export default function App(){
  let colorScheme = useColorScheme()
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Register' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>,
    <View style={styleSelected.container}>
      <Button labelButton="SignUp" onpress="WelcomeScreen" />
    </View>
  );
}
