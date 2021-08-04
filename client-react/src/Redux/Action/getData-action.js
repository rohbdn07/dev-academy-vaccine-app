import {
  VACCINEDATA_TO_GET_LOADING,
  VACCINEDATA_GET_SUCCESS,
  VACCINEDATA_GET_FAILURE,
  VACCINATION_DONE,
} from "../Constants/action-types";
import axiosInstance from "../../services/axios";

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
    });
    console.log("there is an error", error);
  }
};

// export const getSolarBuddhicaAction = (SolarBuddhica) => {
//     return (
//         {
//             type: GET_SOLARBUDDHICA_DATA,
//             payload:SolarBuddhica
//         }
//     )
// }

// export const getZerpfyAction = (zerpfy) => {
//     return (
//         {
//             type: GET_ZERPFY_DATA,
//             payload:zerpfy
//         }
//     )
// }

// export const getVaccinationAction = (vaccination) => {
//     return (
//         {
//             type: VACCINATION_DONE,
//             payload:vaccination
//         }
//     )
// }
