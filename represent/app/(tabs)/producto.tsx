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
import { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
    const { tipo, id } = useLocalSearchParams();
    const idNumber = parseInt(id as string);

    const listFW19 = [
        {
            id: 1,
            name: 'Sudadera Electroshock',
            image: require('@/assets/images/sudadera1.png'),
            price: 100,
            description: 'Sudadera de algodón con estampado de Electroshock',
            options: ['sudadera1.png'],
        },
        {
            id: 2,
            name: 'Sudadera Minisplit 2025',
            image: require('@/assets/images/sudadera2.png'),
            price: 200,
            description: 'Sudadera de algodón con estampado de Minisplit 2025',
            options: ['sudadera2.png'],
        },
        {
            id: 1,
            name: 'Camisa Básica Gris',
            image: require('@/assets/images/sudadera4.png'),
            price: 100,
            description: 'Camisa de algodón con estampado de Electroshock',
            options: ['sudadera4.png'],
        },
        {
            id: 2,
            name: 'Sudadera XXCLLA',
            image: require('@/assets/images/sudadera3.png'),
            price: 200,
            description: 'Sudadera de algodón con estampado de Electroshock',
            options: ['sudadera3.png'],
        },
    ];
    const listTheTerrier = [
        {
            id: 1,
            name: 'Adidas Trainners',
            image: require('@/assets/images/sneakers1.png'),
            price: 200,
            description: 'Tenis con estampado de The Terrier',
            options: ['sneakers1.png'],
        },
        {
            id: 2,
            name: 'Yeezy Trainners',
            image: require('@/assets/images/sneakers2.png'),
            price: 200,
            description: 'Los tenis Yeezy, una colaboración icónica entre Kanye West y Adidas, se han convertido en un símbolo indiscutible de moda urbana y diseño vanguardista. <br> <br> Desde su debut, la línea Yeezy ha revolucionado el mercado del calzado con siluetas futuristas, materiales de alta calidad y una estética minimalista pero poderosa. Uno de los aspectos más destacados de los Yeezy es la variedad de colores que han sido lanzados a lo largo del tiempo.Las ediciones más clásicas, como los “Triple White”, destacan por su elegancia limpia y versátil, ideales para cualquier outfit.Por otro lado, versiones como los “Black Static” y “Pirate Black” ofrecen un look más sobrio y sofisticado, perfectos para quienes buscan discreción con estilo. Otros modelos optan por una paleta de tonos tierra y neutros, como los “Sesame”, “Taupe Light” o “Stone”, reflejando una fuerte inspiración en paisajes desérticos y elementos naturales.Estas ediciones han sido ampliamente aclamadas por su capacidad de combinar con múltiples estilos de ropa sin perder la esencia Yeezy. Las versiones más audaces incluyen combinaciones como los “Zebra”, con su patrón blanco y negro que simula rayas animales, o los “Semi Frozen Yellow”, que destacan con un color neón vibrante que no pasa desapercibido.También existen lanzamientos exclusivos que combinan materiales reflectantes o efectos glow -in -the - dark, añadiendo aún más singularidad al calzado. En cuanto a construcción y comodidad, la mayoría de los Yeezy, especialmente los Boost 350 V2, incorporan la tecnología Boost de Adidas, ofreciendo una amortiguación inigualable y una sensación de ligereza que los hace aptos tanto para el uso diario como para largas caminatas.El tejido Primeknit se adapta como un guante al pie, permitiendo transpirabilidad y flexibilidad, sin sacrificar el ajuste firme. Más allá del diseño y confort, los Yeezy son también una pieza de cultura contemporánea.Su valor en reventa, ediciones limitadas y lanzamientos por sorteo han generado una comunidad mundial de coleccionistas y entusiastas que siguen cada movimiento de la marca con gran expectativa.',
            options: ['sneakers2.png', 'sneakers3.png', 'sneakers4.png'],
        },
    ];
    const imageMap = {
        'sudadera1.png': require('@/assets/images/sudadera1.png'),
        'sudadera2.png': require('@/assets/images/sudadera2.png'),
        'sudadera3.png': require('@/assets/images/sudadera3.png'),
        'sudadera4.png': require('@/assets/images/sudadera4.png'),
        'sneakers1.png': require('@/assets/images/sneakers1.png'),
        'sneakers2.png': require('@/assets/images/sneakers2.png'),
        'sneakers3.png': require('@/assets/images/sneakers3.png'),
        'sneakers4.png': require('@/assets/images/sneakers4.png'),
    };
    
    const list = tipo === '1' ? listFW19 : listTheTerrier;
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

    const [selectedImage, setSelectedImage] = useState(list[idNumber - 1].options[0]);
    useEffect(() => {
        setSelectedImage(list[idNumber - 1].options[0]);
    }, [idNumber]);

    return (
        <View style={styles.container}>
        <ScrollView>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Image source={require('@/assets/images/back.png')} style={styles.logo} />
                </TouchableOpacity>
                <Text style={styles.text}>REPRESENT</Text>
                <Image source={require('@/assets/images/search.png')} style={styles.logo} />
            </View>


            <View style={styles.container}>
                <Text style={styles.text2}>{list[idNumber - 1].name}</Text>
                <Image source={imageMap[selectedImage]} style={styles.image} />
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {list[idNumber - 1].options.map((option) => (
                        <TouchableOpacity
                            key={option}
                            onPress={() => setSelectedImage(option)}
                            style={[
                                styles.optionButton,
                                selectedImage === option && styles.optionButtonSelected,
                            ]}
                        >
                            <Text style={styles.optionText}>{option.replace('.png', '')}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <Text style={styles.description}>{list[idNumber - 1].description}</Text>
                <button type="button">Agregar al carrito</button>

                
            </View>
            

        </ScrollView>
            <TouchableOpacity style={styles.fab} onPress={() => alert('FAB presionado')}>
                <Ionicons name="add" size={24} color="#fff" />
                {/* También puedes usar <Text>+</Text> */}
            </TouchableOpacity>
        </View>
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
    text2: {
        fontSize: 30,
        fontWeight: 'bold',
        fontStyle: 'italic',
        marginBottom: 10,
        marginTop: 10,
        marginLeft: 10,
    },
    image: {
        width: 180,
        height: 250,
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
    optionButton: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        margin: 5,
        borderRadius: 5,
    },
    optionButtonSelected: {
        borderColor: '#000',
        backgroundColor: '#eee',
    },
    optionText: {
        fontSize: 12,
    },
    container: {
        flex: 1,
        paddingHorizontal: 10,
    },
    fab: {
        position: 'absolute',
        right: 20,
        bottom: 80,
        backgroundColor: '#000',
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5, // sombra para Android
        shadowColor: '#000', // sombra para iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
});
