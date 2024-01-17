import { StyleSheet } from "react-native";

import { colors, font, sizes } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        marginTop: sizes.large,
        backgroundColor: "#FFF",
        borderRadius: sizes.medium,
        padding: sizes.medium,
    },
    headText: {
        fontFamily: font.bold,
        fontSize: sizes.large,
        color: colors.primary,
    },
    contentBox: {
        marginVertical: sizes.small,
    },
    contextText: {
        fontFamily: font.regular,
        fontSize: sizes.medium - 2,
        color: colors.gray,
        marginVertical: sizes.small / 1.25,
    },
});

export default styles;
