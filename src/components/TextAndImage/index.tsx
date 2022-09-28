import {
  TouchableOpacity,
  View,
  Text,
  Image,
  ImageSourcePropType,
} from 'react-native';
import {styles} from './styles';

/**
 * Reusable component create to display text and image at the end
 * @param param0
 * @returns It will return Text plus image view
 */
export const TextAndImage = ({
  text,
  icon,
  onPress,
}: {
  text: string;
  icon: ImageSourcePropType;
  onPress?: any;
}) => {
  return (
    <View style={styles.view}>
      <Text style={{flex: 1, ...styles.text}}>{`${text}`}</Text>
      <View style={styles.imgContainer}>
        <TouchableOpacity onPress={onPress}>
          <Image style={styles.imgView} source={icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
