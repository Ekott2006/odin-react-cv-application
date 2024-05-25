import {AddEntryButtonComponent, H2Component, RemoveButtonComponent} from "../HelperComponent.tsx";
import  {ChangeEvent, Dispatch, FC, SetStateAction} from "react";
import {IWorkHistory} from "../../interfaces.ts";
import {LabelInputComponent} from "../LabelInputComponent.tsx";

const WorkHistoryFormComponent: FC<{
    workHistory: IWorkHistory[],
    setWorkHistory: Dispatch<SetStateAction<IWorkHistory[]>>
}> = ({workHistory, setWorkHistory}) => {
    function handleWorkHistory(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, i: number, key: string) {
        const data = [...workHistory];
        console.log(e.target)
        // @ts-expect-error any error
        data[i][key] = e.target.value;
        setWorkHistory(data);
    }

    function addWorkHistory() {
        const data: IWorkHistory[] = [...workHistory, {
            companyName: "",
            position: "",
            startDate: "",
            endDate: "",
            description: ""
        }];
        setWorkHistory(data)
    }
    const removeFields = (i: number) => {
        const data = [...workHistory];
        data.splice(i, 1)
        setWorkHistory(data)
    }

    return (<div>
            <H2Component title="Work History"/>
            {workHistory.map((x, i) => (
                <div key={i}>
                    <h3 className={"text-center font-bold text-lg"}>Work {i + 1}</h3>

                    <LabelInputComponent title="Position" value={x.position}
                                         handleInput={e => handleWorkHistory(e, i, "position")}/>
                    <LabelInputComponent title="Company Name" value={x.companyName}
                                         handleInput={e => handleWorkHistory(e, i, "companyName")}/>
                    <div className="flex flex-row w-full gap-8 flex-wrap sm:flex-nowrap ">
                        <LabelInputComponent title="Start Date" type="date"
                                             value={x.startDate.toString()}
                                             handleInput={(e) => handleWorkHistory(e, i, "startDate")}/>
                        <LabelInputComponent title="End Date" type="date" value={x.endDate.toString()}
                                             handleInput={(e) => handleWorkHistory(e, i, "endDate")}/>
                    </div>
                    <LabelInputComponent title="Description" value={x.description} type="textarea"
                                         handleInput={(e) => handleWorkHistory(e, i, "description")}/>
                    <RemoveButtonComponent handleClick={() => removeFields(i)} />
                </div>))
            }

            <AddEntryButtonComponent handleClick={addWorkHistory} />
        </div>
    )
}
export default WorkHistoryFormComponent
