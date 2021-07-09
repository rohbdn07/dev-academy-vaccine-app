import React from 'react';
import SearchForm from '../components/SearchForm';
import Navbar from '../components/Navbar';
import Result from '../components/Result';
import BarChart_Antiqua from '../components/BarChart_Antiqua';
import './pages.css';

export default function HomePage() {
    return (
        <>
            <Navbar />
            {/* <SearchForm /> */}
           <div className="homepage_wrapper col-lg-12">
                <div className="homepage_header col-11 mx-auto">
                    <h3>Result section</h3>
                    <p>The given data(s) are cateogized into different intresting informations. 
                        Informations are presented in the form of Graphs and textual form.</p>
                </div>
                <div className="hompage_result col-11 mx-auto">
                    <Result />
                    <BarChart_Antiqua />
                </div>
            
           </div>
        </>
    )
}
