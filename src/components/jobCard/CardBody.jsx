/* eslint-disable react/prop-types */
import  { useState } from "react";
import Modal from "./Modal";

const CardBody = ({ JobDetail, minExp }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };
  return (
    <div>
      <div className="text-center">
        <div className="text-left ">
          <p className="text-lg font-semibold">About Company:</p>
          <p className="font-bold">About us</p>
          <div className="relative max-h-52 overflow-hidden">
            <p className="font-normal text-gray-950 leading-tight">
              {JobDetail ||
                "Here are the biggest enterprise technology acquisitions of 2021 sofar, in reverse chronological order.Here are the biggestenterprise technology acquisitions of 2021 so far, in reversechronological order. in reverse chronological order.Here are thebiggest enterprise technology acquisitions of 2021 so far, inreverse chronological order. in reverse chronological order. inreverse chronological order.Here are the biggest enterprisetechnology acquisitions of 2021 so far, in reverse chronologicalorder. in reverse chronological order."}
            </p>
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent"></div>
          </div>
        </div>
        <div className="-mt-4 relative pb-8 text-base text-blue-800">
          <button
            // data-modal-target="default-modal"
            // data-modal-toggle="default-modal"
            onClick={toggleModal}
            type="button"
          >
            View job
          </button>
        </div>
        {isModalOpen && <Modal JobDetail={JobDetail} onClose={toggleModal} />}
      </div>
      <div>
        <p className="font-semibold text-slate-400">Minimum Experience</p>
        <p className="pb-2">{minExp ? minExp + " years" : "2 years"}</p>
      </div>
    </div>
  );
};

export default CardBody;
