function AboutCoin({ coin }) {
  const { description } = coin;
  return (
    <div className="mb-5">
      <h3 className="text-[#fff] text-3xl mb-2">About</h3>
      <div className="bg-custom-dark-navy-3 py-4 px-5 rounded-[10px] text-[#fff] leading-[1.75]">
        <p>{description.en}</p>
      </div>
    </div>
  );
}

export default AboutCoin;
