import { FONTS } from '@/constants/fonts.constants';
import React, { useMemo } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { BeneficiaryType } from '../../types/index';
import SectionTitle from '../home/SectionTitle';
import Beneficiary from './Beneficiary';

type BeneficiariesProps = {
  beneficiaries: BeneficiaryType[];
};

const Beneficiaries = ({ beneficiaries }: BeneficiariesProps) => {
  const frequentBeneficiaries = useMemo(() => beneficiaries.slice(0, 5), [beneficiaries]);
  const numberOfFrequentBeneficiaries = frequentBeneficiaries.length;

  return (
    <>
      <SectionTitle title="Frequent Beneficiaries" titleStyle={styles.sectionTitleStyle} />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollViewContentContainer}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {frequentBeneficiaries.map((beneficiary, index) => (
          <Beneficiary
            beneficiary={beneficiary}
            key={beneficiary.id}
            isLastBeneficiaryItem={index === numberOfFrequentBeneficiaries - 1}
          />
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
    marginTop: 10,
    paddingLeft: 25,
  },
  scrollViewContentContainer: {
    gap: 25,
  },
  sectionTitleStyle: {
    fontFamily: FONTS.inter.medium,
    fontSize: 20,
    marginTop: 10,
    paddingLeft: 25,
  },
});

export default Beneficiaries;
