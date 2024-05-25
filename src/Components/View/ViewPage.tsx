import {FC} from "react";
import {IEducation, IGeneralInfo, IWorkHistory} from "../../interfaces.ts";
import GeneralInfoViewComponent from "./GeneralInfoViewComponent.tsx";
import WorkHistoriesViewComponent from "./WorkHistoriesViewComponent.tsx";
import EducationViewComponent from "./EducationViewComponent.tsx";
import {H1Component} from "../HelperComponent.tsx";

const ViewPage: FC<{
    generalInfo: IGeneralInfo;
    educations: IEducation[];
    workHistories: IWorkHistory[];
}> = ({generalInfo, educations, workHistories}) => {
    return (
        <>
            <H1Component title={"View Your CV"} />
            <div className="p-2 border-2 rounded-lg grid gap-4 border-black">
                <GeneralInfoViewComponent generalInfo={generalInfo} />
                <EducationViewComponent educations={educations}/>
                <WorkHistoriesViewComponent workHistory={workHistories}/>
            </div>
        </>

    );
};
export default ViewPage;
