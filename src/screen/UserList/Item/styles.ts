import {StyleSheet} from 'react-native';
import {Colors} from '@constants/colors';
import {Fonts} from '@constants/fonts';

const createStyles = StyleSheet.create({
  itemView: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    padding: 10,
    marginBottom: 10,
    marginStart: 1,
    marginEnd: 1,
    shadowColor: Colors.SHADOW,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 5,
    zIndex: 1,
    shadowOpacity: 1,
    shadowRadius: 10,
    borderRadius: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.WHITE,
  },
  txtStyle1: {
    fontSize: 21,
    fontFamily: Fonts.robotoRegular,
    color: Colors.BLACK,
    fontWeight: '700',
    numberOfLines: 1,
    ellipsizeMode: 'tail',
  },
  txtStyle2: {
    fontSize: 15,
    fontFamily: Fonts.robotoRegular,
    color: Colors.SECONDARY,
    fontWeight: '500',
    opacity: 0.4,
  },
  userContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  userIcon: {
    height: 56,
    width: 56,
  },
  arrowContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  arrowIcon: {
    height: 20,
    width: 20,
  },
  txtContent: {
    overflow: 'hidden',
    flex: 1,
    fontFamily: Fonts.robotoRegular,
    justifyContent: 'center',
    marginLeft: 10,
  },
});

export default createStyles;
