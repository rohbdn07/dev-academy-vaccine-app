import React from 'react';

export default function SearchForm() {
    return (
        <>
            <h2>this is search form </h2>
            <form class="row g-3 needs-validation container mx-auto" novalidate>
                 <div class="col-md-4">
                    <label for="validationCustom04" class="form-label">Health care district</label>
                    <select class="form-select" id="validationCustom04" required>
                    <option selected disabled value="">Choose...</option>
                    <option>HYKS</option>
                    <option>TAYS</option>
                    <option>KYS</option>
                    <option>All</option>
                    </select>
                    <div class="invalid-feedback">
                    Please select a valid state.
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="validationCustom04" class="form-label">Vaccine name</label>
                    <select class="form-select" id="validationCustom04" required>
                    <option selected disabled value="">Choose...</option>
                    <option>Antiqua</option>
                    <option>SolarBuddhica</option>
                    <option>Zerpfy</option>
                    <option>All</option>
                    </select>
                    <div class="invalid-feedback">
                    Please select a valid state.
                    </div>
                </div>
                <div class="col-12">
                    <button class="btn btn-primary" type="submit">Submit form</button>
                </div>
            </form>
        </>
    )
}
