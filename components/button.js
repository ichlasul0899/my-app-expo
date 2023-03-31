import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import { Link, useRouter } from "expo-router";

const Button = () => {
    const router = useRouter();

    const onPress = () => {
        router.replace("/wokee")
    }
  return (
    <View>
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.btnTitle}>Get Started</Text>

        </TouchableOpacity>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: 'burlywood',
        padding: 10,
        marginBottom: 10,
        marginHorizontal: 10,
        width: 320,
        borderRadius: 10
    },
    btnTitle: {
        color: '#ffffff',
        fontWeight: 'bold'
    }

})