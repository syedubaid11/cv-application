import Personalinfo from "./personalinfo";
import Skillsinfo from "./skills";

export default function DisplayCV(props){

    return(
        <div className="displaycv"> 
            <h1>Personal Details:</h1>
            <p>{props.name}</p>
            <h1>Skills</h1>
            <p>{props.skillInfo}</p>
        </div>
    )





}
