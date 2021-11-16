import { useState } from 'react';
import { NumPad } from '../components/NumPad';
import { OperationsScreen } from '../components/OperationsScreen';

export const Calculator = () => {
  const [value, setValue] = useState<string>('0');
  const [state, setState] = useState<string>('');

  return (
    <div className="bg-gray-700 p-2 w-[280px] rounded-3xl">
      <OperationsScreen value={value} state={state} />
      <NumPad value={value} setValue={setValue} state={state} setState={setState} />
    </div>
  );
};
