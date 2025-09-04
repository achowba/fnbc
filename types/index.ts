import { ImageSourcePropType } from "react-native";

export type CardType = {
  description: string;
  number: number;
  currency: string;
  nameOnCard: string;
  balance: string;
}

export type ActionType = {
  id: number;
  title: string;
  icon: ImageSourcePropType;
};

export type TransactionType = {
  id: number;
  description: string;
  amount: number;
  date: Date;
}

export type UserType = {
  name: string;
  accountNumber: string;
  accountType: string;
  accountsCount: number;
}

export type BeneficiaryType = {
  id: number;
  firstName: string;
  lastName: string;
  image: ImageSourcePropType;
}
