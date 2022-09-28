import {StyleSheet} from 'react-native';
import {Colors} from '@constants/colors';

const createStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY,
  },
  child: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: 400,
    width: 400,
  },
});

export default createStyles;
