import {FC} from "react";
import {IEducation} from "../../interfaces.ts";
import {H2Component} from "../HelperComponent.tsx";
import {formatDateMonthYear} from "../../HelperFunctions.ts";

const EducationViewComponent: FC<{ educations: IEducation[] }> = ({educations}) => {
    return (
        <>
            {educations.length > 0 && <hr className="border-black"/>}
            <div>
                {educations.length > 0 && <H2Component title="Education"/>}
                <ul className="list-disc px-6">
                    {educations.map((x) => (
                        <li>
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