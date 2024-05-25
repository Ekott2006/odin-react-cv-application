import {FC} from "react";
import {IWorkHistory} from "../../interfaces.ts";
import {H2Component} from "../HelperComponent.tsx";
import {formatDateMonthYear} from "../../HelperFunctions.ts";

const WorkHistoriesViewComponent: FC<{ workHistory: IWorkHistory[] }> = ({workHistory}) => (
    <>
        {workHistory.length > 0 && <hr className="border-black"/>}
        <div>
            {workHistory.length > 0 && <H2Component title="Experience"/>}
            <ul className="list-disc px-6">
                {workHistory.map((x) => (
                    <li>
                        <div className="flex justify-between ">
                            <h3 className="font-bold text-xl">{x.companyName}</h3>
                            <p>{`${formatDateMonthYear(new Date(x.startDate))} - 
                ${formatDateMonthYear(new Date(x.endDate))}`}</p>
                        </div>
                        <p>{x.position}</p>
                        <p className="text-sm max-w-lg">{x.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    </>
)
export default WorkHistoriesViewComponent
