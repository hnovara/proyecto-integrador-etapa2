import React, { useState, useEffect } from 'react';
import ProductsWrapper from "../components/ProductsWrapper";
import Search from "../components/Searchy";

function Home() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm);
    };

    return (
        <div>
            <Search onSearch={handleSearch} />
            <ProductsWrapper searchTerm={searchTerm} /> 
        </div>
    );
}

export default Home;