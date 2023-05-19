import {StyleSheet, Dimensions, View, Alert, Pressable, Text, Platform} from 'react-native';

import Share from 'react-native-share'; 

import Pdf from 'react-native-pdf';

import RNFetchBlob from 'rn-fetch-blob';

import {source} from '../constants/ProgramPDF';

export default function ProgramPage({navigation: {goBack}}) {
  const onShare = async () => {
    try {
      if (Platform.OS !== 'ios'){
        const shareOptions = {
          url: 'data:application/pdf;base64,' + {source},
          filename: "Program",
        };
        await Share.open(shareOptions);
      } else {
        const dirs = RNFetchBlob.fs.dirs;
        const path = dirs.DocumentDir + '/' + 'Program.pdf';
        console.log({path})
        RNFetchBlob.fs
        .writeFile(path, {source}, 'base64')
       Share.open({
         subject: 'PDF share',
         url: path,
       })
         .then((result) => {
           console.log(result);
         })
         .catch(error => {
           console.log(error);
           Alert.alert(error.message);
         });
    }
    } catch (error) {
      console.log(error);
      Alert.alert(error.message);
    }
  };
  const pdf = {
    uri: source,
  };
  return (
    <>
      <View style={styles.container}>
        <Pressable style={styles.buttons} onPress={() => goBack()}>
          <Text style={styles.text}>Back</Text>
        </Pressable>
        <Pressable style={styles.buttons} onPress={onShare}>
          <Text style={styles.text}>Share</Text>
        </Pressable>
      </View>
      <Pdf source={pdf} style={styles.pdf} />
    </>
  );
}
export const styles = StyleSheet.create({
  pdf: {
    flex: 0.95,
    width: Dimensions.get('window').width,
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
    flex: 0.03,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  text: {
    color: '#7C97CE',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Gabriela-Regular',
  },
});

