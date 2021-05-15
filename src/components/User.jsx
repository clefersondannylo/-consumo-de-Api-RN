import React from 'react' 
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'
export function User({firstName, lastName, imageUrl, email, user}){
  const Navigation = useNavigation();
  return(
    <View style={styles.userContainer}>
        <Image style={styles.thumbnail} source={{uri:imageUrl}}/>
        <View style={styles.textContainer}>
          <Text style={styles.name}>{`${firstName} ${lastName}`}</Text>
          <Text style={styles.email}>{`${email}`}</Text>
        </View>
        <TouchableOpacity style={styles.Icon} onPress={()=>Navigation.navigate("Detail",{user})}>
          <Icon name= "chevron-right" size={30} color='#280b6f'/>
        </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
    userContainer:{
      width:'80%',
      flexDirection: "row",
      alignItems:'center',
      justifyContent:"space-between",
      backgroundColor: '#6730ec',
      marginLeft: 20,   
      borderRadius: 15,
      marginTop: 5,
    },
    textContainer:{
     flex:1,
     width: '70%',
     marginLeft:15,
     justifyContent: 'center',
     alignItems: 'flex-start',
     paddingVertical: 10
    },
    name:{
    textTransform:'uppercase',
    color: "#fff",
    fontWeight: 'bold',
    },
    email:{
      color: '#fff',
      marginRight: 10,
      fontSize:12
    
    },
    thumbnail:{
      height:60,
      width:60,
      borderRadius:30,
      marginLeft: 5
    },
    Icon:{
      marginRight:10,
    }
})