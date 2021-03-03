import * as fromApplication from './application.actions';

describe('loadApplications', () => {
  it('should return an action', () => {
    expect(fromApplication.loadApplications().type).toBe('[Application] Load Applications');
  });
});
