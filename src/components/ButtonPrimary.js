import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import style from '../../style/Style'
import styleDark from '../../style/StyleDark'

var styleSelected = colorScheme == 'light' ? style : styleDark

const ButtonPrimary = ({ labelButton, onPress }) => {
    return(
        <TouchableOpacity style={styleSelected.buttonSignUp2}
            onPress={onPress}    
        >
            <Text>{labelButton}</Text>
        </TouchableOpacity>
    )
}

export default ButtonPrimary