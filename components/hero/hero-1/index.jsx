import MainFilterSearchBox from "./MainFilterSearchBox";

const index = () => {
  return (
      <section className="masthead -type-1 z-5">
        <div className="masthead__bg">
          <img
              alt="Imagem principal do guia Lagamar 2024"
              src="/img/masthead/1/imagem_principal_guia_lagamar_2024.png"
              className="js-lazy"
          />
        </div>
        <div className="container">
          <div className="row justify-center">
            <div className="col-auto">
              <div className="text-center">
                <h1
                    className="text-60 lg:text-40 md:text-30 text-white"
                    data-aos="fade-up"
                >
                  Descubra a natureza e a cultura do Lagamar
                </h1>
                <p
                    className="text-white mt-6 md:mt-10"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                  Conectando pessoas a experiências únicas no maior pedaço de Mata Atlântica do planeta
                </p>
              </div>
              {/* End hero title */}

              <div
                  className="tabs -underline mt-600 js-tabs"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  aria-label="Filtros de pesquisa"
              >
                <MainFilterSearchBox />
              </div>
              {/* End tab-filter */}
            </div>
          </div>
        </div>
      </section>
  );
};

export default index;
