import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ModalVideo from "react-modal-video";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import Seo from "../../../components/common/Seo";
import Header11 from "../../../components/header/header-11";
import Overview from "../../../components/hotel-single/Overview";
import PopularFacilities from "../../../components/hotel-single/PopularFacilities";
import PropertyHighlights from "../../../components/hotel-single/PropertyHighlights";
import RatingTag from "../../../components/hotel-single/RatingTag";
import StickyHeader from "../../../components/hotel-single/StickyHeader";
import TopBreadCrumb from "../../../components/hotel-single/TopBreadCrumb";
import SidebarRight from "../../../components/hotel-single/SidebarRight";
import AvailableRooms from "../../../components/hotel-single/AvailableRooms";
import ReviewProgress from "../../../components/hotel-single/guest-reviews/ReviewProgress";
import DetailsReview from "../../../components/hotel-single/guest-reviews/DetailsReview";
import ReplyForm from "../../../components/hotel-single/ReplyForm";
import ReplyFormReview from "../../../components/hotel-single/ReplyFormReview";
import Facilities from "../../../components/hotel-single/Facilities";
import Image from "next/image";
import Surroundings from "../../../components/hotel-single/Surroundings";
import HelpfulFacts from "../../../components/hotel-single/HelpfulFacts";
import Faq from "../../../components/faq/Faq";
import Hotels2 from "../../../components/hotels/Hotels2";
import CallToActions from "../../../components/common/CallToActions";
import DefaultFooter from "../../../components/footer/default";
import Link from "next/link";
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
            console.error('Failed to fetch data');
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
      <>
        {/*<ModalVideo*/}
        {/*    channel="youtube"*/}
        {/*    autoplay*/}
        {/*    isOpen={isOpen}*/}
        {/*    videoId="oqNZOOWF8qM"*/}
        {/*    onClose={() => setOpen(false)}*/}
        {/*/>*/}

        <Seo pageTitle={ hotel.post?.title} />
        <div className="header-margin"></div>

        <Header11 />

        {/*<TopBreadCrumb />*/}

        {/*<StickyHeader hotel={hotel} />*/}

        <section className="pt-50">
          <div className="container">
            <div className="row y-gap-20 justify-between items-end">
              <div className="col-auto">
                <div className="row x-gap-20  items-center">
                  <div className="col-auto">
                    <h1 className="text-30 sm:text-25 fw-600">{hotel && hotel.post?.title}</h1>

                  </div>
                  {/*<div className="col-auto">*/}
                  {/*  {[...Array(5)].map((_, id) => (*/}
                  {/*      <i key={id} className="icon-star text-10 text-yellow-1" />*/}
                  {/*  ))}*/}
                  {/*</div>*/}
                </div>
                <div className="row x-gap-20 y-gap-20 items-center">
                  <div className="col-auto">
                    <div className="d-flex items-center text-15 text-light-1">
                      <i className="icon-location-2 text-16 mr-5" />
                      {hotel.post?.forma_acesso}
                    </div>

                    {/*<div className="d-flex items-center text-15 text-light-2">*/}
                    {/*  {hotel.post?.desc}*/}
                    {/*</div>*/}
                  </div>
                  {/*<div className="col-auto">*/}
                  {/*  <button*/}
                  {/*      data-x-click="mapFilter"*/}
                  {/*      className="text-blue-1 text-15 underline"*/}
                  {/*  >*/}
                  {/*    Show on map*/}
                  {/*  </button>*/}
                  {/*</div>*/}
                </div>
              </div>

              {/*<div className="col-auto">*/}
              {/*  <div className="row x-gap-15 y-gap-15 items-center">*/}
              {/*    <div className="col-auto">*/}
              {/*      <div className="text-14">*/}
              {/*        From{" "}*/}
              {/*        <span className="text-22 text-dark-1 fw-500">*/}
              {/*        US${hotel?.price}*/}
              {/*      </span>*/}
              {/*      </div>*/}
              {/*    </div>*/}
              {/*    <div className="col-auto">*/}
              {/*      <Link*/}
              {/*          href="/hotel/booking-page"*/}
              {/*          className="button h-50 px-24 -dark-1 bg-blue-1 text-white"*/}
              {/*      >*/}
              {/*        Select Room <div className="icon-arrow-top-right ml-15" />*/}
              {/*      </Link>*/}
              {/*    </div>*/}
              {/*  </div>*/}
              {/*</div>*/}
            </div>

            <Gallery>
              <div className="galleryGrid -type-1 pt-30">
                {/*<div className="galleryGrid__item relative d-flex">*/}
                {/*  <Item*/}
                {/*      original={hotel.post?.full_url}*/}
                {/*      thumbnail={hotel.post?.full_url}*/}
                {/*      width={660}*/}
                {/*      height={660}*/}
                {/*  >*/}
                {/*    {({ ref, open }) => (*/}
                {/*        <img*/}
                {/*            src={hotel?.img}*/}
                {/*            ref={ref}*/}
                {/*            onClick={open}*/}
                {/*            alt="image"*/}
                {/*            role="button"*/}
                {/*            className="rounded-4"*/}
                {/*        />*/}
                {/*    )}*/}
                {/*  </Item>*/}
                {/*  <div className="absolute px-20 py-20 col-12 d-flex justify-end">*/}
                {/*    <button className="button -blue-1 size-40 rounded-full flex-center bg-white text-dark-1">*/}
                {/*      <i className="icon-heart text-16" />*/}
                {/*    </button>*/}
                {/*  </div>*/}
                {/*</div>*/}

                {hotel.imgs?.map((num) => (

                    <div key={num} className="galleryGrid__item">
                      <Item
                          original={num}
                          thumbnail={num}
                          width={450}
                          height={375}
                      >
                        {({ ref, open }) => (
                            <img
                                ref={ref}
                                onClick={open}
                                src={num}
                                alt="image"
                                className="rounded-4"
                                role="button"
                            />
                        )}
                      </Item>
                    </div>
                ))}

                {/*<div className="galleryGrid__item relative d-flex">*/}
                {/*  <img*/}
                {/*      src="/img/gallery/1/3.png"*/}
                {/*      alt="image"*/}
                {/*      className="rounded-4"*/}
                {/*      role="button"*/}
                {/*  />*/}
                {/*  <div className="absolute h-full col-12 flex-center">*/}
                {/*    <div*/}
                {/*        className="button -blue-1 size-40 rounded-full flex-center bg-white text-dark-1 js-gallery"*/}
                {/*        role="button"*/}
                {/*        onClick={() => setOpen(true)}*/}
                {/*    >*/}
                {/*      <i className="icon-play text-16" />*/}
                {/*    </div>*/}
                {/*  </div>*/}
                {/*</div>*/}

                <div className="galleryGrid__item relative d-flex">
                  <img
                      src={hotel.post?.full_url}
                      alt="image"
                      className="rounded-4"
                  />
                  {/*<div className="absolute px-10 py-10 col-12 h-full d-flex justify-end items-end">*/}
                  {/*  <Item*/}
                  {/*      original="/img/gallery/1/5.png"*/}
                  {/*      thumbnail="/img/gallery/1/5.png"*/}
                  {/*      width={450}*/}
                  {/*      height={375}*/}
                  {/*  >*/}
                  {/*    {({ ref, open }) => (*/}
                  {/*        <div*/}
                  {/*            className="button -blue-1 px-24 py-15 bg-white text-dark-1 js-gallery"*/}
                  {/*            ref={ref}*/}
                  {/*            onClick={open}*/}
                  {/*            role="button"*/}
                  {/*        >*/}
                  {/*          See All Photos*/}
                  {/*        </div>*/}
                  {/*    )}*/}
                  {/*  </Item>*/}
                  {/*</div>*/}
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
                  {/*<div className="col-12">*/}
                  {/*  <h3 className="text-22 fw-500">Property highlights</h3>*/}
                  {/*  <PropertyHighlights />*/}
                  {/*</div>*/}

                  <div id="overview" className="col-12">
                    {/*<h3 className="text-22 fw-500">Description</h3>*/}
                    <Overview data={hotel}/>
                  </div>

                  {/*<div id="rooms" className="col-12">*/}
                  {/*  <h3 className="text-22 fw-500">Room availability</h3>*/}
                  {/*  <AvailableRooms />*/}
                  {/*</div>*/}

                  {/*<div id="facilities" className="col-12">*/}
                  {/*  <h3 className="text-22 fw-500">Facilities</h3>*/}
                  {/*  <Facilities />*/}
                  {/*</div>*/}

                  {/*<div id="surroundings" className="col-12">*/}
                  {/*  <h3 className="text-22 fw-500">Surroundings</h3>*/}
                  {/*  <Surroundings />*/}
                  {/*</div>*/}

                  {/*<div id="faq" className="col-12">*/}
                  {/*  <h3 className="text-22 fw-500">FAQs</h3>*/}
                  {/*  <Faq />*/}
                  {/*</div>*/}

                  {/*<div id="reviews" className="col-12">*/}
                  {/*  <h3 className="text-22 fw-500">Guest reviews</h3>*/}
                  {/*  <div className="row y-gap-40">*/}
                  {/*    <div className="col-12">*/}
                  {/*      <div className="d-flex justify-between items-center">*/}
                  {/*        <h4 className="text-20 fw-500">Guest reviews</h4>*/}
                  {/*        <RatingTag />*/}
                  {/*      </div>*/}
                  {/*      <ReviewProgress />*/}
                  {/*    </div>*/}
                  {/*    <div className="col-12">*/}
                  {/*      <DetailsReview />*/}
                  {/*    </div>*/}
                  {/*    <div className="col-12">*/}
                  {/*      <ReplyFormReview />*/}
                  {/*    </div>*/}
                  {/*  </div>*/}
                  {/*</div>*/}
                </div>
              </div>

              {/*<div className="col-xl-4">*/}
              {/*  <SidebarRight />*/}
              {/*</div>*/}
            </div>
            <div className="relative overflow-hidden pt-40 sm:pt-20 js-section-slider item_gap-x30">
              <Hotels />
            </div>
          </div>

        </section>

        {/*<section className="pt-40">*/}
        {/*  <div className="container">*/}
        {/*    <h3 className="text-22 fw-500">You might also like</h3>*/}
        {/*    <div className="pt-20">*/}
        {/*      <Hotels2 />*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</section>*/}

        {/*<div className="mt-30">*/}
        {/*  <CallToActions />*/}
        {/*</div>*/}


        <DefaultFooter />
      </>
  );
};

export default HotelSingleV1Dynamic;
