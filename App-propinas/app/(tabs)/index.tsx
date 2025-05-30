import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter, useFocusEffect } from 'expo-router';

export default function HomeScreen() {
  const [bill, setBill] = useState('');
  const [tip, setTip] = useState(0);
  const [split, setSplit] = useState(1);

  const router = useRouter();

  useFocusEffect(
    React.useCallback(() => {
      const fetchCustomTip = async () => {
        const storedTip = await AsyncStorage.getItem('customTip');
        if (storedTip) {
          setTip(Number(storedTip));
        }
      };
      fetchCustomTip();
    }, [])
  );

  const billAmount = parseFloat(bill) || 0;
  const tipAmount = (billAmount * tip) / 100;
  const totalAmount = billAmount + tipAmount;
  const totalPerPerson = totalAmount / split;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/images/hat.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.title}>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000' }}>Mr</Text>
            <Text style={{ fontSize: 26, fontWeight: 'bold', color: '#000' }}>TIP</Text>
¿          </View>
          
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }}>Calculator</Text>
        </View>
      </View>

      <View style={styles.resultContainer}>
        <Text style={styles.resultLabel}>Total p/person</Text>
        <Text style={styles.totalPerPerson}>${totalPerPerson.toFixed(2)}</Text>
        <View style={styles.divider} />
        <View style={styles.resultRow}>
          <View>
            <Text style={styles.resultSubLabel}>Total bill</Text>
            <Text style={styles.resultSubValue}>${billAmount.toFixed(2)}</Text>
          </View>
          <View>
            <Text style={styles.resultSubLabel}>Total tip</Text>
            <Text style={styles.resultSubValue}>${tipAmount.toFixed(2)}</Text>
          </View>
        </View>
      </View>

      <View style={styles.inputRow}>
        <View style={{ marginBottom: 8, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
          <Text style={styles.label}>Enter </Text>
          <Text style={styles.sublabel}>your bill</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.dollarSign}>$</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={bill}
            onChangeText={setBill}
            placeholder="0"
            placeholderTextColor="#888"
          />
        </View>
      </View>
      <View style={styles.tipRow}>
        <View style={{ marginBottom: 8, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
          <Text style={styles.label}>Choose </Text>
          <Text style={styles.sublabel}>your tip</Text>
        </View>
        <View style={{ width: '80%' }}>
          <View style={styles.tipRow}>
            {[10, 15, 20].map((percent) => (
              <TouchableOpacity
                key={percent}
                style={styles.tipButton}
                onPress={() => setTip(percent)}
              >
                <Text style={styles.tipText}>{percent}%</Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={{ marginTop: 2, marginBottom: 16 }}>
            <TouchableOpacity
              style={styles.customTipButton}
              onPress={() => router.push('/explore')}
            >
              <Text style={styles.tipText}>Custom tip</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%', marginTop: 2 }}>
        <View style={{ marginBottom: 8, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
          <Text style={styles.label}>Split </Text>
          <Text style={styles.sublabel}>the total</Text>
        </View>

        <View style={styles.splitContainer}>
          <TouchableOpacity
            style={styles.splitButton}
            onPress={() => setSplit(Math.max(1, split - 1))}
          >
            <Text style={styles.splitText}>-</Text>
          </TouchableOpacity>
          <View style={styles.splitBox}>
            <Text style={styles.splitNumber}>{split}</Text>
          </View>
          <TouchableOpacity
            style={styles.splitButton2}
            onPress={() => setSplit(split + 1)}
          >
            <Text style={styles.splitText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    padding: 20,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 30
  },
  logo: {
    width: 60,
    height: 60,
    marginRight: 10
  },
  title: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 0
  },
  resultContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20
  },
  resultLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  totalPerPerson: {
    fontSize: 32,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginVertical: 8
  },
  divider: {
    height: 2,
    backgroundColor: '#ccc',
    marginVertical: 10
  },
  resultRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  resultSubLabel: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold'
  },
  resultSubValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00BFA6'
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16
  },
  sublabel: {
    fontSize: 16
  },
  inputRow: {
    marginBottom: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  inputContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    width: '80%'
  },
  dollarSign: {
    fontSize: 18,
    marginRight: 6
  },
  input: {
    flex: 1,
    fontSize: 18,
    paddingVertical: 10,
    color: '#000'
  },
  tipRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    width: '100%',
    marginTop: 2
  },
  tipButton: {
    backgroundColor: '#00BFA6',
    paddingVertical: 12,
    borderRadius: 10,
    width: '30%',
    alignItems: 'center'
  },
  customTipButton: {
    backgroundColor: '#00BFA6',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  tipText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  splitContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '80%',

  },
  splitButton: {
    backgroundColor: '#00BFA6',
    padding: 14,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 0,
    width: '25%',
    alignItems: 'center'
  },
  splitButton2: {
    backgroundColor: '#00BFA6',
    padding: 14,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 10,
    width: '25%',
    alignItems: 'center'
  },
  splitBox: {
    backgroundColor: '#fff',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 0,
    width: '50%',
    alignItems: 'center',
  },
  splitNumber: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  splitText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});