import React from 'react'
import {Platform, TextInput, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import theme from '../assets/constants'

const CommonInput = (props) => {
    const {
        onChangeText,
        textBoxStyle,
        error,
        type
    } = props
    return (
        <View style={textBoxStyle || ([styles.inputContainerStyle, { borderColor: error ? "red" : theme.colors.secondary }])}>
            <TextInput
                {...props}
                onChangeText={(text) => {
                    onChangeText(text, type)
                }}
                style={{
                    flex: 1,
                    fontSize: theme.sizes.height + 7,
                    lineHeight:theme.sizes.height + 7,
                }}
            />
            {props.secureTextEntry !== undefined && <TouchableOpacity onPress={() => {
                props.handleSecureTextChange(type)
            }}
            >
                <Image
                    source={props.secureTextEntry == true ? theme.commonImages.viewPassword : theme.commonImages.hiddenPassword}
                    style={styles.imageStyle}
                />
            </TouchableOpacity>}
        </View>
    )
}

export default CommonInput
const styles = StyleSheet.create({
    inputContainerStyle: {
        paddingVertical:Platform.OS=="ios"? theme.sizes.height*2:theme.sizes.height,
        alignItems: "center",
        borderWidth: 0.5,
        borderRadius: theme.sizes.height * 10,
        flexDirection: "row",
        paddingHorizontal:theme.sizes.height*2
    },
    imageStyle: {
        height: theme.sizes.height * 2.5,
        width: theme.sizes.height * 2.5,
    }
})