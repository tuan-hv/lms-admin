import { IReplanningPayLoad } from './replanning/replanning.reducer';
import { ILoanTransaction } from 'src/app/store/transaction/transaction.reducer';
import { authReducer } from 'src/app/store/auth/reducers/auth.reducer';
import { configReducer } from 'src/app/store/config/reducers/config.reducer';
import { IAuthState } from 'src/app/store/auth/auth.model';
import { IConfigState } from 'src/app/store/config/config.model';

import { IApplication } from './application/application.reducer';
import { ITransaction } from './transaction/transaction.reducer';
import { IBeneficiary } from './beneficiary/beneficiary.reducer';
import { IRepaymentPayLoad } from './repayment/repayment.reducer';
import { ILoanAccountPayLoad } from './loan-account/loan-account.reducer';

export const rootReducer = {
  auth: authReducer,
  config: configReducer,
};

export interface AppState {
  auth: IAuthState;
  config: IConfigState;
  transaction: ITransaction;
  transactions: ILoanTransaction;
  application: IApplication;
  beneficiary: IBeneficiary;
  repayment: IRepaymentPayLoad;
  accounts: ILoanAccountPayLoad;
  replans: IReplanningPayLoad;
}
