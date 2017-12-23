/**
 * @Author: GVEDAS
 * @Date:   2017-12-23T16:33:04+05:30
 * @Email:  gvedas@gvedas.com
 * @Last modified by:   GVEDAS
 * @Last modified time: 2017-12-23T17:19:36+05:30
 */
import React from 'react';
import { View, Text } from 'react-native';
import config from '../../config';
import styles from '../../native/styles';

export default () => (
  <View style={styles.container}>
    <Text style={styles.title}>{config.title}</Text>
  </View>
);
