import { COLORS } from '@/constants/colors.constants';
import { FONTS } from '@/constants/fonts.constants';
import { TransactionType } from '@/types';
import { formatDateToTime } from '@/utils/date.utils';
import { formatNumberWithCommas } from '@/utils/number.utils';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CreditIcon from './CreditIcon';
import DebitIcon from './DebitIcon';

type TransactionItemProps = {
  transaction: TransactionType;
  isLastTransaction?: boolean;
};

const TransactionItem = ({ transaction, isLastTransaction }: TransactionItemProps) => {
  const isDebit = transaction.amount < 0;

  return (
    <View style={[styles.container, isLastTransaction && styles.lastContainer]}>
      <View style={styles.innerContainer}>
        {isDebit ? <DebitIcon /> : <CreditIcon />}
        <View>
          <Text style={styles.descriptionText}>{transaction.description}</Text>
          <Text style={styles.dateText}>{formatDateToTime(transaction.date)}</Text>
        </View>
      </View>
      <Text style={[styles.amountText, isDebit ? styles.debitText : styles.creditText]}>
        {isDebit ? '' : '+'}
        {formatNumberWithCommas(transaction.amount)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: '#F4F4F4',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingBottom: 15,
  },
  lastContainer: {
    borderBottomWidth: 0,
    marginBottom: 0,
    paddingBottom: 0,
  },
  innerContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    gap: 15,
  },
  descriptionText: {
    color: '#000000',
    fontFamily: FONTS.inter.medium,
    fontSize: 18,
    fontWeight: 'bold',
  },
  dateText: {
    color: '#00000070',
    fontFamily: FONTS.inter.regular,
    fontSize: 14,
    fontWeight: '500',
    marginTop: 8,
  },
  amountText: {
    fontFamily: FONTS.inter.semibold,
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    marginTop: 8,
  },
  debitText: {
    color: COLORS.light.error,
  },
  creditText: {
    color: '#1FA804',
  },
});

export default TransactionItem;
