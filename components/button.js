import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

const Button = () => {
  return (
    <View>
        <TouchableOpacity style={styles.button}>
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