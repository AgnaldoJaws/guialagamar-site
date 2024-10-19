import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { hotelsData } from "../../data/hotels";
import isTextMatched from "../../utils/isTextMatched";
import { useEffect, useState } from "react";

const Hotels = () => {
  const [dataHome, setDataHome] = useState([]);
  const [language, setLanguage] = useState('pt'); // 'en' for English, 'pt' for Portuguese

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/contenties/1/1`)
        .then((response) => response.json())
        .then((data) => {
          setDataHome(data.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
  }, []);

  return (
      <>
        <Swiper
            spaceBetween={30}
            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: ".js-hotels-next",
              prevEl: ".js-hotels-prev",
            }}
            pagination={{
              el: ".js-hotels-pag",
              clickable: true,
            }}
            breakpoints={{
              540: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 22,
              },
              1024: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
        >
          {dataHome.map((item) => {
            console.log(item.logoPath);
            return (
                <SwiperSlide key={item?.id}>
                  <Link
                      href={`/hotel/hotel-single-v1/${item.id}`}
                      className="hotelsCard -type-1 hover-inside-slider"
                      data-aos="fade"
                      data-aos-delay={item.delayAnimation}
                  >
                    <div className="hotelsCard__image">
                      <div className="cardImage ratio ratio-1:1">
                        <div className="cardImage__content">
                          <div className="cardImage-slider rounded-4 overflow-hidden custom_inside-slider">
                            <Swiper
                                className="mySwiper"
                                modules={[Pagination, Navigation]}
                                pagination={{
                                  clickable: true,
                                }}
                                navigation={true}
                            >
                              <Image
                                  width={300}
                                  height={300}
                                  className="rounded-4 col-12 js-lazy"
                                  src={item.logoPath}
                                  alt="image"
                              />
                            </Swiper>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div className="hotelsCard__content mt-10">
                      <h1 className="hotelsCard__title text-dark-1 text-18 lh-16 fw-500">
                        <span>{item?.title}</span>
                      </h1>
                      <p className="text-light-1 lh-14 text-14 mt-5">
                        {item?.desc}
                      </p>
                    </div>
                  </Link>
                </SwiperSlide>
            );
          })}
        </Swiper>

        <div className="d-flex x-gap-15 items-center justify-center sm:justify-start pt-40 sm:pt-20">
          <div className="col-auto">
            <button className="d-flex items-center text-24 arrow-left-hover js-hotels-prev"
                    aria-label={language === 'en' ? 'Previous Slide' : 'Slide Anterior'}>
              <i className="icon icon-arrow-left" />
            </button>
          </div>

          <div className="col-auto">
            <div className="pagination -dots text-border js-hotels-pag" />
          </div>

          <div className="col-auto">
            <button className="d-flex items-center text-24 arrow-right-hover js-hotels-next"
                    aria-label={language === 'en' ? 'Next Slide' : 'Próximo Slide'}
            >
              <i className="icon icon-arrow-right" />
            </button>
          </div>
        </div>
      </>
  );
};

export default Hotels;
