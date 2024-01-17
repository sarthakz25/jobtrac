import { StyleSheet } from "react-native";

import { colors, sizes, font } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        marginVertical: sizes.medium,
        justifyContent: "center",
        alignItems: "center",
    },
    logoBox: {
        width: 80,
        height: 80,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF",
        borderRadius: sizes.large,
    },
    logoImage: {
        width: "80%",
        height: "80%",
    },
    jobTitleBox: {
        marginTop: sizes.small,
    },
    jobTitle: {
        fontFamily: font.bold,
        fontSize: sizes.large,
        color: colors.primary,
        textAlign: "center",
    },
    companyInfoBox: {
        marginTop: sizes.small / 2,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    companyName: {
        fontFamily: font.medium,
        fontSize: sizes.medium - 2,
        color: colors.primary,
    },
    locationBox: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    locationImage: {
        width: 14,
        height: 14,
        tintColor: colors.gray,
    },
    locationName: {
        fontFamily: font.regular,
        fontSize: sizes.medium - 2,
        color: colors.gray,
        marginLeft: 2,
    },
});

export default styles;
