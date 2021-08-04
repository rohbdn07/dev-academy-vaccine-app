import {
  VACCINEDATA_TO_GET_LOADING,
  VACCINEDATA_GET_SUCCESS,
  VACCINEDATA_GET_FAILURE,
  VACCINATION_DONE,
} from "../Constants/action-types";

const initalstate = {
  loading: false,
  vaccineData: [],
  vaccinationDoneData: [],
  errMessage: "",
};

export default function dataReducer(state = initalstate, action) {
  switch (action.type) {
    case VACCINEDATA_TO_GET_LOADING:
      return {
        ...state,
        loading: true,
        errMessage: "",
      };

    case VACCINEDATA_GET_SUCCESS:
      return {
        ...state,
        loading: false,
        vaccineData: action.payloadOne,
        vaccinationDoneData: action.payloadTwo,
      };

    case VACCINEDATA_GET_FAILURE:
      return {
        ...state,
        loading: false,
        vaccineData: [],
        errMessage: "Unable to get data from server",
      };

    case VACCINATION_DONE:
      return {
        ...state,
      };
    default:
      return state;
  }
}
