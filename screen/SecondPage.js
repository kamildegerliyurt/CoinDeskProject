import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SecondPage = ({navigation, route}) => {
  return (
    <View style={styles.secondContainer}>
      <Text style={{fontSize:20, fontWeight:"bold", paddingVertical:10,}}>{route.params.veriTitle.code}</Text>
      <Text style={{fontSize:20, fontWeight:"bold", paddingVertical:10,}}>{route.params.veriTitle.symbol}</Text>
      <Text style={{fontSize:20, fontWeight:"bold", paddingVertical:10, color:"green"}}>${route.params.veriTitle.rate}</Text>
      <Text style={{fontSize:20, fontWeight:"bold", paddingVertical:10,}}>{route.params.veriTitle.description}</Text>
      <Text style={{fontSize:20, fontWeight:"bold", paddingVertical:10, color:"green"}}>{route.params.veriTitle.rate_float}</Text>
    
    
    
        <Pressable style={styles.secondButtonContainer} onPress={()=> navigation.navigate("FirstPage")}>
          <Text style={styles.secondTextContainer}>X</Text>
        </Pressable>
    
    
    
    
    </View>



  )
}

export default SecondPage

const styles = StyleSheet.create({
  secondContainer:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"white",
  },
  secondButtonContainer: {
    width:50,
    height:50,
    backgroundColor:"red",
    borderRadius:30,
    bottom:450,
    left:150,
  },
  secondTextContainer: {
    fontSize:25,
    textAlign:"center",
    top:10,
    
  }
})