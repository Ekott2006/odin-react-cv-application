import {H2Component} from "../HelperComponent.jsx";
import {formatDateMonthYear} from "../../HelperFunctions.js";

const WorkHistoriesViewComponent= ({workHistory}) => (
    <>
        {workHistory.length > 0 && <hr className="border-black"/>}
        <div>
            {workHistory.length > 0 && <H2Component title="Experience"/>}
            <ul className="list-disc px-6">
                {workHistory.map((x) => (
                    <li key={x.id}>
                        <div className="flex justify-between ">
                            <h3 className="font-bold text-xl">{x.companyName}</h3>
                            <p>{`${formatDateMonthYear(new Date(x.startDate))} - 
                ${formatDateMonthYear(new Date(x.endDate))}`}</p>
                        </div>
                        <p className={"py-2"}>{x.position}</p>
                        <p className="text-sm max-w-lg text-justify">{x.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    </>
)
export default WorkHistoriesViewComponent
