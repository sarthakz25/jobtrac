import { StyleSheet } from "react-native";

import { colors, font, sizes } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: sizes.small,
        backgroundColor: "#FFF",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
    },
    likeButton: {
        width: 55,
        height: 55,
        borderWidth: 1,
        borderColor: "#F37453",
        borderRadius: sizes.medium,
        justifyContent: "center",
        alignItems: "center",
    },
    likeButtonImage: {
        width: "40%",
        height: "40%",
        tintColor: "#F37453",
    },
    applyButton: {
        flex: 1,
        backgroundColor: "#FE7654",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: sizes.medium,
        borderRadius: sizes.medium,
    },
    applyButtonText: {
        fontFamily: font.bold,
        fontSize: sizes.medium,
        color: colors.white,
    },
});

export default styles;
