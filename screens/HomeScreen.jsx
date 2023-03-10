import { useEffect, useState } from 'react'
import { Image, View, Text, StyleSheet } from 'react-native'

import TopPlayerList from './components/TopPlayerList';
import PlanetsNearbyList from './components/PlanetsNearbyList';
import LoanToPay from './components/LoanToPay';

import { getServerStatus, getUserProfileInfo, getPlanetsNearby, getTopPlayers, getLoansToPay } from '../services/spaceTraders'

const HomeScreen = () => {
    const [profile, setProfile] = useState({ user: { username: '' } })
    const [serverStatus, setServerStatus] = useState(false)
    const [planetsNearby, setPlanetsNearby] = useState({ locations: [{ name: '' }] })
    const [topPlayers, setTopPlayers] = useState({ netWorth: [{ rank: 0, username: '', credits: 0 }] })
    const [loanToPay, setLoanToPay] = useState({ loans: [{ status: '', repaymentAmount: 0 }] })

    const getPlanetNames = () => {
        let planetNames = []
        planetsNearby.locations.forEach(planet => {
            planetNames.push(planet.name)
        })
        return planetNames
    }

    const getPlanetImages = () => {
        planetsNearby.locations.forEach(planet => {
            switch (planet.name) {
                case 'Prime':
                    return <Image source={require('../assets/appIcons/HomeIcons/loanToPayIcons/money-bag.png')} style={styles.loanToPayIcon} ></Image>
                case 'Carth':
                    return <Image source={require('../assets/appIcons/HomeIcons/loanToPayIcons/money-bag.png')} style={styles.loanToPayIcon} ></Image>
                case 'Koria':
                    return <Image source={require('../assets/appIcons/HomeIcons/loanToPayIcons/money-bag.png')} style={styles.loanToPayIcon} ></Image>
                case 'Ucarro':
                    return <Image source={require('../assets/appIcons/HomeIcons/loanToPayIcons/money-bag.png')} style={styles.loanToPayIcon} ></Image>
            }
        })
    }

    // TODO: ADJUST THE LENGHT OF THE NAME

    // ##########################################################################################
    // ##########################################################################################
    // ##########################################################################################

    useEffect(() => {
        const fetchUserAccount = async () => {
            setProfile(await getUserProfileInfo())
        }
        const fetchServerStatus = async () => {
            setServerStatus(await getServerStatus())
        }
        const fetchPlanetsNearby = async () => {
            setPlanetsNearby(await getPlanetsNearby())
        }
        const fetchTopPlayers = async () => {
            setTopPlayers(await getTopPlayers())
        }
        const fetchLoanToPay = async () => {
            setLoanToPay(await getLoansToPay())
        }
        fetchUserAccount()
        fetchServerStatus()
        fetchPlanetsNearby()
        fetchTopPlayers()
        fetchLoanToPay()
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Server: {serverStatus ? 'online ????' : 'offline ????'} </Text>
                <Text style={styles.headerText}>Username: {profile.user.username}</Text>
            </View>
            <TopPlayerList
                topPlayers={topPlayers}
                setTopPlayers={setTopPlayers}
            />
            <View style={styles.planetsLoansContainer}>
                <PlanetsNearbyList
                    planetsNearby={planetsNearby}
                    setPlanetsNearby={setPlanetsNearby}
                />
                <LoanToPay
                    loanToPay={loanToPay}
                    setLoanToPay={setLoanToPay}
                    profile={profile}
                    setProfile={setProfile}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
    },
    headerText: {
        marginTop: 25,
        fontSize: 17,
    },
    planetsLoansContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '98%',
    },
})

export default HomeScreen