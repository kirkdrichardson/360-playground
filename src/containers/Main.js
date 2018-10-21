import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import {VrButton} from 'react-360';

import FadeInView from './animated/FadeInView';

export default class Main extends React.PureComponent {
  state = { cnt: 0 };

  inc = () => { this.setState({ cnt: this.state.cnt + 1 }) }
  dec = () => { this.setState({ cnt: this.state.cnt - 1 }) }

    render() {
      const { cnt } = this.state;
        return(
            <View>
              <FadeInView>
                <View style={styles.row}>
                  <VrButton style={styles.block} onClick={this.inc}><Text style={styles.blockText}>Add</Text></VrButton>
                  <View style={styles.block}>
                  <Text style={[styles.blockText, {fontSize: 60, color: cnt < 0 ? 'red' : 'white'}]}>{cnt}</Text>
                  </View>
                  <VrButton style={styles.block} onClick={this.dec}><Text style={styles.blockText}>Subtract</Text></VrButton>
                </View>
              </FadeInView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    row: {
      flexDirection: 'row'
    },
    block: {
      padding: 20,
      minWidth: 150,
      backgroundColor: '#000000',
      borderColor: '#639dda',
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center'
    },
    blockText: {
      fontSize: 30,
    }
  });
