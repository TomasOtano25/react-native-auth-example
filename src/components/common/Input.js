import React from 'react';
import { TextInput, View, Text } from 'react-native';
/**
 * 
 * @param { label } string 
 * @param { value } string 
 * @param { onChangeText } func
 * @param { autoCorrect } true | false  
 * @param { placeholder } string 
 * @param { secureTextEntry } true | false 
 */
const Input = ({ label, value, onChangeText, autoCorrect, placeholder, secureTextEntry }) => (
    <View style={styles.containerStyles}>
      <Text style={styles.labelStyles}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.inputStyles} 
        placeholder={placeholder}
        autoCorrect={autoCorrect}
        secureTextEntry={secureTextEntry}
      />
    </View>
);

const styles = {
  labelStyles: {
    color: '#000',
    paddingLeft: 10,
    fontSize: 18,
    flex: 1
  },
  containerStyles: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputStyles: {
    width: null,
    flex: 2,
    color: '#000',
    paddingHorizontal: 5,
    fontSize: 18
  }
};

export { Input };
