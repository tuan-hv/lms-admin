import * as fromReplanning from './replanning.actions';

describe('loadReplannings', () => {
  it('should return an action', () => {
    expect(fromReplanning.loadReplannings().type).toBe('[Replanning] Load Replannings');
  });
});
