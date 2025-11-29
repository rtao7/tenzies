interface Die {
  value: number;
}

const Die = ({ value }: Die) => {
  return (
    <button className="leading-0 cursor-pointer col-span-1 rounded-lg border-gray-200 border w-12 h-12 shadow-sm text-gray-700 text-2xl font-semibold flex items-center place-content-center">
      {value}
    </button>
  );
};

export default Die;
