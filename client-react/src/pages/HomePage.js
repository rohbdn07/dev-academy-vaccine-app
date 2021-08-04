import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataAction } from "../Redux/Action/getData-action";
import Navbar from "../components/Navbar";
import VaccineResults from "../components/results/VaccineResults";
import BarChart_producers from "../components/BarChart_producers";
import "./pages.css";
import VaccinationResult from "../components/VaccinationResult";
import DateSelection from "../components/DateSelection";
import Footer from "../components/footer/Footer";

export default function HomePage() {
  const dispatch = useDispatch();
  const { vaccineData, loading, errMessage } = useSelector(
    (state) => state.dataReducer
  );

  let AntiquaKysArray = [];
  let AntiquaHyksArray = [];
  let AntiquaTyksArray = [];
  let AntiquaOysArray = [];
  let AntiquaTaysArray = [];
  let AntiquareceivedVaccineArray = [];
  let VaccineNameAntiqua = "";
  let AntiquaCount = 0;

  let SolarBuddhicaKysArray = [];
  let SolarBuddhicaHyksArray = [];
  let SolarBuddhicaTyksArray = [];
  let SolarBuddhicaOysArray = [];
  let SolarBuddhicaTaysArray = [];
  let SolarBuddhicareceivedVaccineArray = [];
  let VaccineNameSolar = "";
  let SolarBuddhicaCount = 0;

  let ZerpfyKysArray = [];
  let ZerpfyHyksArray = [];
  let ZerpfyTyksArray = [];
  let ZerpfyOysArray = [];
  let ZerpfyTaysArray = [];
  let ZerpfyreceivedVaccineArray = [];
  let VaccineNameZerpfy = "";
  let ZerpfyCount = 0;

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log("there is an error fetching the data", error);
    }
  }, []);

  const fetchData = () => {
    dispatch(getDataAction());
  };

  const fetchAntiquaOrderedVaccine = () => {
    vaccineData.map((item, index) => {
      if (item.vaccine === "Antiqua") {
        VaccineNameAntiqua = "Antiqua";
        if (item.healthCareDistrict === "KYS") {
          AntiquaCount += 1;
          AntiquaKysArray.push(`${AntiquaCount},`);
        } else if (item.healthCareDistrict === "HYKS") {
          AntiquaCount += 1;
          AntiquaHyksArray.push(`${AntiquaCount},`);
        } else if (item.healthCareDistrict === "TYKS") {
          AntiquaCount += 1;
          AntiquaTyksArray.push(`${AntiquaCount},`);
        } else if (item.healthCareDistrict === "TAYS") {
          AntiquaCount += 1;
          AntiquaTaysArray.push(`${AntiquaCount},`);
        } else {
          AntiquaCount += 1;
          AntiquaOysArray.push(`${AntiquaCount},`);
        }
      }
    });
  };

  const fetchSolarbuddhicaOrderedVaccine = () => {
    vaccineData.map((item, index) => {
      if (item.vaccine === "SolarBuddhica") {
        VaccineNameSolar = "SolarBuddhica";
        if (item.healthCareDistrict === "KYS") {
          SolarBuddhicaCount += 1;
          SolarBuddhicaKysArray.push(`${SolarBuddhicaCount},`);
        } else if (item.healthCareDistrict === "HYKS") {
          SolarBuddhicaCount += 1;
          SolarBuddhicaHyksArray.push(`${SolarBuddhicaCount},`);
        } else if (item.healthCareDistrict === "TYKS") {
          SolarBuddhicaCount += 1;
          SolarBuddhicaTyksArray.push(`${SolarBuddhicaCount},`);
        } else if (item.healthCareDistrict === "TAYS") {
          SolarBuddhicaCount += 1;
          SolarBuddhicaTaysArray.push(`${SolarBuddhicaCount},`);
        } else {
          SolarBuddhicaCount += 1;
          SolarBuddhicaOysArray.push(`${SolarBuddhicaCount},`);
        }
      }
    });
  };

  const fetchZerpfyOrderedVaccine = () => {
    vaccineData.map((item, index) => {
      if (item.vaccine === "Zerpfy") {
        VaccineNameZerpfy = "Zerpfy";
        if (item.healthCareDistrict === "KYS") {
          ZerpfyCount += 1;
          ZerpfyKysArray.push(`${ZerpfyCount},`);
        } else if (item.healthCareDistrict === "HYKS") {
          ZerpfyCount += 1;
          ZerpfyHyksArray.push(`${ZerpfyCount},`);
        } else if (item.healthCareDistrict === "TYKS") {
          ZerpfyCount += 1;
          ZerpfyTyksArray.push(`${ZerpfyCount},`);
        } else if (item.healthCareDistrict === "TAYS") {
          ZerpfyCount += 1;
          ZerpfyTaysArray.push(`${ZerpfyCount},`);
        } else {
          ZerpfyCount += 1;
          ZerpfyOysArray.push(`${ZerpfyCount},`);
        }
      }
    });
  };

  fetchAntiquaOrderedVaccine();
  fetchSolarbuddhicaOrderedVaccine();
  fetchZerpfyOrderedVaccine();

  const fetchReceivedVaccine = (...arr) => {
    const totalarr = [arr];
    const totalItems = totalarr.reduce((total, num) => total + num);
    const getTotalOrderedItems = totalItems.reduce((total, num) => total + num);
    return getTotalOrderedItems;
  };

  const antiquaTotalorderVaccine = fetchReceivedVaccine(
    AntiquaKysArray.length,
    AntiquaHyksArray.length,
    AntiquaTyksArray.length,
    AntiquaOysArray.length,
    AntiquaTaysArray.length
  );

  const solarBuddhicaTotalOrderVaccine = fetchReceivedVaccine(
    SolarBuddhicaKysArray.length,
    SolarBuddhicaHyksArray.length,
    SolarBuddhicaTyksArray.length,
    SolarBuddhicaOysArray.length,
    SolarBuddhicaTaysArray.length
  );

  const zerpfyTotalOrderVaccine = fetchReceivedVaccine(
    ZerpfyKysArray.length,
    ZerpfyHyksArray.length,
    ZerpfyTyksArray.length,
    ZerpfyOysArray.length,
    ZerpfyTaysArray.length
  );

  return (
    <>
      <Navbar />
      {loading ? (
        <div>
          <h5 className="text-center">Loading...</h5>
        </div>
      ) : errMessage ? (
        <div>
          <h5 className="text-center">{errMessage}</h5>
        </div>
      ) : (
        <div className="homepage_wrapper">
          <div className="homepage_header col-11 mx-auto">
            <h3>Vaccines information:</h3>
            <p>
              The given data(s) are categorized into different intresting
              information. Information are presented in the form of Graphs and
              textual form.
            </p>
          </div>
          <h6 className="col-11 mx-auto pt-3">Ordered vaccines:</h6>
          <div className="hompage_result col-lg-11 mx-auto">
            <VaccineResults
              receivedVaccineArray={AntiquareceivedVaccineArray}
              VaccineName={VaccineNameAntiqua}
              dataLength={antiquaTotalorderVaccine}
              kysArray={AntiquaKysArray}
              HyksArray={AntiquaHyksArray}
              TyksArray={AntiquaTyksArray}
              OysArray={AntiquaOysArray}
              TaysArray={AntiquaTaysArray}
            />
          </div>
          <hr />
          <div className="hompage_result col-lg-11 mx-auto">
            <VaccineResults
              receivedVaccineArray={SolarBuddhicareceivedVaccineArray}
              VaccineName={VaccineNameSolar}
              dataLength={solarBuddhicaTotalOrderVaccine}
              kysArray={SolarBuddhicaKysArray}
              HyksArray={SolarBuddhicaHyksArray}
              TyksArray={SolarBuddhicaTyksArray}
              OysArray={SolarBuddhicaOysArray}
              TaysArray={SolarBuddhicaTaysArray}
            />
          </div>
          <hr />
          <div className="hompage_result col-lg-11 mx-auto">
            <VaccineResults
              receivedVaccineArray={ZerpfyreceivedVaccineArray}
              VaccineName={VaccineNameZerpfy}
              dataLength={zerpfyTotalOrderVaccine}
              kysArray={ZerpfyKysArray}
              HyksArray={ZerpfyHyksArray}
              TyksArray={ZerpfyTyksArray}
              OysArray={ZerpfyOysArray}
              TaysArray={ZerpfyTaysArray}
            />
          </div>
          <hr />
          <h6 className="col-11 mx-auto pt-3">Vaccination info:</h6>
          <div className="hompage_result col-lg-11 mx-auto">
            <VaccinationResult />
          </div>
          <hr />
          {/* <div className="hompage_result col-lg-11 mx-auto">
            <DateSelection />
          </div> */}
          <hr />
          <Footer />
        </div>
      )}
    </>
  );
}
