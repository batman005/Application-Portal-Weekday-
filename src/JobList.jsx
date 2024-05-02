import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobDetails } from './redux/actions/jobActions';

export default function JobList(){
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchJobDetails());
    }, [dispatch]);

    const jobDetails = useSelector(state => state.jobDetails.jobDetails.jdList);

    return (
        <div>
            <ul>
                {Array.isArray(jobDetails) && jobDetails.map((jobDetail, index) => (
                    <li key={index}>{jobDetail.jdUid}</li>
                ))}
            </ul>
        </div>
    )
}
