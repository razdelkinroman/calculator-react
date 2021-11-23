import React from 'react';
import { render, screen } from '../setupTests';
import userEvent from '@testing-library/user-event';
import App from '../App';

test('нажать все цифры калькулятора', () => {
  render(<App />);

  userEvent.click(screen.getByTestId('btn-num-1'));
  userEvent.click(screen.getByTestId('btn-num-.'));
  userEvent.click(screen.getByTestId('btn-num-2'));
  userEvent.click(screen.getByTestId('btn-num-3'));
  userEvent.click(screen.getByTestId('btn-num-4'));
  userEvent.click(screen.getByTestId('btn-num-5'));
  userEvent.click(screen.getByTestId('btn-num-6'));
  userEvent.click(screen.getByTestId('btn-num-7'));
  userEvent.click(screen.getByTestId('btn-num-8'));
  userEvent.click(screen.getByTestId('btn-num-9'));
  userEvent.click(screen.getByTestId('btn-num-0'));

  expect(screen.queryByText('1.234567890')).toBeInTheDocument();
});

test('присвоение отрицательного значения', () => {
  render(<App />, {
    initialState: {
      value: '12',
      state: '',
    },
  });

  userEvent.click(screen.getByTestId('btn-num-negate'));

  expect(screen.queryByText('-12')).toBeInTheDocument();
});

test('сбросить текущее значение', () => {
  render(<App />, {
    initialState: {
      value: '12',
      state: '',
    },
  });
  const value = screen.getByTestId('display_value');

  userEvent.click(screen.getByTestId('btn-num-cancel'));

  expect(value).toHaveTextContent('0');
});

test('проверить работу кнопок операций над числами и вывести результат', () => {
  render(<App />, {
    initialState: {
      value: '0',
      state: '1*8+6/2',
    },
  });
  const value = screen.getByTestId('display_value');

  userEvent.click(screen.getByTestId('btn-num-result'));

  expect(value).toHaveTextContent('11');
});
