import React, { useEffect, useRef, useState, useCallback } from 'react'
import { SafeAreaView, StatusBar, Appearance, useColorScheme, Platform, KeyboardAvoidingView, View, Text, TouchableOpacity, Image, Switch } from 'react-native'
import style from '../../style/Style'
import styleDark from '../../style/StyleDark'
import * as NavigationBar from 'expo-navigation-bar'
import * as SplashScreen from 'expo-splash-screen';
import Loader from '../components/Loader'
import InputDefault from '../components/InputDefault'
import ButtonPrimary from '../components/ButtonPrimary'

export default function ChangePassword({ route, navigation }) {
    const [isLoading, setIsLoading] = useState(true)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmNewPassword, setConfirmNewPassword] = useState("")
    let colorScheme = useColorScheme()
    var styleSelected = colorScheme == 'light' ? style : styleDark
    var colors = require('../../style/Colors.json')

    useEffect(() => {
        console.log('OPEN', ChangePassword.name, 'SCREEN')
        //For test loading
        setTimeout(() => {
            setIsLoading(true)
        }, 1000);
        return () => {
            console.log('SCREEN', ChangePassword.name, 'CLOSE')
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
    if (!isLoading) {
        return (
            <Loader />
        );
    }
    return (
        <SafeAreaView style={[{ flex: 1, backgroundColor: colors.BaseSlot3 }]} onLayout={onLayoutRootView}>
            <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={colorScheme === 'light' ? 'dark-content' : 'light-content'} />
            <KeyboardAvoidingView
                style={{ flex: 1, marginBottom: 10 }}
                enabled={true}
                behavior={Platform.OS == 'android' ? 'height' : 'padding'}
                keyboardVerticalOffset={Platform.OS == 'android' ? -150 : -150}
            >
                <View style={[{ flex: 1, backgroundColor: 'colors.BaseSlot3', marginTop: Platform.OS == "android" ? 0 : 0, marginLeft: 20, marginRight: 20 }]}>
                    <Text style={[styleSelected.textNormal24, {alignSelf:'center'}]}>Change Password</Text>
                    <View style={{ flex: .9, justifyContent: "space-evenly"}}>
                        <InputDefault placeholder={"Current Password"} input={password} setInput={setPassword} secureTextEntry={true}/>
                        <InputDefault placeholder={"New Password"} input={newPassword} setInput={setNewPassword} secureTextEntry={true}/>
                        <InputDefault placeholder={"Confirm New Password"} input={confirmNewPassword} setInput={setConfirmNewPassword} secureTextEntry={true}/>
                    </View>
                    <View style={{ flex: 1, justifyContent: "space-evenly" }}>
                        <View style={{ flexDirection: "row", height: 100, justifyContent: "space-evenly", alignItems: "center", width: "95%", alignSelf: "center"}}>
                        <ButtonPrimary title={"Ok"} colorText={colors.BaseSlot3} />
                        </View>
                    </View>
                   
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}