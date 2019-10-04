import React from 'react';
import { render } from '@testing-library/react';
import useLocalStorage from './useLocalStorage';


test('renders without crashing', () => {
    render(<useLocalStorage />)
})

