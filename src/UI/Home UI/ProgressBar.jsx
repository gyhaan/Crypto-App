import {
  formatNumberWithK,
  formatProgressBar,
} from "../../helper/formatNumbers";

function ProgressBar({ color, first, second }) {
  const innerWidth = formatProgressBar(first, second);
  return (
    <div className="flex flex-col w-[95%] text-[12px] text-[#fff] pb-2">
      <div className="flex justify-between">
        <span style={{ color: `${color.bright}` }}>
          {formatNumberWithK(first)}
        </span>
        <span>{formatNumberWithK(second)}</span>
      </div>
      <div
        className="h-[6px] w-[100%] rounded-full"
        style={{ backgroundColor: `${color.background}` }}
      >
        <div
          className="h-[6px] rounded-full"
          style={{
            backgroundColor: `${color.bright}`,
            width: `${innerWidth}`,
          }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
