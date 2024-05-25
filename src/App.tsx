import {useState} from "react";
import {IEducation, IGeneralInfo, IWorkHistory} from "./interfaces.ts";
import ViewPage from "./Components/View/ViewPage.tsx";
import FormPage from "./Components/Form/FormPage.tsx";
import DarkModeToggleComponent from "./Components/DarkModeToggleComponent.tsx";

export default function App() {
    const [page, setPage] = useState<"form" | "view">("form");
    const [generalInfo, setGeneralInfo] = useState<IGeneralInfo>({
        email: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        statement: "",
    });
    const [educations, setEducations] = useState<IEducation[]>([]);
    const [workHistory, setWorkHistory] = useState<IWorkHistory[]>([]);

    function changePage() {
        if (page === "form") setPage("view");
        else setPage("form");
    }

    return (
        <div className={"dark:bg-gray-900 dark:text-white min-h-screen"}>
            <div className={"w-full p-4 bg-blue-500 text-white flex justify-between align-middle"}>
                <h1 className={"font-bold text-2xl"}>CV Application</h1>
                <DarkModeToggleComponent />
            </div>
            <div className="max-w-4xl m-auto p-4">
                {/* TODO: Add Switch  */}
                {page === "form" ? (
                    <FormPage generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} educationData={educations}
                              setEducationData={setEducations} workHistories={workHistory}
                              setWorkHistory={setWorkHistory}/>
                ) : (
                    <ViewPage
                        educations={educations}
                        workHistories={workHistory}
                        generalInfo={generalInfo}
                    />
                )
                }
                <button
                    className="bg-blue-500  hover:bg-blue-900 border-transparent border-2 hover:border-black p-1 rounded-lg text-white text-xl my-4 px-4"
                    onClick={changePage}
                >
                    {page === "form" ? "Submit" : "Edit"}
                </button>
            </div>
        </div>
    )
}
