import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {Colors} from '@constants/colors';
import {ScreenTitle} from '@constants/strings';
import Login from '@screen/Login';
import Splash from '@screen/Splash';
import UserDetail from '@screen/UserDetail';
import UserList from '@screen/UserList';

export type MainStackParamList = {
  SplashScreen: undefined;
  LoginScreen: undefined;
  UserListScreen: undefined;
  UserDetailScreen: undefined;
};

function RootStackNavigator() {
  const Stack = createStackNavigator<MainStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={Splash}
          options={{
            headerShown: false,
            ...TransitionPresets.SlideFromRightIOS,
          }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={Login}
          options={{
            headerShown: false,
            ...TransitionPresets.SlideFromRightIOS,
          }}
        />
        <Stack.Screen
          name="UserListScreen"
          component={UserList}
          options={{
            title: ScreenTitle.userList,
            headerShadowVisible: true,
            headerTitleStyle: {
              color: Colors.WHITE,
            },
            headerStyle: {
              // elevation: 0,
              // shadowOpacity: 0,
              backgroundColor: Colors.PRIMARY,
            },
            ...TransitionPresets.SlideFromRightIOS,
          }}
        />
        <Stack.Screen
          name="UserDetailScreen"
          component={UserDetail}
          options={{
            title: ScreenTitle.userDetail,
            headerShadowVisible: true,
            headerTitleStyle: {
              color: Colors.WHITE,
            },
            headerTintColor: Colors.WHITE,
            headerStyle: {
              backgroundColor: Colors.PRIMARY,
            },
            ...TransitionPresets.SlideFromRightIOS,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootStackNavigator;
