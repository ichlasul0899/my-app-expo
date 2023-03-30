import { useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import { Link, useRouter } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [count, setCount] = useState(0);

    const storeData = async (value) => {
        try {
          await AsyncStorage.setItem('@storage_Key', value)
        } catch (e) {
            console.log("error store data mal")
          // saving error
        }
      }

    const onPress = async () => {
        storeData('sudahLogin')
        // const test = await AsyncStorage.setItem('auth', 'sudahlogin')
        // console.log("test simpan data", test)
        router.replace("/");
        setCount(count + 1)
    }

    return (
        <SafeAreaView style={styles.container}>
            <Link style={{marginHorizontal: 20}} href="/" replace onPress={()=> console.log("back to home")}>Home</Link>

            <View style={styles.appname}>
                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <Image
                        style={{
                            tintColor: '#000000',
                            resizeMode: 'contain',
                            height: 100,
                            width: 200,
                            marginBottom: 20
                        }}
                        source={require('../assets/favicon.png')}
                        // source={{
                        //     uri: 'https://reactnative.dev/img/tiny_logo.png',
                        // }}
                    // source={{uri: 'https://images.unsplash.com/photo-1633409361618-c73427e4e206?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'}}
                    />
                    <Text style={styles.baseText}>
                        SIBAY
                        <Text style={styles.innerText}>- APP</Text>
                    </Text>
                </View>
            </View>
            <Text style={styles.title}>Username</Text>
            <TextInput style={styles.input} onChangeText={setUsername} value={username} />
            <Text style={styles.title}>Password</Text>
            <TextInput style={styles.input} onChangeText={setPassword} value={password} />
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.btnTitle}>SIGN IN</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 100,
    },
    baseText: {
        fontWeight: 'bold',
        fontSize: 24,

    },
    innerText: {
        color: 'red'
    },
    appname: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    title: {
        marginTop: 10,
        marginHorizontal: 10
    },

    input: {
        height: 40,
        margin: 12,
        // borderWidth: 1,
        backgroundColor: '#eaeaea',
        padding: 10,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#2596be',
        padding: 10,
        marginBottom: 10,
        marginTop: 30,
        marginHorizontal: 10,
    },
    btnTitle: {
        color: '#ffffff',
        fontWeight: 'bold'
    }
});

export default Login