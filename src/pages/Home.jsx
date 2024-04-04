import React, { useState, useEffect } from 'react';
import ProductsWrapper from "../components/ProductsWrapper";
import Search from "../components/Searchy";
import Banner from '../components/Banner';

function Home() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (term) => {
        setSearchTerm(term);
      };

    return (
        <div className='home__container'>
            <Banner/>
            <Search onSearch={handleSearch} />
            <ProductsWrapper searchTerm={searchTerm} /> 
        </div>
    );
}

export default Home;