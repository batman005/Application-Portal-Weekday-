import SandClockImg from "../../assets/sand-clock.png";

const TimeStamp = () => {
    return (
        <div className="border border-slate-300 rounded-2xl py-1 px-3 inline-flex items-center whitespace-nowrap">
            <img className="w-4 h-4 mr-2" src={SandClockImg} alt="Sand Clock" />
            <p className="text-sm text-slate-700">Posted 10 days ago </p>
        </div>
    );
};

export default TimeStamp;
