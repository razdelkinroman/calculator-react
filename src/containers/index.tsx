import { useState } from 'react';
import { NumPad } from '../components/NumPad';
import { OperationsScreen } from '../components/OperationsScreen';
import { Switch } from '../components/Switch';
import { Mode } from 'models';

type Previous = (mode: Mode) => Mode;
interface ICalculatorProps {
  setMode: (mode: Previous) => void;
}

export const Calculator = ({ setMode }: ICalculatorProps) => {
  const [value, setValue] = useState<string>('0');
  const [state, setState] = useState<string>('');

  const onToggleThemeHandler = () => setMode((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <div className="bg-gray-300 dark:bg-gray-700 p-2 w-[280px] rounded-3xl shadow-light-gray dark:shadow-active-light">
      <Switch onClick={onToggleThemeHandler} />
      <OperationsScreen value={value} state={state} />
      <NumPad value={value} setValue={setValue} state={state} setState={setState} />
    </div>
  );
};
