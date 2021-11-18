import { buttons } from './config';
import { Button } from '../../models';
import { classNames } from '../../utils/classNames';

type Previous = (state: string) => string;

interface IButtonItemProps {
  item: Button;
  value: string;
  state: string;
  setValue: (value: string | Previous) => void;
  setState: (value: string | Previous) => void;
}

const ButtonItem = (props: IButtonItemProps) => {
  const { item, setValue, setState, value, state } = props;
  const notInitialValue = value !== '0';

  const onClickHandler = (type: string) => {
    if (type === 'value' && item.value) {
      notInitialValue ? setValue((prev) => `${prev}${item.value}`) : setValue(item.value);
    }
    if (type === 'cancel') {
      setValue('0');
    }
    if (type === 'operation') {
      setState((prev) => prev + value + item.value);
      setValue('0');
    }
    if (type === 'negate' && notInitialValue) {
      setValue((prev) => {
        if (prev[0] === '-') {
          return prev.slice(1);
        }
        return `-${prev}`;
      });
    }
    if (type === 'result') {
      const result = Function('return ' + state + value)();
      setValue(`${result}`);
      setState('');
    }
  };

  return (
    <button
      className={classNames(
        'btn',
        item.span ? `col-span-${item.span}` : '',
        item.color ? `btn-${item.color}` : ''
      )}
      onClick={() => onClickHandler(item.type)}
    >
      {String.fromCodePoint(item.label)}
    </button>
  );
};

interface INumPadProps {
  value: string;
  state: string;
  setValue: (value: string | Previous) => void;
  setState: (value: string | Previous) => void;
}
export const NumPad = (props: INumPadProps) => {
  const { value, state, setValue, setState } = props;
  const { numbers, operationsHorizontal, operationsVertical } = buttons;

  return (
    <div className="grid grid-cols-4">
      <div className="col-span-3">
        <div className="grid grid-cols-3">
          {operationsHorizontal.map((oprtsHor) => (
            <ButtonItem
              key={oprtsHor.label}
              item={oprtsHor}
              setValue={setValue}
              setState={setState}
              value={value}
              state={state}
            />
          ))}
        </div>

        <div className="grid grid-cols-3">
          {numbers
            .slice()
            .reverse()
            .map((number) => (
              <ButtonItem
                key={number.label}
                item={number}
                setValue={setValue}
                setState={setState}
                value={value}
                state={state}
              />
            ))}
        </div>
      </div>

      <div className="grid">
        {operationsVertical.map((oprtsVert) => (
          <ButtonItem
            key={oprtsVert.label}
            item={oprtsVert}
            setValue={setValue}
            setState={setState}
            value={value}
            state={state}
          />
        ))}
      </div>
    </div>
  );
};
