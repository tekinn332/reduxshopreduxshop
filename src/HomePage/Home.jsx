import React from 'react';
import productsData from '../data/productsData';
import ProductsCard from '../components/ProductCart';

const Home = () => {
    return (
        <>
            <section id="home">
                <div>
                    <div  >
                        {
                            productsData.map((item) => (
                                <ProductsCard key={item.id} {...item} />
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;