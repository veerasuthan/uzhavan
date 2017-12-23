/**
 * @Author: GVEDAS
 * @Date:   2017-12-23T16:39:17+05:30
 * @Email:  gvedas@gvedas.com
 * @Last modified by:   GVEDAS
 * @Last modified time: 2017-12-23T16:40:31+05:30
 */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#009688',
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#80CBC4',
    width: 100,
    padding: 10,
    margin: 5,
  },
  buttonText: {
    color: '#FFFFFF',
  },
});

export default styles;
