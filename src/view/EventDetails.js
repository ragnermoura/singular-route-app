import React, { useEffect, useRef, useState, useCallback } from 'react'
import { SafeAreaView, StatusBar, Appearance, useColorScheme, Platform, KeyboardAvoidingView, View, Text, Image } from 'react-native'
import style from '../../style/Style'
import styleDark from '../../style/StyleDark'
import * as NavigationBar from 'expo-navigation-bar'
import * as SplashScreen from 'expo-splash-screen';
import Loader from '../components/Loader'

export default function EventDetails({ route, navigation }) {
const [isLoading, setIsLoading] = useState(true)
let colorScheme = useColorScheme()
var styleSelected = colorScheme == 'light' ? style : styleDark
var colors = require('../../style/Colors.json')

 useEffect(() => {
console.log('OPEN', EventDetails.name, 'SCREEN')
//For test loading
setTimeout(() => {
setIsLoading(false)
}, 1000);
return () => {
console.log('SCREEN', EventDetails.name, 'CLOSE')
}
}, [])
Appearance.getColorScheme()
Appearance.addChangeListener(({ colorScheme }) => {
console.log('COLOR THEME WAS ALTER')
console.log(colorScheme)
if (Platform.OS === 'android')
NavigationBar.setBackgroundColorAsync(colorScheme === 'light' ? colors.Base_Slot_1 : colors.Base_Slot_1)
})
const onLayoutRootView = useCallback(async () => {
if (isLoading) {
}
}, [isLoading]);
if (isLoading) {
return (
<Loader />
);
}
return (
<SafeAreaView style={[styleSelected.backgroundPrimary, {flex: 1}]} onLayout={onLayoutRootView}>
<StatusBar translucent={true} backgroundColor={'transparent'} barStyle={colorScheme === 'light' ? 'dark-content' : 'light-content'} />
<KeyboardAvoidingView
style={{ flex: 1, marginBottom: 10 }}
enabled={true}
behavior={Platform.OS == 'android' ? 'height' : 'padding'}
keyboardVerticalOffset={Platform.OS == 'android' ? -150 : -150}
>
<View style={{flex: 1, backgroundColor: '#B9314F'}}>
<Image
                            style={styleSelected.EventImage}
                            source={require('../../assets/images/ImageExampleEvent.png')}
                            placeholder="image"
                            contentFit="cover"
                            transition={1000}
                        />
</View>
<View style={{ flex: 1, backgroundColor: '#69A2B0' }}>
<Text style={styleSelected.labeTitle}>AQ VAI TAR NOME, HORARIO, LOCALIZACAO TEMPO E REFUND</Text>
</View>
<View style={{ flex: 1, backgroundColor: 'pink' }}>
<Text style={styleSelected.labeTitle}>AQ VAI TAR AS ESTRELAS</Text>
</View>
<View style={{ flex: 1, backgroundColor: 'red' }}>
<Text style={styleSelected.labeTitle}>AQ VAI TAR O ABOUT</Text>
</View>
<View style={{ flex: 1, backgroundColor: 'cyan' }}>
<Text style={styleSelected.labeTitle}>AQ VAI TAR O PRICES</Text>
</View>
</KeyboardAvoidingView>
</SafeAreaView>
)
}