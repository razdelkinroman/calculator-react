import React, { useEffect, useRef, useState } from 'react';

interface IOperationsScreenProps {
  value: string;
  state: string;
}

export const OperationsScreen = ({ value, state }: IOperationsScreenProps) => {
  const childRef = useRef<HTMLParagraphElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const { width: parentWidth } = parentRef?.current?.getBoundingClientRect() as DOMRect;
    const { width: childWidth } = childRef?.current?.getBoundingClientRect() as DOMRect;

    if (childWidth > parentWidth) {
      setScale((prev) => prev - 0.2);
    }
  }, [value]);

  return (
    <div ref={parentRef} className="h-44 flex flex-col pb-2">
      <p className="flex flex-grow text-gray-500 dark:text-gray-300 opacity-50 text-2xl justify-end items-end pb-2 mt-2 break-all overflow-hidden">
        {state}
      </p>

      <p
        ref={childRef}
        className="text-gray-500 dark:text-white text-5xl self-end"
        style={{ transform: `scale(${scale},${scale})`, transformOrigin: 'right' }}
      >
        {value}
      </p>
    </div>
  );
};
