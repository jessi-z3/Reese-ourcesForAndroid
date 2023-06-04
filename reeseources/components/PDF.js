import {
  StyleSheet,
  Dimensions,
  View,
  Alert,
  Pressable,
  Text,
} from 'react-native';

import Share from 'react-native-share';

import Pdf from 'react-native-pdf';

export default function PDF({route, navigation: {goBack}}) {
  const {selectedPDF, selectedPage} = route.params;
  const source = selectedPage;
  console.log(source);
  const onShare = () => {
    try {
      const shareOptions = {
        url: 'file:///' + source,
      };
      console.log(shareOptions);
      Share.open(shareOptions)
        .then(result => {
          console.log(result);
        })
        .catch(error => {
          console.log(error);
          Alert.alert(error.message);
        });
    } catch (error) {
      console.log(error);
      Alert.alert(error.message);
    }
  };
  const pdf = {
    uri: 'bundle-assets://' + selectedPDF,
  };
  return (
    <>
      <Pdf source={pdf} style={styles.pdf} />
      <View style={styles.container}>
        <Pressable style={styles.buttons} onPress={() => goBack()}>
          <Text style={styles.text}>Back</Text>
        </Pressable>
        <Pressable style={styles.buttons} onPress={onShare}>
          <Text style={styles.text}>Share</Text>
        </Pressable>
      </View>
    </>
  );
}
export const styles = StyleSheet.create({
  pdf: {
    flex: 0.95,
    width: Dimensions.get('window').width,
    backgroundColor: '#96C5FC',
  },
  buttons: {
    height: 30,
    width: Dimensions.get('window').width / 4,
    backgroundColor: '#CAE2FE',
    borderRadius: 45,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  container: {
    flex: 0.05,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#96C5FC',
  },
  text: {
    color: '#7C97CE',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Gabriela-Regular',
  },
});
