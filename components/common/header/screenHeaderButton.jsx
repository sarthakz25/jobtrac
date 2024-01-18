import React from "react";
import { TouchableOpacity, Image } from "react-native";

import styles from "./screenHeader.style";

const ScreenHeaderButton = ({ iconUrl, dimension, handlePress }) => {
    return (
        <TouchableOpacity style={styles.buttonContainer} onPress={handlePress}>
            <Image
                source={iconUrl}
                resizeMode="contain"
                style={styles.buttonImage(dimension)}
            />
        </TouchableOpacity>
    );
}

export default ScreenHeaderButton;
