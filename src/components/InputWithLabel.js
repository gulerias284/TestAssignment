import React from 'react'
import { View, Text ,StyleSheet} from 'react-native'
import theme from '../assets/constants'
import CommonInput from '../elements/CommonInput'

const InputWithLabel = (props) => {
    return (
        <View style={styles.inputMainContainer}>
            <Text style={styles.labelTextStyle}>{props.label}</Text>
            <CommonInput {...props} />
            {
                props.error&&(
                    <Text style={styles.errorText}>{props.error}</Text>
                )
            }
        </View>
    )
}

export default InputWithLabel
const styles=StyleSheet.create({
    inputMainContainer: {
        marginVertical: theme.sizes.height
    },
    labelTextStyle: {
        marginBottom: theme.sizes.height,
        fontSize: theme.sizes.height + 7,
        color:theme.colors.secondary
    },
    errorText: {
        marginTop: theme.sizes.height,
        fontSize: theme.sizes.height + 4,
        color: "red"
    },
})