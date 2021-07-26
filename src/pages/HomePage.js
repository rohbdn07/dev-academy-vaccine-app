import React from 'react';
import SearchForm from '../components/SearchForm';
import Navbar from '../components/Navbar';
import AntiquaResult from '../components/AntiquaResult/AntiquaResult';
import BarChart_producers from '../components/BarChart_producers';
import './pages.css';
import SolarBuddhicaResult from '../components/SolarBuddhicaResult';
import ZerpfyResult from '../components/ZerpfyResult';
import VaccinationResult from '../components/VaccinationResult';
import DateSelection from '../components/DateSelection';
import Footer from '../components/footer/Footer';

export default function HomePage() {
    return (
        <>
            <Navbar />
            {/* <SearchForm /> */}
        <div className="homepage_wrapper">
                <div className="homepage_header col-11 mx-auto">
                    <h3>Vaccines information:</h3>
                    <p>The given data(s) are categorized into different intresting information. 
                        Information are presented in the form of Graphs and textual form.</p>
                </div>
                <h6 className="col-11 mx-auto pt-3">
                    Ordered vaccines:
                </h6>
                <div className="hompage_result col-lg-11 mx-auto">
                    <AntiquaResult />
                </div>
                <hr />
                <div className="hompage_result col-lg-11 mx-auto">
                    <SolarBuddhicaResult />
                </div>
                <hr />
                <div className="hompage_result col-lg-11 mx-auto">
                    <ZerpfyResult />
                </div>
                <hr />
                <h6 className="col-11 mx-auto pt-3">
                    Vaccination info:
                </h6>
                <div className="hompage_result col-lg-11 mx-auto">
                    <VaccinationResult/>
                </div>
                <hr />
                <div className="hompage_result col-lg-11 mx-auto">
                    <DateSelection/>
                </div>
                <hr />
                    <Footer />
        </div>
        </>
    )
}
