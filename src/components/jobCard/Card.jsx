/* eslint-disable react/prop-types */
import { useState } from "react";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import Button, { ButtonAvatar } from "./Button";
import Modal from "./Modal";

const Card = ({ data }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-3xl shadow transform hover:-translate-y-1 transition duration-300 ease-in-out">
        <div className="px-6 pb-1 pt-6">
          <CardHeader
            role={data.jobRole}
            location={data.location}
            salary={data.maxJdSalary}
          />
          <CardBody
            JobDetail={data?.jobDetailsFromCompany}
            minExp={data?.minExp}
            onOpenModal={toggleModal}
          />
          <Button width={"full"} color={"55efc4"}>
            ⚡Easy Apply
          </Button>
          <ButtonAvatar>Unlock referral asks</ButtonAvatar>
        </div>
      </div>
      {isModalOpen && (
        <Modal JobDetail={data?.jobDetailsFromCompany} onClose={toggleModal} />
      )}
    </div>
  );
};

export default Card;
