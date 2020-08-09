import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Dimensions, ScrollView, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux';
import { login } from '../redux/actions';
import {asyncStorage} from '../helpers'

const windowHeight = Dimensions.get('window').height;
class Login extends Component {
  state ={};
  componentDidMount(){
    asyncStorage.removeValue()
  }
  UNSAFE_componentWillReceiveProps = async (nextProps) => {
    const {loading, payload} = nextProps;
    const {navigation} = this.props;
    const user =  await asyncStorage.getData();
    this.setState({loading, payload})
    return user.length !==0 && navigation.navigate('Home')
  }
  onChangeText =({text, name}) => {
    this.setState({[name]: text})
  }
  onPress = () => {
    const {login} = this.props
    const {password, username } = this.state;
    login({username, password});
  }
  render() {
    const {loading, payload} = this.state;
        return (
            <ScrollView>
             <View style={{padding: 10, height: windowHeight}}>
               <View style={{height: '70%', justifyContent: 'space-evenly'}}>
               <View style={{display: 'flex', alignItems: 'center'}}><Text style={{fontWeight: 'bold', fontSize: 50}}>Pay now</Text></View>
                <View style={{height: '40%', display: 'flex', justifyContent: 'space-between',}}>
                <TextInput
                style={{ height: 50, borderColor: 'gray', borderBottomWidth: 1, }}
                  onChangeText={text => this.onChangeText({text, name: 'username'})}
                //   value={value}
                autoCapitalize = 'none'
                placeholder="Username"
                 />
                <TextInput
                style={{ height: 50, borderColor: 'gray', borderBottomWidth: 1 }}
                  onChangeText={text => this.onChangeText({text, name: 'password'})}
                //   value={value}
                secureTextEntry={true}
                placeholder="Password"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPress}
                  >
                    <Text style={{fontWeight: 'bold', color: 'white', fontSize: 20}}>{loading && <ActivityIndicator color="white"/> || 'Login'}</Text>
                  </TouchableOpacity>
                </View>
               </View>
            </View>
            </ScrollView>
        )
    }
}
const mapStateToProps = ({login:{loading, payload}}) => ({loading, payload});

export default connect(mapStateToProps, {login})(Login)

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