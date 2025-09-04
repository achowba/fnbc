import Beneficiaries from '@/components/transfer/Beneficiaries';
import ButtonPrimaryWithText from '@/components/ui/ButtonPrimaryWithText';
import { ICONS } from '@/constants/assets.constants';
import { COLORS } from '@/constants/colors.constants';
import { FONTS } from '@/constants/fonts.constants';
import { BANKS } from '@/data/bank.data';
import { BENEFICIARIES } from '@/data/beneficiaries.data';
import { Ionicons } from '@expo/vector-icons';
import SvgUri from 'expo-svg-uri';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const TransferMoney = () => {
  const [value, setValue] = useState(null);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.availableBalanceContainer}>
          <Text style={styles.availableBalanceLabel}>Available Balance</Text>
          <Text style={styles.availableBalanceText}>₹ 2,94,843.43</Text>
        </View>
        <Beneficiaries beneficiaries={BENEFICIARIES} />
        <View style={styles.formContainer}>
          <Text style={styles.inputLabel}>Bank</Text>
          <Dropdown
            style={[styles.dropdown, isFocused && { borderColor: 'blue' }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconColor="#000"
            data={BANKS}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocused ? 'Select bank' : '...'}
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={(item) => {
              setValue(item.value);
              setIsFocused(false);
            }}
            renderLeftIcon={() => <SvgUri source={ICONS.bank} height={25} width={25} />}
            renderRightIcon={() => (
              <Ionicons name={isFocused ? 'chevron-up' : 'chevron-down'} size={20} />
            )}
          />
          <View>
            <Text style={styles.inputLabel}>Beneficiary&apos;s account number</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter account number"
              placeholderTextColor="#00000040"
            />
          </View>
          <View>
            <Text style={styles.inputLabel}>Amount</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter amount"
              placeholderTextColor="#00000040"
            />
          </View>
          <View>
            <Text style={styles.inputLabel}>Description</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter description"
              placeholderTextColor="#00000040"
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.transferBtnContainer}>
        <ButtonPrimaryWithText textStyles={styles.transferBtnText}>
          Make Transfer
        </ButtonPrimaryWithText>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    marginBottom: 85,
  },
  availableBalanceContainer: {
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 25,
    marginBottom: 0,
    padding: 22,
  },
  availableBalanceLabel: {
    color: COLORS.light.primary,
    fontFamily: FONTS.inter.semibold,
    fontSize: 18,
  },
  availableBalanceText: {
    color: '#1FA804',
    fontFamily: FONTS.inter.semibold,
    fontSize: 20,
  },
  formContainer: {
    padding: 25,
  },
  inputLabel: {
    fontFamily: FONTS.inter.medium,
    fontSize: 20,
    marginBottom: 15,
  },
  dropdown: {
    borderColor: '#00000020',
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 25,
    padding: 20,
  },
  placeholderStyle: {
    color: '#00000050',
    fontFamily: FONTS.inter.regular,
    fontSize: 18,
    marginLeft: 20,
  },
  selectedTextStyle: {
    fontSize: 18,
    marginLeft: 20,
  },
  inputSearchStyle: {
    padding: 10,
  },
  inputField: {
    borderColor: '#00000020',
    borderRadius: 8,
    borderWidth: 1,
    fontSize: 18,
    marginBottom: 30,
    padding: 20,
  },
  transferBtnContainer: {
    backgroundColor: '#FFFFFF',
    bottom: 0,
    paddingBottom: 45,
    paddingHorizontal: 25,
    paddingTop: 25,
    position: 'absolute',
    width: '100%',
  },
  transferBtnText: {
    fontSize: 20,
  },
});

export default TransferMoney;
