import { setDogs, setSelectedDog } from '../dogsActions';
import { DOGS_SET, SELECTED_DOG_SET } from '../actionTypes';

describe('Redux: Dogs Actions', () => {
  it('should create an action to set dogs', () => {
    const dogs = ['1.png', '2.png', '3.png'];

    const expectedAction = {
      type: DOGS_SET,
      payload: dogs,
    };

    expect(setDogs(dogs)).toEqual(expectedAction);
  });

  it('should create an action to set a selected dog', () => {
    const selectedDog = '666.png';

    const expectedAction = {
      type: SELECTED_DOG_SET,
      payload: selectedDog,
    };

    expect(setSelectedDog(selectedDog)).toEqual(expectedAction);
  });
});
