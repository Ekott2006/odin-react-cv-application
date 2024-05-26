import {AddEntryButtonComponent, H2Component, RemoveButtonComponent} from "../HelperComponent.jsx";
import {LabelInputComponent} from "../LabelInputComponent.jsx";

const EducationFormComponent = ({educationData, setEducationData}) => {

    function handleEducation(e, i, key) {
        const data = [...educationData];
        data[i][key] = e.target.value;
        setEducationData(data);
    }

    function addEducation() {
        const data = [...educationData, {
            id: educationData.length,
            endDate: "",
            schoolName: "",
            startDate: "",
            study: ""
        }];
        setEducationData(data)
    }
    const removeFields = (i) => {
        const data = [...educationData];
        data.splice(i, 1)
        setEducationData(data)
    }

    return (
        <>
            <H2Component title="Education"/>
            {educationData.map((x, i) => (
                <div key={i} className={"grid gap-4"}>
                    <h3 className={"text-center font-bold text-lg"}>School {i + 1}</h3>
                    <LabelInputComponent title="School Name" value={x.schoolName}
                                         handleInput={e => handleEducation(e, i, "schoolName")}/>
                    <LabelInputComponent title="Program of Study" value={x.study}
                                         handleInput={(e) => handleEducation(e, i, "study")}/>
                    <div className="flex flex-row w-full gap-8 flex-wrap sm:flex-nowrap ">
                        <LabelInputComponent title="Start Date" type="date"
                                             value={x.startDate.toString()}
                                             handleInput={(e) => handleEducation(e, i, "startDate")}/>
                        <LabelInputComponent title="End Date" type="date" value={x.endDate.toString()}
                                             handleInput={(e) => handleEducation(e, i, "endDate")}/>
                    </div>
                    <RemoveButtonComponent handleClick={() => removeFields(i)} />
                </div>
            ))}
            <AddEntryButtonComponent handleClick={addEducation} />

        </>
    );
}
export default EducationFormComponent