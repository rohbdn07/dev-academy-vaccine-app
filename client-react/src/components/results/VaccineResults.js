import React from "react";
import BarChartProducers from "../barChart/BarChart_producers";
import TextInfo from "../textInfo/TextInfo";

export default function VaccineResults(props) {
    const {
        receivedVaccineArray,
        VaccineName,
        dataLength,
        kysArray,
        HyksArray,
        TyksArray,
        OysArray,
        TaysArray,
    } = props;

    return (
        <>
            <div className="col-12 vaccinationResult">
                <TextInfo
                    receivedVaccineArray={receivedVaccineArray.length}
                    VaccineName={VaccineName}
                    dataLength={dataLength}
                    kysArray={kysArray.length}
                    HyksArray={HyksArray.length}
                    TyksArray={TyksArray.length}
                    OysArray={OysArray.length}
                    TaysArray={TaysArray.length}
                />
                <BarChartProducers
                    kysArray={kysArray.length}
                    HyksArray={HyksArray.length}
                    TyksArray={TyksArray.length}
                    OysArray={OysArray.length}
                    TaysArray={TaysArray.length}
                />
            </div>
        </>
    );
}
