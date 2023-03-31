import { StyleSheet, Text, View , Image, ImageBackground} from "react-native";
import { Link } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from "react";
import Button from "../components/button";

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
      <ImageBackground source={require('../assets/coffebg.jpg')} resizeMode="cover" style={styles.image} >
      
      {/* <View style={{marginTop:80}}>
        <Image source={require('../assets/coffebg.jpg')} style={{width: 200, height: 200}}/>
      </View> */}
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
      <View>
        <Button/>
      </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
    color: 'white'
  },
  subtitle: {
    fontSize: 36,
    color: 'white',
  },
});
