import React, {useState} from 'react';
import {FlatList, TextInput, View, Text, Pressable} from 'react-native';
import styles from './styles.js';
import {useNavigation} from '@react-navigation/native';
// import SuggestionRow from './SuggestionRow';

// import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

import SearchResults from '../../../assets/data/search';
import Entypo from 'react-native-vector-icons/Entypo';

const DestinationSearchScreen = (props) => {
  const navigation = useNavigation();

  const [inputText, setInputText] = useState('');
  return (
    <View style={styles.container}>
      {/* <GooglePlacesAutocomplete
        placeholder="Where are you going?"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true

          navigation.navigate('Guests', {viewport: details.geometry.viewport});
        }}
        fetchDetails
        styles={{
          textInput: styles.textInput,
        }}
        query={{
          key: 'AIzaSyDtg_z_tRSTfgPWRBRqvAqOttX95l_y62s',
          language: 'en',
          types: '(cities)',
        }}
        suppressDefaultStyles
        renderRow={(item) => <SuggestionRow item={item} />}
      /> */}
      <TextInput
        styles={styles.textInput}
        placeholder="Where are you going?"
        value={inputText}
        onChangeText={setInputText}
      />

      <FlatList
        data={SearchResults}
        renderItem={({item}) => (
          <Pressable
            onPress={() => navigation.navigate('Guests')}
            style={styles.row}>
            <View style={styles.iconContainer}>
              <Entypo name={'location-pin'} size={30} />
            </View>
            <Text>{item.description}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default DestinationSearchScreen;
