import AsyncStorage from '@react-native-community/async-storage';

export const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('token', jsonValue)
    } catch (e) {
      console.log('can not save the token!!!')
    }
  }


export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('token');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    console.log('can not get token!!!');
  }
}

export const removeValue = async () => {
  try {
    await AsyncStorage.removeItem('token')
  } catch(e) {
    // remove error
  }

  console.log('Done.')
}