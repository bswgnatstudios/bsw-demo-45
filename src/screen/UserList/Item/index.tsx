import {FC} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {IUser} from 'redux/types/IUser';
import {Images} from '@constants/images';
import {useAppSelector} from '@redux/stores/hooks';
import createStyles from './styles';

export interface IProps {
  item: IUser;
  onPress: (value: IUser) => void;
}

const UserItem: FC<IProps> = ({item, onPress}: IProps) => {
  const {loading} = useAppSelector(state => state.user);

  return (
    <View style={{...createStyles.itemView}}>
      <TouchableOpacity disabled={loading} onPress={() => onPress(item)}>
        <View style={createStyles.itemContainer}>
          <View style={createStyles.userContainer}>
            <Image style={createStyles.userIcon} source={Images.userImg} />
          </View>
          <View style={createStyles.txtContent}>
            <Text style={createStyles.txtStyle1}>{item.name}</Text>
            <Text style={createStyles.txtStyle2}>{item.email}</Text>
          </View>
          <View style={createStyles.arrowContainer}>
            <Image style={createStyles.arrowIcon} source={Images.arrowImg} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default UserItem;
