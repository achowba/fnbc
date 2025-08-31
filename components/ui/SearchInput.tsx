import { ICONS } from '@/constants/assets.constants';
import SvgUri from 'expo-svg-uri';
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const SearchInput = () => {
  return (
    <View style={styles.searchContainer}>
      <SvgUri source={ICONS.search} height={30} width={30} style={styles.searchIcon} />
      <TextInput
        style={styles.searchInput}
        placeholder="Search here..."
        placeholderTextColor="#00000050"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    alignItems: 'center',
    backgroundColor: '#FDFDFD',
    borderColor: '#00000050',
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    padding: 15,
    paddingHorizontal: 20,
    width: '100%',
  },
  searchIcon: {
    marginRight: 15,
  },
  searchInput: {
    color: '#000000',
    fontSize: 18,
  },
});

export default SearchInput;
