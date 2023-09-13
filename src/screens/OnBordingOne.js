import { View, Text, Image, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';


export default function OnBoardingOne() {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
    <View className="flex-1 flex justify-start" style={{backgroundColor: "#FEBD2F", alignItems:"start"}}>
      
    {/* <Image 
        source={require('../../assets/images/Asset6@2x1.png')}
        style={{width: 400, height: 4, backgroundColor: "#fff", borderRadius: 22, marginLeft: 20,}} 
        
      /> */}

      {/* background image */}
      <Image 
        source={require('../../assets/images/oloha-logo.png')}
        style={{width: 50, height: 50, backgroundColor: "#fff", borderRadius: 22, marginLeft: 20,}} 
        
      />

      {/* content & gradient */}
      <View style={{alignItems:"start"}}>
        <View>
            <Text className="text-white font-bold text-5xl" style={{fontSize: wp(8), marginLeft: 10}}>Oloha</Text>
        </View>
        
        
      </View>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "#FEBD2F"
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  },
});