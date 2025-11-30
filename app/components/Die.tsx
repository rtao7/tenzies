interface Die {
  value: number;
  isHeld: boolean;
}

const Die = ({ value, isHeld }: Die) => {
  return (
    <button
      className={`${
        isHeld ? "bg-green-300" : "bg-white"
      } leading-0 cursor-pointer col-span-1 rounded-lg border-gray-200 border w-12 h-12 shadow-sm text-gray-700 text-2xl font-semibold flex items-center place-content-center`}
    >
      {value}
    </button>
  );
};

export default Die;
