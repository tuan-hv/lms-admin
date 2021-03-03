import { CurrencyPipes } from './currency.pipe';

describe('CurrencyPipe', () => {
  it('create an instance', () => {
    const pipe = new CurrencyPipes();
    expect(pipe).toBeTruthy();
  });
});
