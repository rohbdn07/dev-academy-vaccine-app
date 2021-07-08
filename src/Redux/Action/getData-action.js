import { GET_DATA } from '../Constants/action-types';

export const getDataAction = (antiquaData) => {
    return (
        {
            type: GET_DATA,
            payload:antiquaData
        }
    )
}
