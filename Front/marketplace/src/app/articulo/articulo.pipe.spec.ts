import { filterPipe } from './filter.pipe';

describe('ArticuloPipe', () => {
  it('create an instance', () => {
    const pipe = new filterPipe();
    expect(pipe).toBeTruthy();
  });
});
