import React, { Component } from "react";
import { View, Button, TextInput } from "react-native";
import { styles } from "../styles/Home";

/**
 * Home screen
 */
export default class Home extends Component {
    static navigationOptions = {
        title: "Home"
    };

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <TextInput style={styles.search} placeholder="Enter card no" />
                <Button
                    style={styles.button}
                    title="GO"
                    onPress={() => navigate("Profile", { name: "Luc Tuyishime" })}
                />
            </View>
        );
    }
}
