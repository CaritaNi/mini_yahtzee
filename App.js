import { View } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import Gameboard from './components/Gameboard';
import Home from './components/Home';
import styles from './style/style';
import Rules from './components/Rules';
import Scoreboard from './components/Scoreboard';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Gameboard" component={Gameboard} initialParams={{ player: '' }} />
        <Stack.Screen name="Rules" component={Rules} />
        <Stack.Screen name="Scoreboard" component={Scoreboard} />
      </Stack.Navigator>
      <Footer />
    </NavigationContainer>
  );
}