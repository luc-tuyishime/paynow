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
        const {
            navigate,
            state: {
                params: { user }
            }
        } = this.props.navigation;

        console.log("state here ==>>", user);
        return (
            <View style={styles.container}>
                <Image
                    style={styles.imgRounded}
                    source={{
                        uri: user.photo
                    }}
                />
                <View style={styles.address}>
                    <Text>
                        <Text style={styles.textStyle1}> Card No:</Text>{" "}
                        <Text style={styles.textStyle}>{user.id}</Text>
                    </Text>
                    <Text>
                        <Text style={styles.textStyle1}> Names:</Text>{" "}
                        <Text style={styles.textStyle}>
                            {user.firstname} {user.lastname}
                        </Text>
                    </Text>
                    <Text>
                        <Text style={styles.textStyle1}> Dept: </Text>
                        <Text style={styles.textStyle}>{user.dept}</Text>
                    </Text>
                </View>
                <Button title="Go to home screen" onPress={() => navigate("Home")} />
            </View>
        );
    }
}
