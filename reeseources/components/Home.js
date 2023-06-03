import {ScrollView, View, StyleSheet, Image, Pressable} from 'react-native';

import BraveButton from './BraveButton';
import BraveSpotlight from './BraveSpotlight';
import Logo from './Logo';
import MissionButton from './MissionButton';
import PledgeButton from './PledgeButton';
import ProgramButton from './ProgramButton';
export default function Home({navigation}) {
  return (
    <ScrollView>
      <View style={styles.libraryButtonContainer}>
        <Pressable onPress={() => navigation.navigate('BookList')}>
          <Image
            source={require('../assets/icons8-bookshelf-100.png')}
            style={{width: 50, height: 50, borderRadius: 15}}
          />
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Activities')}>
          <Image
            source={require('../assets/icons8-crayon-100.png')}
            style={{width: 50, height: 50, borderRadius: 15}}
          />
        </Pressable>
        <Pressable onPress={() => navigation.navigate('HelpScreen')}>
          <Image
            source={require('../assets/icons8-danger-100.png')}
            style={{width: 50, height: 50, borderRadius: 15}}
          />
        </Pressable>
      </View>
      <View style={styles.container}>
        <Logo />
        <View style={styles.buttonContainer1}>
          <Pressable
            onPress={() =>
              navigation.navigate('PDF', {
                selectedPDF: 'Mission.pdf',
                selectedPage: 'Mission.pdf',
              })
            }>
            <MissionButton />
          </Pressable>
          <Pressable
            onPress={() =>
              navigation.navigate('PDF', {
                selectedPDF: 'Program.pdf',
                selectedPage: 'Program.pdf',
              })
            }>
            <ProgramButton />
          </Pressable>
        </View>
        <View style={styles.buttonContainer2}>
          <Pressable
            onPress={() =>
              navigation.navigate('PDF', {
                selectedPDF: 'BRAVE.pdf',
                selectedPage: 'BRAVE.pdf',
              })
            }>
            <BraveButton />
          </Pressable>
          <Pressable
            onPress={() =>
              navigation.navigate('PDF', {
                selectedPDF: 'Pledge.pdf',
                selectedPage: 'Pledge.pdf',
              })
            }>
            <PledgeButton />
          </Pressable>
        </View>
        <Image
          source={require('../assets/brave-logo2x.png')}
          style={{width: 350, height: 150, padding: 5}}
        />
        <BraveSpotlight />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  libraryButtonContainer: {
    backgroundColor: '#96C5FC',
    paddingTop: 55,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 15,
    backgroundColor: '#96C5FC',
    padding: 15,
  },
  buttonContainer1: {
    flexDirection: 'row',
    width: 370,
    height: 150,
    justifyContent: 'space-evenly',
    padding: 5,
  },
  buttonContainer2: {
    flexDirection: 'row',
    width: 370,
    height: 150,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 5,
  },
});
