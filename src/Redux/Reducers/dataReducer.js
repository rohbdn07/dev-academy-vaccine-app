import { GET_DATA, GET_SOLARBUDDHICA_DATA, GET_ZERPFY_DATA } from '../Constants/action-types';

const initalstate = {
    allAntiquaData : [],
    allSolarBuddhicaData : [],
    allZerpfyData : []
}

export default function dataReducer(state = initalstate, action ) {
   switch (action.type) {
       case GET_DATA:
           return {
               ...state,
               allAntiquaData : action.payload
           }
           break;

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
            
       default:
           return state
           break;
   }
}
