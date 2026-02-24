// @ts-nocheck
import { renderHook, act } from '@testing-library/react-hooks';
import useCalculator from '../useCalculator';

describe('useCalculator Hook', () => {

  test('should return initial values', () => {
    const { result } = renderHook(() => useCalculator());

    expect(result.current.number).toBe('0');
    expect(result.current.prevNumber).toBe('0');
  });

  test('should build number correctly', () => {
    const { result } = renderHook(() => useCalculator());

    act(() => {
      result.current.actions.buildNumber('5');
    });

    expect(result.current.number).toBe('5');
  });

  test('should not allow multiple decimals', () => {
    const { result } = renderHook(() => useCalculator());

    act(() => {
      result.current.actions.buildNumber('1');
    });

    act(() => {
      result.current.actions.buildNumber('.');
    });

    act(() => {
      result.current.actions.buildNumber('.');
    });

    expect(result.current.number).toBe('1.');
  });

  test('should clear everything', () => {
    const { result } = renderHook(() => useCalculator());

    act(() => {
      result.current.actions.buildNumber('9');
    });

    act(() => {
      result.current.actions.clear();
    });

    expect(result.current.number).toBe('0');
    expect(result.current.prevNumber).toBe('0');
  });

  test('should toggle sign', () => {
    const { result } = renderHook(() => useCalculator());

    act(() => {
      result.current.actions.buildNumber('5');
    });

    act(() => {
      result.current.actions.toggleSign();
    });

    expect(result.current.number).toBe('-5');

    act(() => {
      result.current.actions.toggleSign();
    });

    expect(result.current.number).toBe('5');
  });

  test('should delete last digit', () => {
    const { result } = renderHook(() => useCalculator());

    act(() => {
      result.current.actions.buildNumber('5');
    });

    act(() => {
      result.current.actions.buildNumber('3');
    });

    act(() => {
      result.current.actions.delete();
    });

    expect(result.current.number).toBe('5');
  });

  test('should perform addition correctly', () => {
    const { result } = renderHook(() => useCalculator());

    act(() => {
      result.current.actions.buildNumber('5');
    });

    act(() => {
      result.current.actions.btnSum();
    });

    act(() => {
      result.current.actions.buildNumber('3');
    });

    act(() => {
      result.current.actions.calculate();
    });

    expect(result.current.number).toBe('8');
  });

  test('should perform subtraction correctly', () => {
    const { result } = renderHook(() => useCalculator());

    act(() => {
      result.current.actions.buildNumber('10');
    });

    act(() => {
      result.current.actions.btnRest();
    });

    act(() => {
      result.current.actions.buildNumber('4');
    });

    act(() => {
      result.current.actions.calculate();
    });

    expect(result.current.number).toBe('6');
  });

  test('should perform multiplication correctly', () => {
    const { result } = renderHook(() => useCalculator());

    act(() => {
      result.current.actions.buildNumber('6');
    });

    act(() => {
      result.current.actions.btnMultiply();
    });

    act(() => {
      result.current.actions.buildNumber('3');
    });

    act(() => {
      result.current.actions.calculate();
    });

    expect(result.current.number).toBe('18');
  });

  test('should perform division correctly', () => {
    const { result } = renderHook(() => useCalculator());

    act(() => {
      result.current.actions.buildNumber('8');
    });

    act(() => {
      result.current.actions.btnDivide();
    });

    act(() => {
      result.current.actions.buildNumber('2');
    });

    act(() => {
      result.current.actions.calculate();
    });

    expect(result.current.number).toBe('4');
  });

  test('should handle division by zero', () => {
    const { result } = renderHook(() => useCalculator());

    act(() => {
      result.current.actions.buildNumber('8');
    });

    act(() => {
      result.current.actions.btnDivide();
    });

    act(() => {
      result.current.actions.buildNumber('0');
    });

    act(() => {
      result.current.actions.calculate();
    });

    expect(result.current.number).toBe('0');
  });

});
