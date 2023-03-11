import React, { useState } from 'react';
import { Text, View, TextInput, Pressable, Keyboard } from 'react-native';
import Rules from './Rules';
import Scoreboard from './Scoreboard';
import style from '../style/style';

const Home = ( {navigation} ) => {

    const [playerName, setPlayerName] = useState("");
    const [hasPlayerName, setHasPlayerName] = useState(false);

    const handlePlayerName = (value) => {
        if (value.trim().length > 0 ) {
            setHasPlayerName(true);
            Keyboard.dismiss();
        }
    }

    return(
        <View>
            <Text style={style.title}>Homepage</Text>
            {  !hasPlayerName
                ?
                <>
                <Text>For scoreboard enter your name</Text>
                <TextInput style={style.TextInput} onChangeText={setPlayerName} autofocus={true}></TextInput>
                <Pressable style={style.button} onPress={() => handlePlayerName(playerName)}>
                    <Text style={style.buttonText}>OK</Text>
                </Pressable>
                </>
                :
                <>
                <Pressable style={style.button} onPress={() => navigation.navigate('Rules', {Rules})}>
                    <Text style={style.buttonText}>Rules for the game</Text>
                </Pressable>
                <Pressable style={style.button} onPress={() => navigation.navigate('Scoreboard', {Scoreboard})}>
                    <Text style={style.buttonText}>Scoreboard</Text>
                </Pressable>
                <Text style={style.title}>BEST OF LUCK, {playerName} !</Text>
                <Pressable style={style.button} onPress={() => navigation.navigate('Gameboard',{player: playerName})}>
                    <Text style={style.buttonText}>PLAY</Text>
                </Pressable>
            </>
            }
        </View>
    )
}
export default Home;