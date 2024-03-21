import { useCoin } from "../context/ContextProvider";

import Carousel from "react-elastic-carousel";
import { consts } from "react-elastic-carousel";

import SliderSkeleton from "./SliderSkeleton";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";

function MyArrow({ type, onClick, isEdge }) {
  const pointer = type === consts.PREV ? <LeftArrow /> : <RightArrow />;

  return (
    <button onClick={onClick} disabled={isEdge}>
      {pointer}
    </button>
  );
}

function Slider() {
  const { data } = useCoin();
  const render = data?.pages[0].map((coin) => (
    <SliderSkeleton coin={coin} key={coin.id} />
  ));

  return (
    <div>
      <Carousel
        renderArrow={MyArrow}
        itemsToShow={5}
        itemsToScroll={1}
        itemPadding={[0, 10, 0, 10]}
      >
        {render}
      </Carousel>
    </div>
  );
}

export default Slider;
