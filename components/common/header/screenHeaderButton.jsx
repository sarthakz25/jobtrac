import React from "react";
import { TouchableOpacity, Image, Share } from "react-native";
import styles from "./screenHeader.style";

const ScreenHeaderButton = ({ iconUrl, dimension, url, handlePress }) => {

    const onShare = async () => {
        try {
            await Share.share({
                message: url
            });
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <TouchableOpacity
            style={styles.buttonContainer}
            onPress={url ? onShare : handlePress}
        >
            <Image
                source={iconUrl}
                style={styles.buttonImage(dimension)}
            />
        </TouchableOpacity>
    );
}

export default ScreenHeaderButton;
