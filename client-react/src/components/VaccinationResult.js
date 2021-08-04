import React from "react";
import { useDispatch, useSelector } from "react-redux";
import VaccinationText from "./VaccinationText";
import PieChartVaccination from "./PieChart_vaccination";
import "./style.css";

export default function VaccinationResult() {
  const dispatch = useDispatch();
  const { vaccinationDoneData, vaccineData } = useSelector(
    (state) => state.dataReducer
  );
  let count = 0;
  let totalVaccinationNumber = [];
  let totalFemaleTakenVaccine = [];
  let totalMaleTakenVaccine = [];
  let totalNonBinaryTakenVaccine = [];

  const fetchVaccinationOnGender = (vaccinationDoneData) => {
    vaccinationDoneData.map((item, index) => {
      if (item) {
        count += 1;
        totalVaccinationNumber.push(`${count},`);
      }
      if (item.gender === "female") {
        count += 1;
        totalFemaleTakenVaccine.push(`${count},`);
      } else if (item.gender === "male") {
        count += 1;
        totalMaleTakenVaccine.push(`${count},`);
      } else {
        count += 1;
        totalNonBinaryTakenVaccine.push(`${count},`);
      }
    });
  };

  fetchVaccinationOnGender(vaccinationDoneData);

  const fetchVaccinationData = (vaccineName) => {
    return vaccinationDoneData.filter((vaccinationItem) => {
      return vaccineData.some((someitem) => {
        if (someitem.vaccine === vaccineName) {
          return vaccinationItem.sourceBottle === someitem.id;
        }
      });
    });
  };

  const totalAntiqueVaccineUsed = fetchVaccinationData("Antiqua");

  const totalSolarBuddhicaVaccineUsed = fetchVaccinationData("SolarBuddhica");

  const totalZerpfyVaccineUsed = fetchVaccinationData("Zerpfy");

  return (
    <>
      <div className="col-lg-10 vaccinationResult">
        <VaccinationText
          totalVaccinationNumber={totalVaccinationNumber.length}
          totalFemaleTakenVaccine={totalFemaleTakenVaccine.length}
          totalMaleTakenVaccine={totalMaleTakenVaccine.length}
          totalNonBinaryTakenVaccine={totalNonBinaryTakenVaccine.length}
          totalAntiqueVaccineUsed={totalAntiqueVaccineUsed.length}
          totalSolarBuddhicaVaccineUsed={totalSolarBuddhicaVaccineUsed.length}
          totalZerpfyVaccineUsed={totalZerpfyVaccineUsed.length}
        />

        <PieChartVaccination
          totalVaccinationNumber={totalVaccinationNumber.length}
          totalMaleTakenVaccine={totalMaleTakenVaccine.length}
          totalFemaleTakenVaccine={totalFemaleTakenVaccine.length}
          totalNonBinaryTakenVaccine={totalNonBinaryTakenVaccine.length}
          totalAntiqueVaccineUsed={totalAntiqueVaccineUsed.length}
          totalSolarBuddhicaVaccineUsed={totalSolarBuddhicaVaccineUsed.length}
          totalZerpfyVaccineUsed={totalZerpfyVaccineUsed.length}
        />
      </div>
    </>
  );
}
