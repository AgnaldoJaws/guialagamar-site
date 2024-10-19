import dynamic from "next/dynamic";
import AddBanner from "../../components/add-banner/AddBanner";
import Seo from "../../components/common/Seo";
import PopularDestinations from "../../components/destinations/PopularDestinations";
import DefaultFooter from "../../components/footer/default";
import Header1 from "../../components/header/header-1";
import Hero1 from "../../components/hero/hero-1";
import Hotels from "../../components/hotels/Hotels";

const Home_1 = () => {
    return (
        <>
            <Seo pageTitle="Guia Lagamar" />
            <Header1 />
            <Hero1 />

            <section className="layout-pt-lg layout-pb-md" data-aos="fade-up">
                <div className="container">
                    <div className="row y-gap-20 justify-between items-end">
                        <div className="col-auto">
                            <div className="sectionTitle -md">
                                <h2 className="sectionTitle__title">Cidades</h2>
                                <p className="sectionTitle__text mt-5 sm:mt-0">
                                    Quatro cidades ricas em natureza e cultura
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative pt-40 sm:pt-20">
                        <PopularDestinations />
                    </div>
                </div>
            </section>

            <section className="layout-pt-md layout-pb-md">
                <div className="container">
                    <div className="row y-gap-20">
                        <AddBanner />
                    </div>
                </div>
            </section>

            <section className="layout-pt-md layout-pb-md">
                <div className="container">
                    <div className="row y-gap-10 justify-between items-end">
                        <div className="col-auto">
                            <div className="sectionTitle -md">
                                <h2 className="sectionTitle__title">Experiências</h2>
                                <p className="sectionTitle__text mt-5 sm:mt-0">
                                    O Lagamar tem experiências incríveis
                                </p>
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

export default dynamic(() => Promise.resolve(Home_1), { ssr: false });
