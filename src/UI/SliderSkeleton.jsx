import {
  roundToTwoDecimalPlaces,
  formatNumberWithK,
} from "../helper/roundtoOne";

function SliderSkeleton({ coin }) {
  const {
    image,
    name,
    current_price,
    price_change_percentage_24h_in_currency,
  } = coin;
  return (
    <li className="max-w-[250px] h-[95px] bg-custom-dark-navy flex items-center justify-center py-3 px-5  gap-5  rounded-md text-[#d1d1d1] hover:bg-custom-blue-violet hover:bg-opacity-[85%] hover:cursor-pointer">
      <img src={image} alt={name} className="w-[32px] h-[32px] block" />
      <div className="w-[160px] flex flex-col gap-1">
        <p className="text-[16px]">{name}</p>
        <div className="flex gap-2 text-[14px]">
          <span>${formatNumberWithK(current_price)}</span>
          <div
            style={{
              color:
                price_change_percentage_24h_in_currency > 0
                  ? "#01F1E3"
                  : "#FE2264",
            }}
            className="flex justify-center items-center"
          >
            {price_change_percentage_24h_in_currency > 0 && (
              <img src="/chevron-up.svg" alt="" />
            )}
            {price_change_percentage_24h_in_currency < 0 && (
              <img src="/chevron-down.svg" alt="" />
            )}
            <span>
              {roundToTwoDecimalPlaces(price_change_percentage_24h_in_currency)}
              %
            </span>
          </div>
        </div>
      </div>
    </li>
  );
}

export default SliderSkeleton;
