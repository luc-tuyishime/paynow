import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';

const windowHeight = Dimensions.get('window').height;
export default class Signup extends Component {
    render() {
        return (
            <ScrollView>
             <View style={{padding: 10, height: windowHeight}}>
               <View style={{height: '90%', justifyContent: 'space-evenly'}}>
               <View style={{display: 'flex', alignItems: 'center'}}><Text style={{fontWeight: 'bold', fontSize: 50}}>Pay now</Text></View>
                <View style={{height: '55%', display: 'flex', justifyContent: 'space-between',}}>
                
                <TextInput
                style={{ height: 50, borderColor: 'gray', borderBottomWidth: 1, }}
                //   onChangeText={text => onChangeText(text)}
                //   value={value}
                placeholder="Enter firstname"
                 />
                 <TextInput
                style={{ height: 50, borderColor: 'gray', borderBottomWidth: 1, }}
                //   onChangeText={text => onChangeText(text)}
                //   value={value}
                placeholder="Enter lastname"
                 />
                 <TextInput
                style={{ height: 50, borderColor: 'gray', borderBottomWidth: 1, }}
                //   onChangeText={text => onChangeText(text)}
                //   value={value}
                placeholder="Enter username"
                 />
                <TextInput
                style={{ height: 50, borderColor: 'gray', borderBottomWidth: 1 }}
                //   onChangeText={text => onChangeText(text)}
                //   value={value}
                placeholder=" Enter password"
                />
                <TouchableOpacity
                    style={styles.button}
                    // onPress={onPress}
                >
                    <Text style={{fontWeight: 'bold', color: 'white', fontSize: 20}}>Signup</Text>
                </TouchableOpacity>
                </View>
               </View>
            </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 10,
    },
    button: {
      alignItems: "center",
      backgroundColor: "#0897FA",
      padding: 10
    },
    countContainer: {
      alignItems: "center",
      padding: 10
    }
  });