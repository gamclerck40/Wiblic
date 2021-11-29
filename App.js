/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from "react";
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { loadPartialConfig } from "@babel/core";

export default class App extends Component<Props> {
  constructor(props) {
    super();
    this.state = {count: 0, wifi:   ["여와기요 네리드이 파이 ", "comment2"]};
  }

  up() {
    let temp = this.state.count + 1;
    this.setState({count: temp});
  }
  down() {
    let temp2 = this.state.count - 1;
    this.setState({count: temp2});
  }

  render() {
    return (
      <View>
        <Text>{this.state.count}</Text>
        <Text style={{padding: 15, backgroundColor: "red"}} onPress={() => this.up()}>+</Text>
        <Text style={{padding: 15, backgroundColor: "blue"}} onPress={() => this.down()}>-</Text>

        <Text style={styles.button} onPress={() => this.down()}>-</Text>
        {
          this.state.wifi.map(text => {
            return (
              <TExt></TExt>
            )
          })
        }

        {/* 댓글 창 */}
        {
          this.state.wifi.map(text => {
            return (
              <Text style={{ backgroundColor: "#ccc", float: "left" }}>{text}</Text>
            )
          })
        }
      </View>
    )

  }
}

const styles = StyleSheet.create({
  button:{
    padding:10,
    backgroundColor: "black",
  },
  commentStyle:{
    padding:15,
  },
  box:{

  }

})
