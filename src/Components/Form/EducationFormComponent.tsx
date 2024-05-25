import {AddEntryButtonComponent, H2Component, RemoveButtonComponent} from "../HelperComponent.tsx";
import React, {Dispatch, FC, SetStateAction} from "react";
import {IEducation} from "../../interfaces.ts";
import {LabelInputComponent} from "../LabelInputComponent.tsx";

const EducationFormComponent: FC<{
    educationData: IEducation[],
    setEducationData: Dispatch<SetStateAction<IEducation[]>>
}> = ({educationData, setEducationData}) => {

    function handleEducation(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, i: number, key: keyof IEducation) {
        const data = [...educationData];
        data[i][key] = e.target.value;
        setEducationData(data);
    }

    function addEducation() {
        const data: IEducation[] = [...educationData, {
            endDate: "",
            schoolName: "",
            startDate: "",
            study: ""
        }];
        setEducationData(data)
    }
    const removeFields = (i: number) => {
        const data = [...educationData];
        data.splice(i, 1)
        setEducationData(data)
    }

    return (
        <>
            <H2Component title="Education"/>
            {educationData.map((x, i) => (
                <div key={i}>
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