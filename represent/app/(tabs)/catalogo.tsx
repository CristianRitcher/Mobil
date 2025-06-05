import { Image } from 'expo-image';
import { ImageBackground, Platform, StyleSheet, TouchableOpacity, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ScrollView } from 'react-native-gesture-handler';
import { Text } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { FlatList } from 'react-native-gesture-handler';

export default function HomeScreen() {
    const { id } = useLocalSearchParams();
    const listFW19 = [
        {
            id: 1,
            name: 'Sudadera Electroshock',
            image: require('@/assets/images/sudadera1.png'),
            price: 100,
        },
        {
            id: 2,
            name: 'Sudadera Minisplit 2025',
            image: require('@/assets/images/sudadera2.png'),
            price: 200,
        },
        {
            id: 1,
            name: 'Camisa Básica Gris',
            image: require('@/assets/images/sudadera4.png'),
            price: 100,
        },
        {
            id: 2,
            name: 'Sudadera XXCLLA',
            image: require('@/assets/images/sudadera3.png'),
            price: 200,
        },
    ];
    const listTheTerrier = [
        {
            id: 1,
            name: 'Tenis con ralla',
            image: require('@/assets/images/sneakers1.png'),
            price: 200,
        },
        {
            id: 2,
            name: 'Tenis Yeezy',
            image: require('@/assets/images/sneakers2.png'),
            price: 200,
        },
    ];
    const list = id === '1' ? listFW19 : listTheTerrier;
    const title = id === '1' ? 'FW19' : 'The Terrier';
    const router = useRouter();

    const renderItem = ({ item }: { item: any }) => (
        <TouchableOpacity onPress={() => router.push({ pathname: '/(tabs)/producto', params: { id: item.id, tipo: id } })}>
            <View style={styles.itemContainer}>
                <Image source={item.image} style={styles.image} />
                <Text style={styles.textItem}>{item.name}</Text>
                <Text style={styles.priceItem}>${item.price}.00 GaP</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <ScrollView>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Image source={require('@/assets/images/back.png')} style={styles.logo} />
                </TouchableOpacity>
                <Text style={styles.text}>{title}</Text>
                <Image source={require('@/assets/images/search.png')} style={styles.logo} />
            </View>


            <FlatList
                data={list}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                contentContainerStyle={styles.listContainer}
            />

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: '#F5F5F5',
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
        paddingTop: 40,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    image: {
        width: 180,
        height: 200,
        marginBottom: 10,
    },
    logo: {
        width: 20,
        height: 20,
    },
    listContainer: {
        padding: 10,
    },
    itemContainer: {
        flex: 1,
        margin: 0,
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
    },
    textItem: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    priceItem: {
        fontSize: 14,
    },
});
