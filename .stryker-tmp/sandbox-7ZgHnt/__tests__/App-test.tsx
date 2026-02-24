// @ts-nocheck
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import App from '../App';

describe('Calculator App – Full Integration Tests', () => {

  const setup = () => {
    const utils = render(<App />);
    const press = (text: string) => {
      fireEvent.press(utils.getByText(text));
    };
    return { ...utils, press };
  };

  test('renders all main buttons', () => {
    const { getByText } = setup();

    expect(getByText('0')).toBeTruthy();
    expect(getByText('1')).toBeTruthy();
    expect(getByText('2')).toBeTruthy();
    expect(getByText('+')).toBeTruthy();
    expect(getByText('-')).toBeTruthy();
    expect(getByText('X')).toBeTruthy();
    expect(getByText('/')).toBeTruthy();
    expect(getByText('=')).toBeTruthy();
    expect(getByText('C')).toBeTruthy();
  });

  test('builds number correctly', () => {
    const { press, getByText } = setup();

    press('1');
    press('2');

    expect(getByText('12')).toBeTruthy();
  });

  test('prevents multiple decimals', () => {
    const { press, getByText } = setup();

    press('1');
    press('.');
    press('.');

    expect(getByText('1.')).toBeTruthy();
  });

  test('clear button resets calculator', () => {
    const { press, getByText } = setup();

    press('9');
    press('C');

    expect(getByText('0')).toBeTruthy();
  });

  test('toggle sign works correctly', () => {
    const { press, getByText } = setup();

    press('5');
    press('+/-');

    expect(getByText('-5')).toBeTruthy();

    press('+/-');

    expect(getByText('5')).toBeTruthy();
  });

  test('delete removes last digit', () => {
    const { press, getByText } = setup();

    press('8');
    press('9');
    press('DEL');

    expect(getByText('8')).toBeTruthy();
  });

  test('performs addition correctly', () => {
    const { press, getByText } = setup();

    press('5');
    press('+');
    press('3');
    press('=');

    expect(getByText('8')).toBeTruthy();
  });

  test('performs subtraction correctly', () => {
    const { press, getByText } = setup();

    press('9');
    press('-');
    press('4');
    press('=');

    expect(getByText('5')).toBeTruthy();
  });

  test('performs multiplication correctly', () => {
    const { press, getByText } = setup();

    press('6');
    press('X');
    press('3');
    press('=');

    expect(getByText('18')).toBeTruthy();
  });

  test('performs division correctly', () => {
    const { press, getByText } = setup();

    press('8');
    press('/');
    press('2');
    press('=');

    expect(getByText('4')).toBeTruthy();
  });

  test('handles division by zero safely', () => {
    const { press, getByText } = setup();

    press('8');
    press('/');
    press('0');
    press('=');

    // Adjust expected value based on your implementation
    expect(getByText('0')).toBeTruthy();
  });

});
