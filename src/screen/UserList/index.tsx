import React, {FC, useEffect} from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {
  View,
  StatusBar,
  Text,
  SafeAreaView,
  FlatList,
  ListRenderItem,
  Animated,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import {useAppSelector, useAppDispatch} from '@redux/stores/hooks';
import {SCREENS} from '@constants/enum';
import {Colors} from '@constants/colors';
import {IUser} from 'redux/types/IUser';
import {fetchUsers} from '@redux/slices/userSlice';
import UserItem from './Item';
import createStyles from './styles';

interface TProps {
  navigation: NavigationProp<ParamListBase>;
}

const UserList: FC<TProps> = ({navigation}: TProps) => {
  const {user, loading, error} = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();
  const renderItem: ListRenderItem<IUser> = ({item, index}) => {
 
    return (
      <UserItem
        key={item.id}
        item={item}
        onPress={navigateToDetail}
      />
    );
  };

  useEffect(() => {
    fetchUserList();
  }, []);

  const fetchUserList = () => {
    dispatch(fetchUsers());
  };

  const navigateToDetail = (userData: IUser) => {
    navigation.navigate(SCREENS.USER_DETAILS, {userDetail: userData});
  };

  return (
    <SafeAreaView style={createStyles.container}>
      <StatusBar backgroundColor={Colors.TRANSPARENT} translucent={true} />
      {loading && (
        <View style={createStyles.indicator}>
          <ActivityIndicator size="large" color={Colors.PRIMARY} />
        </View>
      )}
      {user.length ? (
        <FlatList
          testID="user-list"
          style={createStyles.flatList}
          data={user}
          showsVerticalScrollIndicator={false}          
          renderItem={renderItem}
          refreshControl={
            <RefreshControl
              colors={[Colors.GREEN, Colors.RED, Colors.PRIMARY]}
              refreshing={loading}
              onRefresh={fetchUserList}
            />
          }
        />
      ) : (
        <View style={createStyles.errorContainer}>
          <Text style={createStyles.errorMsg} testID="empty-user-screen">
            {error}
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default UserList;
