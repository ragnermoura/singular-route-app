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
        button:{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
            position: 'absolute',
            width: 317,
            height: 60,
            left: 36.5,
            top: 130,
            backgroundColor: colors.BaseSlot1,
            borderRadius: 10
        },
        textbutton:{
            color: 'white',
        },
        button2:{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
            position: 'absolute',
            width: 317,
            height: 60,
            left: 36.5,
            top: 200,
            backgroundColor: colors.BaseSlot3,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#7C7C7C',
        },
        textbutton2:{
            color: 'black'
        },
        textbutton3:{
            color: colors.BaseSlot1
        },
        WelcomeImage:{
            flex: 1,
            width: '100%',
        },
        CreateAccount:{
            fontSize: 30,
            fontWeight: 700,
            marginLeft: 20,
            marginTop: 120,
            height: 90
        },

        Label:{
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: 20,
            color: '#7C7C7C',
            marginLeft: 60,
            marginTop: -40,
            position: 'absolute'
        },
        ArrowBack:{
            height: 40,
            width: 40,
        },  
        Logo:{
            width: "90%",
            justifyContent: 'center',
            alignItems: 'center',
        },
        labeledInput:{
            width: '75%',
            borderBottomColor: '#C0BCBC',
            borderBottomWidth: 1,
            marginLeft: 60,
        },
        FacebookLogo:{
            width: 50,
            height: 50,
            objectFit: 'fill',
            justifyContent:'center',
            flexDirection:'row',
            marginRight: 20,
        },
        buttonSignUp2:{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
            width: 317,
            height: 60,
            left: 36.5,
            top: 130,
            backgroundColor: colors.BaseSlot1,
            borderRadius: 10,
            position:'relative',
        },
        container:{
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
    }
)

export default style