import {RouteProp} from '@react-navigation/native';
import {FC} from 'react';
import {ScrollView, View, Text, SafeAreaView, Image, Platform, Linking} from 'react-native';
import {TextAndImage} from '@components/TextAndImage';
import {Images} from '@constants/images';
import createStyles from './styles';

interface IProps {
  route: RouteProp<any, any> | any;
}

const UserDetail: FC<IProps> = ({route}: IProps) => {
  const {userDetail} = route.params;

  const address: string = `Address: ${userDetail.address.street}\n${userDetail.address.suite}\n${userDetail.address.city}\n${userDetail.address.zipcode}`;

  /**
   * This method is to open dialpad in phone
   * @param telno pass telephone here
   */
  const openDialScreen = (telno: string) => {
    let number = '';
    if (Platform.OS === 'ios') {
      number = `telprompt:${telno}`;
    } else {
      number = `tel:${telno}`;
    }
    Linking.openURL(number);
  };

  /**
   * This method is to open mail in phone
   * @param mailTo pass email id here
   */
  const openMailScreen = (mailTo: string) => {
    Linking.openURL(`mailto:${mailTo}`);
  };

  /**
   * This method is to open mail in phone
   * @param mailTo pass email id here
   */
  const openMapScreen = (lat: string, lng: string) => {
    const latitude = parseFloat(lat); // latitude of your desire location
    const longitude = parseFloat(lng); // longitude of your desire location
    const scheme = Platform.select({
      ios: 'maps:0,0?q=', // if device is ios
      android: 'geo:0,0?q=', // if device is android
    });
    const latLng = `${latitude},${longitude}`;
    const label = `${userDetail.address.street}\n${userDetail.address.suite}`;
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`,
    });

    Linking.openURL(url as string);
  };

  /**
   * This method is to open url in phone
   * @param website pass website here
   */
  const openUrlScreen = (website: string) => {
    Linking.openURL(website);
  };

  return (
    <SafeAreaView style={createStyles.safeArea}>
      <ScrollView>
        <View style={createStyles.container}>
          <View style={{alignItems: 'center', ...createStyles.cardView}}>
            <Image style={createStyles.imgUser} source={Images.userImg} />
            <Text style={createStyles.text}>{userDetail.name}</Text>
            <Text style={createStyles.text}>{userDetail.company.name}</Text>
          </View>
          <View style={createStyles.headerContainer}>
            <Text style={createStyles.headerText}>Contact information</Text>
          </View>
          <View style={createStyles.cardView}>
            <TextAndImage
              text={`Email: ${userDetail.email}`}
              icon={Images.mailImg}
              onPress={() => {
                openMailScreen(userDetail.email);
              }}
            />
            <TextAndImage
              text={address}
              icon={Images.mapImg}
              onPress={() => {
                openMapScreen(
                  userDetail.address.geo.lat,
                  userDetail.address.geo.lng,
                );
              }}
            />
            <TextAndImage
              text={`Tel: ${userDetail.phone}`}
              icon={Images.phoneImg}
              onPress={() => {
                openDialScreen(userDetail.phone);
              }}
            />
          </View>
          <View style={createStyles.headerContainer}>
            <Text style={createStyles.headerText}>Other information</Text>
          </View>
          <View style={createStyles.cardView}>
            <Text style={{...createStyles.text}}>
              {`Username: ${userDetail.username}`}
            </Text>
            <TextAndImage
              text={`Website: ${userDetail.website}`}
              icon={Images.websiteImg}
              onPress={() => openUrlScreen(`https://www.${userDetail.website}`)}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserDetail;
