import React from 'react';
import { useAppDispatch } from 'hooks/useRedux';
import { Button } from 'models';
import { classNames } from 'utils/classNames';

import { buttons } from './config';
interface IButtonItemProps {
  items: Button[];
}

const ButtonItems = (props: IButtonItemProps) => {
  const { items } = props;
  const dispatch = useAppDispatch();

  const onClickHandler = (type: string, value: string | undefined) =>
    dispatch({ type, payload: value });

  return (
    <>
      {items.map((item) => (
        <button
          key={item.label}
          data-testid={`btn-num-${item.dti}`}
          className={classNames(
            'btn',
            item.span ? `col-span-${item.span}` : '',
            item.color ? `btn-${item.color}` : ''
          )}
          onClick={() => onClickHandler(item.type, item.value)}
        >
          {String.fromCodePoint(item.label)}
        </button>
      ))}
    </>
  );
};

export const NumPad = () => {
  const { numbers, operationsHorizontal, operationsVertical } = buttons;

  return (
    <div className="grid grid-cols-4">
      <div className="col-span-3">
        <div className="grid grid-cols-3">
          <ButtonItems items={operationsHorizontal} />
        </div>
        <div className="grid grid-cols-3">
          <ButtonItems items={numbers} />
        </div>
      </div>

      <div className="grid">
        <ButtonItems items={operationsVertical} />
      </div>
    </div>
  );
};
