import { StyleSheet } from "react-native";
import { colors, font, sizes } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        marginTop: sizes.xLarge,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    headerTitle: {
        fontFamily: font.medium,
        fontSize: sizes.large,
        color: colors.primary,
    },
    headerButton: {
        fontFamily: font.medium,
        fontSize: sizes.medium,
        color: colors.gray,
    },
    cardsContainer: {
        marginTop: sizes.medium,
    },
});

export default styles;
