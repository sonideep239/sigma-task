import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    Dimensions,
    FlatList,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const { width } = Dimensions.get('window');
function Recentpic() {
    const navigation = useNavigation()
    const recentPic = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }];

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
                        }}
                        color="black"
                    />
                    <Text style={styles.headerText}>
                        <Text style={styles.mix}>Mix</Text>
                        <Text style={styles.dorm}>Dorm</Text>
                    </Text>
                </View>

                <View style={{ flexDirection: 'row', width: '100%', marginVertical: 30 }}>
                    <View style={{ flex: 6, backgroundColor: '#f48a8a', borderTopLeftRadius: 10, borderBottomLeftRadius: 10, padding: 3 }} />
                    <View style={{ flex: 4, backgroundColor: '#d3d3d3', borderTopRightRadius: 10, borderBottomRightRadius: 10, padding: 3 }} />
                </View>

                <Text style={styles.distanceText}>Add your recent pic</Text>
                <FlatList
                    style={{ paddingTop: 20 }}
                    data={recentPic}
                    numColumns={3}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.listItem}>
                            <FontAwesome
                                name='plus'
                                size={18}
                                style={{
                                    backgroundColor: '#EE805F',
                                    padding: 5,
                                    borderRadius: 20,
                                    alignSelf: 'center',
                                    elevation: 5,
                                }}
                                color="white" />
                        </View>
                    )}
                />
                <Text style={{ color: 'gray', textAlign: 'center', fontSize: 18 }}>Add at least 2 photos to continue</Text>
            </ScrollView>

            <TouchableOpacity style={styles.submitButton} onPress={() => navigation.navigate('TabNavigation')} >
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
        textAlign: 'center',
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
    listItem: {
        alignSelf: 'center',
        marginVertical: 5,
        marginHorizontal: 5,
        height: width / 2.5,
        width: width / 3.65,
        borderWidth: 2,
        borderStyle: 'dashed',
        borderRadius: 10,
        borderColor: '#EE805F',
        justifyContent: 'center'
    }
});

export default Recentpic;
