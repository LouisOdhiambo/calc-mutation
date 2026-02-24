// @ts-nocheck
import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App';

describe('App integration', () => {
  it('renders calculator screen elements', () => {
    const { getByText } = render(<App />);

    // Example buttons — adjust to what actually exists
    expect(getByText('1')).toBeTruthy();
    expect(getByText('2')).toBeTruthy();
    expect(getByText('+')).toBeTruthy();
  });
});
