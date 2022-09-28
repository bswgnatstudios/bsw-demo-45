import {ImageSourcePropType} from 'react-native';

interface ImageValue {
  splashImg: ImageSourcePropType;
  userImg: ImageSourcePropType;
  mailImg: ImageSourcePropType;
  mapImg: ImageSourcePropType;
  phoneImg: ImageSourcePropType;
  websiteImg: ImageSourcePropType;
  arrowImg: ImageSourcePropType;
}
export const Images: ImageValue = {
  splashImg: require('../../assets/images/splashlogo.png'),
  userImg: require('../../assets/images/user.png'),
  mailImg: require('../../assets/images/email.png'),
  mapImg: require('../../assets/images/map.png'),
  phoneImg: require('../../assets/images/call.png'),
  websiteImg: require('../../assets/images/web.png'),
  arrowImg: require('../../assets/images/arrow.png'),
};
