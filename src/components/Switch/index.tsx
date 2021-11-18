interface ISwitchProps {
  onClick: () => void;
}
export const Switch = ({ onClick }: ISwitchProps) => {
  return (
    <label className="relative inline-block w-9 mr-2 align-middle select-none transition duration-200 ease-in">
      <input
        type="checkbox"
        className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-gray-400 appearance-none cursor-pointer"
        onClick={onClick}
      />
      <span className="toggle-label block overflow-hidden h-5 rounded-full bg-white cursor-pointer shadow-light-gray-inset"></span>
    </label>
  );
};
