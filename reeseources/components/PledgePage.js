import {StyleSheet, Dimensions, Button} from 'react-native';

import Pdf from 'react-native-pdf';

export default function PledgePage({navigation: {goBack}}) {
  const source = require('../assets/PDFs/Pledge.pdf');
  return (
    <>
      <Pdf source={source} style={styles.pdf} />
      <Button title="Back" style={styles.backButton} onPress={() => goBack()} />
    </>
  );
}
export const styles = StyleSheet.create({
  pdf: {
    flex: 0.99,
    width: Dimensions.get('window').width,
  },
  backButton: {
    color: '#96C5FC',
  },
});
