import { View, Text, Image, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';


export default function OnBoardingThree() {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
    <View className="flex-1 flex justify-center" style={{backgroundColor: "#FEBD2F", alignItems:"center"}}>
      
      {/* background image */}
      <Image 
        source={require('../../assets/images/oloha-logo.png')}
        style={{width: 100, height: 100, backgroundColor: "#fff", borderRadius: 22}} 
        
      />

      {/* content & gradient */}
      <View style={{alignItems:"center", paddingTop: 10}}>
        <View>
            <Text className="text-white font-bold text-5xl" style={{fontSize: wp(10)}}>Oloha</Text>
        </View>
        
        
      </View>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  },
});