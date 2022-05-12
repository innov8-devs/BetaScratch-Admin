import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  Cart?: Maybe<Array<Cart>>;
  Otp?: Maybe<Array<Otp>>;
  WithdrawalRequest?: Maybe<Array<WithdrawalRequest>>;
  _count: UserCount;
  confirmed: Scalars['Boolean'];
  country: Scalars['String'];
  createdAt: Scalars['DateTime'];
  dateOfBirth: Scalars['DateTime'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  gender: Gender;
  id: Scalars['ID'];
  lastName: Scalars['String'];
  licenseBackImage?: Maybe<Scalars['String']>;
  licenseFrontImage?: Maybe<Scalars['String']>;
  mobileNumber: Scalars['String'];
  password: Scalars['String'];
  role: Role;
  state: Scalars['String'];
  token: Scalars['String'];
  tokens?: Maybe<Array<Token>>;
  transactions?: Maybe<Array<Transaction>>;
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
  verificationStatus: Scalars['String'];
  vipStatus: Scalars['String'];
  wallet?: Maybe<Wallet>;
};

export type Cart = {
  __typename?: 'Cart';
  category: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  imageUrl: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['JSON'];
  quantity: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['Int'];
};

export type CartCheckoutInput = {
  cart: Array<CartItems>;
  subtotal: Scalars['Float'];
  transaction_id?: InputMaybe<Scalars['Float']>;
  transaction_type: Scalars['String'];
};

export type CartCreateManyUserInput = {
  category: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  imageUrl: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['JSON'];
  quantity: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CartCreateManyUserInputEnvelope = {
  data: Array<CartCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type CartCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<CartWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CartCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<CartCreateWithoutUserInput>>;
  createMany?: InputMaybe<CartCreateManyUserInputEnvelope>;
};

export type CartCreateOrConnectWithoutUserInput = {
  create: CartCreateWithoutUserInput;
  where: CartWhereUniqueInput;
};

export type CartCreateWithoutUserInput = {
  category: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  imageUrl: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['JSON'];
  quantity: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CartDetailInput = {
  gameIds: Array<Scalars['Float']>;
};

export type CartItems = {
  category: Scalars['String'];
  gameId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  imageUrl: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['JSON'];
  quantity: Scalars['Float'];
};

export type CartWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type CashBackTransactionInput = {
  cashBackAmount: Scalars['Float'];
  currency: Scalars['String'];
};

export type DeductUserBalanceInput = {
  amount: Scalars['String'];
  currency: Scalars['String'];
  userId: Scalars['Float'];
  wallet: Scalars['String'];
};

export enum Gender {
  Female = 'FEMALE',
  Male = 'MALE',
  Other = 'OTHER'
}

export type Game = {
  __typename?: 'Game';
  availability: Scalars['Int'];
  category: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  gameId: Scalars['String'];
  id: Scalars['ID'];
  imageUrl: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['JSON'];
  updatedAt: Scalars['DateTime'];
};

export type GameCategory = {
  __typename?: 'GameCategory';
  categoryLabel: Scalars['String'];
  categoryName: Scalars['String'];
  id: Scalars['ID'];
};

export type GameCategoryCreateInput = {
  categoryLabel: Scalars['String'];
  categoryName: Scalars['String'];
};

export type GameCategoryReturnType = {
  __typename?: 'GameCategoryReturnType';
  games: Array<Game>;
  name: Scalars['String'];
};

export type GameCateogorySearch = {
  categories?: InputMaybe<Array<Scalars['String']>>;
  page: Scalars['Float'];
  size: Scalars['Float'];
};

export type GameCreateInput = {
  availability: Scalars['Int'];
  category: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  gameId: Scalars['String'];
  imageUrl: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['JSON'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type GamePaginationInput = {
  skip?: InputMaybe<Scalars['Float']>;
  take?: InputMaybe<Scalars['Float']>;
};

export type InitiatePaymentInput = {
  amount: Scalars['String'];
  currency: Scalars['String'];
  purpose: Scalars['String'];
};

export type LoginInput = {
  password: Scalars['String'];
  phoneNumberOrEmail: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  adminLogin: AuthResponse;
  cashBack: Scalars['Boolean'];
  checkout: User;
  confirmAccount: Scalars['Boolean'];
  createGame: Game;
  createGameCategory: GameCategory;
  deductUserBalance: Scalars['Boolean'];
  deposit: User;
  editAccount: User;
  editGame: Scalars['Boolean'];
  forgotPassword: Scalars['Boolean'];
  forgotPasswordOtp: Scalars['Boolean'];
  initiatePayment: Scalars['String'];
  login: User;
  newPassword: Scalars['Boolean'];
  purchaseHistory: Array<Cart>;
  recordWithdrawalRequest: WithdrawalRequest;
  register: User;
  requestNewOtp: Scalars['Boolean'];
  resetAccountPassword: User;
  sendWithdrawalOtp: Scalars['Boolean'];
  toggleUserConfirmationFromAdmin: Scalars['Boolean'];
  validateRegistrationFormOne: Scalars['Boolean'];
  validateRegistrationFormTwo: Scalars['Boolean'];
};


export type MutationAdminLoginArgs = {
  input: LoginInput;
};


export type MutationCashBackArgs = {
  input: CashBackTransactionInput;
};


export type MutationCheckoutArgs = {
  input: CartCheckoutInput;
};


export type MutationConfirmAccountArgs = {
  otp: Scalars['String'];
  phoneNumberOrEmail: Scalars['String'];
};


export type MutationCreateGameArgs = {
  input: GameCreateInput;
};


export type MutationCreateGameCategoryArgs = {
  input: GameCategoryCreateInput;
};


export type MutationDeductUserBalanceArgs = {
  input: DeductUserBalanceInput;
};


export type MutationDepositArgs = {
  transaction_id: Scalars['Float'];
};


export type MutationEditAccountArgs = {
  input: UpdateUserInput;
};


export type MutationEditGameArgs = {
  gameId: Scalars['Float'];
  input: UpdateGameInput;
};


export type MutationForgotPasswordArgs = {
  phoneNumberOrEmail: Scalars['String'];
};


export type MutationForgotPasswordOtpArgs = {
  otp: Scalars['String'];
  phoneNumberOrEmail: Scalars['String'];
};


export type MutationInitiatePaymentArgs = {
  input: InitiatePaymentInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationNewPasswordArgs = {
  otp: Scalars['String'];
  password: Scalars['String'];
  phoneNumberOrEmail: Scalars['String'];
};


export type MutationPurchaseHistoryArgs = {
  input: PurchaseSearch;
};


export type MutationRecordWithdrawalRequestArgs = {
  input: WithdrawalRequestCreateInput;
};


export type MutationRegisterArgs = {
  input: UserCreateInput;
};


export type MutationRequestNewOtpArgs = {
  phoneNumberOrEmail: Scalars['String'];
};


export type MutationResetAccountPasswordArgs = {
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};


export type MutationSendWithdrawalOtpArgs = {
  userId: Scalars['String'];
};


export type MutationToggleUserConfirmationFromAdminArgs = {
  userId: Scalars['Float'];
};


export type MutationValidateRegistrationFormOneArgs = {
  input: ValidateFormOneInput;
};


export type MutationValidateRegistrationFormTwoArgs = {
  input: ValidateFormTwoInput;
};

export type Otp = {
  __typename?: 'Otp';
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  expire: Scalars['DateTime'];
  id: Scalars['ID'];
  mobileNumber: Scalars['String'];
  subject: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['Int'];
  validity: Scalars['Boolean'];
};

export type OtpCreateManyUserInput = {
  code: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  expire: Scalars['DateTime'];
  id?: InputMaybe<Scalars['Int']>;
  mobileNumber: Scalars['String'];
  subject: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  validity: Scalars['Boolean'];
};

export type OtpCreateManyUserInputEnvelope = {
  data: Array<OtpCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type OtpCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<OtpWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<OtpCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<OtpCreateWithoutUserInput>>;
  createMany?: InputMaybe<OtpCreateManyUserInputEnvelope>;
};

export type OtpCreateOrConnectWithoutUserInput = {
  create: OtpCreateWithoutUserInput;
  where: OtpWhereUniqueInput;
};

export type OtpCreateWithoutUserInput = {
  code: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  expire: Scalars['DateTime'];
  mobileNumber: Scalars['String'];
  subject: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  validity: Scalars['Boolean'];
};

export type OtpWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type PurchaseSearch = {
  page: Scalars['Float'];
  size: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  checkTotalAmountSpent: Scalars['Float'];
  findAllGameCategories?: Maybe<Array<GameCategory>>;
  findAllGames?: Maybe<Array<Game>>;
  findAllGamesByCategories?: Maybe<Array<GameCategoryReturnType>>;
  findAllGamesPaginated?: Maybe<Array<Game>>;
  findAllUsers?: Maybe<Array<User>>;
  findOneGame?: Maybe<Game>;
  findOneUser: User;
  generateAccessToken: Scalars['Boolean'];
  getAllCartDetails: Array<Game>;
  getAllRegisteredUsers?: Maybe<Array<User>>;
  getAllWithdrawalRequests: Array<WithdrawalRequest>;
  getTotalBonusBalance: Scalars['Float'];
  getTotalWalletBalance: Scalars['Float'];
  getUserBalance?: Maybe<Wallet>;
  logout?: Maybe<User>;
  me?: Maybe<User>;
  totalGameCount: TotalGameCount;
  totalUserCount: TotalUserCount;
  transactionHistory: Array<Transaction>;
};


export type QueryFindAllGamesByCategoriesArgs = {
  input: GameCateogorySearch;
};


export type QueryFindAllGamesPaginatedArgs = {
  pagination?: InputMaybe<GamePaginationInput>;
};


export type QueryFindAllUsersArgs = {
  pagination?: InputMaybe<UserPaginationInput>;
};


export type QueryFindOneGameArgs = {
  gameId: Scalars['String'];
};


export type QueryFindOneUserArgs = {
  userId: Scalars['String'];
};


export type QueryGetAllCartDetailsArgs = {
  input: CartDetailInput;
};


export type QueryGetAllWithdrawalRequestsArgs = {
  pagination?: InputMaybe<WithdrawalRequestPaginationInput>;
};


export type QueryTransactionHistoryArgs = {
  input: TransactionHistoryInput;
};

export enum Role {
  Admin = 'ADMIN',
  User = 'USER'
}

export type Token = {
  __typename?: 'Token';
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  expire: Scalars['DateTime'];
  id: Scalars['ID'];
  mobileNumber: Scalars['String'];
  subject: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['Int'];
  validity: Scalars['Boolean'];
};

export type TokenCreateManyUserInput = {
  code: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  expire: Scalars['DateTime'];
  id?: InputMaybe<Scalars['Int']>;
  mobileNumber: Scalars['String'];
  subject: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  validity: Scalars['Boolean'];
};

export type TokenCreateManyUserInputEnvelope = {
  data: Array<TokenCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type TokenCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<TokenWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TokenCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<TokenCreateWithoutUserInput>>;
  createMany?: InputMaybe<TokenCreateManyUserInputEnvelope>;
};

export type TokenCreateOrConnectWithoutUserInput = {
  create: TokenCreateWithoutUserInput;
  where: TokenWhereUniqueInput;
};

export type TokenCreateWithoutUserInput = {
  code: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  expire: Scalars['DateTime'];
  mobileNumber: Scalars['String'];
  subject: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  validity: Scalars['Boolean'];
};

export type TokenWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type TotalGameCount = {
  __typename?: 'TotalGameCount';
  _count: Scalars['Float'];
};

export type TotalUserCount = {
  __typename?: 'TotalUserCount';
  _count: Scalars['Float'];
};

export type Transaction = {
  __typename?: 'Transaction';
  User?: Maybe<User>;
  amount: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  currency: Scalars['String'];
  id: Scalars['ID'];
  purpose: Scalars['String'];
  status: Scalars['String'];
  transactionId: Scalars['Int'];
  transactionRef: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  userId?: Maybe<Scalars['Int']>;
};

export type TransactionCreateManyUserInput = {
  amount: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  currency: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  purpose: Scalars['String'];
  status: Scalars['String'];
  transactionId: Scalars['Int'];
  transactionRef: Scalars['String'];
  type?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TransactionCreateManyUserInputEnvelope = {
  data: Array<TransactionCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type TransactionCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<TransactionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TransactionCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<TransactionCreateWithoutUserInput>>;
  createMany?: InputMaybe<TransactionCreateManyUserInputEnvelope>;
};

export type TransactionCreateOrConnectWithoutUserInput = {
  create: TransactionCreateWithoutUserInput;
  where: TransactionWhereUniqueInput;
};

export type TransactionCreateWithoutUserInput = {
  amount: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  currency: Scalars['String'];
  purpose: Scalars['String'];
  status: Scalars['String'];
  transactionId: Scalars['Int'];
  transactionRef: Scalars['String'];
  type?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TransactionHistoryInput = {
  page: Scalars['Float'];
  size: Scalars['Float'];
};

export type TransactionWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type UpdateGameInput = {
  availability?: InputMaybe<Scalars['Float']>;
  category?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['JSON']>;
};

export type UpdateUserInput = {
  country?: InputMaybe<Scalars['String']>;
  dateOfBirth?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Gender>;
  lastName?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  Cart?: Maybe<Array<Cart>>;
  Otp?: Maybe<Array<Otp>>;
  WithdrawalRequest?: Maybe<Array<WithdrawalRequest>>;
  _count: UserCount;
  confirmed: Scalars['Boolean'];
  country: Scalars['String'];
  createdAt: Scalars['DateTime'];
  dateOfBirth: Scalars['DateTime'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  gender: Gender;
  id: Scalars['ID'];
  lastName: Scalars['String'];
  licenseBackImage?: Maybe<Scalars['String']>;
  licenseFrontImage?: Maybe<Scalars['String']>;
  mobileNumber: Scalars['String'];
  password: Scalars['String'];
  role: Role;
  state: Scalars['String'];
  tokens?: Maybe<Array<Token>>;
  transactions?: Maybe<Array<Transaction>>;
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
  verificationStatus: Scalars['String'];
  vipStatus: Scalars['String'];
  wallet?: Maybe<Wallet>;
};

export type UserCount = {
  __typename?: 'UserCount';
  Cart: Scalars['Int'];
  Otp: Scalars['Int'];
  WithdrawalRequest: Scalars['Int'];
  tokens: Scalars['Int'];
  transactions: Scalars['Int'];
};

export type UserCreateInput = {
  Cart?: InputMaybe<CartCreateNestedManyWithoutUserInput>;
  Otp?: InputMaybe<OtpCreateNestedManyWithoutUserInput>;
  WithdrawalRequest?: InputMaybe<WithdrawalRequestCreateNestedManyWithoutUserInput>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  country: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  dateOfBirth: Scalars['DateTime'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  gender: Gender;
  lastName: Scalars['String'];
  licenseBackImage?: InputMaybe<Scalars['String']>;
  licenseFrontImage?: InputMaybe<Scalars['String']>;
  mobileNumber: Scalars['String'];
  password: Scalars['String'];
  role?: InputMaybe<Role>;
  state: Scalars['String'];
  tokens?: InputMaybe<TokenCreateNestedManyWithoutUserInput>;
  transactions?: InputMaybe<TransactionCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
  verificationStatus?: InputMaybe<Scalars['String']>;
  vipStatus?: InputMaybe<Scalars['String']>;
  wallet?: InputMaybe<WalletCreateNestedOneWithoutUserInput>;
};

export type UserCreateNestedOneWithoutWithdrawalRequestInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutWithdrawalRequestInput>;
  create?: InputMaybe<UserCreateWithoutWithdrawalRequestInput>;
};

export type UserCreateOrConnectWithoutWithdrawalRequestInput = {
  create: UserCreateWithoutWithdrawalRequestInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutWithdrawalRequestInput = {
  Cart?: InputMaybe<CartCreateNestedManyWithoutUserInput>;
  Otp?: InputMaybe<OtpCreateNestedManyWithoutUserInput>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  country: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  dateOfBirth: Scalars['DateTime'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  gender: Gender;
  lastName: Scalars['String'];
  licenseBackImage?: InputMaybe<Scalars['String']>;
  licenseFrontImage?: InputMaybe<Scalars['String']>;
  mobileNumber: Scalars['String'];
  password: Scalars['String'];
  role?: InputMaybe<Role>;
  state: Scalars['String'];
  tokens?: InputMaybe<TokenCreateNestedManyWithoutUserInput>;
  transactions?: InputMaybe<TransactionCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
  verificationStatus?: InputMaybe<Scalars['String']>;
  vipStatus?: InputMaybe<Scalars['String']>;
  wallet?: InputMaybe<WalletCreateNestedOneWithoutUserInput>;
};

export type UserPaginationInput = {
  skip?: InputMaybe<Scalars['Float']>;
  take?: InputMaybe<Scalars['Float']>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  mobileNumber?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type ValidateFormOneInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  mobileNumber: Scalars['String'];
};

export type ValidateFormTwoInput = {
  country: Scalars['String'];
  dateOfBirth: Scalars['DateTime'];
  gender: Gender;
  password: Scalars['String'];
  state: Scalars['String'];
  username: Scalars['String'];
};

export type Wallet = {
  __typename?: 'Wallet';
  bonus: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  currency: Scalars['String'];
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['Int'];
  withdrawable: Scalars['Float'];
};

export type WalletCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<WalletWhereUniqueInput>;
  connectOrCreate?: InputMaybe<WalletCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<WalletCreateWithoutUserInput>;
};

export type WalletCreateOrConnectWithoutUserInput = {
  create: WalletCreateWithoutUserInput;
  where: WalletWhereUniqueInput;
};

export type WalletCreateWithoutUserInput = {
  bonus: Scalars['Float'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  currency: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  withdrawable: Scalars['Float'];
};

export type WalletWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
};

export type WithdrawalRequest = {
  __typename?: 'WithdrawalRequest';
  User?: Maybe<User>;
  accountName?: Maybe<Scalars['String']>;
  accountNumber?: Maybe<Scalars['String']>;
  amount: Scalars['String'];
  bank?: Maybe<Scalars['String']>;
  btcWalletAdderess?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  licenseNumber?: Maybe<Scalars['String']>;
  licenseType?: Maybe<Scalars['String']>;
  paypal?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
};

export type WithdrawalRequestCreateInput = {
  User?: InputMaybe<UserCreateNestedOneWithoutWithdrawalRequestInput>;
  accountName?: InputMaybe<Scalars['String']>;
  accountNumber?: InputMaybe<Scalars['String']>;
  amount: Scalars['String'];
  bank?: InputMaybe<Scalars['String']>;
  btcWalletAdderess?: InputMaybe<Scalars['String']>;
  licenseNumber?: InputMaybe<Scalars['String']>;
  licenseType?: InputMaybe<Scalars['String']>;
  paypal?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
};

export type WithdrawalRequestCreateManyUserInput = {
  accountName?: InputMaybe<Scalars['String']>;
  accountNumber?: InputMaybe<Scalars['String']>;
  amount: Scalars['String'];
  bank?: InputMaybe<Scalars['String']>;
  btcWalletAdderess?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  licenseNumber?: InputMaybe<Scalars['String']>;
  licenseType?: InputMaybe<Scalars['String']>;
  paypal?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
};

export type WithdrawalRequestCreateManyUserInputEnvelope = {
  data: Array<WithdrawalRequestCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type WithdrawalRequestCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<WithdrawalRequestWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<WithdrawalRequestCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<WithdrawalRequestCreateWithoutUserInput>>;
  createMany?: InputMaybe<WithdrawalRequestCreateManyUserInputEnvelope>;
};

export type WithdrawalRequestCreateOrConnectWithoutUserInput = {
  create: WithdrawalRequestCreateWithoutUserInput;
  where: WithdrawalRequestWhereUniqueInput;
};

export type WithdrawalRequestCreateWithoutUserInput = {
  accountName?: InputMaybe<Scalars['String']>;
  accountNumber?: InputMaybe<Scalars['String']>;
  amount: Scalars['String'];
  bank?: InputMaybe<Scalars['String']>;
  btcWalletAdderess?: InputMaybe<Scalars['String']>;
  licenseNumber?: InputMaybe<Scalars['String']>;
  licenseType?: InputMaybe<Scalars['String']>;
  paypal?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
};

export type WithdrawalRequestPaginationInput = {
  skip?: InputMaybe<Scalars['Float']>;
  take?: InputMaybe<Scalars['Float']>;
};

export type WithdrawalRequestWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type GameFragment = { __typename?: 'Game', id: string, name: string, imageUrl: string, description: string, gameId: string, price: any, category: string, availability: number, createdAt: any, updatedAt: any };

export type UserFragment = { __typename?: 'User', id: string, email: string, username: string, firstName: string, lastName: string, dateOfBirth: any, role: Role, gender: Gender, mobileNumber: string, country: string, state: string, confirmed: boolean, createdAt: any };

export type AdminLoginMutationVariables = Exact<{
  phoneNumberOrEmail: Scalars['String'];
  password: Scalars['String'];
}>;


export type AdminLoginMutation = { __typename?: 'Mutation', adminLogin: { __typename?: 'AuthResponse', id: string, email: string, username: string, token: string, role: Role } };

export type CreateGameMutationVariables = Exact<{
  name: Scalars['String'];
  imageUrl: Scalars['String'];
  description: Scalars['String'];
  category: Scalars['String'];
  gameId: Scalars['String'];
  price: Scalars['JSON'];
  availability: Scalars['Int'];
}>;


export type CreateGameMutation = { __typename?: 'Mutation', createGame: { __typename?: 'Game', id: string, name: string, imageUrl: string, description: string, gameId: string, price: any, category: string, availability: number, createdAt: any, updatedAt: any } };

export type DeductUserBalanceMutationVariables = Exact<{
  amount: Scalars['String'];
  wallet: Scalars['String'];
  currency: Scalars['String'];
  userId: Scalars['Float'];
}>;


export type DeductUserBalanceMutation = { __typename?: 'Mutation', deductUserBalance: boolean };

export type ToggleUserConfirmationFromAdminMutationVariables = Exact<{
  userId: Scalars['Float'];
}>;


export type ToggleUserConfirmationFromAdminMutation = { __typename?: 'Mutation', toggleUserConfirmationFromAdmin: boolean };

export type EditGameMutationVariables = Exact<{
  gameId: Scalars['Float'];
  name?: InputMaybe<Scalars['String']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['JSON']>;
  category?: InputMaybe<Scalars['String']>;
  availability?: InputMaybe<Scalars['Float']>;
}>;


export type EditGameMutation = { __typename?: 'Mutation', editGame: boolean };

export type FindAllGameCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllGameCategoriesQuery = { __typename?: 'Query', findAllGameCategories?: Array<{ __typename?: 'GameCategory', id: string, categoryName: string, categoryLabel: string }> | null };

export type FindAllGamesPaginatedQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Float']>;
  take?: InputMaybe<Scalars['Float']>;
}>;


export type FindAllGamesPaginatedQuery = { __typename?: 'Query', findAllGamesPaginated?: Array<{ __typename?: 'Game', id: string, name: string, imageUrl: string, description: string, gameId: string, price: any, category: string, availability: number, createdAt: any, updatedAt: any }> | null };

export type FindOneGameQueryVariables = Exact<{
  gameId: Scalars['String'];
}>;


export type FindOneGameQuery = { __typename?: 'Query', findOneGame?: { __typename?: 'Game', id: string, name: string, imageUrl: string, description: string, gameId: string, price: any, category: string, availability: number, createdAt: any, updatedAt: any } | null };

export type TotalGameCountQueryVariables = Exact<{ [key: string]: never; }>;


export type TotalGameCountQuery = { __typename?: 'Query', totalGameCount: { __typename?: 'TotalGameCount', _count: number } };

export type CheckTotalAmountSpentQueryVariables = Exact<{ [key: string]: never; }>;


export type CheckTotalAmountSpentQuery = { __typename?: 'Query', checkTotalAmountSpent: number };

export type GetAllWithdrawalRequestsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Float']>;
  take?: InputMaybe<Scalars['Float']>;
}>;


export type GetAllWithdrawalRequestsQuery = { __typename?: 'Query', getAllWithdrawalRequests: Array<{ __typename?: 'WithdrawalRequest', id: string, userId?: number | null, bank?: string | null, accountNumber?: string | null, accountName?: string | null, amount: string, status?: string | null, paypal?: string | null, btcWalletAdderess?: string | null }> };

export type FindAllUsersQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Float']>;
  take?: InputMaybe<Scalars['Float']>;
}>;


export type FindAllUsersQuery = { __typename?: 'Query', findAllUsers?: Array<{ __typename?: 'User', id: string, email: string, username: string, firstName: string, lastName: string, dateOfBirth: any, role: Role, gender: Gender, mobileNumber: string, state: string, confirmed: boolean, createdAt: any, wallet?: { __typename?: 'Wallet', withdrawable: number, currency: string, bonus: number } | null }> | null };

export type FindOneUserQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type FindOneUserQuery = { __typename?: 'Query', findOneUser: { __typename?: 'User', id: string, email: string, username: string, firstName: string, lastName: string, dateOfBirth: any, role: Role, gender: Gender, mobileNumber: string, country: string, state: string, confirmed: boolean, createdAt: any } };

export type GetUserBalanceQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserBalanceQuery = { __typename?: 'Query', getUserBalance?: { __typename?: 'Wallet', withdrawable: number, bonus: number, currency: string } | null };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, email: string, username: string, firstName: string, lastName: string, dateOfBirth: any, role: Role, gender: Gender, mobileNumber: string, country: string, state: string, confirmed: boolean, createdAt: any } | null };

export type TotalUserCountQueryVariables = Exact<{ [key: string]: never; }>;


export type TotalUserCountQuery = { __typename?: 'Query', totalUserCount: { __typename?: 'TotalUserCount', _count: number } };

export const GameFragmentDoc = gql`
    fragment Game on Game {
  id
  name
  imageUrl
  description
  gameId
  price
  category
  availability
  createdAt
  updatedAt
}
    `;
export const UserFragmentDoc = gql`
    fragment User on User {
  id
  email
  username
  firstName
  lastName
  dateOfBirth
  role
  gender
  mobileNumber
  country
  state
  confirmed
  createdAt
}
    `;
export const AdminLoginDocument = gql`
    mutation AdminLogin($phoneNumberOrEmail: String!, $password: String!) {
  adminLogin(
    input: {phoneNumberOrEmail: $phoneNumberOrEmail, password: $password}
  ) {
    id
    email
    username
    token
    role
  }
}
    `;
export type AdminLoginMutationFn = Apollo.MutationFunction<AdminLoginMutation, AdminLoginMutationVariables>;

/**
 * __useAdminLoginMutation__
 *
 * To run a mutation, you first call `useAdminLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminLoginMutation, { data, loading, error }] = useAdminLoginMutation({
 *   variables: {
 *      phoneNumberOrEmail: // value for 'phoneNumberOrEmail'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useAdminLoginMutation(baseOptions?: Apollo.MutationHookOptions<AdminLoginMutation, AdminLoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AdminLoginMutation, AdminLoginMutationVariables>(AdminLoginDocument, options);
      }
export type AdminLoginMutationHookResult = ReturnType<typeof useAdminLoginMutation>;
export type AdminLoginMutationResult = Apollo.MutationResult<AdminLoginMutation>;
export type AdminLoginMutationOptions = Apollo.BaseMutationOptions<AdminLoginMutation, AdminLoginMutationVariables>;
export const CreateGameDocument = gql`
    mutation CreateGame($name: String!, $imageUrl: String!, $description: String!, $category: String!, $gameId: String!, $price: JSON!, $availability: Int!) {
  createGame(
    input: {name: $name, imageUrl: $imageUrl, description: $description, category: $category, gameId: $gameId, price: $price, availability: $availability}
  ) {
    ...Game
  }
}
    ${GameFragmentDoc}`;
export type CreateGameMutationFn = Apollo.MutationFunction<CreateGameMutation, CreateGameMutationVariables>;

/**
 * __useCreateGameMutation__
 *
 * To run a mutation, you first call `useCreateGameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateGameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createGameMutation, { data, loading, error }] = useCreateGameMutation({
 *   variables: {
 *      name: // value for 'name'
 *      imageUrl: // value for 'imageUrl'
 *      description: // value for 'description'
 *      category: // value for 'category'
 *      gameId: // value for 'gameId'
 *      price: // value for 'price'
 *      availability: // value for 'availability'
 *   },
 * });
 */
export function useCreateGameMutation(baseOptions?: Apollo.MutationHookOptions<CreateGameMutation, CreateGameMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateGameMutation, CreateGameMutationVariables>(CreateGameDocument, options);
      }
export type CreateGameMutationHookResult = ReturnType<typeof useCreateGameMutation>;
export type CreateGameMutationResult = Apollo.MutationResult<CreateGameMutation>;
export type CreateGameMutationOptions = Apollo.BaseMutationOptions<CreateGameMutation, CreateGameMutationVariables>;
export const DeductUserBalanceDocument = gql`
    mutation DeductUserBalance($amount: String!, $wallet: String!, $currency: String!, $userId: Float!) {
  deductUserBalance(
    input: {amount: $amount, wallet: $wallet, currency: $currency, userId: $userId}
  )
}
    `;
export type DeductUserBalanceMutationFn = Apollo.MutationFunction<DeductUserBalanceMutation, DeductUserBalanceMutationVariables>;

/**
 * __useDeductUserBalanceMutation__
 *
 * To run a mutation, you first call `useDeductUserBalanceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeductUserBalanceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deductUserBalanceMutation, { data, loading, error }] = useDeductUserBalanceMutation({
 *   variables: {
 *      amount: // value for 'amount'
 *      wallet: // value for 'wallet'
 *      currency: // value for 'currency'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useDeductUserBalanceMutation(baseOptions?: Apollo.MutationHookOptions<DeductUserBalanceMutation, DeductUserBalanceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeductUserBalanceMutation, DeductUserBalanceMutationVariables>(DeductUserBalanceDocument, options);
      }
export type DeductUserBalanceMutationHookResult = ReturnType<typeof useDeductUserBalanceMutation>;
export type DeductUserBalanceMutationResult = Apollo.MutationResult<DeductUserBalanceMutation>;
export type DeductUserBalanceMutationOptions = Apollo.BaseMutationOptions<DeductUserBalanceMutation, DeductUserBalanceMutationVariables>;
export const ToggleUserConfirmationFromAdminDocument = gql`
    mutation ToggleUserConfirmationFromAdmin($userId: Float!) {
  toggleUserConfirmationFromAdmin(userId: $userId)
}
    `;
export type ToggleUserConfirmationFromAdminMutationFn = Apollo.MutationFunction<ToggleUserConfirmationFromAdminMutation, ToggleUserConfirmationFromAdminMutationVariables>;

/**
 * __useToggleUserConfirmationFromAdminMutation__
 *
 * To run a mutation, you first call `useToggleUserConfirmationFromAdminMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleUserConfirmationFromAdminMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleUserConfirmationFromAdminMutation, { data, loading, error }] = useToggleUserConfirmationFromAdminMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useToggleUserConfirmationFromAdminMutation(baseOptions?: Apollo.MutationHookOptions<ToggleUserConfirmationFromAdminMutation, ToggleUserConfirmationFromAdminMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ToggleUserConfirmationFromAdminMutation, ToggleUserConfirmationFromAdminMutationVariables>(ToggleUserConfirmationFromAdminDocument, options);
      }
export type ToggleUserConfirmationFromAdminMutationHookResult = ReturnType<typeof useToggleUserConfirmationFromAdminMutation>;
export type ToggleUserConfirmationFromAdminMutationResult = Apollo.MutationResult<ToggleUserConfirmationFromAdminMutation>;
export type ToggleUserConfirmationFromAdminMutationOptions = Apollo.BaseMutationOptions<ToggleUserConfirmationFromAdminMutation, ToggleUserConfirmationFromAdminMutationVariables>;
export const EditGameDocument = gql`
    mutation EditGame($gameId: Float!, $name: String, $imageUrl: String, $description: String, $price: JSON, $category: String, $availability: Float) {
  editGame(
    gameId: $gameId
    input: {name: $name, imageUrl: $imageUrl, description: $description, price: $price, category: $category, availability: $availability}
  )
}
    `;
export type EditGameMutationFn = Apollo.MutationFunction<EditGameMutation, EditGameMutationVariables>;

/**
 * __useEditGameMutation__
 *
 * To run a mutation, you first call `useEditGameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditGameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editGameMutation, { data, loading, error }] = useEditGameMutation({
 *   variables: {
 *      gameId: // value for 'gameId'
 *      name: // value for 'name'
 *      imageUrl: // value for 'imageUrl'
 *      description: // value for 'description'
 *      price: // value for 'price'
 *      category: // value for 'category'
 *      availability: // value for 'availability'
 *   },
 * });
 */
export function useEditGameMutation(baseOptions?: Apollo.MutationHookOptions<EditGameMutation, EditGameMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditGameMutation, EditGameMutationVariables>(EditGameDocument, options);
      }
export type EditGameMutationHookResult = ReturnType<typeof useEditGameMutation>;
export type EditGameMutationResult = Apollo.MutationResult<EditGameMutation>;
export type EditGameMutationOptions = Apollo.BaseMutationOptions<EditGameMutation, EditGameMutationVariables>;
export const FindAllGameCategoriesDocument = gql`
    query FindAllGameCategories {
  findAllGameCategories {
    id
    categoryName
    categoryLabel
  }
}
    `;

/**
 * __useFindAllGameCategoriesQuery__
 *
 * To run a query within a React component, call `useFindAllGameCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllGameCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllGameCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindAllGameCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<FindAllGameCategoriesQuery, FindAllGameCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindAllGameCategoriesQuery, FindAllGameCategoriesQueryVariables>(FindAllGameCategoriesDocument, options);
      }
export function useFindAllGameCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAllGameCategoriesQuery, FindAllGameCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindAllGameCategoriesQuery, FindAllGameCategoriesQueryVariables>(FindAllGameCategoriesDocument, options);
        }
export type FindAllGameCategoriesQueryHookResult = ReturnType<typeof useFindAllGameCategoriesQuery>;
export type FindAllGameCategoriesLazyQueryHookResult = ReturnType<typeof useFindAllGameCategoriesLazyQuery>;
export type FindAllGameCategoriesQueryResult = Apollo.QueryResult<FindAllGameCategoriesQuery, FindAllGameCategoriesQueryVariables>;
export const FindAllGamesPaginatedDocument = gql`
    query FindAllGamesPaginated($skip: Float, $take: Float) {
  findAllGamesPaginated(pagination: {skip: $skip, take: $take}) {
    ...Game
  }
}
    ${GameFragmentDoc}`;

/**
 * __useFindAllGamesPaginatedQuery__
 *
 * To run a query within a React component, call `useFindAllGamesPaginatedQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllGamesPaginatedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllGamesPaginatedQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindAllGamesPaginatedQuery(baseOptions?: Apollo.QueryHookOptions<FindAllGamesPaginatedQuery, FindAllGamesPaginatedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindAllGamesPaginatedQuery, FindAllGamesPaginatedQueryVariables>(FindAllGamesPaginatedDocument, options);
      }
export function useFindAllGamesPaginatedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAllGamesPaginatedQuery, FindAllGamesPaginatedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindAllGamesPaginatedQuery, FindAllGamesPaginatedQueryVariables>(FindAllGamesPaginatedDocument, options);
        }
export type FindAllGamesPaginatedQueryHookResult = ReturnType<typeof useFindAllGamesPaginatedQuery>;
export type FindAllGamesPaginatedLazyQueryHookResult = ReturnType<typeof useFindAllGamesPaginatedLazyQuery>;
export type FindAllGamesPaginatedQueryResult = Apollo.QueryResult<FindAllGamesPaginatedQuery, FindAllGamesPaginatedQueryVariables>;
export const FindOneGameDocument = gql`
    query FindOneGame($gameId: String!) {
  findOneGame(gameId: $gameId) {
    ...Game
  }
}
    ${GameFragmentDoc}`;

/**
 * __useFindOneGameQuery__
 *
 * To run a query within a React component, call `useFindOneGameQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindOneGameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindOneGameQuery({
 *   variables: {
 *      gameId: // value for 'gameId'
 *   },
 * });
 */
export function useFindOneGameQuery(baseOptions: Apollo.QueryHookOptions<FindOneGameQuery, FindOneGameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindOneGameQuery, FindOneGameQueryVariables>(FindOneGameDocument, options);
      }
export function useFindOneGameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindOneGameQuery, FindOneGameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindOneGameQuery, FindOneGameQueryVariables>(FindOneGameDocument, options);
        }
export type FindOneGameQueryHookResult = ReturnType<typeof useFindOneGameQuery>;
export type FindOneGameLazyQueryHookResult = ReturnType<typeof useFindOneGameLazyQuery>;
export type FindOneGameQueryResult = Apollo.QueryResult<FindOneGameQuery, FindOneGameQueryVariables>;
export const TotalGameCountDocument = gql`
    query TotalGameCount {
  totalGameCount {
    _count
  }
}
    `;

/**
 * __useTotalGameCountQuery__
 *
 * To run a query within a React component, call `useTotalGameCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useTotalGameCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTotalGameCountQuery({
 *   variables: {
 *   },
 * });
 */
export function useTotalGameCountQuery(baseOptions?: Apollo.QueryHookOptions<TotalGameCountQuery, TotalGameCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TotalGameCountQuery, TotalGameCountQueryVariables>(TotalGameCountDocument, options);
      }
export function useTotalGameCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TotalGameCountQuery, TotalGameCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TotalGameCountQuery, TotalGameCountQueryVariables>(TotalGameCountDocument, options);
        }
export type TotalGameCountQueryHookResult = ReturnType<typeof useTotalGameCountQuery>;
export type TotalGameCountLazyQueryHookResult = ReturnType<typeof useTotalGameCountLazyQuery>;
export type TotalGameCountQueryResult = Apollo.QueryResult<TotalGameCountQuery, TotalGameCountQueryVariables>;
export const CheckTotalAmountSpentDocument = gql`
    query CheckTotalAmountSpent {
  checkTotalAmountSpent
}
    `;

/**
 * __useCheckTotalAmountSpentQuery__
 *
 * To run a query within a React component, call `useCheckTotalAmountSpentQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckTotalAmountSpentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckTotalAmountSpentQuery({
 *   variables: {
 *   },
 * });
 */
export function useCheckTotalAmountSpentQuery(baseOptions?: Apollo.QueryHookOptions<CheckTotalAmountSpentQuery, CheckTotalAmountSpentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CheckTotalAmountSpentQuery, CheckTotalAmountSpentQueryVariables>(CheckTotalAmountSpentDocument, options);
      }
export function useCheckTotalAmountSpentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CheckTotalAmountSpentQuery, CheckTotalAmountSpentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CheckTotalAmountSpentQuery, CheckTotalAmountSpentQueryVariables>(CheckTotalAmountSpentDocument, options);
        }
export type CheckTotalAmountSpentQueryHookResult = ReturnType<typeof useCheckTotalAmountSpentQuery>;
export type CheckTotalAmountSpentLazyQueryHookResult = ReturnType<typeof useCheckTotalAmountSpentLazyQuery>;
export type CheckTotalAmountSpentQueryResult = Apollo.QueryResult<CheckTotalAmountSpentQuery, CheckTotalAmountSpentQueryVariables>;
export const GetAllWithdrawalRequestsDocument = gql`
    query GetAllWithdrawalRequests($skip: Float, $take: Float) {
  getAllWithdrawalRequests(pagination: {skip: $skip, take: $take}) {
    id
    userId
    bank
    accountNumber
    accountName
    amount
    status
    paypal
    btcWalletAdderess
  }
}
    `;

/**
 * __useGetAllWithdrawalRequestsQuery__
 *
 * To run a query within a React component, call `useGetAllWithdrawalRequestsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllWithdrawalRequestsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllWithdrawalRequestsQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useGetAllWithdrawalRequestsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllWithdrawalRequestsQuery, GetAllWithdrawalRequestsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllWithdrawalRequestsQuery, GetAllWithdrawalRequestsQueryVariables>(GetAllWithdrawalRequestsDocument, options);
      }
export function useGetAllWithdrawalRequestsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllWithdrawalRequestsQuery, GetAllWithdrawalRequestsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllWithdrawalRequestsQuery, GetAllWithdrawalRequestsQueryVariables>(GetAllWithdrawalRequestsDocument, options);
        }
export type GetAllWithdrawalRequestsQueryHookResult = ReturnType<typeof useGetAllWithdrawalRequestsQuery>;
export type GetAllWithdrawalRequestsLazyQueryHookResult = ReturnType<typeof useGetAllWithdrawalRequestsLazyQuery>;
export type GetAllWithdrawalRequestsQueryResult = Apollo.QueryResult<GetAllWithdrawalRequestsQuery, GetAllWithdrawalRequestsQueryVariables>;
export const FindAllUsersDocument = gql`
    query FindAllUsers($skip: Float, $take: Float) {
  findAllUsers(pagination: {skip: $skip, take: $take}) {
    id
    email
    username
    firstName
    lastName
    dateOfBirth
    role
    gender
    mobileNumber
    state
    confirmed
    createdAt
    wallet {
      withdrawable
      currency
      bonus
    }
  }
}
    `;

/**
 * __useFindAllUsersQuery__
 *
 * To run a query within a React component, call `useFindAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllUsersQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<FindAllUsersQuery, FindAllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindAllUsersQuery, FindAllUsersQueryVariables>(FindAllUsersDocument, options);
      }
export function useFindAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAllUsersQuery, FindAllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindAllUsersQuery, FindAllUsersQueryVariables>(FindAllUsersDocument, options);
        }
export type FindAllUsersQueryHookResult = ReturnType<typeof useFindAllUsersQuery>;
export type FindAllUsersLazyQueryHookResult = ReturnType<typeof useFindAllUsersLazyQuery>;
export type FindAllUsersQueryResult = Apollo.QueryResult<FindAllUsersQuery, FindAllUsersQueryVariables>;
export const FindOneUserDocument = gql`
    query FindOneUser($userId: String!) {
  findOneUser(userId: $userId) {
    ...User
  }
}
    ${UserFragmentDoc}`;

/**
 * __useFindOneUserQuery__
 *
 * To run a query within a React component, call `useFindOneUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindOneUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindOneUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useFindOneUserQuery(baseOptions: Apollo.QueryHookOptions<FindOneUserQuery, FindOneUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindOneUserQuery, FindOneUserQueryVariables>(FindOneUserDocument, options);
      }
export function useFindOneUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindOneUserQuery, FindOneUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindOneUserQuery, FindOneUserQueryVariables>(FindOneUserDocument, options);
        }
export type FindOneUserQueryHookResult = ReturnType<typeof useFindOneUserQuery>;
export type FindOneUserLazyQueryHookResult = ReturnType<typeof useFindOneUserLazyQuery>;
export type FindOneUserQueryResult = Apollo.QueryResult<FindOneUserQuery, FindOneUserQueryVariables>;
export const GetUserBalanceDocument = gql`
    query GetUserBalance {
  getUserBalance {
    withdrawable
    bonus
    currency
  }
}
    `;

/**
 * __useGetUserBalanceQuery__
 *
 * To run a query within a React component, call `useGetUserBalanceQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserBalanceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserBalanceQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserBalanceQuery(baseOptions?: Apollo.QueryHookOptions<GetUserBalanceQuery, GetUserBalanceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserBalanceQuery, GetUserBalanceQueryVariables>(GetUserBalanceDocument, options);
      }
export function useGetUserBalanceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserBalanceQuery, GetUserBalanceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserBalanceQuery, GetUserBalanceQueryVariables>(GetUserBalanceDocument, options);
        }
export type GetUserBalanceQueryHookResult = ReturnType<typeof useGetUserBalanceQuery>;
export type GetUserBalanceLazyQueryHookResult = ReturnType<typeof useGetUserBalanceLazyQuery>;
export type GetUserBalanceQueryResult = Apollo.QueryResult<GetUserBalanceQuery, GetUserBalanceQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...User
  }
}
    ${UserFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const TotalUserCountDocument = gql`
    query TotalUserCount {
  totalUserCount {
    _count
  }
}
    `;

/**
 * __useTotalUserCountQuery__
 *
 * To run a query within a React component, call `useTotalUserCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useTotalUserCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTotalUserCountQuery({
 *   variables: {
 *   },
 * });
 */
export function useTotalUserCountQuery(baseOptions?: Apollo.QueryHookOptions<TotalUserCountQuery, TotalUserCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TotalUserCountQuery, TotalUserCountQueryVariables>(TotalUserCountDocument, options);
      }
export function useTotalUserCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TotalUserCountQuery, TotalUserCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TotalUserCountQuery, TotalUserCountQueryVariables>(TotalUserCountDocument, options);
        }
export type TotalUserCountQueryHookResult = ReturnType<typeof useTotalUserCountQuery>;
export type TotalUserCountLazyQueryHookResult = ReturnType<typeof useTotalUserCountLazyQuery>;
export type TotalUserCountQueryResult = Apollo.QueryResult<TotalUserCountQuery, TotalUserCountQueryVariables>;