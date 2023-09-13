import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, Platform, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import Categories from '../components/categories';
import SortCategories from '../components/sortCategories';
import Destinations from '../components/destinations';
const ios = Platform.OS=='ios';
const topMargin = ios? 'mt-3': 'mt-10';

export default function TabHomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.sidebar}>
        <Text style={styles.sidebarText}>Sidebar Content</Text>
      </View>
      <View style={styles.mainContent}>
        <Text>Main Content Here</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',  // This makes sure the child components (sidebar and main content) are laid out horizontally
  },
  sidebar: {
    width: 150,            // Fixed width for the sidebar
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  sidebarText: {
    color: '#fff',
    fontSize: 16,
  },
  mainContent: {
    flex: 1,               // This makes sure the main content fills the rest of the screen space
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
});
