import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobDetails } from './redux/actions/jobActions';
import Card from './components/jobCard/Card';
import Loader from './utils/Loader';

export default function JobList() {
  const dispatch = useDispatch(); 
  const loading = useSelector(state => state.jobDetails.loading); // Get loading state from Redux

  useEffect(() => {
    dispatch(fetchJobDetails())
  }, [dispatch]);

  const jobDetails = useSelector((state) => state.jobDetails.filteredDetails);
  console.log(jobDetails);

  if (loading) {
    return (
      <Loader />
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-20 pt-10">
      {jobDetails?.jdList?.map((data) => (
        <Card key={data.jdUid} data={data} />
      ))}
    </div>
  )
}
