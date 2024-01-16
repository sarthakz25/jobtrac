import { StyleSheet } from "react-native";
import { colors, font, sizes } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        marginTop: sizes.large,
        backgroundColor: "#fff",
        borderRadius: sizes.medium,
        padding: sizes.medium,
    },
    title: {
        fontFamily: font.bold,
        fontSize: sizes.large,
        color: colors.primary,
    },
    pointsContainer: {
        marginVertical: sizes.small,
    },
    pointsWrapper: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginVertical: sizes.small / 1.25,
    },
    pointDot: {
        width: 6,
        height: 6,
        borderRadius: 6,
        backgroundColor: colors.gray2,
        marginTop: 6,
    },
    pointText: {
        fontFamily: font.regular,
        fontSize: sizes.medium - 2,
        color: colors.gray,
        marginLeft: sizes.small,
    },
});

export default styles;
