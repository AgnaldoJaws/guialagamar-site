import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import Seo from "../../../components/common/Seo";
import Header11 from "../../../components/header/header-11";
import Overview from "../../../components/hotel-single/Overview";
import DefaultFooter from "../../../components/footer/default";
import Hotels from "../../../components/hotels/Hotels";

const HotelSingleV1Dynamic = () => {
  const [isOpen, setOpen] = useState(false);
  const router = useRouter();
  const [hotel, setHotel] = useState({});
  const id = router.query.id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/content/${id}`);
          if (response.ok) {
            const result = await response.json();
            setHotel(result);
          } else {
            console.error("Failed to fetch data");
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
      <>
        <Seo pageTitle={hotel.post?.title} />
        <div className="header-margin"></div>
        <Header11 />

        <section className="pt-50">
          <div className="container">
            <div className="row y-gap-20 justify-between items-end">
              <div className="col-auto">
                <div className="row x-gap-20 items-center">
                  <div className="col-auto">
                    <h1 className="text-30 sm:text-25 fw-600">{hotel && hotel.post?.title}</h1>
                  </div>
                </div>
                <div className="row x-gap-20 y-gap-20 items-center">
                  <div className="col-auto">
                    <div className="d-flex items-center text-15 text-light-1">
                      <i className="icon-location-2 text-16 mr-5" />
                      {hotel.post?.forma_acesso}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Gallery>
              <div className="galleryGrid -type-1 pt-30">
                {hotel.imgs?.map((num) => (
                    <div key={num} className="galleryGrid__item">
                      <Item original={num} thumbnail={num} width={450} height={375}>
                        {({ ref, open }) => (
                            <img
                                ref={ref}
                                onClick={open}
                                src={num}
                                alt="Imagem do hotel"
                                className="rounded-4"
                                role="button"
                            />
                        )}
                      </Item>
                    </div>
                ))}
                <div className="galleryGrid__item relative d-flex">
                  <img src={hotel.post?.full_url} alt="Imagem do hotel" className="rounded-4" />
                </div>
              </div>
            </Gallery>
          </div>
        </section>

        <section className="pt-30">
          <div className="container">
            <div className="row y-gap-30">
              <div className="col-xl-8">
                <div className="row y-gap-40">
                  <div id="overview" className="col-12">
                    <Overview data={hotel} />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden pt-40 sm:pt-20 js-section-slider item_gap-x30">
              <Hotels />
            </div>
          </div>
        </section>

        <DefaultFooter />
      </>
  );
};

export default HotelSingleV1Dynamic;
