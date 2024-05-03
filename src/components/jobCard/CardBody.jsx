/* eslint-disable react/prop-types */


const CardBody = ({ JobDetail, minExp, onOpenModal }) => {
  return (
    <div>
      <div className="text-center">
        <div className="text-left ">
          <p className="text-lg font-semibold">About Company:</p>
          <p className="font-bold">About us</p>
          <div className="relative max-h-52 overflow-hidden">
            <p className="font-normal pt-2 text-gray-950 leading-tight">
              {JobDetail}
            </p>
            <div className="absolute bottom-0 left-0 w-full h-44 bg-gradient-to-t from-white to-transparent"></div>
          </div>
        </div>
        <div className="-mt-4 relative pb-8 text-base text-blue-800">
          <button onClick={onOpenModal} type="button">
            View job
          </button>
        </div>
      </div>
      <div>
        <p className="font-semibold text-slate-400">Minimum Experience</p>
        <p className="pb-2">{minExp ? `${minExp} years` : "2 years"}</p>
      </div>
    </div>
  );
};

export default CardBody;