import EducationFormComponent from "./EducationFormComponent.jsx";
import GeneralInformationFormComponent from "./GeneralInformationFormComponent.jsx";
import WorkHistoryFormComponent from "./WorkHistoryFormComponent.jsx";
import {H1Component} from "../HelperComponent.jsx";

const FormPage= ({generalInfo, setGeneralInfo, educationData,  setEducationData, workHistories, setWorkHistory}) => {
  return (
      <>
          <H1Component title={"Create your CV Application"} />
          <div>
              <form className="grid gap-4">
                  <GeneralInformationFormComponent
                      generalInfo={generalInfo}
                      setGeneralInfo={setGeneralInfo}
                  />
                  <EducationFormComponent
                      educationData={educationData}
                      setEducationData={setEducationData}
                  />
                  <WorkHistoryFormComponent
                      workHistory={workHistories}
                      setWorkHistory={setWorkHistory}
                  />
              </form>
          </div>
      </>
  );
};
export default FormPage;
