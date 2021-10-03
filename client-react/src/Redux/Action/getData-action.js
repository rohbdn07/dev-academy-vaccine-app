import {
    VACCINEDATA_TO_GET_LOADING,
    VACCINEDATA_GET_SUCCESS,
    VACCINEDATA_GET_FAILURE,
} from "../Constants/action-types";
import axiosInstance from "../../services/axios";
import axios from "axios";

export const getDataAction = () => async (dispatch) => {
    try {
        dispatch({
            type: VACCINEDATA_TO_GET_LOADING,
        });
        const { data } = await axiosInstance.get("/");
        dispatch({
            type: VACCINEDATA_GET_SUCCESS,
            payloadOne: data.allCompanyVaccineData,
            payloadTwo: data.allVaccinationDoneData,
        });
    } catch (error) {
        dispatch({
            type: VACCINEDATA_GET_FAILURE,
            payload: error.message,
        });
        console.log("there is an error", error);
    }
};
