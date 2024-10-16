import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
const { width } = Dimensions.get('window');

const Creator = () => {
    const navigation = useNavigation()
    return (
        <ScrollView contentContainerStyle={styles.container}>
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
                <Text style={styles.title}>Creator</Text>
            </View>

            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/images/creator.png')}
                    style={styles.image}
                />
            </View>

            <Text style={styles.label}>Instagram Handle URL / Youtube URL</Text>
            <TextInput
                style={styles.input}
                placeholder="Instagram Handle URL / Youtube URL"
                placeholderTextColor="#888"
                value="www.instagram.com/creator"
            />

            <Text style={styles.label}>Hostel Name</Text>
            <View style={styles.input}>
                <Text style={styles.placeholderText}>Select hostel</Text>
            </View>

            <Text style={styles.label}>Email</Text>
            <View style={styles.input}>
                <Text style={styles.placeholderText}>Email</Text>
            </View>

            <Text style={styles.label}>Date of Arrival</Text>
            <View style={styles.input}>
                <Text style={styles.placeholderText}>Traveling schedule</Text>
            </View>

            <Text style={styles.label}>Service Offer</Text>
            <View style={styles.input}>
                <Text style={styles.placeholderText}>Select Services</Text>
            </View>

            <Text style={styles.label}>Add Instagram / Youtube Page Screenshot</Text>
            <View style={[styles.input, { borderStyle: 'dashed', flexDirection: 'row', justifyContent: 'space-between' }]}>
                <Text style={styles.placeholderText}>Upload</Text>
                <FontAwesome
                    name='cloud-upload'
                    size={20}
                    style={{
                        alignSelf: 'center'
                    }}
                    color="lightgreen" />
            </View>

            <TouchableOpacity style={styles.submitButton} onPress={() => navigation.navigate('Distance')}>
                <Text style={styles.submitButtonText}>Submit Offer</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

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
    title: {
        fontSize: 16,
        fontWeight: '600',
        alignSelf: 'center',
        color: '#000',
    },
    imageContainer: {
        alignItems: 'center',
        marginVertical: 50,
    },
    image: {
        width: width * 0.5,
        height: width * 0.4,
        resizeMode: 'contain',
    },
    label: {
        color: '#000000',
        fontWeight: '700',
        paddingVertical: 8
    },
    input: {
        width: '100%',
        padding: 15,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 40,
        fontSize: 16,
    },
    placeholderText: {
        color: '#888',
    },
    submitButton: {
        marginTop: 20,
        backgroundColor: '#A3D834',
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

export default Creator;
