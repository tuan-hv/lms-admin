import * as fromBeneficiary from './beneficiary.actions';

describe('loadBeneficiarys', () => {
  it('should return an action', () => {
    expect(fromBeneficiary.loadBeneficiarys().type).toBe('[Beneficiary] Load Beneficiarys');
  });
});
