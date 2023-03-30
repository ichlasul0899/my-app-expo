import { StyleSheet, Text, View , Image} from "react-native";
import { Link } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from "react";

export default function Home() {
  const [user,setUser] = useState("")

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@storage_Key', value)
    } catch (e) {
        console.log("error store data mal")
      // saving error
    }
  }

  useEffect( ()=>{
    async function getAuth(){
      const value = await AsyncStorage.getItem('@storage_Key')
      console.log("response :", value)
      setUser(value)
    }
    getAuth();
    console.log("Hello")
  }, [])
  return (
    <View style={styles.container}>
      <View style={{marginTop:80}}>
        <Image source={require('../assets/coffebg.jpg')} style={{width: 200, height: 200}}/>
      </View>
      <View style={styles.main}>
        {
          user == 'sudahLogin' ? 
          <Link 
            href="/login" 
            replace
            onPress={()=>{
            setUser('belumLogin')
            storeData('belumLogin')
            console.log("sudah logout")
          }}>Logout</Link> : <Link href="/login">Login</Link> 
        }

        
        <Text style={styles.title}>
          {
            user == 'sudahLogin' ?
            'Welcome Back' : 'Hello World!'
          }
        </Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
