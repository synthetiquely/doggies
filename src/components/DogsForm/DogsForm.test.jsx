import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-testing-library';
import 'dom-testing-library/extend-expect';
import { DogsForm } from './DogsForm';
import { rootReducer } from '../../store/reducers/rootReducer';

function renderWithRedux(
  ui,
  { initialState, store = createStore(rootReducer, initialState) } = {},
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  };
}

describe('Dogs Form Component', () => {
  it('can render with redux with defaults', () => {
    const { getByTestId } = renderWithRedux(<DogsForm />);
    const inputNode = getByTestId('breeds-select');
    expect(inputNode).toBeInTheDOM();
  });
});
