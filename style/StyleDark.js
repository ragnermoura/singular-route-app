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
        },

        Label:{
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: 20,
            color: '#7C7C7C',
            marginLeft: 60,
            marginTop: -60,
        },
        ArrowBack:{
            height: 40,
            width: 40,
            
        },
       
    }
)

export default style