import React from 'react';
import SearchForm from '../components/SearchForm';
import Navbar from '../components/Navbar';
import AntiquaResult from '../components/AntiquaResult';
import BarChart_Antiqua from '../components/BarChart_Antiqua';
import './pages.css';
import SolarBuddhicaResult from '../components/SolarBuddhicaResult';
import ZerpfyResult from '../components/ZerpfyResult';

export default function HomePage() {
    return (
        <>
            <Navbar />
            {/* <SearchForm /> */}
           <div className="homepage_wrapper col-lg-12">
                <div className="homepage_header col-11 mx-auto">
                    <h3>Result section</h3>
                    <p>The given data(s) are categorized into different intresting informations. 
                        Informations are presented in the form of Graphs and textual form.</p>
                </div>
                <div className="hompage_result col-11 mx-auto">
                    <AntiquaResult />
                </div>
                <hr />
                <div className="hompage_result col-11 mx-auto">
                    <SolarBuddhicaResult />
                </div>
                <hr />
                <div className="hompage_result col-11 mx-auto">
                    <ZerpfyResult />
                </div>
                <hr />
           </div>
        </>
    )
}
