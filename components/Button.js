import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
      <Text style={styles.textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    alignSelf: 'stretch',
    backgroundColor: '#002469',
    borderTopWidth: 2,
    borderTopColor: '#eeec24',
    position: 'absolute',
    bottom: 0,
    width: '100%'
  },
  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    padding: 10,
  }
};

export { Button };
