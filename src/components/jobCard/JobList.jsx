import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobDetails } from '../../redux/actions/jobActions';
import Card from './Card';
import Loader from '../../utils/Loader';

export default function JobList() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.jobDetails.loading);
  const jobDetails = useSelector(state => state.jobDetails.filteredDetails.jdList);
  const [visibleJobDetails, setVisibleJobDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [limit, setLimit] = useState(6);
  const loaderRef = useRef(null);
  const isScrolling = useRef(false);

  useEffect(() => {
    dispatch(fetchJobDetails());
  }, [dispatch]);

  useEffect(() => {
    setVisibleJobDetails(jobDetails.slice(0, limit));
  }, [jobDetails, limit]);

  useEffect(() => {
    //monitor the loader element at the bottom of the list
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isLoading && limit < jobDetails.length && !isScrolling.current) {
            isScrolling.current = true;
            setIsLoading(true);
            setTimeout(() => {
              setLimit(prevLimit => Math.min(prevLimit + 4, jobDetails.length));
              setIsLoading(false);
              isScrolling.current = false;
            }, 2000);
          }
        });
      },
      { threshold: 1 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [jobDetails, limit, isLoading]);

  if (loading && jobDetails.length === 0) {
    return <Loader />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-8 pt-4 md:px-20 md:pt-10">
      {visibleJobDetails.map((data) => (
        <Card key={data.jdUid} data={data} />
      ))}
      <div ref={loaderRef} className="loader" /> {/* Loader element at the bottom */}
      {isLoading && <Loader />} {/* loader while loading more data */}
    </div>
  );
}