import React from "react";
import { View, Text, Button, Image } from "react-native";
import { styles } from "../styles/Profile";

/**
 * Profile screen
 */

export default class Profile extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam("name")
        };
    };

    render() {
        const { navigate, state } = this.props.navigation;

        return (
            <View style={styles.container}>
                <Image
                    style={styles.imgRounded}
                    source={{
                        uri:
                            "https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
                    }}
                />
                <View style={styles.address}>
                    <Text>
                        <Text style={styles.textStyle1}> Card No:</Text>{" "}
                        <Text style={styles.textStyle}>12343245342354522</Text>
                    </Text>
                    <Text>
                        <Text style={styles.textStyle1}> Names:</Text>{" "}
                        <Text style={styles.textStyle}>{state.params.name}</Text>
                    </Text>
                    <Text>
                        <Text style={styles.textStyle1}> Dept: </Text>
                        <Text style={styles.textStyle}>Litoral</Text>
                    </Text>
                    <Text>
                        <Text style={styles.textStyle1}> Contact:</Text>{" "}
                        <Text style={styles.textStyle}>+250784421255</Text>
                    </Text>
                </View>
                <Button title="Go to home screen" onPress={() => navigate("Home")} />
            </View>
        );
    }
}
