import React from 'react';
import { Text, View } from 'react-native';
import styles from '../style/style';
import Game from '../constants/Game';
import {NBR_OF_DICES, NBR_OF_THROWS, MAX_SPOT, MIN_SPOT} from '../constants/Game';

const Rules = () => {
  return (
    <View style={styles.rules}>
      <Text style={styles.title}>
      Rules of the game       
      </Text>
        <Text style={styles.rulesText}>
        Upper section of the classic Yahtzee 
        dice game. You have {NBR_OF_DICES} dices and 
        for the every dice you have {NBR_OF_THROWS} throws. After each throw you can keep dices in 
        order to get same dice spot counts as many as 
        possible. In the end of the turn you must select 
        your points from {MIN_SPOT} to {MAX_SPOT}. 
        Game ends when all points have been selected. 
        The order for selecting those is free.
        </Text>
        <Text style={styles.rulesText}>
        POINTS: After each turn game calculates the sum 
        for the dices you selected. Only the dices having 
        the same spot count are calculated. Inside the 
        game you can not select same points from 
        {MIN_SPOT} to {MAX_SPOT} again.
        </Text>
    </View>
  )
}

export default Rules;