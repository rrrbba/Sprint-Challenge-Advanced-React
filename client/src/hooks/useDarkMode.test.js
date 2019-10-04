import React from 'react';
import { render } from '@testing-library/react';
import useDarkMode from './useDarkMode';


test('renders without crashing', () => {
    render(<useDarkMode />)
})