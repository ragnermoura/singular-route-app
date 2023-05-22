import React, { useEffect, useRef, useState, useCallback } from 'react'
import { SafeAreaView, StatusBar, Appearance, useColorScheme, Platform, KeyboardAvoidingView, View, Text, StyleSheet, Pressable } from 'react-native'
import style from '../style/Style'
import styleDark from '../style/StyleDark'
import * as NavigationBar from 'expo-navigation-bar'
import * as SplashScreen from 'expo-splash-screen';
import Loader from '../src/components/Loader'
import { useNavigation } from '@react-navigation/native'; 
import { Image } from 'react-native'; 

export default function WelcomeScreen({ route, navigation, promps }) {
    const [isLoading, setIsLoading] = useState(true);
    let colorScheme = useColorScheme()
    var styleSelected = colorScheme == 'light' ? style : styleDark
    var colors = require('../style/Colors.json')
    

    const handleSignClick = async () => {
        navigation.navigate("Login")
    }

    useEffect(() => {
        console.log('OPEN', WelcomeScreen.name, 'SCREEN')
        //For test loading
        setTimeout(() => {
            setIsLoading(false)
        }, 1000);
        return () => {
            console.log('SCREEN', WelcomeScreen.name, 'CLOSE')
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
        if (isLoading) {;
        }
    }, [isLoading]);
    if (isLoading) {
        return (
            <Loader />
        );                                         
    }
    return (
        <SafeAreaView style={[styleSelected.backgroundPrimaryLogin, { flex: 1 }]} onLayout={onLayoutRootView}>
            <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={colorScheme === 'light' ? 'dark-content' : 'light-content'} />
            <KeyboardAvoidingView
                style={{ flex: 1, marginBottom: 10 }}
                enabled={true}
                behavior={Platform.OS == 'android' ? 'height' : 'padding'}
                keyboardVerticalOffset={Platform.OS == 'android' ? -150 : -150}
            >
               <View style={[styleSelected.backgroundPrimaryLogin, { flex: 1 }]}>
                    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                        <Text style={styleSelected.textNormal32}>Welcome</Text>
                        <Text style={styleSelected.textNormal16}>Sign in or create a new account</Text>
                    </View>
                    <View style={{flex: 1}}>
                    <Image
                        style={styleSelected.WelcomeImage}
                        source={require('../assets/WelcomeImage.png')}
                        placeholder="image"
                        contentFit="cover"
                        transition={1000}
                    />
                    </View>
                    <View style={{flex: 1}}>
                   <Pressable style={style.button}  onPress={handleSignClick}>
                      <Text style={style.textbutton}>Sign</Text>
                     </Pressable> 
                   <Pressable style={style.button2}  onPress={handleSignClick}>
                      <Text style={style.textbutton2}>No account yet? <Text style={style.textbutton3}>Sign up</Text></Text>
                     </Pressable> 
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )

    
}