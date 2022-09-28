import {StyleSheet} from 'react-native';
import {Colors} from '@constants/colors';
import {Fonts} from '@constants/fonts';

// interface Style {
//   container: ViewStyle,
//   cardView: ViewStyle,
//   imgUser: ViewStyle,
//   text: ViewStyle,
//   headerContainer: ViewStyle,
//   headerText: ViewStyle,
// }

const createStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flexDirection: 'column',
    flex: 1,
    padding: 10,
    backgroundColor: Colors.LIGHT_GREY,
  },
  cardView: {
    backgroundColor: Colors.WHITE,
    padding: 10,
    marginTop: 10,
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
    borderColor: Colors.RED,
    borderRadius: 10,
  },
  imgUser: {
    marginTop: 20,
    width: 100,
    height: 100,
    borderRadius: 200 / 2,
  },
  text: {
    fontSize: 18,
    color: '#0250a3',
    fontFamily: Fonts.robotoRegular,
  },
  headerContainer: {
    alignItems: 'center',
  },
  headerText: {
    fontSize: 21,
    color: Colors.BLACK,
    fontFamily: Fonts.robotoBold,
  },
});

export default createStyles;
