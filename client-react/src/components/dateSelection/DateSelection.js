/* eslint-disable array-callback-return */
import React, { useState } from "react";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from "react-redux";
import PieChartAtSelectedDate from "../pieChart/PieChart-SelecedDate";

export default function DateSelection() {
    const [startDate, setStartDate] = useState(new Date());
    const { vaccineData, vaccinationDoneData } = useSelector(
        (state) => state.dataReducer
    );

    const getInfoOnSelectedDateOfAllVaccines = (vaccineName) => {
        return (
            vaccineData !== undefined &&
            vaccineData?.filter((item) => {
                const selectedDate = moment(startDate).format("YYYY-MM-DD");
                const getArrivedDate = item.arrived;
                const expireDate = moment(getArrivedDate)
                    .add(30, "days")
                    .format("YYYY-MM-DD");

                if (item.vaccine === vaccineName) {
                    return expireDate <= selectedDate;
                }
                return item;
            })
        );
    };

    const expiredBottleOfAntiqua =
        getInfoOnSelectedDateOfAllVaccines("Antiqua");
    const expiredBottleOfsolarBuddhica =
        getInfoOnSelectedDateOfAllVaccines("SolarBuddhica");
    const expiredBottleOfZerpfy = getInfoOnSelectedDateOfAllVaccines("Zerpfy");

    const fetchVaccinationUntilSelectedDate = (vaccineName) => {
        return (
            vaccinationDoneData !== undefined &&
            vaccinationDoneData?.filter((vaccinationDoneItem) => {
                return (
                    vaccineData !== undefined &&
                    vaccineData?.some((someItem) => {
                        if (someItem.vaccine === vaccineName) {
                            if (
                                vaccinationDoneItem.sourceBottle === someItem.id
                            ) {
                                const selectedDate =
                                    moment(startDate).format("YYYY-MM-DD");
                                const getVaccinationDate = moment(
                                    vaccinationDoneItem.vaccinationDate
                                ).format("YYYY-MM-DD");
                                return getVaccinationDate <= selectedDate;
                            }
                        }
                    })
                );
            })
        );
    };

    const totalAntiqueVaccineGivenUntilSelectedDate =
        fetchVaccinationUntilSelectedDate("Antiqua");
    const totalSolarVaccineGivenUntilSelectedDate =
        fetchVaccinationUntilSelectedDate("SolarBuddhica");
    const totalZerpfyVaccineGivenUntilSelectedDate =
        fetchVaccinationUntilSelectedDate("Zerpfy");

    const fetchVaccinationOnSelectedDate = (vaccineName) => {
        return (
            vaccinationDoneData !== undefined &&
            vaccinationDoneData?.filter((vaccinationDoneItem) => {
                return (
                    vaccineData !== undefined &&
                    vaccineData?.some((someItem) => {
                        if (someItem.vaccine === vaccineName) {
                            if (
                                vaccinationDoneItem.sourceBottle === someItem.id
                            ) {
                                const selectedDate =
                                    moment(startDate).format("YYYY-MM-DD");
                                const getVaccinationDate = moment(
                                    vaccinationDoneItem.vaccinationDate
                                ).format("YYYY-MM-DD");
                                return selectedDate === getVaccinationDate;
                            }
                        }
                    })
                );
            })
        );
    };

    const antiquaVaccineOnSelectedDate =
        fetchVaccinationOnSelectedDate("Antiqua");
    const solarVaccineOnSelectedDate =
        fetchVaccinationOnSelectedDate("SolarBuddhica");
    const zerpfyVaccineOnSelectedDate =
        fetchVaccinationOnSelectedDate("Zerpfy");

    const fetchTotalVaccinesGivenatSelectedDate =
        vaccinationDoneData !== undefined &&
        vaccinationDoneData?.filter((item) => {
            const selectedDate = moment(startDate).format("YYYY-MM-DD");
            const getArrivedDate = moment(item.vaccinationDate).format(
                "YYYY-MM-DD"
            );
            return selectedDate === getArrivedDate;
        });

    const fetchArrivedOrderOfAllVaccines = (vaccineName) => {
        return (
            vaccineData !== undefined &&
            vaccineData?.filter((item) => {
                if (item.vaccine === vaccineName) {
                    const selectedDate = moment(startDate).format("YYYY-MM-DD");
                    const getArrivedDate = moment(item.arrived).format(
                        "YYYY-MM-DD"
                    );
                    return selectedDate === getArrivedDate;
                }
            })
        );
    };

    const fetchArrivedOrderOfAntiqua =
        fetchArrivedOrderOfAllVaccines("Antiqua");

    const fetchArrivedOrderOfSolar =
        fetchArrivedOrderOfAllVaccines("SolarBuddhica");

    const fetchArrivedOrderOfZerpfy = fetchArrivedOrderOfAllVaccines("Zerpfy");

    const totalOrderedBottlesOnselectedDate =
        fetchArrivedOrderOfAntiqua.length +
        fetchArrivedOrderOfSolar.length +
        fetchArrivedOrderOfZerpfy.length;

    return (
        <>
            <div className="date_selection col-lg-12">
                <div className="col-lg-5 col-sm-11">
                    <div className="col-lg-12 col-sm-12">
                        <label for="validationCustom04" className="form-label">
                            Select a date
                        </label>
                        <br />
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            dateFormat="yyyy-MM-dd"
                        />
                    </div>
                    <div className="mt-5">
                        <p>
                            On given table, you'll see the information of
                            vaccines until the selected date:
                        </p>
                    </div>

                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#Producers</th>
                                <th scope="col">Injt.amt/bottle</th>
                                <th scope="col">Given vaccines</th>
                                <th scope="col">Expired bottles</th>
                                <th scope="col">Expired vaccines</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="table-primary">
                                <th scope="row">Antique</th>
                                <td>4</td>
                                <td>
                                    {
                                        totalAntiqueVaccineGivenUntilSelectedDate.length
                                    }
                                </td>
                                <td>{expiredBottleOfAntiqua.length}</td>
                                <td>{expiredBottleOfAntiqua.length * 4}</td>
                            </tr>
                            <tr className="table-success">
                                <th scope="row">SolarBuddhica</th>
                                <td>6</td>
                                <td>
                                    {
                                        totalSolarVaccineGivenUntilSelectedDate.length
                                    }
                                </td>
                                <td>{expiredBottleOfsolarBuddhica.length}</td>
                                <td>
                                    {expiredBottleOfsolarBuddhica.length * 6}
                                </td>
                            </tr>
                            <tr className="table-warning">
                                <th scope="row">Zerpfy</th>
                                <td>5</td>
                                <td>
                                    {
                                        totalZerpfyVaccineGivenUntilSelectedDate.length
                                    }
                                </td>
                                <td>{expiredBottleOfZerpfy.length}</td>
                                <td>{expiredBottleOfZerpfy.length * 5}</td>
                            </tr>
                            <tr className="table-warning">
                                <th scope="row">Total</th>
                                <td>-</td>
                                <td>
                                    {totalZerpfyVaccineGivenUntilSelectedDate.length +
                                        totalAntiqueVaccineGivenUntilSelectedDate.length +
                                        totalSolarVaccineGivenUntilSelectedDate.length}
                                </td>
                                <td>
                                    {expiredBottleOfZerpfy.length +
                                        expiredBottleOfAntiqua.length +
                                        expiredBottleOfsolarBuddhica.length}
                                </td>
                                <td>
                                    {expiredBottleOfZerpfy.length * 5 +
                                        expiredBottleOfAntiqua.length * 4 +
                                        expiredBottleOfsolarBuddhica.length * 6}
                                </td>
                            </tr>
                        </tbody>
                        <p>Each bottle(s) expire after 30 days of arrival.</p>
                    </table>

                    <div className="textInfo">
                        <ul className="list-group">
                            <p>
                                Information of vaccines exact at the selected
                                date:
                            </p>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <p>no. of Antiqua vaccine given:</p>
                                <span className="badge bg-primary rounded-pill">
                                    {antiquaVaccineOnSelectedDate.length}
                                </span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <p>no. of SolarBuddhica vaccine given:</p>
                                <span className="badge bg-success rounded-pill">
                                    {solarVaccineOnSelectedDate.length}
                                </span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <p>no. of Zerpfy vaccine given:</p>
                                <span className="badge bg-warning rounded-pill">
                                    {zerpfyVaccineOnSelectedDate.length}
                                </span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <p>total no. of vaccines given:</p>
                                <span className="badge bg-dark rounded-pill">
                                    {
                                        fetchTotalVaccinesGivenatSelectedDate.length
                                    }
                                </span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <p>no. of arrived vaccine's bottles:</p>
                                <span className="badge bg-info rounded-pill">
                                    {totalOrderedBottlesOnselectedDate}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {fetchTotalVaccinesGivenatSelectedDate.length > 0 ? (
                    <div className="pieChart col-lg-6">
                        <PieChartAtSelectedDate
                            fetchVaccinationDateOfAntique={
                                antiquaVaccineOnSelectedDate.length
                            }
                            fetchVaccinationDateOfSolarBuddhica={
                                solarVaccineOnSelectedDate.length
                            }
                            fetchVaccinationDateOfZerpfy={
                                zerpfyVaccineOnSelectedDate.length
                            }
                        />
                    </div>
                ) : null}
            </div>
        </>
    );
}
