import React from 'react';
import { View, ActivityIndicator } from 'react-native';

/**
 * 
 * @param { size } large | small  - by default is large  
 */
const Spinner = ({ size }) => (
      <View style={styles.spinnerStyles}>
        <ActivityIndicator size={size || 'large'} />
      </View>
);

const styles = {
    spinnerStyles: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1 
    }
};

export { Spinner };
