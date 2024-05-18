function DatePicker({ date, setDate }) {
  const secondsInYear = Date.now() - 31536000000;

  return (
    <div>
      <p className="text-lg font-medium">Date Purchased:</p>
      <input
        type="date"
        min={new Date(secondsInYear).toISOString().slice(0, 10)}
        max={new Date().toISOString().slice(0, 10)}
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-60 h-10 py-2 px-3 rounded-[3px] mt-1 outline-none border-[1px] border-[#fff] border-opacity-5 focus:outline-[#fff] bg-custom-dark-navy"
      />
    </div>
  );
}

export default DatePicker;
