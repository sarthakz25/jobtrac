import { useState } from "react";
import { useRouter } from "expo-router";
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    ActivityIndicator
} from "react-native";

import styles from "./popularJobs.style";
import { colors, sizes } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import useFetch from "../../../hook/useFetch";

const PopularJobs = () => {
    const router = useRouter();

    const { data, error, isLoading } = useFetch("search", {
        query: "Best Developer Jobs India",
        num_pages: "1",
    });

    // console.log(data);

    const [selectedJob, setSelectedJob] = useState();

    const handleCardPress = (item) => {
        router.push(`/job-details/${item.job_id}`);
        setSelectedJob(item.job_id);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Popular jobs</Text>
                <TouchableOpacity>
                    <Text style={styles.headerButton}>Show all</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.cardsContainer}>
                {
                    isLoading ? (
                        <ActivityIndicator size="large" color={colors.primary} />
                    ) : error ? (
                        <Text>Something went wrong!</Text>
                    ) : (
                        <FlatList
                            data={data}
                            renderItem={({ item }) => (
                                <PopularJobCard
                                    item={item}
                                    selectedJob={selectedJob}
                                    handleCardPress={handleCardPress}
                                />
                            )}
                            keyExtractor={item => item?.job_id}
                            contentContainerStyle={{ columnGap: sizes.medium }}
                            horizontal
                        />
                    )
                }
            </View>
        </View>
    );
}

export default PopularJobs;
