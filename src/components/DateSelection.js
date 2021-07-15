import React, {useState} from 'react';
import moment from 'moment';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useSelector} from 'react-redux';
import PieChartAtSelectedDate from './PieChart-SelecedDate';



export default function DateSelection() {
    const [startDate, setStartDate] = useState(new Date());
    const { allVaccinationData, allAntiquaData, allSolarBuddhicaData, allZerpfyData } = useSelector(state => state.dataReducer);
    let antiquaExpiredBottle = 0;
    let solarBuddhicaExpiredBottle = 0;
    let ZerpfyExpiredBottle = 0;

    const getInfoOnSelectedDateOfAntiuqe = () => {
        return allAntiquaData.map((item)=> {
            const selectedDate = moment(startDate).format("YYYY-MM-DD")
            const getArrivedDate = item.arrived;
            const expireDate = moment(getArrivedDate).add(30, "days").format("YYYY-MM-DD");

        if(expireDate <= selectedDate) {
            antiquaExpiredBottle += 1
        }
    
        })
    }

    getInfoOnSelectedDateOfAntiuqe();

    const getInfoOnSelectedDateOfSolarBuddhica = () => {
        return allSolarBuddhicaData.map((item)=> {
            const selectedDate = moment(startDate).format("YYYY-MM-DD")
            const getArrivedDate = item.arrived;
            const expireDate = moment(getArrivedDate).add(30, "days").format("YYYY-MM-DD");

        if(expireDate <= selectedDate) {
            solarBuddhicaExpiredBottle += 1
        }
    
        })
    }
    getInfoOnSelectedDateOfSolarBuddhica();

    const getInfoOnSelectedDateOfZerpfy = () => {
        return allZerpfyData.map((item)=> {
            const selectedDate = moment(startDate).format("YYYY-MM-DD")
            const getArrivedDate = item.arrived;
            const expireDate = moment(getArrivedDate).add(30, "days").format("YYYY-MM-DD");

        if(expireDate <= selectedDate) {
            ZerpfyExpiredBottle += 1
        }
    
        })
    }
    getInfoOnSelectedDateOfZerpfy();

    const fetchVaccinationDateOfAntique = allVaccinationData.filter((allVacccinationItem)=> {
        return allAntiquaData.some((antiuqeVaccineItem)=> {
            if (allVacccinationItem.sourceBottle === antiuqeVaccineItem.id) {
                const selectedDate = moment(startDate).format("YYYY-MM-DD")
                const getVaccinationDate = moment(allVacccinationItem.vaccinationDate).format("YYYY-MM-DD");
                   return selectedDate === getVaccinationDate;

            }
        })
    })

    const fetchVaccinationDateOfSolarBuddhica = allVaccinationData.filter((allVacccinationItem)=> {
        return allSolarBuddhicaData.some((solarVaccineItem)=> {
            if (allVacccinationItem.sourceBottle === solarVaccineItem.id) {
                const selectedDate = moment(startDate).format("YYYY-MM-DD")
                const getVaccinationDate = moment(allVacccinationItem.vaccinationDate).format("YYYY-MM-DD");
                   return selectedDate === getVaccinationDate;

            }
        })
    })

    const fetchVaccinationDateOfZerpfy = allVaccinationData.filter((allVacccinationItem)=> {
        return allZerpfyData.some((zerpfyVaccineItem)=> {
            if (allVacccinationItem.sourceBottle === zerpfyVaccineItem.id) {
                const selectedDate = moment(startDate).format("YYYY-MM-DD")
                const getVaccinationDate = moment(allVacccinationItem.vaccinationDate).format("YYYY-MM-DD");
                   return selectedDate === getVaccinationDate;

            }
        })
    })

    const fetchTotalVaccinesGivenatSelectedDate = allVaccinationData.filter((item)=> {
        const selectedDate = moment(startDate).format("YYYY-MM-DD")
        const getArrivedDate = moment(item.vaccinationDate).format("YYYY-MM-DD");
        return selectedDate === getArrivedDate;
    })

    const fetchArrivedOrderOfAntiuqa = allAntiquaData.filter((item)=> {
        const selectedDate = moment(startDate).format("YYYY-MM-DD")
        const getArrivedDate = moment(item.arrived).format("YYYY-MM-DD");
        return selectedDate === getArrivedDate;
    })

    const fetchArrivedOrderOfSolar = allSolarBuddhicaData.filter((item)=> {
        const selectedDate = moment(startDate).format("YYYY-MM-DD")
        const getArrivedDate = moment(item.arrived).format("YYYY-MM-DD");
        return selectedDate === getArrivedDate;
    })

    const fetchArrivedOrderOfZerpfy = allZerpfyData.filter((item)=> {
        const selectedDate = moment(startDate).format("YYYY-MM-DD")
        const getArrivedDate = moment(item.arrived).format("YYYY-MM-DD");
        return selectedDate === getArrivedDate;
    })


    const totalOrderedBottlesOnselectedDate = fetchArrivedOrderOfAntiuqa.length + fetchArrivedOrderOfSolar.length + fetchArrivedOrderOfZerpfy.length;



    return (
        <>
        <div className="d-flex col-lg-12">
            <div className="col-lg-5">
                    <div className="col-6">
                            <label for="validationCustom04" className="form-label">Select a date</label>
                            <br />
                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}
                            dateFormat="yyyy-MM-dd"/>
                    </div>

                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                            <th scope="col">#Producers</th>
                            <th scope="col">Injt.amt/bottle</th>
                            <th scope="col">Expired bottles</th>
                            <th scope="col">Expired vaccines</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="table-primary">
                            <th scope="row">Antique</th>
                            <td>4</td>
                            <td>{antiquaExpiredBottle}</td>
                            <td>{antiquaExpiredBottle * 4}</td>
                            </tr>
                            <tr className="table-success">
                            <th scope="row">SolarBuddhica</th>
                            <td>6</td>
                            <td>{solarBuddhicaExpiredBottle}</td>
                            <td>{solarBuddhicaExpiredBottle * 6}</td>
                            </tr>
                            <tr className="table-warning">
                            <th scope="row">Zerpfy</th>
                            <td>5</td>
                            <td>{ZerpfyExpiredBottle}</td>
                            <td>{ZerpfyExpiredBottle * 5}</td>
                            </tr>
                        </tbody>
                        <p>Each bottle(s) expire after 30 days of arrival.</p>
                    </table>

                    <div className="textInfo">     
                        <ul className="list-group">
                            <p>Information of vaccines exact at the selected date:</p>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                            no. of Antiqua vaccine given:
                                <span className="badge bg-primary rounded-pill">{fetchVaccinationDateOfAntique.length}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                            no. of SolarBuddhica vaccine given:
                                <span className="badge bg-success rounded-pill">{fetchVaccinationDateOfSolarBuddhica.length}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                            no. of Zerpfy vaccine given:
                                <span className="badge bg-warning rounded-pill">{fetchVaccinationDateOfZerpfy.length}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                            total no. of vaccines given:
                                <span className="badge bg-dark rounded-pill">{fetchTotalVaccinesGivenatSelectedDate.length}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                            no. of arrived vaccine's bottles:
                                <span className="badge bg-info rounded-pill">{totalOrderedBottlesOnselectedDate}</span>
                            </li>   
                        </ul>
                    </div>   
            </div>

            { fetchTotalVaccinesGivenatSelectedDate.length > 0 ? <div className="pieChart col-lg-6">
                    <PieChartAtSelectedDate 
                        fetchVaccinationDateOfAntique={fetchVaccinationDateOfAntique.length} 
                        fetchVaccinationDateOfSolarBuddhica={fetchVaccinationDateOfSolarBuddhica.length}
                        fetchVaccinationDateOfZerpfy={fetchVaccinationDateOfZerpfy.length}
                     />
            </div>
            : null}
        </div>
           
        </>
    )
}
