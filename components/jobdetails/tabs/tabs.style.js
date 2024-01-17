import { StyleSheet } from "react-native";

import { colors, shadows, sizes } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        marginTop: sizes.small,
        marginBottom: sizes.small / 2,
    },
    button: (name, activeTab) => ({
        paddingVertical: sizes.medium,
        paddingHorizontal: sizes.xLarge,
        backgroundColor: name === activeTab ? colors.primary : "#f3f4f8",
        borderRadius: sizes.medium,
        marginLeft: 2,
        ...shadows.medium,
        shadowColor: colors.white,
    }),
    buttonText: (name, activeTab) => ({
        fontFamily: "DMMedium",
        fontSize: sizes.small,
        color: name === activeTab ? "#C3BFCC" : "#AAA9B8",
    }),
});

export default styles;
