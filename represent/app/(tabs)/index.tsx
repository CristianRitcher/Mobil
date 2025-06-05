import { Image } from 'expo-image';
import { ImageBackground, Platform, StyleSheet, TouchableOpacity, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ScrollView } from 'react-native-gesture-handler';
import { Text } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();
  return (
    <ScrollView>
      <View style={styles.header}>
        <Image source={require('@/assets/images/hamburger.png')} style={styles.logo} />
        <Text style={styles.text}>REPRESENT</Text>
        <Image source={require('@/assets/images/search.png')} style={styles.logo} />
      </View>
      <View style={styles.content}>
        <TouchableOpacity onPress={() => router.push({ pathname: '/(tabs)/catalogo', params: { id: '1' } })}>
          <Image source={require('@/assets/images/fw19.png')} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push({ pathname: '/(tabs)/catalogo', params: { id: '2' } })}>
          <Image source={require('@/assets/images/the-terrier.png')} style={styles.image} />
        </TouchableOpacity>
      </View>
        
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
  image: {
    width: '100%',
    height: 700,
    alignSelf: 'center',
  },
  content: {
    gap: 30,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  
  text2: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: 'white',
  },
  logo: {
    width: 20,
    height: 20,
  },
});
