function AboutCoin({ coin }) {
  const { description } = coin;

  return (
    <div className="mb-5">
      <h3 className="text-white text-2xl md:text-3xl mb-2 px-1">About</h3>
      <div className="bg-custom-dark-navy-3 py-4 px-5 rounded-[10px] text-[#fff] leading-[1.75]">
        <p
          dangerouslySetInnerHTML={{ __html: description.en }}
          className="about"
        ></p>
      </div>
    </div>
  );
}

export default AboutCoin;
