import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../Header/Header';
export default function Contact({ navigation }) {
  return (
    <View style={styles.container}>
      <Header title="Contact" navigation={navigation} />
      <View style={styles.content}>
        <Text style={styles.text}>Contact Page</Text>
        <Button
          icon={
            <Icon
              name="md-arrow-back"
              size={25}
              color="white"
            />
          }
          title="Go back"
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#008080'
  },
  text: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: '800',
    marginBottom: 50
  }
});
