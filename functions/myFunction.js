import AsyncStorage from '@react-native-async-storage/async-storage';
 
const storeDataString = async (value) => {
    try {
      await AsyncStorage.setItem('@storage_Key', value)
    } catch (e) {
        console.log("error")
      // saving error
    }
  }

  const storeDataObject = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@storage_Key', jsonValue)
    } catch (e) {
        console.log("error")

      // saving error
    }
  }

  const getDataString = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key')
      return value
    } catch(e) {
        console.log("error")
    }
  }

  const getDataObject = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
        console.log("error")

      // error reading value
    }
  }
  