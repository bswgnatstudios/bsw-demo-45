import {FC, useEffect} from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {View, StatusBar, SafeAreaView, Image} from 'react-native';
import {SCREENS} from '@constants/enum';
import createStyles from './styles';
import {Images} from '@constants/images';
import {Colors} from '@constants/colors';
import {Constants} from '@constants/strings';
import {OrientationLocker, PORTRAIT} from 'react-native-orientation-locker';
import {getBooleanPref} from '@utils/AsyncStoragePref';

type TProps = {
  navigation: NavigationProp<ParamListBase>;
};

const Splash: FC<TProps> = ({navigation}) => {
  /**
   * This effect will display splash for 3 sec and then jump to login or user list screnn if not login
   */
  useEffect(() => {
    setTimeout(async () => {
      try {
        const isLoginFlag = await getBooleanPref(Constants.IS_LOGGED_IN);
        navigation.reset({
          index: 0,
          routes: [{name: isLoginFlag ? SCREENS.USER_LIST : SCREENS.LOGIN}],
        });
      } catch (e) {
        navigation.reset({index: 0, routes: [{name: SCREENS.USER_LIST}]});
      }
    }, 3000);
  }, []);

  return (
    <SafeAreaView style={createStyles.container}>
      <StatusBar backgroundColor={Colors.TRANSPARENT} translucent={true} />
      <OrientationLocker orientation={PORTRAIT} />
      <View style={createStyles.child}>
        <Image style={createStyles.img} source={Images.splashImg} />
      </View>
    </SafeAreaView>
  );
};

export default Splash;
