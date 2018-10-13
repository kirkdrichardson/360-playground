import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import FadeInView from './animated/FadeInView';

export default class Main extends React.PureComponent {
    render() {
        return(
            <View>
                <FadeInView>
                    <View style={styles.greetingBox}>
                        <Text style={styles.greetings}>Welcome...</Text>
                    </View>
                </FadeInView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    greetingBox: {
      padding: 20,
      backgroundColor: '#000000',
      borderColor: '#639dda',
      borderWidth: 2,
    },
    greeting: {
      fontSize: 30,
    },
  });