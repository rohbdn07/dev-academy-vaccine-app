import React from 'react';
import SearchForm from '../components/SearchForm';
import Navbar from '../components/Navbar';
import AntiquaResult from '../components/AntiquaResult';
import BarChart_producers from '../components/BarChart_producers';
import './pages.css';
import SolarBuddhicaResult from '../components/SolarBuddhicaResult';
import ZerpfyResult from '../components/ZerpfyResult';
import VaccinationResult from '../components/VaccinationResult';

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
                <h6 className="col-11 mx-auto pt-3">
                    Ordered vaccines are:
                </h6>
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
                <h6 className="col-11 mx-auto pt-3">
                    Vaccination info are:
                </h6>
                <div className="hompage_result col-11 mx-auto">
                    <VaccinationResult/>
                </div>
                <hr />
           </div>
        </>
    )
}
