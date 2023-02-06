import React from 'react'

import { Image, View, Text, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

const PlanetsNearbyList = ({ planetsNearby }) => {
    return (
        <View style={styles.viewPlanetsNearbyContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingBottom: 10 }}>
                <Image source={require('../../assets/appIcons/HomeIcons/planeta.png')} style={styles.planetsNearbyIcon} ></Image>
                <Text style={styles.viewPlanetsNearbyText}>Planets Nearby</Text>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={planetsNearby.locations}
                renderItem={(planet) => {
                    return (
                        <View style={styles.viewPlanetsNearbyItem}>
                            <Image source={require('../../assets/appIcons/HomeIcons/planetsNearbyIcons/prime.png')} style={styles.individualPlanetNearbyIcon} ></Image>
                            <Text style={styles.planetsNearbyItemText}>{planet.item.name}</Text>
                        </View>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    viewPlanetsNearbyContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '46%',
        height: 240,
        backgroundColor: 'lightgrey',
        marginTop: 25,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10
    },
    planetsNearbyIcon: {
        marginTop: 10,
        width: 50,
        height: 50,
    },
    viewPlanetsNearbyItem: {
        flexDirection: 'row',
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        backgroundColor: 'lightgrey',
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 20,
        borderRadius: 10,
        padding: 10,        
    },
    individualPlanetNearbyIcon: {
        width: 30,
        height: 30,
        marginRight: 8
    },
    viewPlanetsNearbyText: {
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 2,
    },
    planetsNearbyItemText: {
        fontSize: 14,
    }
})

export default PlanetsNearbyList