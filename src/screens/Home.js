import React, { Component } from "react";
import { View, Button, TextInput } from "react-native";
import { styles } from "../styles/Home";
import { profile } from "../redux/actions";
import { connect } from "react-redux";

/**
 * Home screen
 */
 class Home extends Component {
    state = {};
    UNSAFE_componentWillReceiveProps = (nextProps) =>  {
const {userProfile, navigation: {navigate}} = nextProps;
return Object.keys(userProfile).length !== 0 &&  navigate('Profile', {user: {...userProfile}})
    }
    onChangeText =({text, name}) => {
        this.setState({[name]: text})
      }
      onPress = () => {
        const {profile, navigation: {navigate}} = this.props
        // const {navigation: {navigate} } = nextProps;

        const {idCard } = this.state;
        profile(idCard);
      }
    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <TextInput onChangeText={text => this.onChangeText({text, name: 'idCard'})}
                style={styles.search} placeholder="Enter card no" />
                <Button
                    style={styles.button}
                    title="GO"
                    onPress={this.onPress}
                />
            </View>
        );
    }
}
const mapStateToProps = ({profile: {payload}}) => ({userProfile: payload});

export default connect(mapStateToProps, {profile})(Home)