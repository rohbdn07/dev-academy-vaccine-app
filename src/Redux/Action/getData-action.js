import {
  GET_DATA,
  GET_SOLARBUDDHICA_DATA,
  GET_ZERPFY_DATA,
  VACCINATION_DONE,
} from "../Constants/action-types";

export const getDataAction = (antiquaData) => {
  return {
    type: GET_DATA,
    payload: antiquaData,
  };
};

export const getSolarBuddhicaAction = (SolarBuddhica) => {
  return {
    type: GET_SOLARBUDDHICA_DATA,
    payload: SolarBuddhica,
  };
};

export const getZerpfyAction = (zerpfy) => {
  return {
    type: GET_ZERPFY_DATA,
    payload: zerpfy,
  };
};

export const getVaccinationAction = (vaccination) => {
  return {
    type: VACCINATION_DONE,
    payload: vaccination,
  };
};
