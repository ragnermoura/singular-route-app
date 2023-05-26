import React, { useEffect, useRef, useState, useCallback } from 'react'
import { SafeAreaView, StatusBar, Appearance, useColorScheme, Platform, KeyboardAvoidingView, View, Text, Image } from 'react-native'
import style from '../../style/Style'
import styleDark from '../../style/StyleDark'
import * as NavigationBar from 'expo-navigation-bar'
import * as SplashScreen from 'expo-splash-screen';
import Loader from '../components/Loader'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ScrollView } from 'react-native-gesture-handler'

export default function HomeScreen({ route, navigation }) {
    const [isLoading, setIsLoading] = useState(true)
    let colorScheme = useColorScheme()
    var styleSelected = colorScheme == 'light' ? style : styleDark
    var colors = require('../../style/Colors.json')
    const Tab = createBottomTabNavigator();

    useEffect(() => {
        console.log('OPEN', HomeScreen.name, 'SCREEN')
        //For test loading
        setTimeout(() => {
            setIsLoading(false)
        }, 1000);
        return () => {
            console.log('SCREEN', HomeScreen.name, 'CLOSE')
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

    function HomeScreenMenu() {
        return (

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    source={require('../../assets/images/home.png')}
                    placeholder="image"
                    contentFit="cover"
                    transition={1000}
                />
                <Text>Home</Text>
            </View>
        )
    }
    function SearchScreen() {
        return (

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    source={require('../../assets/images/search.png')}
                    placeholder="image"
                    contentFit="cover"
                    transition={1000}
                />
                <Text>Search</Text>
            </View>
        )
    }

    function TicketScreen() {
        return (

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    source={require('../../assets/images/ticket.png')}
                    placeholder="image"
                    contentFit="cover"
                    transition={1000}
                />
                <Text>Home</Text>
            </View>
        )
    }
    function HeartScreen() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    source={require('../../assets/images/heart_menu.png')}
                    placeholder="image"
                    contentFit="cover"
                    transition={1000}
                />
                <Text>Home</Text>
            </View>
        )
    }
    function ProfileScreen() {
        return (

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    source={require('../../assets/images/user.png')}
                    placeholder="image"
                    contentFit="cover"
                    transition={1000}
                />
                <Text>Home</Text>
            </View>
        )
    }

    return (
        <ScrollView>
        <SafeAreaView style={[styleSelected.backgroundPrimary, { flex: 1 }]} onLayout={onLayoutRootView}>
            <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={colorScheme === 'light' ? 'dark-content' : 'light-content'} />
            <KeyboardAvoidingView
                style={{ flex: 1, marginBottom: 10 }}
                enabled={true}
                behavior={Platform.OS == 'android' ? 'height' : 'padding'}
                keyboardVerticalOffset={Platform.OS == 'android' ? -150 : -150}
            >
                <View style={{ flex: 1, backgroundColor: colors.BaseSlot3 }}>
                    <View style={{ backgroundColor: colors.BaseSlot3, marginLeft: 20 }}>
                        <Text style={[styleSelected.textNormal12, { color: '#7C7C7C' }]}>Find events in</Text>
                        <View style={{ backgroundColor: colors.BaseSlot3, flexDirection: 'row' }}>
                            <Image
                                style={[styleSelected.map_pin, { marginTop: 7 }]}
                                source={require('../../assets/images/map_pin.png')}
                                placeholder="image"
                                contentFit="cover"
                                transition={1000}
                            />
                            <Text style={[styleSelected.textNormal18, { color: '#262627', marginLeft: 5 }]}>Lisboa</Text>
                            <Image
                                style={[styleSelected.down_button, { marginLeft: 10, marginTop: 7 }]}
                                source={require('../../assets/images/down_button.png')}
                                placeholder="image"
                                contentFit="cover"
                                transition={1000}
                            />
                        </View>
                    </View>
                    <View style={{ backgroundColor: colors.BaseSlot3, marginLeft: 20, marginTop: 20 }}>
                        <Text style={styleSelected.textNormal16}>Popular in Lisboa</Text>
                        <View style={{ backgroundColor: '#FFFFFF', marginTop: 20, marginRight: 10, borderRadius: 5 }}>
                            
                            <Image
                                style={[styleSelected.Museu_Image]}
                                source={require('../../assets/images/Museu_Image.png')}
                                placeholder="image"
                                contentFit="cover"
                                transition={1000}
                            />
                            
                            <View>
                            <Image
                                style={[styleSelected.label, {top: -115, left: 320 , marginRight: -100}]}
                                source={require('../../assets/images/label.png')}
                                placeholder="image"
                                contentFit="cover"
                                transition={1000}
                            />
                                <Text style={styleSelected.textNormal12}>Mon, Apr 18 · 21:00 Pm </Text>
                                <Text style={[styleSelected.textNormal16, { fontWeight: 700 }]}>Museu Berardo</Text>
                                <View style={{ flexDirection: 'row' }}>
                                
                                    <Image
                                        style={[styleSelected.map_pin, { marginTop: 3 }]}
                                        source={require('../../assets/images/map_pin.png')}
                                        placeholder="image"
                                        contentFit="cover"
                                        transition={1000}
                                    />
                                    <Text style={[styleSelected.textNormal12, { marginLeft: 2 }]}>Praça do Império, 1449-003 Lisboa</Text>
                                </View>
                                <View style={{ flexDirection: 'row', marginLeft: 'auto', justifyContent: 'space-between' }}>
                                    <Text style={[styleSelected.textNormal18, { marginRight: 4 }]}>5</Text>
                                    <Image
                                        style={[styleSelected.down_button, { marginTop: 4, marginRight: 10 }]}
                                        source={require('../../assets/images/star.png')}
                                        placeholder="image"
                                        contentFit="cover"
                                        transition={1000}
                                    />
                                    <Image
                                        style={[styleSelected.down_button, { marginTop: 4, marginRight: 10 }]}
                                        source={require('../../assets/images/heart.png')}
                                        placeholder="image"
                                        contentFit="cover"
                                        transition={1000}
                                    />
                                    <Image
                                        style={[styleSelected.down_button, { marginTop: 4, marginRight: 10 }]}
                                        source={require('../../assets/images/share.png')}
                                        placeholder="image"
                                        contentFit="cover"
                                        transition={1000}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ height: 90, backgroundColor: colors.BaseSlot3, marginLeft: 20, marginTop: 20 }}>
                        <View style={{ backgroundColor: 'white', width: 90 }}>
                            <Image
                                style={styleSelected.Image_Museu_2}
                                source={require('../../assets/images/Image_Museu_2.png')}
                                placeholder="image"
                                contentFit="cover"
                                transition={1000}
                            />
                        </View>
                        <View style={{ alignSelf: 'center', marginTop: -80, marginLeft: 60, top: -20 }}>
                        <Image
                                style={[styleSelected.label, {top: 9, marginLeft: -40}]}
                                source={require('../../assets/images/label.png')}
                                placeholder="image"
                                contentFit="cover"
                                transition={1000}
                            />
                            <Text style={[styleSelected.textNormal12]}>Mon, Apr 18 · 21:00 Pm </Text>
                            <Text style={[styleSelected.textNormal16, { fontWeight: 700, marginTop: 8 }]}>Museu Berardo</Text>
                            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                <Image
                                    style={[styleSelected.map_pin, { marginTop: -1 }]}
                                    source={require('../../assets/images/map_pin.png')}
                                    placeholder="image"
                                    contentFit="cover"
                                    transition={1000}
                                />
                                <Text style={[styleSelected.textNormal12, { marginLeft: 2, marginTop: -4 }]}>Praça do Império, 1449-003 Lisboa</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginLeft: 'auto', justifyContent: 'space-between', marginTop: -54, marginRight: -30 }}>
                                <Text style={[styleSelected.textNormal18, { marginRight: 4 }]}>5</Text>
                                <Image
                                    style={[styleSelected.down_button, { marginTop: 4, marginRight: 10 }]}
                                    source={require('../../assets/images/star.png')}
                                    placeholder="image"
                                    contentFit="cover"
                                    transition={1000}
                                />
                                <Image
                                    style={[styleSelected.down_button, { marginTop: 4, marginRight: 10 }]}
                                    source={require('../../assets/images/heart.png')}
                                    placeholder="image"
                                    contentFit="cover"
                                    transition={1000}
                                />
                                <Image
                                    style={[styleSelected.down_button, { marginTop: 4, marginRight: 10 }]}
                                    source={require('../../assets/images/share.png')}
                                    placeholder="image"
                                    contentFit="cover"
                                    transition={1000}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={{ height: 90, backgroundColor: colors.BaseSlot3, marginLeft: 20, marginTop: 20 }}>
                        <View style={{ backgroundColor: 'white', width: 90 }}>
                            <Image
                                style={styleSelected.Image_Museu_2}
                                source={require('../../assets/images/Image_Museu_3.png')}
                                placeholder="image"
                                contentFit="cover"
                                transition={1000}
                            />
                        </View>
                        <View style={{ alignSelf: 'center', marginTop: -80, marginLeft: 60, right: 20 }}>
                            <Text style={styleSelected.textNormal12}>Fri, Apr 22 · 21.00 Pm </Text>
                            <View style={{ width: '100%' }}>
                                <Text style={[styleSelected.textNormal16, { fontWeight: 700, marginTop: 8 }]}>Museu de Arte</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                <Image
                                    style={[styleSelected.map_pin, { marginTop: -3 }]}
                                    source={require('../../assets/images/map_pin.png')}
                                    placeholder="image"
                                    contentFit="cover"
                                    transition={1000}
                                />
                                <Text style={[styleSelected.textNormal12, { marginLeft: 2, marginTop: -5 }]}>Av. Brasília, Central Tejo ...</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginLeft: 'auto', justifyContent: 'space-between', marginTop: -54, marginRight: -75 }}>
                                <Text style={[styleSelected.textNormal18, { marginRight: 4 }]}>3</Text>
                                <Image
                                    style={[styleSelected.down_button, { marginTop: 4, marginRight: 10 }]}
                                    source={require('../../assets/images/half_star.png')}
                                    placeholder="image"
                                    contentFit="cover"
                                    transition={1000}
                                />
                                <Image
                                    style={[styleSelected.down_button, { marginTop: 4, marginRight: 10 }]}
                                    source={require('../../assets/images/heart.png')}
                                    placeholder="image"
                                    contentFit="cover"
                                    transition={1000}
                                />
                                <Image
                                    style={[styleSelected.down_button, { marginTop: 4, marginRight: 10 }]}
                                    source={require('../../assets/images/share.png')}
                                    placeholder="image"
                                    contentFit="cover"
                                    transition={1000}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={{ height: 90, backgroundColor: colors.BaseSlot3, marginLeft: 20, marginTop: 20, }}>
                        <View style={{ backgroundColor: 'white', width: 90 }}>
                            <Image
                                style={styleSelected.Image_Museu_2}
                                source={require('../../assets/images/Image_Museu_4.png')}
                                placeholder="image"
                                contentFit="cover"
                                transition={1000}
                            />
                        </View>
                        <View style={{ alignSelf: 'center', marginTop: -80, marginLeft: 60 }}>
                            <Text style={[styleSelected.textNormal12, { marginLeft: -10, }]}>Mon, Apr 25  · 17.30</Text>
                            <View style={{ width: '100%' }}>
                                <Text style={[styleSelected.textNormal16, { fontWeight: 700, marginTop: 8, marginLeft: -10 }]}>Torre de Belém</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 10, marginRight: 10 }}>
                                <Image
                                    style={[styleSelected.map_pin, { marginTop: -3, right: 18 }]}
                                    source={require('../../assets/images/map_pin.png')}
                                    placeholder="image"
                                    contentFit="cover"
                                    transition={1000}
                                />
                                <Text style={[styleSelected.textNormal12, { marginLeft: 2, right: 20, marginTop: -5 }]}>Av. Brasília, 1400-038 Lisboa</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginLeft: 'auto', justifyContent: 'space-between', marginTop: -54, marginRight: -45 }}>
                                <Text style={[styleSelected.textNormal18, { marginRight: 4 }]}>5</Text>
                                <Image
                                    style={[styleSelected.down_button, { marginTop: 4, marginRight: 10 }]}
                                    source={require('../../assets/images/star.png')}
                                    placeholder="image"
                                    contentFit="cover"
                                    transition={1000}
                                />
                                <Image
                                    style={[styleSelected.down_button, { marginTop: 4, marginRight: 10 }]}
                                    source={require('../../assets/images/heart.png')}
                                    placeholder="image"
                                    contentFit="cover"
                                    transition={1000}
                                />
                                <Image
                                    style={[styleSelected.down_button, { marginTop: 4, marginRight: 10 }]}
                                    source={require('../../assets/images/share.png')}
                                    placeholder="image"
                                    contentFit="cover"
                                    transition={1000}
                                />
                            </View>

                        </View>

                    </View>

                    <View style={{borderRadius: 100, backgroundColor: '#ECDDDD', marginLeft: 'auto', marginTop: 20, width: 44, height: 45 , marginRight: 20, alignItems: 'center', alignSelf: 'center', marginBottom: 5 }}>
                    <Image
                                                style={{ height: 30, width: 30, marginTop: 5 }}
                                                source={require('../../assets/images/calendar.png')}
                                                placeholder="image"
                                                contentFit="cover"
                                                transition={1000}
                                            />
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 2 }}>
                        <Tab.Navigator>
                            <Tab.Screen name="Home" component={HomeScreenMenu}
                                options={{
                                    tabBarIcon: ({ focused }) => {
                                        return (
                                            <Image
                                                style={{ height: 30, width: 30 }}
                                                source={require('../../assets/images/home.png')}
                                                placeholder="image"
                                                contentFit="cover"
                                                transition={1000}
                                            />
                                        )
                                    }
                                }}
                            />
                            <Tab.Screen name="Search" component={SearchScreen}
                                options={{
                                    tabBarIcon: ({ focused }) => {
                                        return (
                                            <Image
                                                style={{ height: 30, width: 30 }}
                                                source={require('../../assets/images/search.png')}
                                                placeholder="image"
                                                contentFit="cover"
                                                transition={1000}
                                            />
                                        )
                                    }
                                }}
                            />
                            <Tab.Screen name="Ticket" component={TicketScreen}
                                options={{
                                    tabBarIcon: ({ focused }) => {
                                        return (
                                            <Image
                                                style={{ height: 30, width: 30 }}
                                                source={require('../../assets/images/ticket.png')}
                                                placeholder="image"
                                                contentFit="cover"
                                                transition={1000}
                                            />
                                        )
                                    }
                                }}
                            />
                            <Tab.Screen name="Heart" component={HeartScreen}
                                options={{
                                    tabBarIcon: ({ focused }) => {
                                        return (
                                            <Image
                                                style={{ height: 30, width: 30 }}
                                                source={require('../../assets/images/heart_menu.png')}
                                                placeholder="image"
                                                contentFit="cover"
                                                transition={1000}
                                            />
                                        )
                                    }
                                }}
                            />

                            <Tab.Screen name="Profile" component={ProfileScreen}

                                options={{
                                    tabBarIcon: ({ focused }) => {
                                        return (
                                            <Image
                                                style={{ height: 30, width: 30 }}
                                                source={require('../../assets/images/user.png')}
                                                placeholder="image"
                                                contentFit="cover"
                                                transition={1000}
                                            />
                                        )
                                    }
                                }}
                            />
                        </Tab.Navigator>
                    </View>
                </View>
                
            </KeyboardAvoidingView>
            
        </SafeAreaView>
        </ScrollView>
    )
}