import { useCoin } from "../context/ContextProvider";
import Slider from "react-slick";
import SliderSkeleton from "./SliderSkeleton";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loader from "./Loader";

function Carousel() {
  const { data, status } = useCoin();
  const render = data?.pages[0].map((coin) => (
    <SliderSkeleton coin={coin} key={coin.id} />
  ));

  if (status === "pending") return <Loader />;

  const settings = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 5,
  };

  return (
    <div className="mt-4 mb-6 px-2">
      <Slider {...settings}>{render}</Slider>
    </div>
  );
}

export default Carousel;
