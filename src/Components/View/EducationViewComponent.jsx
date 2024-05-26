import {H2Component} from "../HelperComponent.jsx";
import {formatDateMonthYear} from "../../HelperFunctions.js";

const EducationViewComponent = ({educations}) => {
    return (
        <>
            {educations.length > 0 && <hr className="border-black"/>}
            <div>
                {educations.length > 0 && <H2Component title="Education"/>}
                <ul className="list-disc px-6">
                    {educations.map((x) => (
                        <li key={x.id}>
                            <div className="flex justify-between ">
                                <h3 className="font-bold text-xl">{x.schoolName}</h3>
                                <p>
                                    {`${formatDateMonthYear(new Date(x.startDate))} - ${formatDateMonthYear(
                                        new Date(x.endDate)
                                    )}`}
                                </p>
                            </div>
                            <p>{x.study}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default EducationViewComponent