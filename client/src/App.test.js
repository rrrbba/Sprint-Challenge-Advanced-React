import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {

render(<App />);

});

test('player is found', () => {
  const { getByText } = render(<App />);

  getByText(/player/i)
})
