import React, {useState, useEffect} from 'react'
import {View, StyleSheet, FlatList } from 'react-native'

import { api } from '../services/api'
import {User} from '../components/User'
export function Home(){
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    async function getUsers(){
      const response = await api.get("?nat=br&results=30")
      setUsers(response.data.results)
    }
    getUsers()
  },[])



  return(
  <View style={styles.container}>
    <FlatList
    data={ users }
    showsVerticalScrollIndicator = {false}
    keyExtractor={user=> String(user.login.uuid)}
    renderItem={({item})=>(
      <User
      firstName={item.name.first}
      lastName={item.name.last}
      imageUrl={item.picture.thumbnail}
      email={item.email}
      user={item}
      />
    )}
    />
  </View> 
  )
}
const styles = StyleSheet.create({
container:{
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor:"#280B6f"
  }
})
