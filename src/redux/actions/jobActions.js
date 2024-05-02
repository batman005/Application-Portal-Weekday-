import { getJobDetailsSuccess, jobError } from '../features/jobDetails/jobDetailsSlice';
import axios from 'axios';
import { appUrl } from '../../api/api';

export const fetchJobDetails = () => async (dispatch) => {
    try {
        const res = await axios.post(appUrl, { headers: { 'Content-Type': 'application/json' } });
        dispatch(getJobDetailsSuccess(res.data));
    } catch (error) {
        dispatch(jobError('Error fetching job details'));
    }
};


