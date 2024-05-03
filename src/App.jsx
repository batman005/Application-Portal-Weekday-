import DropdownInputCombo from "./components/dropDown/DropdownInputCombo";
import JobList from "./components/jobCard/JobList";
import SearchBar from "./components/SearchBar/SearchBar";

export default function App() {
    return (
        <div className="p-5">
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-4 py-2">
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
                        "tech lead",
                    ]}
                    filterKey={"jobRole"}
                />
                <DropdownInputCombo
                    placeholder="Number of Employees"
                    options={[
                        "Json object is N/A",
                        // "1-10",
                        // "11-20",
                        // "21-50",
                        // "51-100",
                        // "101-200",
                        // "201-500",
                        // "500+",
                    ]}
                    filterKey={"numberOfEmployees"}
                />
                <DropdownInputCombo
                    placeholder="Experience"
                    options={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
                    filterKey={"minExp"}
                />
                <DropdownInputCombo
                    placeholder="Remote"
                    options={["remote", "delhi ncr", "chennai", "bangalore"]}
                    filterKey={"location"}
                />
                <DropdownInputCombo
                    placeholder="Minimum Base Pay Salary"
                    options={["0", "10", "20", "30", "40", "50", "60", "70"]}
                    filterKey={"minJdSalary"}
                />
                <SearchBar />
            </div>
            <JobList />
        </div>
    );
}