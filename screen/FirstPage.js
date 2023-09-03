import { StyleSheet, Text, View, FlatList, Pressable} from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const FirstPage = ({navigation}) => {
  const [coin, setCoin]= useState([]);
 

  useEffect(() => {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then((res)=> {
        setCoin(res.data.bpi);
        

      })

  }, []);

      


const handleButton= (ibrahim)=> {
  navigation.navigate("SecondPage", 
  {
    veriTitle: ibrahim
  })
}





const sendRenderItem= ({item})=> {
  return(
    <View style={styles.renderContainer}>
      <Pressable 
      style={{width:300, height:50, backgroundColor:"yellow", paddingHorizontal:20, borderRadius:15, margin:15, }} 
      onPress={()=> handleButton(item)}>
      <Text style={{fontSize:20, fontWeight:"bold", }}>{item.description}</Text>
      </Pressable>
    </View>
    )
}





  return (
    <View style={styles.FirstContainer}>
      <View style={styles.flatListContainer}>
      <FlatList
        data={Object.values(coin)}           //---> BURAYI SOR (OBJECT.VALUES) NEDEN?
        keyExtractor={(item) => item.id}
        renderItem={sendRenderItem}

      />
      </View>
    </View>
  );
}

export default FirstPage;

const styles = StyleSheet.create({
  FirstContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#016A70',

  },
  renderContainer:{
    alignItems:"center",
    justifyContent:"center",
    
  },
  flatListContainer: {
    width:500,
    height:300,
    padding:15,
  }
});