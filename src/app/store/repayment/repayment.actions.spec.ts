import * as fromRepayment from './repayment.actions';

describe('loadRepayments', () => {
  it('should return an action', () => {
    expect(fromRepayment.loadRepayments().type).toBe('[Repayment] Load Repayments');
  });
});
