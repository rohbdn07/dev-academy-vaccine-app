import React from 'react';
import SearchForm from '../components/SearchForm';
import Navbar from '../components/Navbar';
import Result from '../components/Result';
import './pages.css';

export default function HomePage() {
    return (
        <>
            <Navbar />
            {/* <SearchForm /> */}
           <div className="homepage_wrapper">
                <Result />
           </div>
        </>
    )
}
