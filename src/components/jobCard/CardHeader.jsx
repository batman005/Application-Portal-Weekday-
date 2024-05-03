/* eslint-disable react/prop-types */
import TimeStamp from "./TimeStamp";
import CompanyImg from "../../assets/company-img.png";

const CardHeader = ({ company, role, location, salary,logoUrl }) => {
    return (
        <div className="">
            <TimeStamp />
            <div className="flex pb-2 pt-4">
                <div className="pr-3 pt-2">
                    <img className="w-8" alt={CompanyImg} src={logoUrl} />
                </div>
                <div>
                    <p className="text-lg font-semibold text-slate-400">
                        {company || "fampay"}
                    </p>

                    <p className="text-lg pb-2">{role || "Backend Engineer"}</p>
                    <p className="text-sm font-semibold">{location || "Banglore"}</p>
                </div>
            </div>
            <div className="pb-2">
                <p className="text-lg font-semibold text-slate-600">
                    {"Estimated Salary: $" + salary + "K USD✅" ||
                        "Estimated Salary: $18 - 35 USD ✅"}
                </p>
            </div>
        </div>
    );
};

export default CardHeader;
