import { GET_DATA, GET_SOLARBUDDHICA_DATA, GET_ZERPFY_DATA, VACCINATION_DONE } from '../Constants/action-types';

const initalstate = {
    allAntiquaData : [],
    allSolarBuddhicaData : [],
    allZerpfyData : [],
    allVaccinationData : []
}

export default function dataReducer(state = initalstate, action ) {
   switch (action.type) {
       case GET_DATA:
           return {
               ...state,
               allAntiquaData : action.payload
           }

        case GET_SOLARBUDDHICA_DATA:
            return {
                ...state,
                allSolarBuddhicaData : action.payload
            }
        
        case GET_ZERPFY_DATA:
            return {
                ...state,
                allZerpfyData : action.payload
            }
            
        case VACCINATION_DONE:
                return {
                    ...state,
                    allVaccinationData : action.payload
                }
       default:
           return state
   }
}
