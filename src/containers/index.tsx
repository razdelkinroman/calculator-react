import React from 'react';
import { useAppSelector } from 'hooks/useRedux';
import { NumPad, OperationsScreen, Switch } from 'components';
import { Mode } from 'models';

type Previous = (mode: Mode) => Mode;
interface ICalculatorProps {
  setMode: (mode: Previous) => void;
}

export const Calculator = ({ setMode }: ICalculatorProps) => {
  const onToggleThemeHandler = () => setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  const value = useAppSelector((state) => state.value);
  const state = useAppSelector((state) => state.state);

  return (
    <div className="bg-gray-300 dark:bg-gray-700 p-2 w-[280px] rounded-3xl shadow-light-gray dark:shadow-active-light">
      <Switch onClick={onToggleThemeHandler} />
      <OperationsScreen value={value} state={state} />
      <NumPad />
    </div>
  );
};
