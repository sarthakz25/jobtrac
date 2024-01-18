import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";

import styles from "./tabs.style";
import { sizes } from "../../../constants";

const TabButton = ({ name, activeTab, onHandleSearchType }) => (
    <TouchableOpacity
        style={styles.button(name, activeTab)}
        onPress={onHandleSearchType}
    >
        <Text style={styles.buttonText(name, activeTab)}>{name}</Text>
    </TouchableOpacity>
);

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={tabs}
                renderItem={({ item }) => (
                    <TabButton
                        name={item}
                        activeTab={activeTab}
                        onHandleSearchType={() => setActiveTab(item)}
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item}
                contentContainerStyle={{ columnGap: sizes.small / 2 }}
            />
        </View>
    );
}

export default Tabs;
