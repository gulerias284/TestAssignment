import { StyleSheet } from 'react-native';
import theme from '../../assets/constants';
export default styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: theme.sizes.height
    },
    topTextContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginVertical:theme.sizes.height*2
    },
    welcomeTextStyle: {
        fontSize: theme.sizes.font * 3,
        color: theme.colors.secondary,
        fontWeight: "bold"
    },
    nameText: {
        fontSize: theme.sizes.font * 3,
        color: theme.colors.primary,
        fontWeight: "bold"
    },
    generateButtonStyle:{
       backgroundColor:theme.colors.primary,
       paddingHorizontal:theme.sizes.width*3,
       paddingVertical:theme.sizes.height*1.5,
       borderRadius:theme.sizes.height/2
    },
    generateButtonText:{
       alignSelf:"center",
       color:theme.colors.white,
       fontWeight:"bold",
       fontSize:theme.sizes.font*1.5
    },
    generatedButton:{
        backgroundColor:theme.colors.secondary,
        paddingHorizontal:theme.sizes.width*3,
        paddingVertical:theme.sizes.height*1.5,
        borderRadius:theme.sizes.height/2,
        marginVertical:theme.sizes.height/2
    },
    generatedButtonText:{
        alignSelf:"center",
       color:theme.colors.white,
       fontWeight:"bold",
       fontSize:theme.sizes.font*1.5
    }

})