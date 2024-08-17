import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import CallToActions from '../../../components/common/CallToActions';
import Seo from '../../../components/common/Seo';
import Header11 from '../../../components/header/header-11';
import DefaultFooter from '../../../components/footer/default';
import MainFilterSearchBox from '../../../components/hotel-list/hotel-list-v1/MainFilterSearchBox';
import TopHeaderFilter from '../../../components/hotel-list/hotel-list-v1/TopHeaderFilter';
import HotelProperties from '../../../components/hotel-list/hotel-list-v1/HotelProperties';
import Pagination from '../../../components/hotel-list/common/Pagination';
import Sidebar from '../../../components/hotel-list/hotel-list-v1/Sidebar';
import Hotels from "../../../components/hotels/Hotels";

const Index = () => {
    const router = useRouter();
    const { firstField, secondField } = router.query;
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (firstField && secondField) {
                    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contenties/${firstField}/${secondField}`);
                    if (response.ok) {
                        const result = await response.json();
                        setData(result);
                    } else {
                        console.error('Failed to fetch data');
                    }
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [firstField, secondField]);

    return (
        <>
            <Seo pageTitle={ data && `${data.nome_subcategory} Em ${data.city}`} />
            {/* End Page Title */}

            <div className="header-margin"></div>
            {/* header top margin */}

            <Header11 />
            {/* End Header 1 */}

            <section className="pt-40 pb-40 bg-light-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="text-center">
                                {/* Ajuste para verificar se data existe antes de acessar suas propriedades */}
                                {data && (
                                    <h1  className="text-30 fw-600 text-left">
                                        {data.nome_subcategory} Em {data.city}
                                    </h1>
                                )}
                            </div>
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
                            <TopHeaderFilter data={data} />
                            <div className="mt-30"></div>
                            {/* End mt--30 */}
                            <div className="row y-gap-30">
                                {/* Renderiza o componente HotelProperties somente se data estiver definido */}
                                {data && <HotelProperties data={data.data} />}
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

export default Index;
