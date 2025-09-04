import { FONTS } from '@/constants/fonts.constants';
import { BeneficiaryType } from '@/types';
import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type BeneficiaryProps = {
  beneficiary: BeneficiaryType;
  isLastBeneficiaryItem?: boolean;
};

const Beneficiary = ({ beneficiary, isLastBeneficiaryItem }: BeneficiaryProps) => {
  return (
    <View style={(styles.container, isLastBeneficiaryItem && styles.lastBeneficiaryItem)}>
      <View style={styles.beneficiaryImageContainer}>
        <Image style={styles.beneficiaryImage} source={beneficiary.image} />
      </View>
      <View style={styles.beneficiaryNameContainer}>
        <Text style={styles.beneficiaryNameText}>{beneficiary.firstName}</Text>
        <Text style={styles.beneficiaryNameText}>{beneficiary.lastName}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    marginBottom: 30,
    paddingLeft: 25,
  },
  lastBeneficiaryItem: {
    marginRight: 25,
  },
  beneficiaryImageContainer: {
    alignItems: 'center',
    backgroundColor: '#F7F1FB70',
    borderRadius: 100,
    height: 90,
    justifyContent: 'center',
    width: 90,
  },
  beneficiaryImage: {
    aspectRatio: 1,
    width: '45%',
  },
  beneficiaryNameContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  beneficiaryNameText: {
    fontFamily: FONTS.inter.regular,
    fontSize: 18,
    fontWeight: '700',
  },
});

export default Beneficiary;
