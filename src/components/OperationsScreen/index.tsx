interface IOperationsScreenProps {
  value: string;
  state: string;
}

export const OperationsScreen = ({ value, state }: IOperationsScreenProps) => {
  return (
    <div className="h-44 flex flex-col pb-2">
      <p className="flex flex-grow text-gray-500 dark:text-gray-300 opacity-50 text-2xl justify-end items-end pb-2">
        {state}
      </p>

      <p className="text-gray-500 dark:text-white text-5xl self-end">{value}</p>
    </div>
  );
};
