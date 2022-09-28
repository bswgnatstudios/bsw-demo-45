import {createRef, FC, useEffect, useState} from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {
  View,
  NativeModules,
  StatusBar,
  Text,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
  Keyboard,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {SCREENS} from '@constants/enum';
import {Images} from '@constants/images';
import {Colors} from '@constants/colors';
import {Constants} from '@constants/strings';
import {ScrollView} from 'react-native-gesture-handler';
import {OrientationLocker, PORTRAIT} from 'react-native-orientation-locker';
import {useAppDispatch, useAppSelector} from '@redux/stores/hooks';
import {LoginData, loginInUser} from '@redux/slices/loginSlice';
import {setBooleanPref} from '@utils/AsyncStoragePref';
import createStyles from './styles';

type TProps = {
  navigation: NavigationProp<ParamListBase>;
};

const Login: FC<TProps> = ({navigation}) => {
  const {loginData, loading, error} = useAppSelector(state => state.login);
  const dispatch = useAppDispatch();
  const [userEmail, setUserEmail] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');
  const [isLoading, setLoading] = useState<boolean>(false);
  const [newLoginData, setNewLoginData] = useState<LoginData>(loginData);
  const [errortext, setErrortext] = useState<string>('');

  const passwordInputRef = createRef<TextInput>();
  const {UserToast} = NativeModules;
  /**
   * This useeffect will trigger whenever logindata is change and if token is present
   * then it will jump to user list screen
   */
  useEffect(() => {
    (async () => {
      if (newLoginData.token !== '' && newLoginData.token !== undefined) {
        setBooleanPref(Constants.IS_LOGGED_IN, true);
        UserToast.show('Login successfully', 1);
        navigation.reset({index: 0, routes: [{name: SCREENS.USER_LIST}]});
      }
    })();
  }, [newLoginData]);

  /**
   * This useeffect is to update local state data as an when their is any change
   */
  useEffect(() => {
    setLoading(loading);
    setErrortext(error);
    setNewLoginData(loginData);
  }, [loading, error, loginData]);

  /**
   * This method is used to trigger login and check if user is valid or not and it has
   * also handle few validation for screen
   * @returns
   */
  const handleLoginPress = async () => {
    setErrortext('');
    if (!userEmail) {
      Alert.alert('Missing', 'Please fill Email');
      return;
    }
    if (!userPassword) {
      Alert.alert('Missing', 'Please fill Password');
      return;
    }

    const userLoginData: LoginData = {
      email: userEmail,
      password: userPassword,
      token: '',
    };
    dispatch(loginInUser(userLoginData));
  };

  return (
    <View style={createStyles.container}>
      <OrientationLocker orientation={PORTRAIT} />
      <StatusBar backgroundColor={Colors.TRANSPARENT} translucent={true} />
      <SafeAreaView style={{flex: 1}}>
        {isLoading && (
          <View style={createStyles.indicator}>
            <ActivityIndicator size="large" color={Colors.SECONDARY} />
          </View>
        )}
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={createStyles.scroll}>
          <KeyboardAvoidingView enabled>
            <View style={createStyles.imgContainer}>
              <Image source={Images.splashImg} style={createStyles.image} />
              <Text style={createStyles.textHeader}>Welcome</Text>
            </View>
            <View style={createStyles.sectionStyle}>
              <TextInput
                style={createStyles.inputStyle}
                onChangeText={UserEmail => setUserEmail(UserEmail)}
                placeholder="Enter Email"
                placeholderTextColor={Colors.LIGHT_GREY}
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() =>
                  passwordInputRef.current && passwordInputRef.current.focus()
                }
                autoCorrect={false}
                underlineColorAndroid="transparent"
                blurOnSubmit={false}
              />
            </View>
            <View style={createStyles.sectionStyle}>
              <TextInput
                style={createStyles.inputStyle}
                onChangeText={UserPassword => setUserPassword(UserPassword)}
                underlineColorAndroid="transparent"
                placeholder="Enter Password"
                placeholderTextColor={Colors.LIGHT_GREY}
                keyboardType="default"
                ref={passwordInputRef}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                returnKeyType="done"
              />
            </View>
            {errortext !== '' ? (
              <Text style={createStyles.errorTextStyle}>{errortext}</Text>
            ) : null}
            <TouchableOpacity
              disabled={isLoading}
              style={createStyles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleLoginPress}>
              <Text style={createStyles.buttonTextStyle}>LOGIN</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Login;
