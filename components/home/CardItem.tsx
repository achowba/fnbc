import { ICONS } from '@/constants/assets.constants';
import { COLORS } from '@/constants/colors.constants';
import { FONTS } from '@/constants/fonts.constants';
import { CARD_WIDTH } from '@/constants/styles.constants';
import { CardType } from '@/types';
import { Ionicons } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';
import SvgUri from 'expo-svg-uri';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Toast from 'react-native-toast-message';

type CardProps = {
  card: CardType;
  isLastCard?: boolean;
  isFirstCard?: boolean;
};

const CardItem = ({ card, isFirstCard, isLastCard }: CardProps) => {
  const [isBalanceVisible, setIsBalanceVisible] = useState(false);

  const toggleBalanceVisibility = () => {
    setIsBalanceVisible((prev) => !prev);
  };

  const copyCardNumber = async () => {
    await Clipboard.setStringAsync(card.number.toString());

    Toast.show({
      type: 'customInfo',
      text1: 'Card number copied to clipboard!',
    });

    console.log(`Card number copied`);
  };

  return (
    <View
      style={[styles.container, isFirstCard && styles.firstCard, isLastCard && styles.lastCard]}
    >
      <Text style={styles.descriptionText}>{card.description}</Text>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceText}>
          {card.currency} {isBalanceVisible ? card.balance : '*****'}
        </Text>
        <Pressable onPress={toggleBalanceVisibility}>
          <Ionicons
            name={isBalanceVisible ? 'eye-outline' : 'eye-off-outline'}
            size={25}
            color="#FFFFFF"
          />
        </Pressable>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.cardDetailsText}>{card.nameOnCard}</Text>
        <View style={styles.cardNumberContainer}>
          <Text style={styles.cardDetailsText}>{card.number}</Text>
          <Pressable onPress={copyCardNumber}>
            <SvgUri source={ICONS.copy} height={20} width={20} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.light.primary,
    borderRadius: 10,
    height: 170,
    marginLeft: 15,
    padding: 25,
    width: CARD_WIDTH,
  },
  firstCard: {
    marginLeft: 25,
  },
  lastCard: {
    marginRight: 25,
  },
  descriptionText: {
    color: '#FFFFFF60',
    fontFamily: FONTS.inter.regular,
    letterSpacing: 0.6,
    marginBottom: 30,
  },
  balanceContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
  balanceText: {
    color: '#FFFFFF',
    fontFamily: FONTS.inter.bold,
    fontSize: 20,
    marginRight: 10,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardDetailsText: {
    color: '#FFFFFF60',
    fontFamily: FONTS.inter.regular,
    fontSize: 15,
    letterSpacing: 0.6,
  },
  cardNumberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
});

export default CardItem;
