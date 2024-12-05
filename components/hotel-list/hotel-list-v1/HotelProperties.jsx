import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Image from "next/image";
import Link from "next/link";

const HotelProperties = ({ data }) => {
  return (
      <>
        {data?.map((item) => (
            <div className="col-12" key={item?.id}>
              <div className="border-top-light pt-30">
                <div className="row x-gap-20 y-gap-20">
                  <div className="col-md-auto">
                    <div className="cardImage ratio ratio-1:1 w-250 md:w-1/1 rounded-4">
                      <div className="cardImage__content">
                        <div className="cardImage-slider rounded-4  custom_inside-slider">
                          <Swiper
                              className="mySwiper"
                              modules={[Pagination, Navigation]}
                              pagination={{
                                clickable: true,
                              }}
                              navigation={true}
                          >


                                  <Image
                                      width={250}
                                      height={250}
                                      className="rounded-4 col-12 js-lazy"
                                      src={item?.logoPath}
                                      alt="image"
                                  />


                          </Swiper>
                        </div>
                      </div>
                      {/* End image */}

                    </div>
                  </div>
                  {/* End .col */}

                  <div className="col-md">
                    <h1 className="text-18 lh-16 fw-500">
                      {item?.title}
                      <br className="lg:d-none" /> {item?.location}
                    </h1>

                    <div className="row x-gap-10 y-gap-10 items-center pt-10">
                      <div className="col-auto">
                        <p className="text-14">{item?.desc}</p>
                      </div>
                    </div>

                    <div className="text-14 lh-15 mt-20">
                      <div className="fw-500">Forma de Acesso</div>
                      <div className="text-light-1">{item?.forma_acesso}</div>
                    </div>


                  </div>
                  {/* End .col-md */}

                  <div className="col-md-auto text-right md:text-left">


                    <div className="">


                      <Link
                            href={`/hotel/hotel-single-v1/${item.id}`}
                          className="button -md -dark-1 bg-blue-1 text-white "
                      >
                         Mais Sobre {item?.title}
                        <div className="icon-arrow-top-right ml-15"></div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        ))}
      </>
  );
};

export default HotelProperties;
