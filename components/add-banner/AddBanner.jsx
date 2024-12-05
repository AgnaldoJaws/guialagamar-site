import Image from "next/image";
import Link from "next/link";

const AddBanner = () => {
  const addContent = [
    {
      id: 1,
      img: "/img/backgrounds/imagem_roteiro_botocinza_guia_lagamar_2024.png",
      title: (
        <>
          Turismo de observação
        </>
      ),
      meta: "",
      routerPath: `/hotel/hotel-single-v1/${process.env.NEXT_OBSERVATION_TOURISM}`,
      delayAnimation: "0",
    },
    {
      id: 2,
      img: "/img/backgrounds/imagem_roteiro_fandango_guia_lagamar_2024.png",
      title: "Patrimônio Cultural",
      meta: "",
      routerPath: `/hotel/hotel-single-v1/${process.env.NEXT_OBSERVATION_TOURISM}`,
      delayAnimation: "100",
    },
  ];

  return (
    <>
      {addContent.map((item) => (
        <div
          className="col-md-6"
          data-aos="fade-up"
          data-aos-delay={item.delayAnimation}
          key={item.id}
        >
          <div className="ctaCard -type-1 rounded-4 ">
            <div className="ctaCard__image ratio ratio-63:55">
              <Image
                width={636}
                height={555}
                className="img-ratio js-lazy loaded"
                src={item.img}
                alt="image"
              />
            </div>
            <div className="ctaCard__content py-70 px-70 lg:py-30 lg:px-30">
              {item.meta ? (
                <>
                  <div className="text-15 fw-500 text-white mb-10">
                    Enjoy Summer Deals
                  </div>
                </>
              ) : (
                ""
              )}

              <h1 className="text-40 lg:text-26 text-white">{item.title}</h1>
              <div className="d-inline-block mt-30">
                <Link
                  href={item.routerPath}
                  className="button px-48 py-15 -blue-1 -min-180 bg-white text-dark-1"
                >
                  Conhecer
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AddBanner;
