import { StyleSheet } from "react-native";
import { colors, sizes } from "../../../constants";

const styles = StyleSheet.create({
    buttonContainer: {
        width: 40,
        height: 40,
        backgroundColor: colors.white,
        borderRadius: sizes.small / 1.25,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonImage: (dimension) => ({
        width: dimension,
        height: dimension,
        borderRadius: sizes.small / 1.25,
    }),
});

export default styles;
