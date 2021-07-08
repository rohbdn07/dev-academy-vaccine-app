import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function SearchForm() {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <>
         
            <form className="card mt-4 py-4 g-3 needs-validation col-5 mx-auto" novalidate>
            <h2>Search for vaccine info.</h2>
                 <div className="col-md-4">
                    <label for="validationCustom04" className="form-label">Health care district</label>
                    <select className="form-select" id="validationCustom04" required>
                        <option selected disabled value="">Choose...</option>
                        <option>HYKS</option>
                        <option>TAYS</option>
                        <option>KYS</option>
                        <option>All</option>
                    </select>
                    <div className="invalid-feedback">
                    Please select a valid state.
                    </div>
                </div>
                <div className="col-md-4">
                    <label for="validationCustom04" className="form-label">Vaccine name</label>
                    <select className="form-select" id="validationCustom04" required>
                        <option selected disabled value="">Choose...</option>
                        <option>Antiqua</option>
                        <option>SolarBuddhica</option>
                        <option>Zerpfy</option>
                        <option>All</option>
                    </select>
                    <div className="invalid-feedback">
                    Please select a valid state.
                    </div>
                </div>
               <div className="col-5">
                    <label for="validationCustom04" className="form-label">Pick a date</label>
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}
                    dateFormat="yyyy-MM-dd" />
               </div>
                <div className="col-10 mx-auto">
                    <button className="btn btn-primary" type="submit">Submit form</button>
                </div>
            </form>
        </>
    )
}
