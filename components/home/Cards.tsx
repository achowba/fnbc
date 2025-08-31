import { CARD_WIDTH } from '@/constants/styles.constants';
import { CardType } from '@/types';
import React from 'react';
import { ScrollView } from 'react-native';
import CardItem from './CardItem';

type CardsProps = {
  cards: CardType[];
};

const Cards = ({ cards }: CardsProps) => {
  const numberOfCards = cards.length;
  const snapToInterval = CARD_WIDTH + 30;

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={snapToInterval}
      snapToAlignment="start"
      decelerationRate="fast"
    >
      {cards.map((card, index) => (
        <CardItem
          card={card}
          key={index}
          isFirstCard={index === 0}
          isLastCard={numberOfCards - 1 === index}
        />
      ))}
    </ScrollView>
  );
};

export default Cards;
