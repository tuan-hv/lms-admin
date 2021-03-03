import { TimeZonePipe } from './time-server.pipe';

describe('TimeServerPipe', () => {
  it('create an instance', () => {
    const pipe = new TimeZonePipe();
    expect(pipe).toBeTruthy();
  });
});
