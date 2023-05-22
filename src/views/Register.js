import React, { useEffect, useRef, useState, useCallback } from 'react'
import { SafeAreaView, StatusBar, Appearance, useColorScheme, Platform, KeyboardAvoidingView, View, Text, TextInput, Pressable } from 'react-native'
import style from '../../style/Style'
import styleDark from '../../style/StyleDark'
import * as NavigationBar from 'expo-navigation-bar'
import * as SplashScreen from 'expo-splash-screen';
import Loader from '../components/Loader'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Image } from 'react-native';

export default function Register({ route, navigation }) {
    const [isLoading, setIsLoading] = useState(true)
    const [nome, setNome] = useState("Nome")
    const mudarNome = () => { }
    let colorScheme = useColorScheme()
    var styleSelected = colorScheme == 'light' ? style : styleDark
    var colors = require('../../style/Colors.json')

    useEffect(() => {
        console.log('OPEN', Register.name, 'SCREEN')
        //For test loading
        setTimeout(() => {
            setIsLoading(false)
        }, 1000);
        return () => {
            console.log('SCREEN', Register.name, 'CLOSE')
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
        <SafeAreaView style={[styleSelected.backgroundPrimaryLogin, { flex: 1 }]} onLayout={onLayoutRootView}>
            <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={colorScheme === 'light' ? 'dark-content' : 'light-content'} />
            <KeyboardAvoidingView
                style={{ flex: 1, marginBottom: 10 }}
                enabled={true}
                behavior={Platform.OS == 'android' ? 'height' : 'padding'}
                keyboardVerticalOffset={Platform.OS == 'android' ? 0 : 0}
            >
                <View style={[styleSelected.backgroundPrimaryLogin, { flex: 1 }]}>
                    <View style={{ flex: 1, marginBottom: 30 }}>
                        <Image
                            style={styleSelected.ArrowBack}
                            source={require('../../assets/Arrow_Back.png')}
                            placeholder="image"
                            contentFit="cover"
                            transition={1000}
                        />

                        <Text style={styleSelected.CreateAccount}>Create a new account</Text>
                    </View>
                    <View style={{ flex: 1, marginBottom: -100, marginTop: 160 }}>
                        <Text style={styleSelected.Label}>Full Name:</Text>
                        <TextInput
                            style={styleSelected.labeledInput}
                            value={nome}
                            onChangeText={text => setNome(text)}
                            placeholder='Enter your name'
                        />
                    </View>
                    <View style={{ flex: 1, marginBottom: -100, marginTop: 90 }}>
                        <Text style={styleSelected.Label}>Email Adress:</Text>
                        <TextInput
                            style={styleSelected.labeledInput}
                            value={nome}
                            onChangeText={text => setNome(text)}
                            placeholder='name@example.com'
                        />
                    </View>
                    <View style={{ flex: 1, marginBottom: -100, marginTop: 90 }}>
                        <Text style={styleSelected.Label}>Create Password:</Text>
                        <TextInput
                            secureTextEntry={true}
                            style={styleSelected.labeledInput}
                            value={nome}
                            onChangeText={text => setNome(text)}
                            placeholder='Enter your password'
                        />
                    </View>
                    <View style={{ flex: 1, marginTop: 90 }}>
                        <Text style={styleSelected.Label}>Repeat Password:</Text>
                        <TextInput
                            secureTextEntry={true}
                            style={styleSelected.labeledInput}
                            value={nome}
                            onChangeText={text => setNome(text)}
                            placeholder='Enter your password'
                        />
                    </View>
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", }}>
                        <Text style={styleSelected.textNormal32}>Or Signup With:</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", flexDirection: 'row' }}>
                        <Image
                            style={styleSelected.FacebookLogo}
                            source={require('../../assets/FacebookLogo.png')}
                            placeholder="FacebookLogo"
                        />
                        <Image
                            style={styleSelected.FacebookLogo}
                            source={require('../../assets/AppleIcon.png')}
                            placeholder="AppleIcon"
                        />
                        <Image
                            style={styleSelected.FacebookLogo}
                            source={require('../../assets/GoogleIcon.png')}
                            placeholder="GoogleIcon"
                        />
                    </View>

                    

                </View>
                <View style={ styleSelected.buttonSignUp2}>
                        <Pressable style={styleSelected.buttonSignUp2}>
                            <Text style={styleSelected.textbutton2}>Sign up</Text>
                        </Pressable>
                    </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}