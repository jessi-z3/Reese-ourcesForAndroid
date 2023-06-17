import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  Alert,
  Image,
  Pressable,
} from 'react-native';

import Share from 'react-native-share';

import RNFetchBlob from 'rn-fetch-blob';

import Pdf from 'react-native-pdf';

export default function ColoringPage({route, navigation: {goBack}}) {
  const {selectedPage, selectedPDF} = route.params;
  const source = selectedPage;
  console.log(source);
  const url = 'https://yellowbird.dev/PDFs/' + source;

  const share = async () => {
    RNFetchBlob.config({
      fileCache: true,
      // by adding this option, the temp files will have a file extension
      appendExt: 'pdf',
    })
      .fetch('GET', url, {
        //some headers ..
      })
      .then(res => {
        // the temp file path with file extension `png`
        console.log('The file saved to ', res.path());
        // Beware that when using a file path as Image source on Android,
        // you must prepend "file://"" before the file path
        imageView = (
          <Image
            source={{
              uri:
                Platform.OS === 'android'
                  ? 'file://' + res.path()
                  : '' + res.path(),
            }}
          />
        );
        try {
          const shareOptions = {
            url: 'file://' + res.path(),
            useInternalStorage: true,
          };
          console.log(shareOptions);
          Share.open(shareOptions)
            .then(result => {
              console.log(result);
            })
            .catch(error => {
              console.log(error);
            });
        } catch (error) {
          console.log(error);
          Alert.alert(error.message);
        }
      });
  };
  // const onShare = () => {

  //   try {
  //     const shareOptions = {
  //       url: 'file:///' + source,
  //     };
  //     Share.open(shareOptions)
  //       .then(result => {
  //         console.log(result);
  //       })
  //       .catch(error => {
  //         console.log(error);
  //         Alert.alert(error.message);
  //       });
  //   } catch (error) {
  //     console.log(error);
  //     Alert.alert(error.message);
  //   }
  // };
  return (
    <>
      <Pdf
        source={{uri: 'bundle-assets://' + selectedPDF}}
        style={styles.pdf}
      />
      <View style={styles.container}>
        <Pressable style={styles.buttons} onPress={() => goBack()}>
          <Text style={styles.text}>Back</Text>
        </Pressable>
        <Pressable style={styles.buttons} onPress={share}>
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
    padding: 5,
    backgroundColor: '#96C5FC',
  },
  text: {
    color: '#7C97CE',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Gabriela-Regular',
  },
});
