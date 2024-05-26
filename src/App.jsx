import {useState} from "react";
import ViewPage from "./Components/View/ViewPage.jsx";
import FormPage from "./Components/Form/FormPage.jsx";
import "./App.css"

export default function App() {
    const [page, setPage] = useState("form");
    const [generalInfo, setGeneralInfo] = useState({
        email: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        statement: "",
    });
    const [educations, setEducations] = useState([]);
    const [workHistory, setWorkHistory] = useState([]);

    function changePage() {
        page === "form" ? setPage("view") : setPage("form");
    }

    return (
        <div className={"bg-gray-900 text-white min-h-screen"}>
            <div className={" p-4 bg-blue-500 text-white flex justify-between align-middle"}>
                <h1 className={"font-bold text-2xl"}>CV Application</h1>
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
                    className="bg-blue-500  hover:bg-blue-900 border-transparent border-2 hover:border-black p-1 rounded-lg text-white text-xl my-4 px-4 final-button"
                    onClick={changePage}
                >
                    {page === "form" ? "Submit" : "Edit"}
                </button>
            </div>
        </div>
    )
}
