import { Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const RootLayout = () => {
  return (
<View className="bg-blue-500 p-4 rounded-lg flex-1 justify-center items-center">
  <Text className="text-white font-bold text-3xl">Merhaba Tailwind!</Text>
</View>
  )
}

export default RootLayout
