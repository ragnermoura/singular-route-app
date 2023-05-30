import React, { useEffect, useRef, useState, useCallback } from 'react'
import { SafeAreaView, StatusBar, Appearance, useColorScheme, Platform, TouchableOpacity, KeyboardAvoidingView, View, Text, Image } from 'react-native'
import InputDefault from '../components/InputDefault'
import style from '../../style/Style'
import styleDark from '../../style/StyleDark'
import * as NavigationBar from 'expo-navigation-bar'
import * as SplashScreen from 'expo-splash-screen';
import Loader from '../components/Loader'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ScrollView } from 'react-native-gesture-handler'
import ButtonFilter from '../components/ButtonFilter'
import ButtonFilterprimary from '../components/ButtonFilterPrimary'

export default function BasicFilters({ route, navigation }) {
    const [isLoading, setIsLoading] = useState(true)
    const [searchfor, setSearchfor] = useState("")
    let colorScheme = useColorScheme()
    var styleSelected = colorScheme == 'light' ? style : styleDark
    var colors = require('../../style/Colors.json')
    const Tab = createBottomTabNavigator();

    useEffect(() => {
        console.log('OPEN', BasicFilters.name, 'SCREEN')
        //For test loading
        setTimeout(() => {
            setIsLoading(false)
        }, 1000);
        return () => {
            console.log('SCREEN', BasicFilters.name, 'CLOSE')
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

    const Seperator = () => <View style={[styleSelected.seperator, { top: 5 }]} />
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
                            <InputDefault placeholder={"Search For..."} input={searchfor} setInput={setSearchfor} />
                            <View style={{ backgroundColor: colors.BaseSlot3, flexDirection: 'row' }}>
                                <Image
                                    style={[styleSelected.search_not_menu, { marginLeft: 'auto', bottom: 35, marginRight: 10 }]}
                                    source={require('../../assets/images/search.png')}
                                    placeholder="image"
                                    contentFit="cover"
                                    transition={1000}
                                />
                            </View>
                            <View style={{ marginTop: 15, flexDirection: 'row', justifyContent: 'space-between' }}>

                                <ButtonFilter
                                    title={"Filters"}
                                    colorText={colors.BaseSlot4}
                                    colorText2={colors.BaseSlot1}
                                    event={() => navigation.navigate("AdvancedFilter")} />

                                <ButtonFilter
                                    title={"Data"}
                                    colorText={colors.BaseSlot4}
                                    colorText2={colors.BaseSlot1}
                                    event={() => console.log("Click on Data")} />

                                <ButtonFilterprimary
                                    title={"Shows"}
                                    colorText={colors.BaseSlot4}
                                    colorText2={colors.BaseSlot1}
                                    event={() => console.log("Click on Shows")} />

                                <ButtonFilter
                                    title={"Events"}
                                    colorText={colors.BaseSlot4}
                                    colorText2={colors.BaseSlot1}
                                    event={() => console.log("Click on Events")} />

                                <ButtonFilter
                                    title={"Culture"}
                                    colorText={colors.BaseSlot4}
                                    colorText2={colors.BaseSlot1}
                                    event={() => console.log("Click on Culture")} />
                            </View>

                        </View>
                        <View style={{ backgroundColor: colors.BaseSlot3, marginLeft: 20, marginTop: 20 }}>
                            <Text style={[styleSelected.textNormal12, { fontWeight: 700 }]}>123 Events</Text>
                            <Text style={[styleSelected.textNormal12, { marginLeft: 'auto', marginRight: 20, marginTop: -20 }]}>Sort by relevant</Text>
                            <TouchableOpacity onPress={() => console.log("Press on relevant")}>
                                <View>
                                    <Image
                                        style={[styleSelected.dropdown, { marginLeft: 'auto', top: -15 }]}
                                        source={require('../../assets/images/dropdown.png')}
                                        placeholder="image"
                                        contentFit="cover"
                                        transition={1000}
                                    />

                                </View>
                            </TouchableOpacity>
                            <View style={{ marginLeft: -20 }}>
                                <View style={{ height: 90, backgroundColor: colors.BaseSlot3, marginLeft: 20, marginTop: 20 }}>
                                    <View style={{ backgroundColor: 'white', width: 90 }}>
                                        <Image
                                            style={styleSelected.generalImage}
                                            source={require('../../assets/images/RocknRio.png')}
                                            placeholder="image"
                                            contentFit="cover"
                                            transition={1000}
                                        />
                                    </View>
                                    <View style={{ alignSelf: 'center', marginTop: -80, marginLeft: 10, top: -10 }}>
                                        <Text style={[styleSelected.textNormal12]}>Thu, Apr 19 · 20.00 Pm    </Text>
                                        <Text style={[styleSelected.textNormal16, { fontWeight: 700, marginTop: 8 }]}>Rock in Rio</Text>
                                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                            <Image
                                                style={[styleSelected.map_pin, {}]}
                                                source={require('../../assets/images/map-pin.png')}
                                                placeholder="image"
                                                contentFit="cover"
                                                transition={1000}
                                            />
                                            <Text style={[styleSelected.textNormal12, { marginLeft: 2, marginTop: -4 }]}>Bela Vista Park, Lisboa,</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', marginLeft: 'auto', justifyContent: 'space-between', marginTop: -54, marginRight: -80 }}>
                                            <Image
                                                style={[styleSelected.heart_fav, { marginTop: 4, marginRight: 10 }]}
                                                source={require('../../assets/images/heart.png')}
                                                placeholder="image"
                                                contentFit="cover"
                                                transition={1000}
                                            />
                                            <Image
                                                style={[styleSelected.share, { marginTop: 4, marginRight: 10 }]}
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
                                            style={styleSelected.generalImage}
                                            source={require('../../assets/images/fratelis.png')}
                                            placeholder="image"
                                            contentFit="cover"
                                            transition={1000}
                                        />
                                    </View>
                                    <View style={{ alignSelf: 'center', marginTop: -80, marginLeft: 60, right: 20 }}>
                                        <Text style={styleSelected.textNormal12}>Fri, Apr 20 · 20.00 Pm </Text>
                                        <View style={{ width: '100%' }}>
                                            <Text style={[styleSelected.textNormal16, { fontWeight: 700, marginTop: 8 }]}>The Fratellis</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                            <Image
                                                style={[styleSelected.map_pin, {}]}
                                                source={require('../../assets/images/map-pin.png')}
                                                placeholder="image"
                                                contentFit="cover"
                                                transition={1000}
                                            />
                                            <Text style={[styleSelected.textNormal12, { marginLeft: 2, marginTop: -5 }]}>Bela Vista Park, Lisboa,</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', marginLeft: 'auto', justifyContent: 'space-between', marginTop: -54, marginRight: -75 }}>
                                            <Image
                                                style={[styleSelected.heart_fav, { marginTop: 4, marginRight: 10 }]}
                                                source={require('../../assets/images/heart.png')}
                                                placeholder="image"
                                                contentFit="cover"
                                                transition={1000}
                                            />
                                            <Image
                                                style={[styleSelected.share, { marginTop: 4, marginRight: 10 }]}
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
                                            style={styleSelected.generalImage}
                                            source={require('../../assets/images/kasabian.png')}
                                            placeholder="image"
                                            contentFit="cover"
                                            transition={1000}
                                        />
                                    </View>
                                    <View style={{ alignSelf: 'center', marginTop: -80, marginLeft: 60, right: 20 }}>
                                        <Text style={styleSelected.textNormal12}>Fri, Apr 20 · 20.00 Pm </Text>
                                        <View style={{ width: '100%' }}>
                                            <Text style={[styleSelected.textNormal16, { fontWeight: 700, marginTop: 8 }]}>Kasabin</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                            <Image
                                                style={[styleSelected.map_pin, {}]}
                                                source={require('../../assets/images/map-pin.png')}
                                                placeholder="image"
                                                contentFit="cover"
                                                transition={1000}
                                            />
                                            <Text style={[styleSelected.textNormal12, { marginLeft: 2, marginTop: -5 }]}>Bela Vista Park, Lisboa,</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', marginLeft: 'auto', justifyContent: 'space-between', marginTop: -54, marginRight: -75 }}>
                                            <Image
                                                style={[styleSelected.heart_fav, { marginTop: 4, marginRight: 10 }]}
                                                source={require('../../assets/images/heart-empty.png')}
                                                placeholder="image"
                                                contentFit="cover"
                                                transition={1000}
                                            />
                                            <Image
                                                style={[styleSelected.share, { marginTop: 4, marginRight: 10 }]}
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
                                            style={styleSelected.generalImage}
                                            source={require('../../assets/images/maneskin.png')}
                                            placeholder="image"
                                            contentFit="cover"
                                            transition={1000}
                                        />
                                    </View>
                                    <View style={{ alignSelf: 'center', marginTop: -80, marginLeft: 60, right: 20 }}>
                                        <Text style={styleSelected.textNormal12}>Mon, Apr 23 · 20.00 Pm</Text>
                                        <View style={{ width: '100%' }}>
                                            <Text style={[styleSelected.textNormal16, { fontWeight: 700, marginTop: 8 }]}>Maneskin</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                            <Image
                                                style={[styleSelected.map_pin, {}]}
                                                source={require('../../assets/images/map-pin.png')}
                                                placeholder="image"
                                                contentFit="cover"
                                                transition={1000}
                                            />
                                            <Text style={[styleSelected.textNormal12, { marginLeft: 2, marginTop: -5 }]}>Bela Vista Park, Lisboa,</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', marginLeft: 'auto', justifyContent: 'space-between', marginTop: -54, marginRight: -75 }}>
                                            <Image
                                                style={[styleSelected.heart_fav, { marginTop: 4, marginRight: 10 }]}
                                                source={require('../../assets/images/heart-empty.png')}
                                                placeholder="image"
                                                contentFit="cover"
                                                transition={1000}
                                            />
                                            <Image
                                                style={[styleSelected.share, { marginTop: 4, marginRight: 10 }]}
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
                                            style={styleSelected.generalImage}
                                            source={require('../../assets/images/arcade.png')}
                                            placeholder="image"
                                            contentFit="cover"
                                            transition={1000}
                                        />
                                    </View>
                                    <View style={{ alignSelf: 'center', marginTop: -80, marginLeft: 60, right: 20 }}>
                                        <Text style={styleSelected.textNormal12}>Mon, Apr 23 · 20.00 Pm</Text>
                                        <View style={{ width: '100%' }}>
                                            <Text style={[styleSelected.textNormal16, { fontWeight: 700, marginTop: 8 }]}>Arcade Fire</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                            <Image
                                                style={[styleSelected.map_pin, {}]}
                                                source={require('../../assets/images/map-pin.png')}
                                                placeholder="image"
                                                contentFit="cover"
                                                transition={1000}
                                            />
                                            <Text style={[styleSelected.textNormal12, { marginLeft: 2, marginTop: -5 }]}>Bela Vista Park, Lisboa,</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', marginLeft: 'auto', justifyContent: 'space-between', marginTop: -54, marginRight: -75 }}>
                                            <Image
                                                style={[styleSelected.heart_fav, { marginTop: 4, marginRight: 10 }]}
                                                source={require('../../assets/images/heart-empty.png')}
                                                placeholder="image"
                                                contentFit="cover"
                                                transition={1000}
                                            />
                                            <Image
                                                style={[styleSelected.share, { marginTop: 4, marginRight: 10 }]}
                                                source={require('../../assets/images/share.png')}
                                                placeholder="image"
                                                contentFit="cover"
                                                transition={1000}
                                            />
                                        </View>
                                    </View>
                                </View>
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
                    </View>
                </KeyboardAvoidingView>

            </SafeAreaView>
        </ScrollView>
    )
}