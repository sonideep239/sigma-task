import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'

function Distance() {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                contentContainerStyle={styles.container}>
                <View style={styles.header}>
                    <AntDesign
                        name='arrowleft'
                        size={20}
                        style={{
                            backgroundColor: '#ffffff',
                            padding: 8,
                            borderRadius: 40,
                            borderWidth: 0.5,
                            position: 'absolute',
                        }} color="black" />
                    <Text style={styles.headerText}>
                        <Text style={styles.mix}>Mix</Text>
                        <Text style={styles.dorm}>Dorm</Text>
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', width: '100%', marginVertical: 30 }}>
                    <View style={{ flex: 6, backgroundColor: '#f48a8a', borderTopLeftRadius: 10, borderBottomLeftRadius: 10, padding: 3 }} />
                    <View style={{ flex: 4, backgroundColor: '#d3d3d3', borderTopRightRadius: 10, borderBottomRightRadius: 10, padding: 3 }} />
                </View>
                <Text style={styles.distanceText}>Your distance</Text>
                <Text style={styles.preferenceText}>preference<Text style={styles.distanceText}>?</Text></Text>
            </ScrollView>
            <TouchableOpacity style={styles.submitButton} onPress={() => navigation.navigate('Recentpic')}>
                <Text style={styles.submitButtonText}>Next</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        width: '100%',
        justifyContent: 'center'
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
    distanceText: {
        fontSize: 30,
        color: '#000000',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    preferenceText: {
        fontSize: 30,
        color: '#EE805F',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    submitButton: {
        margin: 15,
        backgroundColor: '#EA4080',
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

export default Distance;
