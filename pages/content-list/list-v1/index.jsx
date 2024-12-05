import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Seo from '../../../components/common/Seo';
import Header11 from '../../../components/header/header-11';
import DefaultFooter from '../../../components/footer/default';
import TopHeaderFilter from '../../../components/hotel-list/hotel-list-v1/TopHeaderFilter';
import HotelProperties from '../../../components/hotel-list/hotel-list-v1/HotelProperties';

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
            <Seo pageTitle={data && `${data.nome_subcategory} Em ${data.city}`} />
            <div className="header-margin"></div>
            <Header11 />

            <section className="pt-40 pb-40 bg-light-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="text-center">
                                {data && (
                                    <h1 className="text-30 fw-600 text-left">
                                        {data.nome_subcategory} Em {data.city}
                                    </h1>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="layout-pt-md layout-pb-lg">
                <div className="container">
                    <div className="row y-gap-30">
                        <div className="col-xl-12 ">
                            <TopHeaderFilter data={data} />
                            <div className="mt-30"></div>
                            <div className="row y-gap-30">
                                {data && <HotelProperties data={data.data} />}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <DefaultFooter />
        </>
    );
};

export default Index;
