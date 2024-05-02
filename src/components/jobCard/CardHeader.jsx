import TimeStamp from "./TimeStamp";
import CompanyImg from "../../assets/company-img.png";

const CardHeader = ({ company, role, location, salary }) => {
    return (
        <div className="">
            <TimeStamp />
            <div className="flex pb-2 pt-4">
                <div className="pr-3">
                    <img className="w-8" src={CompanyImg} alt="img" />
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
                    {"Estimated Salary: ₹" + salary + " LPA ✅" ||
                        "Estimated Salary: ₹18 - 35 LPA ✅"}
                </p>
            </div>
        </div>
    );
};

export default CardHeader;
