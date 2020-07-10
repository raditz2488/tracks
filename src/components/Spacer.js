import React from 'react';
import { View, StyleSheet } from 'react-native';

const Spacer = () => {
    return <View style={styles.margin}/>
}

const styles = StyleSheet.create({
    container: {
        margin: 10
    }
});

export default Spacer;