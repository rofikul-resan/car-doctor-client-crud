import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { Autoplay, EffectFade, Pagination } from "swiper";
import BannerCard from "./BannerCard";
import img1 from "../../assets/images/banner/1.jpg";
import img2 from "../../assets/images/banner/2.jpg";
import img3 from "../../assets/images/banner/3.jpg";
import img4 from "../../assets/images/banner/4.jpg";
import img5 from "../../assets/images/banner/5.jpg";
import img6 from "../../assets/images/banner/6.jpg";

const BannerCarousel = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="mySwiper"
        effect="fade"
      >
        <SwiperSlide>
          <BannerCard img={img1} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerCard img={img1} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerCard img={img2} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerCard img={img3} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerCard img={img4} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerCard img={img5} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerCard img={img6} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerCarousel;
