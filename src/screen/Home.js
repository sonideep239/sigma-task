import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function Home() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.container}>
        <View style={{ padding: 20 }}>
          <Text style={styles.headerText}>
            <Text style={styles.mix}>Mix</Text>
            <Text style={styles.dorm}>Dorm</Text>
          </Text>
          <View style={{ position: 'relative' }}>
            <View style={{ borderColor: '#EE508F', borderRadius: 50, padding: 50, borderWidth: 2, alignSelf: "center", marginTop: 20 }} />
            <View style={{ backgroundColor: '#EA4080', padding: 5, borderRadius: 20, alignSelf: 'center', position: 'absolute', top: '90%' }}>
              <Text>70% Complete</Text>
            </View>
          </View>
          <View style={{ paddingTop: '6%', paddingBottom: '10%' }}>
            <Text style={{ fontSize: 20, textAlign: 'center', color: '#000000', fontWeight: 'bold' }}>Rechel Sah</Text>
            <Text style={{ fontSize: 12, textAlign: 'center', color: '#000000', fontWeight: '500' }}>Doctor 28 UK</Text>
            <View style={{ borderBottomWidth: 1, paddingVertical: 10, borderColor: 'gray' }}></View>
          </View>
        </View>
        <ImageBackground source={require('../assets/images/Rectangle.png')} style={{ width: '100%', height: '100%' }}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: '#ffffff', marginTop: '20%', fontSize: 22, fontWeight: 'bold', paddingBottom: 20 }}>MixMate Platinum</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ flex: 2, textAlign: 'center', color: '#ffffff', paddingVertical: 10, fontWeight: 'bold' }}>What’s Included</Text>
              <Text style={{ flex: 1, textAlign: 'center', color: '#ffffff', paddingVertical: 10, fontWeight: 'bold' }}>Free</Text>
              <Text style={{ flex: 1, textAlign: 'center', color: '#ffffff', paddingVertical: 10, fontWeight: 'bold' }}>Gold</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ flex: 2, textAlign: 'center', color: '#ffffff', paddingVertical: 5 }}>Free Super Like</Text>
              <Text style={{ flex: 1, textAlign: 'center', color: '#ffffff', paddingVertical: 5 }}></Text>
              <Text style={{ flex: 1, textAlign: 'center', color: '#ffffff', paddingVertical: 5 }}></Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ flex: 2, textAlign: 'center', color: '#ffffff', paddingVertical: 5 }}>Free Super Like</Text>
              <Text style={{ flex: 1, textAlign: 'center', color: '#ffffff', paddingVertical: 5 }}></Text>
              <Text style={{ flex: 1, textAlign: 'center', color: '#ffffff', paddingVertical: 5 }}></Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ flex: 2, textAlign: 'center', color: '#ffffff', paddingVertical: 5 }}>Free Super Like</Text>
              <Text style={{ flex: 1, textAlign: 'center', color: '#ffffff', paddingVertical: 5 }}></Text>
              <Text style={{ flex: 1, textAlign: 'center', color: '#ffffff', paddingVertical: 5 }}></Text>
            </View>
          </View>
          <TouchableOpacity style={styles.submitButton} onPress={() => navigation.navigate('Recentpic')}>
            <Text style={styles.submitButtonText}>Next</Text>
          </TouchableOpacity>
        </ImageBackground>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    // padding: 20,   
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  mix: {
    color: '#000',
  },
  dorm: {
    color: '#f48a8a',
  },
  submitButton: {
    marginHorizontal: 15,
    marginTop: '10%',
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButtonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default Home;
