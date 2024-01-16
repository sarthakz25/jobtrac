import { StyleSheet } from "react-native";
import { colors, font, sizes } from "../constants";

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    searchTitle: {
        fontFamily: font.bold,
        fontSize: sizes.xLarge,
        color: colors.primary,
    },
    noOfSearchedJobs: {
        marginTop: 2,
        fontFamily: font.medium,
        fontSize: sizes.small,
        color: colors.primary,
    },
    loaderContainer: {
        marginTop: sizes.medium,
    },
    footerContainer: {
        marginTop: sizes.small,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: 10,
    },
    paginationButton: {
        width: 30,
        height: 30,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.tertiary,
    },
    paginationImage: {
        width: "60%",
        height: "60%",
        tintColor: colors.white,
    },
    paginationTextBox: {
        width: 30,
        height: 30,
        borderRadius: 2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.white,
    },
    paginationText: {
        fontFamily: font.bold,
        fontSize: sizes.medium,
        color: colors.primary,
    },
});

export default styles;
