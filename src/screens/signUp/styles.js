import { StyleSheet } from 'react-native';
import theme from '../../assets/constants';

export default styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: theme.sizes.height,
    backgroundColor: theme.colors.white,
  },
  welcomeTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: theme.sizes.height,
  },
  welcomeText: {
    fontSize: theme.sizes.font * 3,
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  inputsContainer: {
    marginVertical: theme.sizes.height * 2,
    borderWidth: 1,
    borderRadius: theme.sizes.height * 1.5,
    padding: theme.sizes.height,
    paddingVertical: theme.sizes.height * 2,
    borderColor: theme.colors.primary,
  },
  submitButton: {
    backgroundColor: theme.colors.primary,
    paddingVertical: theme.sizes.height * 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: theme.sizes.height * 2,
    borderRadius: theme.sizes.height * 5,
  },
  buttonText: {
    fontSize: theme.sizes.height + 7,
    color: theme.colors.white,
    fontWeight: 'bold',
  },
  textStyle: {
    marginVertical: theme.sizes.height,
    fontSize: theme.sizes.height + 7,
    color: theme.colors.secondary,
    alignSelf: 'flex-end',
  },
  passwordStrengthTextContainer: { flexDirection: "row", justifyContent: "flex-end" },
  signUpText: { color: theme.colors.primary, fontWeight: 'bold', fontSize: theme.sizes.font + 7, },
  bottomText: { color: theme.colors.secondary, fontWeight: 'bold', fontSize: theme.sizes.font + 7, },
  bottomTextContainer: {
    marginVertical: theme.sizes.height * 2,
    flexDirection: 'row',
    alignContent: 'flex-end',
    justifyContent: 'center',
    marginTop: theme.sizes.height * 2,
    marginBottom: theme.sizes.height * 2,
  },
});
