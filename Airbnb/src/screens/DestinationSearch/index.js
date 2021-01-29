import React from 'react';
import {View} from 'react-native';
import styles from './styles.js';
import {useNavigation} from '@react-navigation/native';
import SuggestionRow from './SuggestionRow';

import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const DestinationSearchScreen = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Where are you going?"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true

          navigation.navigate('Guests', {
            viewport: details.geometry.viewport,
          });
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
      />
    </View>
  );
};

export default DestinationSearchScreen;
