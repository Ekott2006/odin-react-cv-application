import GeneralInfoViewComponent from "./GeneralInfoViewComponent.jsx";
import WorkHistoriesViewComponent from "./WorkHistoriesViewComponent.jsx";
import EducationViewComponent from "./EducationViewComponent.jsx";
import {H1Component} from "../HelperComponent.jsx";

const ViewPage = ({generalInfo, educations, workHistories}) => {
    return (
        <>
            <H1Component title={"View Your CV"} />
            <div className="p-2 border-2 rounded-lg grid gap-4 border-white">
                <GeneralInfoViewComponent generalInfo={generalInfo} />
                <EducationViewComponent educations={educations}/>
                <WorkHistoriesViewComponent workHistory={workHistories}/>
            </div>
        </>

    );
};
export default ViewPage;
