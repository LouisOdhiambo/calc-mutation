// @ts-nocheck
import { renderHook, act } from '@testing-library/react-native';
import useCalculator from '../useCalculator';

describe('useCalculator', () => {
  test('initial state is correct', () => {
    const { result } = renderHook(() => useCalculator());

    expect(result.current.values.number).toBe('0');
    expect(result.current.values.previousNumber).toBe('0');
  });

  test('buildNumber prevents multiple decimals', async () => {
    const { result } = renderHook(() => useCalculator());

    await act(async () => {
      result.current.actions.buildNumber('1');
      result.current.actions.buildNumber('.');
      result.current.actions.buildNumber('.');
    });

    expect(result.current.values.number).toBe('1.');
  });

  test('buildNumber allows decimal followed by zero', async () => {
    const { result } = renderHook(() => useCalculator());

    await act(async () => {
      result.current.actions.buildNumber('1');
      result.current.actions.buildNumber('.');
      result.current.actions.buildNumber('0');
    });

    expect(result.current.values.number).toBe('1.0');
  });

  test('positiveNegative toggles sign', async () => {
    const { result } = renderHook(() => useCalculator());

    await act(async () => {
      result.current.actions.buildNumber('5');
      result.current.actions.positiveNegative();
    });

    expect(result.current.values.number).toBe('-5');

    await act(async () => {
      result.current.actions.positiveNegative();
    });

    expect(result.current.values.number).toBe('5');
  });

  test('delete removes last digit', async () => {
    const { result } = renderHook(() => useCalculator());

    await act(async () => {
      result.current.actions.buildNumber('1');
      result.current.actions.buildNumber('2');
      result.current.actions.del();
    });

    expect(result.current.values.number).toBe('1');
  });

  test('sum works correctly', async () => {
    const { result } = renderHook(() => useCalculator());

    await act(async () => {
      result.current.actions.buildNumber('5');
      result.current.actions.btnSum();
      result.current.actions.buildNumber('3');
      result.current.actions.calculate();
    });

    expect(result.current.values.number).toBe('8');
  });

  test('minus works correctly', async () => {
    const { result } = renderHook(() => useCalculator());

    await act(async () => {
      result.current.actions.buildNumber('10');
      result.current.actions.btnMinus();
      result.current.actions.buildNumber('3');
      result.current.actions.calculate();
    });

    expect(result.current.values.number).toBe('7');
  });

  test('multiply works correctly', async () => {
    const { result } = renderHook(() => useCalculator());

    await act(async () => {
      result.current.actions.buildNumber('4');
      result.current.actions.btnMultiply();
      result.current.actions.buildNumber('3');
      result.current.actions.calculate();
    });

    expect(result.current.values.number).toBe('12');
  });

  test('divide works correctly', async () => {
    const { result } = renderHook(() => useCalculator());

    await act(async () => {
      result.current.actions.buildNumber('10');
      result.current.actions.btnDivide();
      result.current.actions.buildNumber('2');
      result.current.actions.calculate();
    });

    expect(result.current.values.number).toBe('5');
  });

  test('division by zero returns Error', async () => {
    const { result } = renderHook(() => useCalculator());

    await act(async () => {
      result.current.actions.buildNumber('10');
      result.current.actions.btnDivide();
      result.current.actions.buildNumber('0');
      result.current.actions.calculate();
    });

    expect(result.current.values.number).toBe('Error');
  });
});
