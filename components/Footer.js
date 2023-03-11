import React from 'react';
import { Text, View } from 'react-native';
import styles from '../style/style';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.title}>
        Author: Carita Niskanen
      </Text>
    </View>
  )
}

export default Footer;