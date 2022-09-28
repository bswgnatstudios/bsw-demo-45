import {StyleSheet} from 'react-native';
import {Colors} from '@constants/colors';
import {Fonts} from '@constants/fonts';

const createStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: Colors.PRIMARY,
  },
  scroll: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    margin: 10,
  },
  imgContainer: {
    marginTop: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginStart: 35,
    marginEnd: 35,
    marginBottom: 30,
  },
  inputStyle: {
    flex: 1,
    color: Colors.WHITE,
    paddingLeft: 15,
    paddingRight: 15,
    height: 50,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: Colors.WHITE,
  },
  indicator: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    zIndex: 20,
  },
  errorTextStyle: {
    color: Colors.RED,
    textAlign: 'center',
    fontSize: 18,
  },
  textHeader: {
    color: Colors.WHITE,
    fontSize: 24,
    fontFamily: Fonts.robotoBold,
    marginBottom: 10,
  },
  buttonStyle: {
    backgroundColor: Colors.SECONDARY,
    color: Colors.WHITE,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginStart: 35,
    marginEnd: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: Colors.WHITE,
    fontSize: 16,
    fontFamily: Fonts.robotoBold,
  },
});

export default createStyles;
