import { Platform, StyleSheet } from 'react-native';
const colors = require('../style/Colors.json');
const style = StyleSheet.create(
    {
        backgroundPrimary: { backgroundColor: colors.BaseSlot1 },
        backgroundPrimaryLogin: {
            backgroundColor: colors.BaseSlot3
        },
        textNormal16: {
            fontSize: 16,
            fontWeight: 400
        },
        textNormal32: {
            fontSize: 32,
            fontWeight: 700
        },
        textNormal24: {
            fontSize: 24,
            fontWeight: 600
        },
        button: {
            backgroundColor: colors.BaseSlot1,
            height: 60,
            width: "100%",
            borderRadius: 10,
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center"
        },
        textbutton: {
            color: 'white',
        },
        button2: {
            height: 60,
            width: "100%",
            borderRadius: 10,
            alignSelf: "center",
            borderColor: colors.BaseSlot4,
            borderWidth: 1,
            justifyContent: "center",
            alignItems: "center"
        },
        textbutton2: {
            color: 'black'
        },
        textbutton3: {
            color: colors.BaseSlot1
        },
        WelcomeImage: {
            flex: 1,
            width: '100%',

        },
        textNormal18: {
            fontSize: 18,
            fontWeight: 500
        },
        search_not_menu:{
            width: 16,
            height: 16
        },
        buttonfilter:{
            width: 63,
            height: 28,
            backgroundColor: '#F0F0F0',
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
        },
        textNormalFilter:{
            fontSize: 12,
            fontWeight: 400
        },
        buttonfilterprimary:{
            width: 63,
            height: 28,
            backgroundColor: colors.BaseSlot1,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center'   
        },
        generalImage:{
            width: 90,
            height: 90
        },
        map_pin:{
            width: 10,
            height: 12
        },
        heart_fav:{
            width: 18,
            height: 16
        },
        share:{
            width: 18,
            height: 18
        },
        dropdown:{
            height: 16,
            width: 16
        }
    }
)

export default style