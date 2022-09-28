import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 *  This method is used to get pref of AsyncStorage boolean
 * @param key pass the storage key
 * @returns it will return boolean value as per key passed
 */
export const getBooleanPref = async (key: string) => {
  try {
    const pref = await AsyncStorage.getItem(key);
    return pref != null ? (JSON.parse(pref) as boolean) : false;
  } catch (e) {
    return false;
  }
};

/**
 * This method is used to set AsyncStorage boolena value pref
 * @param key pass the key
 * @param value pass the value
 */
export const setBooleanPref = async (key: string, value: boolean) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {}
};

/**
 *  This method is used to get pref of AsyncStorage string
 * @param key pass the storage key
 * @returns it will return string value as per key passed
 */
export const getStringPref = async (key: string) => {
  try {
    const pref = await AsyncStorage.getItem(key);
    return pref != null ? (JSON.parse(pref) as string) : '';
  } catch (e) {
    return '';
  }
};

/**
 * This method is used to set AsyncStorage string value pref
 * @param key pass the key
 * @param value pass the value
 */
export const setStringPref = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    // save error
  }
};

/**
 * This method is used to get Object of AsyncStorage object
 * @param key pass the key
 * @returns it will return string value as per key passed
 */
export const getObjectPref = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : {};
  } catch (e) {
    return {};
  }
};

/**
 * This method is used to set AsyncStorage object value pref
 * @param key pass the key
 * @param value pass the value
 */
export const setObjectPref = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    // save error
  }
};
