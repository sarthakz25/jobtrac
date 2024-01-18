import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Linking
} from "react-native";

import styles from "./footer.style";
import { icons } from "../../../constants";

const Footer = ({ url }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.likeButton}>
                <Image
                    source={icons.heartOutline}
                    resizeMode="contain"
                    style={styles.likeButtonImage}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.applyButton}
                onPress={() => Linking.openURL(url)}
            >
                <Text style={styles.applyButtonText}>Apply for job</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Footer;
