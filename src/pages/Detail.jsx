import React from 'react'
import {View, Text, StyleSheet, Image } from 'react-native'
import {useRoute} from '@react-navigation/native'

export function Detail(){

  const route = useRoute()
  const { user } = route.params
  return(
  <View style={styles.container}>
    <Image style={styles.foto} source = {{uri: user.picture.large}}/>
    <Text style={styles.textName}>{`${user.name.first} ${user.name.last}`}</Text>
    <Text style={styles.textEmail} > {user.email}</Text>
  </View> 
  )
}
const styles = StyleSheet.create({
container:{
  flex: 1,
  backgroundColor: '#000',
  alignItems: 'center',
  justifyContent: 'center',
  
},
foto:{
  height:200,
  width:200,
  borderRadius:100,
},
textName:{
  fontSize:22,
  fontWeight:'bold',
  color:'#fff'
},
textEmail:{
  fontSize:18,
  fontWeight:'bold',
  color:'#fff'
}
})
