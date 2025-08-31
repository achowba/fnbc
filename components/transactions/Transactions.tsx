import { TransactionType } from '@/types';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import SectionTitle from '../home/SectionTitle';
import TransactionItem from './TransactionItem';

type TransactionsProps = {
  showSectionTitle?: boolean;
  transactions: TransactionType[];
};

const Transactions = ({ transactions, showSectionTitle }: TransactionsProps) => {
  const numberOfTransactions = transactions.length;

  if (numberOfTransactions === 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      {showSectionTitle && <SectionTitle title="Transactions" linkTo="/transactions" />}
      <View style={styles.transactionsContainer}>
        {transactions.map((transaction, index) => (
          <TransactionItem
            key={transaction.id}
            transaction={transaction}
            isLastTransaction={numberOfTransactions - 1 === index}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  transactionsContainer: {
    marginTop: 20,
  },
});

export default Transactions;
