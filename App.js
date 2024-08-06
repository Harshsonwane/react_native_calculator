import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, SafeAreaView } from 'react-native';

export default function App() {
  const [display, setDisplay] = useState('');
  const [result, setResult] = useState('');

  const MAX_DISPLAY_LENGTH = 15; // Maximum number of characters in the display

  const handlePress = (value) => {
    if (value === '=') {
      try {
        setResult(eval(display).toString());
      } catch (e) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setDisplay('');
      setResult('');
    } else {
      if (display.length < MAX_DISPLAY_LENGTH) {
        setDisplay(display + value);
      }
    }
  };

  const renderButton = (value) => (
    <TouchableOpacity style={styles.button} onPress={() => handlePress(value)}>
      <Text style={styles.buttonText}>{value}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.topBarText}>CALCULATOR</Text>
      </View>
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{display.length > MAX_DISPLAY_LENGTH ? display.slice(-MAX_DISPLAY_LENGTH) : display}</Text>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.row}>
          {renderButton('1')}
          {renderButton('2')}
          {renderButton('3')}
          {renderButton('+')}
        </View>
        <View style={styles.row}>
          {renderButton('4')}
          {renderButton('5')}
          {renderButton('6')}
          {renderButton('-')}
        </View>
        <View style={styles.row}>
          {renderButton('7')}
          {renderButton('8')}
          {renderButton('9')}
          {renderButton('*')}
        </View>
        <View style={styles.row}>
          {renderButton('C')}
          {renderButton('0')}
          {renderButton('=')}
          {renderButton('/')}
        </View>
      </View>
    </SafeAreaView>
  );
}

const { width, height } = Dimensions.get('window');
const buttonSize = (width - 40) / 4; // Adjusted size for full screen coverage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000', // Black background
  },
  topBar: {
    height: 60,
    backgroundColor: '#ffffff', // White background for the top bar
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
  },
  topBarText: {
    fontSize: 30,
    top:15,
    color: 'grey', // Black text color
    fontWeight: 'bold',
    textAlign: 'center', // Center-align the text
    paddingVertical: 10, // Vertical padding for better spacing
    letterSpacing: 20, // Slightly increase letter spacing for readability
    textShadowColor: '#dcdcdc', // Subtle shadow for better contrast
    textShadowOffset: { width: 10, height: 3 }, // Shadow offset
    textShadowRadius: 10, // Shadow blur radius
  },

  displayContainer: {
    padding: 10,
    backgroundColor: '#333333', // Dark gray background for the display
    borderTopLeftRadius: 1000,
    borderBottomLeftRadius:1000,
    borderTopRightRadius: 0,
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: height * 0.47, // 30% of screen height
  },
  displayText: {
    fontSize: 70,
    color: '#ffffff', // White text color for display
    textAlign: 'right',
  },
  resultText: {
    fontSize: 32,
    color: '#888888', // Light gray color for result
    textAlign: 'right',
  },
  buttonsContainer: {
    padding: 10,
    backgroundColor: '#ffffff', // White background for buttons area
    height: height * 0.7, // 70% of screen height
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    width: buttonSize,
    height: buttonSize,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#666666', // Medium gray color for buttons
    borderRadius: buttonSize / 2,
  },
  buttonText: {
    fontSize: 50,
    color: '#ffffff', // White text color for button text
  },
});
