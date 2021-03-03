import { replanReducer, initialState } from './replanning.reducer';

describe('Replanning Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = replanReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
