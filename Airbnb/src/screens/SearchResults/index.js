import React from 'react';
import {Text, View, FlatList} from 'react-native';
import Post from '../../components/Post';

import feed from '../../../assets/data/feed';

const SearchResultsScreen = (props) => {
  // const {posts} = props;

  return (
    <View>
      {/* <FlatList data={posts} renderItem={({item}) => <Post post={item} />} /> */}
      <FlatList data={feed} renderItem={({item}) => <Post post={item} />} />
    </View>
  );
};

export default SearchResultsScreen;
