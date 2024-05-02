// import JobList from "./JobList";
import DropdownInputCombo from "./components/DropdownInputCombo/DropdownInputCombo";

export default function App() {
    return (
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-4 py-2">
                    <DropdownInputCombo
                        placeholder="Roles"
                        options={[
                            "backend",
                            "frontend",
                            "fullstack",
                            "ios",
                            "flutter",
                            "react native",
                            "android",
                            "front end",
                            "techlead",
                        ]}
                    />
                    <DropdownInputCombo
                        placeholder="Number of Employees"
                        options={[
                            "1-10",
                            "11-20",
                            "21-50",
                            "51-100",
                            "101-200",
                            "201-500",
                            "500+",
                        ]}
                    />
                    <DropdownInputCombo
                        placeholder="Experience"
                        options={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
                    />
                    <DropdownInputCombo
                        placeholder="Remote"
                        options={["Remote", "Hybrid", "In-Office"]}
                    />
                    <DropdownInputCombo
                        placeholder="Minimum Base Pay Salary"
                        options={["0", "10L", "20L", "30L", "40L", "50L", "60L", "70L"]}
                    />
                </div>
                {/* <JobList /> */}
            </div>
            );
}