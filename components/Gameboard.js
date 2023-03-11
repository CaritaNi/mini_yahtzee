import React, { useState, useEffect } from 'react';
import { Text, View, Pressable } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import styles from '../style/style';
import { NBR_OF_DICES, NBR_OF_THROWS, MAX_SPOT, SCOREBOARD_KEY } from '../constants/Game';
import { Col, Grid } from 'react-native-easy-grid';
import AsyncStorage from '@react-native-async-storage/async-storage';

let board = [];

const Gameboard = ({ route }) => {
  

  const [playerName, setPlayerName] = useState('');
  const [nbrOfThrowsleft, setNbrOfThrowsleft] = useState(NBR_OF_THROWS);
  const [status, setStatus] = useState('');
  const [selectDices, setSelectedDices] = useState(new Array(NBR_OF_DICES).fill(false));
  const [selectedDicePoints, setSelectedDicePoints] = useState(new Array(MAX_SPOT).fill(false));
  const [diceSpots, setDiceSpots] = useState(new Array(NBR_OF_DICES).fill(0));
  const [diceSpotTotals, setDiceSpotTotals]  = useState(new Array(MAX_SPOT).fill(0));
  const [scores, setScores] = useState([]);
  

  const pointsRow = [];
  for (let spot = 0; spot < MAX_SPOT; spot++) {
    pointsRow.push(
      <Col key={"points" + spot}>
          <Text key={"points" + spot} style={styles.points}>{getSpotTotal(spot)}</Text>
      </Col>
    );
  }


  const buttonsRow = [];
  for (let diceButton = 0; diceButton < MAX_SPOT; diceButton++) {
    buttonsRow.push(
      <Col key={"buttonsRow" + diceButton}>
        <Pressable
          onPress={() => selectDicePoints(diceButton)}
          key={"buttonsRow" + diceButton}>
          <MaterialCommunityIcons
            name={'numeric-' + (diceButton + 1) + "-circle"}
            key={'buttonsRow' + diceButton}
            size={50}
            color={getDiceColor(diceButton)}
          ></MaterialCommunityIcons>
        </Pressable>
      </Col>
    )
  }

const row = [];
  for (let i = 0; i < NBR_OF_DICES; i++) {
    row.push(
      <Pressable
        key={'row' + i}
        onPress={() => selectDice(i)}>
        <MaterialCommunityIcons 
          name={board[i]}
          key={"row" + i}
          size={50}
          color={getDiceColor(i)}
        />
      </Pressable>
    );
  } 

  useEffect(() => {
    if (playerName === '' && route.params?.player) {
      setPlayerName(route.params?.player);
    }
  }, []);

  var day = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var hour = new Date().getHours();
    var minute = new Date().getMinutes();

    var date = day + '.' + month + '.' + year;
    var time = hour + ':' + minute;

    let finalPoints = 0;
    for (let num of diceSpotTotals){
      finalPoints = finalPoints + num
    };

  const savePlayerPoints = async () => {
    const playerPoints = {
      name: playerName,
      date: date,
      time: time,
      points: finalPoints
    }
    try {
      const newScore = [...scores, playerPoints];
      const jsonValue = JSON.stringify(newScore);
      await AsyncStorage.setItem(SCOREBOARD_KEY, jsonValue);
    }
    catch (error) {
      console.log('Save error: ' + error.message);
    }
  }

  useEffect(() => {
    if (nbrOfThrowsleft === 0) {
      setStatus('Select your points');
    }
    else if (nbrOfThrowsleft < 0) {
      setNbrOfThrowsleft(NBR_OF_THROWS - 1);
    }
    else if (selectedDicePoints.every(x => x)) {
      savePlayerPoints();
    }
  }, [nbrOfThrowsleft])
  
function selectDice(i) {
  let dices = [...selectDices];
  dices[i] = selectDices[i] ? false : true;
  setSelectedDices(dices);
}
  
function getDiceColor(i){
  if(board.every((val, i, arr) => val === arr[0])) {
    return 'red'
  } else {
    return selectDices[i] ? 'black' : 'green';
  }
}


function throwDices() {
  let spots = [...diceSpots];
  for (let i = 0; i < NBR_OF_DICES; i++) {
    if (!selectDices[i]) {
      let randomNumber = Math.floor(Math.random() * 6 + 1);
      board[i] = 'dice-' + randomNumber;
      spots[i] = randomNumber;
    }
  }
  setNbrOfThrowsleft(nbrOfThrowsleft-1);
  setDiceSpots(spots);
  setStatus('Select and throw dice again')
}

function getSpotTotal(i){
  return diceSpotTotals[i];
}

function selectDicePoints(i) {
    let selected = [...selectDices];
    let selectedPoint = [...selectedDicePoints];
    let points = [...diceSpotTotals];
    if (!selectedPoint[i]) {
      selectedPoint[i] = true;
      let nbrOfDices = diceSpots.reduce((total, x) => (x === (i + 1) ? total + 1: total), 0);
      points[i] = nbrOfDices * (i + 1);
      setDiceSpotTotals(points);
    } 
    selected.fill(false);
      selectDice(selected);
      setSelectedDicePoints(selectedPoint);
      setNbrOfThrowsleft(NBR_OF_THROWS)
    return points[i];
}


  return(
    <View style={styles.gameboard}>
      <View style={styles.flex}>{row}</View>
      <Text style={styles.gameinfo}>Throws left: {nbrOfThrowsleft}</Text>
      <Text style={styles.gameinfo}>{status}</Text>
      <Pressable style={styles.button} onPress={() => throwDices()}>
        <Text style={styles.buttonText}>
          Throw dices</Text>
      </Pressable>
      <View style={styles.dicepoints}><Grid>{pointsRow}</Grid></View>
      <View style={styles.dicepoints}><Grid>{buttonsRow}</Grid></View>
        <Text>Player: {playerName}</Text>
    </View>
  )
}

export default Gameboard;