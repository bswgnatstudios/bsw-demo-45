import {StyleSheet} from 'react-native';
import {Fonts} from '@constants/fonts';
import {Colors} from 'constants/colors';

export const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
  },
  imgContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  imgView: {
    marginTop: 10,
    height: 24,
    width: 24,
  },
  text: {
    fontSize: 18,
    color: Colors.FADE_WHITE,
    fontFamily: Fonts.robotoRegular,
  },
});
