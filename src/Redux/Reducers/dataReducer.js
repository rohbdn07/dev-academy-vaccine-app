import { GET_DATA } from '../Constants/action-types';

const initalstate = {
    allData : []
}

export default function dataReducer(state = initalstate, action ) {
   switch (action.type) {
       case GET_DATA:
           return {
               ...state,
               allData : action.payload
           }
           break;
   
       default:
           return state
           break;
   }
}
