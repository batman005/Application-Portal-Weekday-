/* eslint-disable react/prop-types */
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import Button, { ButtonAvatar } from "./Button";

const Card = ({ data }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-3xl shadow">
      <div className="px-6 pb-1 pt-6">
        <CardHeader
          role={data.jobRole}
          location={data.location}
          salary={data.maxJdSalary}
        />
        <CardBody
          JobDetail={data?.jobDetailsFromCompany}
          minExp={data?.minExp}
        />
        <Button width={"full"} color={"55efc4"}>
          ⚡Easy Apply
        </Button>
        <ButtonAvatar>Unlock referral asks</ButtonAvatar>
      </div>
    </div>
  );
};

export default Card;
