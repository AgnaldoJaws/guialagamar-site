
import Seo from "../../../components/common/Seo";
import Header11 from "../../../components/header/header-11";
import DefaultFooter from "../../../components/footer/default";
import HotelProperties from "../../../components/hotel-list/hotel-list-v4/HotelProperties";
import { useRouter } from 'next/router';
import {useEffect, useState} from "react";
import Hotels from "../../../components/hotels/Hotels";

const id = () => {

    const router = useRouter();
    const { id } = router.query;
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            fetch(`${process.env.NEXT_PUBLIC_API_URL}/contentiesCity/${id}`)
                .then((response) => response.json())
                .then((data) => {
                    setData(data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error('Erro ao buscar dados:', error);
                    setLoading(false);
                });
        }
    }, [id]);



    return (
        <>
            <Seo pageTitle="Hotel List v5" />
            {/* End Page Title */}

            <div className="header-margin"></div>
            {/* header top margin */}

            <Header11 />
            {/* End Header 1 */}

            <section className="pt-40 pb-40 bg-blue-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="text-center">
                                <h1 className="text-30 fw-600">Bem Vindo a {data && data.city}</h1>
                            </div>
                            {/* End text-center */}
                            {/*<MainFilterSearchBox />*/}
                        </div>
                        {/* End col-12 */}
                    </div>
                </div>
            </section>
            {/* Top SearchBanner */}

            <section className="layout-pt-md layout-pb-lg">
                <div className="container">
                    <div className="row y-gap-30">


                        <div className="col-xl-12 ">
                            {/*<TopHeaderFilter />*/}
                            <div className="mt-30"></div>
                            {/* End mt--30 */}
                            <div className="row y-gap-30">
                                <HotelProperties data={data} />
                                <div className="relative overflow-hidden pt-40 sm:pt-20 js-section-slider item_gap-x30">
                                    <Hotels />
                                </div>
                            </div>
                            {/* End .row */}
                            {/*<Pagination />*/}
                        </div>
                        {/* End .col for right content */}
                    </div>
                    {/* End .row */}
                </div>
                {/* End .container */}
            </section>
            {/* End layout for listing sidebar and content */}

            {/*<CallToActions />*/}
            {/* End Call To Actions Section */}

            <DefaultFooter />
        </>
    );
};

export default id;