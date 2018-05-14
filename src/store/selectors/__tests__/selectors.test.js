import { selectPagiableDogs } from '../selectors';

describe('Reselect: selectPagiableDogs', () => {
  it('should return a slice of dogs array', () => {
    const state = {
      dogs: {
        dogs: ['1.png', '2.png', '3.png', '4.png', '5.png'],
      },
      helpers: {
        limit: 2,
        offset: 1,
      },
    };

    const expectedOutput = ['1.png', '2.png', '3.png'];

    expect(selectPagiableDogs(state)).toEqual(expectedOutput);
  });
});
