import Cards from '@/components/home/Cards';
import QuickAccess from '@/components/home/QuickAccess';
import Transactions from '@/components/transactions/Transactions';
import TextInput from '@/components/ui/SearchInput';
import { QUICK_ACTIONS } from '@/data/actions.data';
import { CARDS } from '@/data/card.data';
import { TRANSACTIONS } from '@/data/transactions.data';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

const Home = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Cards cards={CARDS} />
      <View style={styles.contentContainer}>
        <TextInput />
        <QuickAccess actions={QUICK_ACTIONS} />
        <Transactions transactions={TRANSACTIONS} showSectionTitle />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingTop: 30,
    width: '100%',
  },
  contentContainer: {
    padding: 25,
    width: '100%',
  },
});

export default Home;
