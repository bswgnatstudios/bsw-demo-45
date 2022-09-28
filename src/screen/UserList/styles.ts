import {StyleSheet} from 'react-native';
import {Colors} from '@constants/colors';
import {Fonts} from '@constants/fonts';

const createStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginStart: 10,
    marginEnd: 10,
    marginTop: 10,
    backgroundColor: Colors.LIGHT_GREY,
  },
  flatList: {
    flex: 1,
  },
  indicator: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    zIndex: 20,
  },
  errorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  errorMsg: {
    fontFamily: Fonts.robotoBold,
    fontSize: 22,
    textAlign: 'center',
  },
});

export default createStyles;
