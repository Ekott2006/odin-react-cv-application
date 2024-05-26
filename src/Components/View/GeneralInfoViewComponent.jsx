import {H2Component} from "../HelperComponent.jsx";

const GeneralInfoViewComponent = ({generalInfo}) => (
    <>
        <div>
            <h1 className="font-bold text-center text-4xl">{`${generalInfo.firstName} ${generalInfo.lastName}`}</h1>
            {generalInfo.email && <p>
                <b>Email: </b>
                {generalInfo.email}
            </p>}
            {generalInfo.phoneNumber && <p>
                <b>Phone Number: </b>
                {generalInfo.phoneNumber}
            </p>}
        </div>
        {generalInfo.statement && (
            <>
                <hr className="border-black"/>
                <div>
                    <H2Component title="Personal Statement"/>
                    <p>{generalInfo.statement}</p>
                </div>
            </>
        )}
    </>
)
export default GeneralInfoViewComponent