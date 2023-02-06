import React from 'react'

import { Image, View, Text, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { Asset } from 'expo-asset';


const TopPlayerList = ({ topPlayers }) => {

    const topPlayerList = [
        { id: 1, rank: 1, name: 'Player 1', credits: 1000, medalImage: require('../../assets/appIcons/HomeIcons/places/1st_place.png') },
        { id: 2, rank: 2, name: 'Player 2', credits: 900, medalImage: require('../../assets/appIcons/HomeIcons/places/2nd_place.png') },
        { id: 3, rank: 3, name: 'Player 3', credits: 800, medalImage: require('../../assets/appIcons/HomeIcons/places/3rd_place.png') },
        { id: 4, rank: 4, name: 'Player 4', credits: 700, medalImage: require('../../assets/appIcons/HomeIcons/places/medal.png') },
        { id: 5, rank: 5, name: 'Player 5', credits: 600, medalImage: require('../../assets/appIcons/HomeIcons/places/medal.png') },
        { id: 6, rank: 6, name: 'Player 6', credits: 500, medalImage: require('../../assets/appIcons/HomeIcons/places/medal.png') },
        { id: 7, rank: 7, name: 'Player 7', credits: 400, medalImage: require('../../assets/appIcons/HomeIcons/places/medal.png') },
        { id: 8, rank: 8, name: 'Player 8', credits: 300, medalImage: require('../../assets/appIcons/HomeIcons/places/medal.png') },
        { id: 9, rank: 9, name: 'Player 9', credits: 200, medalImage: require('../../assets/appIcons/HomeIcons/places/medal.png') },
        { id: 10, rank: 10, name: 'Player 10', credits: 100, medalImage: require('../../assets/appIcons/HomeIcons/places/medal.png') },
    ]

    const Item = ({ item }) => {
        const image = Asset.fromModule(item.medalImage).uri
        return (
            <View style={styles.topPlayerItem}>
                <Image source={{ uri: image }} style={styles.topPlayerMedalIcon} ></Image>
                <Text style={styles.topPlayerText}>{item.name}</Text>
                <Text style={styles.topPlayerText}>Credits: {item.credits}</Text>
            </View>
        )
    }

    return (
        <View style={styles.topPlayerContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingBottom: 10 }}>
                <Image source={require('../../assets/appIcons/HomeIcons/podium.png')} style={styles.topPlayerPodiumIcon} ></Image>
                <Text style={styles.topPlayerHeaderText}>Top Players</Text>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={topPlayers.netWorth}
                renderItem={(player) => {
                    return (
                        <View style={styles.topPlayerItem}>
                            {/* <Image source={{ uri: Asset.fromModule(player.item.medalImage).uri }} style={styles.topPlayerMedalIcon} ></Image> */}
                            <Image source={require('../../assets/appIcons/HomeIcons/places/medal.png')} style={styles.topPlayerMedalIcon} ></Image>
                            <Text style={styles.topPlayerText}>{player.item.username}</Text>
                            <Text style={styles.topPlayerText}>NetWorth: {player.item.netWorth}</Text>
                        </View>
                    )
                }
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    topPlayerContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '92%',
        height: 350,
        backgroundColor: 'lightgrey',
        marginTop: 20,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5
    },
    topPlayerPodiumIcon: {
        marginTop: 10,
        width: 50,
        height: 50,
    },
    topPlayerMedalIcon: {
        width: 30,
        height: 30,
    },
    topPlayerItem: {
        flexDirection: 'row',
        width: 320,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        backgroundColor: 'lightgrey',
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 20,
        borderRadius: 10,
        padding: 10,
    },
    topPlayerHeaderText: {
        fontSize: 18,
        marginLeft: 12,
        fontWeight: 'bold',
        marginTop: 10
    },
    topPlayerText: {
        fontSize: 14,
        marginLeft: 10,
    },
})

export default TopPlayerList
